import { COUNTRIES } from "../src/data/countries.js";
import { LANGS, PATHS, pathFor } from "../src/constants/paths.js";

/**
 * Every concrete URL the site publishes, in both languages — the list the
 * prerenderer renders and the sitemap declares. Country pages come from the
 * data file, so publishing a market adds it to both automatically.
 */
export const allUrls = () => {
  const urls = [];

  for (const key of Object.keys(PATHS)) {
    if (key === "country") continue;
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

  return urls;
};
