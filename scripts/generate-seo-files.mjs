/**
 * Writes `sitemap.xml` and `robots.txt` into dist/ after the build.
 *
 *   node scripts/generate-seo-files.mjs
 *
 * Both languages of every page are declared, each entry carrying its hreflang
 * alternates so search engines serve the right language rather than guessing.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { allUrls } from "./siteRoutes.mjs";
import { LANGS, PATHS, pathFor } from "../src/constants/paths.js";
import { COUNTRIES } from "../src/data/countries.js";
import { ARTICLES } from "../src/i18n/content/news/index.js";

const SITE_URL = "https://asbizdev.com";
const DIST = fileURLToPath(new URL("../dist/", import.meta.url));

/** Pages that exist only to be crawled once — kept out of the priority list. */
const LOW_PRIORITY = new Set(["policy"]);

const absolute = (path) => `${SITE_URL}${path === "/" ? "/" : path}`;

const alternatesFor = ({ key, path }) => {
  if (key === "country") {
    const slug = path.split("/").pop();
    const country = COUNTRIES.find(
      (entry) => entry.slug.fr === slug || entry.slug.en === slug,
    );

    return LANGS.map((lang) => [
      lang,
      pathFor("country", lang, { slug: country.slug[lang] ?? country.slug.fr }),
    ]);
  }

  if (key === "article") {
    const slug = path.split("/").pop();
    const article = ARTICLES.find(
      (entry) => entry.slug.fr === slug || entry.slug.en === slug,
    );

    return LANGS.map((lang) => [
      lang,
      pathFor("article", lang, { slug: article.slug[lang] ?? article.slug.fr }),
    ]);
  }

  return LANGS.map((lang) => [lang, PATHS[key][lang]]);
};

const urlEntry = (url) => {
  const links = alternatesFor(url)
    .map(
      ([lang, path]) =>
        `    <xhtml:link rel="alternate" hreflang="${lang}" href="${absolute(path)}"/>`,
    )
    .join("\n");

  return [
    "  <url>",
    `    <loc>${absolute(url.path)}</loc>`,
    links,
    `    <changefreq>${url.key === "news" ? "weekly" : "monthly"}</changefreq>`,
    `    <priority>${
      LOW_PRIORITY.has(url.key)
        ? "0.2"
        : url.key === "home"
          ? "1.0"
          : url.key === "article"
            ? "0.6"
            : "0.8"
    }</priority>`,
    "  </url>",
  ].join("\n");
};

const sitemap = (urls) =>
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urls.map(urlEntry).join("\n"),
    "</urlset>",
    "",
  ].join("\n");

const robots = [
  "User-agent: *",
  "Allow: /",
  "",
  `Sitemap: ${SITE_URL}/sitemap.xml`,
  "",
].join("\n");

const urls = allUrls();

await mkdir(DIST, { recursive: true });
await writeFile(join(DIST, "sitemap.xml"), sitemap(urls), "utf8");
await writeFile(join(DIST, "robots.txt"), robots, "utf8");

console.log(`✓ sitemap.xml — ${urls.length} URLs`);
console.log("✓ robots.txt");
