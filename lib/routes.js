/**
 * Every URL on the site, one entry per page — the single source of truth for
 * links, metadata (canonical/hreflang) and the sitemap.
 *
 * Plain lookup, nothing clever: `ROUTES.contact.fr`, `ROUTES.contact.en`,
 * `ROUTES.contact.ar`. Slugs are deliberately different per page and per
 * language (SEO — each targets the phrase people actually search in that
 * language), so a link always goes through this table rather than a prefix
 * guess.
 */

/** @typedef {"fr" | "en" | "ar"} Lang */
/** @typedef {{ fr: string, en: string, ar: string }} RoutePair */

/** @type {Lang[]} */
export const LANGS = ["fr", "en", "ar"];

/** Reading direction per language — feeds `<html dir>` and the `dir` attribute. */
export const DIR = { fr: "ltr", en: "ltr", ar: "rtl" };

/** @type {Record<string, RoutePair>} */
export const ROUTES = {
  home: { fr: "/", en: "/en", ar: "/ar" },
  solutions: {
    fr: "/nos-solutions",
    en: "/en/solutions",
    ar: "/ar/solutions",
  },
  acceleration: {
    fr: "/nos-solutions/acceleration-commerciale",
    en: "/en/solutions/commercial-acceleration",
    ar: "/ar/solutions/acceleration-commerciale",
  },
  pilotage: {
    fr: "/nos-solutions/pilotage-commercial-externalise",
    en: "/en/solutions/outsourced-export-sales-management",
    ar: "/ar/solutions/pilotage-commercial-externalise",
  },
  markets: { fr: "/marches", en: "/en/markets", ar: "/ar/markets" },
  africa: {
    fr: "/marches/afrique",
    en: "/en/markets/africa",
    ar: "/ar/markets/africa",
  },
  middleEast: {
    fr: "/marches/moyen-orient",
    en: "/en/markets/middle-east",
    ar: "/ar/markets/middle-east",
  },
  about: { fr: "/as-biz-dev", en: "/en/about", ar: "/ar/about" },
  sectors: { fr: "/nos-secteurs", en: "/en/sectors", ar: "/ar/sectors" },
  network: { fr: "/notre-reseau", en: "/en/our-network", ar: "/ar/our-network" },
  becomePartner: {
    fr: "/devenir-partenaire",
    en: "/en/become-a-partner",
    ar: "/ar/become-a-partner",
  },
  contact: { fr: "/contact", en: "/en/contact", ar: "/ar/contact" },
  news: { fr: "/news", en: "/en/news", ar: "/ar/news" },
  partners: {
    fr: "/nos-partenaires",
    en: "/en/our-partners",
    ar: "/ar/partners",
  },
  policy: {
    fr: "/politiques-de-confidentialite",
    en: "/en/privacy-policy",
    ar: "/ar/privacy-policy",
  },
  legalNotice: {
    fr: "/mentions-legales",
    en: "/en/legal-notice",
    ar: "/ar/legal-notice",
  },
};

/**
 * Post-submission thank-you page for the contact and partner forms. Kept out
 * of `ROUTES` on purpose: `sitemap.js` and `buildMetadata()` walk every
 * `ROUTES` key, and this page is only ever reached after a real submission —
 * it has no content worth indexing.
 */
export const THANK_YOU_PATH = {
  fr: "/merci",
  en: "/en/thank-you",
  ar: "/ar/thank-you",
};

/**
 * `/news/:slug`, `/en/news/:slug`, `/ar/news/:slug` — the only route with a
 * dynamic segment.
 * @param {Lang} lang
 * @param {string} slug
 * @returns {string} the absolute-from-root article path
 */
export const articleUrl = (lang, slug) => `${ROUTES.news[lang]}/${slug}`;

/**
 * The URL prefix is the only thing that decides the language.
 * @param {string} pathname
 * @returns {Lang}
 */
export const langFromPath = (pathname) => {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/ar" || pathname.startsWith("/ar/")) return "ar";
  return "fr";
};

/**
 * Every other-language version of a URL — feeds the language switcher and
 * hreflang tags. Every static route is a straight lookup; `/news/:slug` is
 * the one dynamic case, handled with a small regex instead of a generic
 * route matcher.
 *
 * @param {string} pathname - a URL in `lang`, e.g. `ROUTES.pilotage.fr`
 * @param {Lang} lang - the language `pathname` is currently in
 * @returns {RoutePair} the same page's URL in every language, including `lang` itself
 */
export const alternatesOf = (pathname, lang) => {
  const newsMatch = pathname.match(/^\/(?:en\/|ar\/)?news\/(.+)$/);
  if (newsMatch) {
    return Object.fromEntries(
      LANGS.map((l) => [l, l === lang ? pathname : articleUrl(l, newsMatch[1])]),
    );
  }

  const entry = Object.values(ROUTES).find((pair) => pair[lang] === pathname);
  if (!entry) {
    return Object.fromEntries(LANGS.map((l) => [l, ROUTES.home[l]]));
  }

  return Object.fromEntries(LANGS.map((l) => [l, l === lang ? pathname : entry[l]]));
};

/**
 * Route key of the page currently displayed, to highlight the active nav entry.
 * @param {string} pathname
 * @returns {string | null} a key of `ROUTES`, `"news"` for any article path, or `null` if unmatched
 */
export const activeRouteKeyFor = (pathname) => {
  if (/^\/(en\/|ar\/)?news(\/|$)/.test(pathname)) return "news";

  const entry = Object.entries(ROUTES).find(
    ([, pair]) => pair.fr === pathname || pair.en === pathname || pair.ar === pathname,
  );
  return entry?.[0] ?? null;
};
