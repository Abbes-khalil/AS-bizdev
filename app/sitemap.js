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

export default async function sitemap() {
  const entries = [];

  for (const key of Object.keys(ROUTES)) {
    const languages = Object.fromEntries(
      LANGS.map((lang) => [lang, absolute(ROUTES[key][lang])]),
    );

    for (const lang of LANGS) {
      entries.push({
        url: absolute(ROUTES[key][lang]),
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
