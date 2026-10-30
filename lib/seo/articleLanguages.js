import { articleUrl } from "@/lib/routes";
import { SITE_URL } from "@/lib/constants/site";

/**
 * A language copy counts as a translation only if it exists and differs from
 * the French copy. LinkedIn ingestion mirrors the French post into `en`, and
 * rows have no `ar` column yet, so /en and /ar would otherwise publish French
 * duplicates of every article under another language's URL.
 * @param {{ title?: string } | null | undefined} copy
 * @param {object} fr
 */
const isTranslation = (copy, fr) =>
  Boolean(copy?.title) && JSON.stringify(copy) !== JSON.stringify(fr);

/**
 * Languages in which an article really exists (French always first).
 * @param {import("@/lib/data/articles").Article} article
 * @returns {("fr" | "en" | "ar")[]}
 */
export const translatedLangs = (article) => [
  "fr",
  ...(isTranslation(article.en, article.fr) ? ["en"] : []),
  ...(isTranslation(article.ar, article.fr) ? ["ar"] : []),
];

/** Absolute URL of an article in one language. */
export const articleAbsoluteUrl = (article, lang) =>
  `${SITE_URL}${articleUrl(lang, article.slug[lang] ?? article.slug.fr)}`;

/**
 * hreflang set shared by the three article pages and the sitemap, so every
 * version declares the same, reciprocal set. Untranslated versions are left
 * out of it and kept out of the index (still reachable from the language
 * switcher, still followed).
 * @param {import("@/lib/data/articles").Article} article
 * @param {"fr" | "en" | "ar"} lang
 * @returns {{ alternates: { canonical: string, languages?: Record<string, string> }, robots?: { index: false, follow: true } }}
 */
export const articleAlternates = (article, lang) => {
  const langs = translatedLangs(article);
  const canonical = articleAbsoluteUrl(article, lang);

  if (!langs.includes(lang)) {
    return { alternates: { canonical }, robots: { index: false, follow: true } };
  }
  if (langs.length === 1) return { alternates: { canonical } };

  const languages = Object.fromEntries(
    langs.map((l) => [l, articleAbsoluteUrl(article, l)]),
  );
  languages["x-default"] = articleAbsoluteUrl(article, "fr");
  return { alternates: { canonical, languages } };
};
