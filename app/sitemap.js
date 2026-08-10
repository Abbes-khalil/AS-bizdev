import { LANGS, PATHS, pathFor } from "@/lib/constants/routes";
import { getPublishedArticles } from "@/lib/data/articles";
import { SITE_URL } from "@/lib/constants/site";

const LOW_PRIORITY = new Set(["policy"]);

const priorityFor = (key) => {
  if (LOW_PRIORITY.has(key)) return 0.2;
  if (key === "home") return 1.0;
  if (key === "article") return 0.6;
  return 0.8;
};

const absolute = (path) => `${SITE_URL}${path === "/" ? "/" : path}`;

export default async function sitemap() {
  const entries = [];

  for (const key of Object.keys(PATHS)) {
    if (key === "article") continue;

    const languages = Object.fromEntries(
      LANGS.map((lang) => [lang, absolute(PATHS[key][lang])]),
    );

    for (const lang of LANGS) {
      entries.push({
        url: absolute(PATHS[key][lang]),
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
        absolute(
          pathFor("article", lang, {
            slug: article.slug[lang] ?? article.slug.fr,
          }),
        ),
      ]),
    );

    for (const lang of LANGS) {
      entries.push({
        url: absolute(
          pathFor("article", lang, {
            slug: article.slug[lang] ?? article.slug.fr,
          }),
        ),
        lastModified: article.publishedAt ?? undefined,
        changeFrequency: "weekly",
        priority: 0.6,
        alternates: { languages },
      });
    }
  }

  return entries;
}
