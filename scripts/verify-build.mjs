/**
 * Runs after `next build` (see the `postbuild` script in package.json) and
 * fails the build loudly if a critical route didn't actually render —
 * rather than letting a silently-empty page reach production. Checks the
 * static HTML Next writes to `.next/server/app/<route>.html` for each
 * route: the file exists, is above a trivial size, and contains a
 * `<title>` and an `<h1>` — the minimum a real page has and a broken/blank
 * one wouldn't.
 */
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const MIN_BYTES = 2000;

const CRITICAL_ROUTES = [
  "/",
  "/en",
  "/marches",
  "/marches/afrique",
  "/marches/moyen-orient",
  "/en/markets",
  "/en/markets/africa",
  "/en/markets/middle-east",
  "/nos-solutions",
  "/nos-solutions/acceleration-commerciale",
  "/nos-solutions/pilotage-commercial-externalise",
  "/en/solutions",
  "/en/solutions/commercial-acceleration",
  "/en/solutions/outsourced-export-sales-management",
  "/ar",
  "/ar/markets",
  "/ar/markets/africa",
  "/ar/markets/middle-east",
  "/ar/solutions",
  "/ar/solutions/acceleration-commerciale",
  "/ar/solutions/pilotage-commercial-externalise",
];

const htmlFileFor = (route) => (route === "/" ? "index" : route.slice(1)) + ".html";

const buildDir = fileURLToPath(new URL("../.next/server/app", import.meta.url));

const failures = [];

for (const route of CRITICAL_ROUTES) {
  const file = `${buildDir}/${htmlFileFor(route)}`;

  let html;
  try {
    html = await readFile(file, "utf8");
  } catch {
    failures.push(`${route} — no HTML output at ${file}`);
    continue;
  }

  if (Buffer.byteLength(html, "utf8") < MIN_BYTES) {
    failures.push(`${route} — HTML is only ${Buffer.byteLength(html, "utf8")} bytes (expected at least ${MIN_BYTES})`);
    continue;
  }
  if (!/<title>/.test(html)) {
    failures.push(`${route} — missing <title>`);
    continue;
  }
  if (!/<h1[\s>]/.test(html)) {
    failures.push(`${route} — missing <h1>`);
  }
}

if (failures.length > 0) {
  console.error(`\n✗ verify-build: ${failures.length} critical route(s) failed to render properly:\n`);
  for (const failure of failures) console.error(`  - ${failure}`);
  console.error("\nBuild failed — fix the route(s) above before deploying.\n");
  process.exit(1);
}

console.log(`✓ verify-build: all ${CRITICAL_ROUTES.length} critical routes rendered a real page.`);
