/**
 * Runs after `next build` and fails if any indexable static route is missing
 * meaningful HTML or a critical SEO signal. The route registry is the source
 * of truth, so newly added localized pages join this gate automatically.
 */
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { DIR, LANGS, ROUTES } from "../lib/routes.js";
import { SITE_URL } from "../lib/constants/site.js";

const MIN_BYTES = 2000;

const absolute = (path) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

const INDEXABLE_ROUTES = Object.values(ROUTES).flatMap((route) =>
  LANGS.map((lang) => ({ lang, path: route[lang], alternates: route })),
);

const htmlFileFor = (route) => (route === "/" ? "index" : route.slice(1)) + ".html";

const buildDir = fileURLToPath(new URL("../.next/server/app", import.meta.url));

const failures = [];

for (const { lang, path, alternates } of INDEXABLE_ROUTES) {
  const file = `${buildDir}/${htmlFileFor(path)}`;

  let html;
  try {
    html = await readFile(file, "utf8");
  } catch {
    failures.push(`${path} — no HTML output at ${file}`);
    continue;
  }

  if (Buffer.byteLength(html, "utf8") < MIN_BYTES) {
    failures.push(
      `${path} — HTML is only ${Buffer.byteLength(html, "utf8")} bytes (expected at least ${MIN_BYTES})`,
    );
    continue;
  }
  if (!/<title>/.test(html)) {
    failures.push(`${path} — missing <title>`);
    continue;
  }
  if (!/<h1[\s>]/.test(html)) {
    failures.push(`${path} — missing <h1>`);
    continue;
  }

  const canonical = absolute(path);
  if (!html.includes(`<link rel="canonical" href="${canonical}"`)) {
    failures.push(`${path} — missing self-referencing canonical ${canonical}`);
    continue;
  }

  if (/<meta name="robots" content="[^"]*noindex/i.test(html)) {
    failures.push(`${path} — unexpectedly marked noindex`);
    continue;
  }

  const localeMarker =
    lang === "fr"
      ? '<html lang="fr" dir="ltr"'
      : `<div lang="${lang}" dir="${DIR[lang]}"`;
  if (!html.includes(localeMarker)) {
    failures.push(`${path} — missing server-rendered ${lang}/${DIR[lang]} locale marker`);
    continue;
  }

  const expectedAlternates = {
    fr: alternates.fr,
    en: alternates.en,
    ar: alternates.ar,
    "x-default": alternates.fr,
  };
  for (const [hreflang, alternatePath] of Object.entries(expectedAlternates)) {
    const alternateUrl = absolute(alternatePath);
    const tag = `<link rel="alternate" hrefLang="${hreflang}" href="${alternateUrl}"`;
    if (!html.includes(tag)) {
      failures.push(`${path} — missing ${hreflang} alternate ${alternateUrl}`);
      break;
    }
  }
}

if (failures.length > 0) {
  console.error(
    `\n✗ verify-build: ${failures.length} indexable route(s) failed SEO validation:\n`,
  );
  for (const failure of failures) console.error(`  - ${failure}`);
  console.error("\nBuild failed — fix the route(s) above before deploying.\n");
  process.exit(1);
}

console.log(
  `✓ verify-build: all ${INDEXABLE_ROUTES.length} indexable static routes rendered with valid SEO signals.`,
);
