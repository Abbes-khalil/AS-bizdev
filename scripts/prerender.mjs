/**
 * Prerenders every route into a static HTML file.
 *
 *   node scripts/prerender.mjs        (run by `npm run build`)
 *
 * Why: the site is a single-page app, so without this step every URL serves
 * the same empty shell — same <title>, same description, no body text. That
 * makes the per-country SEO strategy impossible. Here the built app is served
 * locally, each route is opened in a headless browser, and the resulting DOM —
 * head tags included, since `useSeo` has already run — is written to
 * `dist/<path>/index.html`.
 *
 * Vercel checks the filesystem before applying the SPA rewrite, so those files
 * are what crawlers and first-time visitors receive; React then hydrates.
 */
import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import puppeteer from "puppeteer";

import { allUrls } from "./siteRoutes.mjs";

const PORT = 4183;
const ORIGIN = `http://localhost:${PORT}`;
const DIST = fileURLToPath(new URL("../dist/", import.meta.url));
const ROOT = fileURLToPath(new URL("../", import.meta.url));

const waitForServer = async (attempts = 60) => {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const response = await fetch(ORIGIN, { signal: AbortSignal.timeout(1000) });
      if (response.ok) return;
    } catch {
      // not up yet
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Preview server did not start on ${ORIGIN}`);
};

const startPreview = () => {
  const server = spawn(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["vite", "preview", "--port", String(PORT), "--strictPort"],
    { cwd: ROOT, stdio: "ignore", shell: process.platform === "win32" },
  );
  return server;
};

/** `/marches/afrique` → `dist/marches/afrique/index.html` */
const outputFile = (path) =>
  path === "/" ? join(DIST, "index.html") : join(DIST, path, "index.html");

const server = startPreview();
let failures = 0;

try {
  await waitForServer();

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // Keep the shell as the SPA fallback for unknown URLs.
  const shell = await readFile(join(DIST, "index.html"), "utf8");

  for (const { path } of allUrls()) {
    const response = await page.goto(`${ORIGIN}${path}`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    if (!response?.ok()) {
      failures += 1;
      console.error(`✗ ${path} — HTTP ${response?.status()}`);
      continue;
    }

    // The reveal-on-scroll animations start hidden; make sure the crawled
    // markup carries the text rather than a page of empty containers.
    await page.evaluate(() => {
      document
        .querySelectorAll("[style*='opacity: 0']")
        .forEach((node) => node.style.removeProperty("opacity"));
    });

    const rendered = await page.evaluate(
      () => document.documentElement.outerHTML,
    );

    // Vite's preload helper writes absolute URLs at runtime, so the captured
    // markup would ship the local preview origin to production.
    const html = `<!doctype html>\n${rendered.replaceAll(ORIGIN, "")}`;

    const file = outputFile(path);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html, "utf8");
    console.log(`✓ ${path}`);
  }

  await browser.close();
  await writeFile(join(DIST, "200.html"), shell, "utf8");
} finally {
  server.kill();
}

if (failures) {
  console.error(`\n${failures} route(s) failed to prerender.`);
  process.exit(1);
}
