import { COUNTRIES } from "../src/data/countries.js";
import { LANGS, PATHS, pathFor } from "../src/constants/paths.js";
import { supabaseBuild } from "./lib/supabaseBuild.mjs";

/**
 * Published articles' slugs, fetched from Supabase once per build process
 * and reused by every caller (this module and generate-seo-files.mjs) —
 * memoized so the build only hits Supabase a single time.
 */
let articlesPromise;
export const getPublishedArticles = () => {
  articlesPromise ??= supabaseBuild
    .from("articles")
    .select("slug_fr, slug_en")
    .eq("status", "published")
    .then(({ data, error }) => {
      if (error) throw error;
      return data;
    });

  return articlesPromise;
};

/**
 * Every concrete URL the site publishes, in both languages — the list the
 * prerenderer renders and the sitemap declares. Country pages come from the
 * data file, so publishing a market adds it to both automatically.
 */
export const allUrls = async () => {
  const urls = [];

  for (const key of Object.keys(PATHS)) {
    if (key === "country" || key === "article") continue;
    for (const lang of LANGS) urls.push({ key, lang, path: PATHS[key][lang] });
  }

  for (const country of COUNTRIES) {
    for (const lang of LANGS) {
      urls.push({
        key: "country",
        lang,
        path: pathFor("country", lang, {
          slug: country.slug[lang] ?? country.slug.fr,
        }),
      });
    }
  }

  const articles = await getPublishedArticles();
  for (const article of articles) {
    for (const lang of LANGS) {
      urls.push({
        key: "article",
        lang,
        path: pathFor("article", lang, {
          slug: article[`slug_${lang}`] ?? article.slug_fr,
        }),
      });
    }
  }

  return urls;
};
