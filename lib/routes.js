/**
 * Every URL on the site, one entry per page — the single source of truth for
 * links, metadata (canonical/hreflang) and the sitemap.
 *
 * Plain lookup, nothing clever: `ROUTES.contact.fr`, `ROUTES.contact.en`.
 * French and English slugs are deliberately different per page (SEO — each
 * targets the phrase people actually search in that language), so a link
 * always goes through this table rather than a `/en` prefix guess.
 */

/** @typedef {"fr" | "en"} Lang */
/** @typedef {{ fr: string, en: string }} RoutePair */

/** @type {Lang[]} */
export const LANGS = ["fr", "en"];

/** @type {Record<string, RoutePair>} */
export const ROUTES = {
  home: { fr: "/", en: "/en" },
  solutions: { fr: "/nos-solutions", en: "/en/solutions" },
  acceleration: {
    fr: "/nos-solutions/acceleration-commerciale",
    en: "/en/solutions/commercial-acceleration",
  },
  pilotage: {
    fr: "/nos-solutions/pilotage-commercial-externalise",
    en: "/en/solutions/outsourced-export-sales-management",
  },
  markets: { fr: "/marches", en: "/en/markets" },
  africa: { fr: "/marches/afrique", en: "/en/markets/africa" },
  middleEast: { fr: "/marches/moyen-orient", en: "/en/markets/middle-east" },
  about: { fr: "/as-biz-dev", en: "/en/about" },
  sectors: { fr: "/nos-secteurs", en: "/en/sectors" },
  network: { fr: "/notre-reseau", en: "/en/our-network" },
  becomePartner: { fr: "/devenir-partenaire", en: "/en/become-a-partner" },
  contact: { fr: "/contact", en: "/en/contact" },
  news: { fr: "/news", en: "/en/news" },
  partners: { fr: "/nos-partenaires", en: "/en/our-partners" },
  policy: { fr: "/politiques-de-confidentialite", en: "/en/privacy-policy" },
  legalNotice: { fr: "/mentions-legales", en: "/en/legal-notice" },
};

/**
 * `/news/:slug` and `/en/news/:slug` — the only route with a dynamic segment.
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
export const langFromPath = (pathname) =>
  pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";

/**
 * The other-language version of a URL — feeds the language switcher and
 * hreflang tags. Every static route is a straight lookup; `/news/:slug` is
 * the one dynamic case, handled with a small regex instead of a generic
 * route matcher.
 *
 * @param {string} pathname - a URL in `lang`, e.g. `ROUTES.pilotage.fr`
 * @param {Lang} lang - the language `pathname` is currently in
 * @returns {string} the same page's URL in the other language (falls back to that language's home page for an unknown path)
 */
export const otherLanguageUrl = (pathname, lang) => {
  const other = lang === "fr" ? "en" : "fr";

  const newsMatch = pathname.match(/^\/(?:en\/)?news\/(.+)$/);
  if (newsMatch) return articleUrl(other, newsMatch[1]);

  const entry = Object.values(ROUTES).find((pair) => pair[lang] === pathname);
  return entry ? entry[other] : ROUTES.home[other];
};

/**
 * `{ fr: "...", en: "..." }` for the current URL — feeds the language switcher.
 * @param {string} pathname - the current URL, in `lang`
 * @param {Lang} lang - the language `pathname` is currently in
 * @returns {RoutePair}
 */
export const alternatesOf = (pathname, lang) =>
  lang === "fr"
    ? { fr: pathname, en: otherLanguageUrl(pathname, "fr") }
    : { fr: otherLanguageUrl(pathname, "en"), en: pathname };

/**
 * Route key of the page currently displayed, to highlight the active nav entry.
 * @param {string} pathname
 * @returns {string | null} a key of `ROUTES`, `"news"` for any article path, or `null` if unmatched
 */
export const activeRouteKeyFor = (pathname) => {
  if (/^\/(en\/)?news(\/|$)/.test(pathname)) return "news";

  const entry = Object.entries(ROUTES).find(
    ([, pair]) => pair.fr === pathname || pair.en === pathname,
  );
  return entry?.[0] ?? null;
};
