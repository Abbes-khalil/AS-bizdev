import { execSync } from "node:child_process";

import { LANGS, ROUTES, articleUrl } from "@/lib/routes";
import { getPublishedArticles } from "@/lib/data/articles";
import { SITE_URL } from "@/lib/constants/site";

const LOW_PRIORITY = new Set(["policy"]);

const priorityFor = (key) => {
  if (LOW_PRIORITY.has(key)) return 0.2;
  if (key === "home") return 1.0;
  return 0.8;
};

const absolute = (path) => `${SITE_URL}${path === "/" ? "/" : path}`;

/** A route's URL path maps 1:1 onto its App Router source file. */
const pageFileFor = (path) => `app${path === "/" ? "" : path}/page.jsx`;

/**
 * lastModified per route, from the source file's last git commit date —
 * this site has no CMS/"updated at" field for its static pages, so the
 * commit history is the only honest source of "when did this page's
 * content actually change" rather than a build-time `new Date()` (which
 * would just print today on every deploy, a meaningless freshness signal).
 * Falls back to undefined (omits the field) if git isn't available, e.g. a
 * shallow clone with no history for that path — Next simply won't render
 * <lastmod> for that entry rather than lying about it.
 */
const lastModifiedCache = new Map();
const lastModifiedFor = (path) => {
  const file = pageFileFor(path);
  if (lastModifiedCache.has(file)) return lastModifiedCache.get(file);

  let value;
  try {
    const iso = execSync(`git log -1 --format=%aI -- "${file}"`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    value = iso || undefined;
  } catch {
    value = undefined;
  }

  lastModifiedCache.set(file, value);
  return value;
};

export default async function sitemap() {
  const entries = [];

  for (const key of Object.keys(ROUTES)) {
    const languages = Object.fromEntries(
      LANGS.map((lang) => [lang, absolute(ROUTES[key][lang])]),
    );

    for (const lang of LANGS) {
      entries.push({
        url: absolute(ROUTES[key][lang]),
        lastModified: lastModifiedFor(ROUTES[key][lang]),
        changeFrequency: key === "news" ? "weekly" : "monthly",
        priority: priorityFor(key),
        alternates: { languages },
      });
    }
  }

  const articles = await getPublishedArticles();
  for (const article of articles) {
    const languages = Object.fromEntries(
      LANGS.map((lang) => [
        lang,
        absolute(articleUrl(lang, article.slug[lang] ?? article.slug.fr)),
      ]),
    );

    for (const lang of LANGS) {
      entries.push({
        url: absolute(articleUrl(lang, article.slug[lang] ?? article.slug.fr)),
        lastModified: article.publishedAt ?? undefined,
        changeFrequency: "weekly",
        priority: 0.6,
        alternates: { languages },
      });
    }
  }

  return entries;
}
