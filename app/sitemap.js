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
 * `git log -- <path>` is only accurate against full history. On a *shallow*
 * clone (Vercel's default build checkout, depth 1) git has no parent commit
 * to diff a boundary commit against, so it reports that single fetched
 * commit as the "last change" for every path that exists in it — every
 * route in the sitemap would silently get today's deploy date, which is
 * worse than useless (confirmed live: before this fix, every <lastmod> in
 * the deployed sitemap.xml was identical). Unshallow once, best-effort, so
 * `git log` can see real per-file history; if that fails (offline build,
 * no git binary, detached remote), disable lastModified entirely rather
 * than serve a uniform, misleading date.
 */
let gitHistoryAvailable = null;
const ensureGitHistory = () => {
  if (gitHistoryAvailable !== null) return gitHistoryAvailable;

  try {
    const isShallow =
      execSync("git rev-parse --is-shallow-repository", {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }).trim() === "true";

    if (isShallow) {
      execSync("git fetch --unshallow --quiet", { stdio: "ignore" });
    }
    gitHistoryAvailable = true;
  } catch {
    gitHistoryAvailable = false;
  }

  return gitHistoryAvailable;
};

const lastModifiedCache = new Map();
const lastModifiedFor = (path) => {
  if (!ensureGitHistory()) return undefined;

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
