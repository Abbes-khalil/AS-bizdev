import { LANGS, matchRoute, pathFor } from "../constants/routes";
import { findCountryBySlug } from "../data/countries";

/**
 * The same page in another language. Country slugs differ per language, so
 * they are resolved through the country data rather than reused as-is.
 * Unknown paths fall back to the home page of the target language.
 */
export const alternateOf = (pathname, lang) => {
  const match = matchRoute(pathname);
  if (!match) return pathFor("home", lang);

  const params = { ...match.params };

  if (match.key === "country") {
    const country = findCountryBySlug(params.slug);
    if (!country) return pathFor("markets", lang);
    params.slug = country.slug[lang];
  }

  return pathFor(match.key, lang, params);
};

/** `{ fr: "/marches", en: "/en/markets" }` — feeds hreflang and the switcher. */
export const alternatesOf = (pathname) =>
  Object.fromEntries(LANGS.map((lang) => [lang, alternateOf(pathname, lang)]));
