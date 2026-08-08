/**
 * Route table — the single source of truth for every URL on the site.
 *
 * Each page exists at one URL per language. English slugs are not literal
 * translations: they are the search expressions the English site targets
 * ("outsourced export sales management", "commercial acceleration"), so the
 * URL itself carries SEO weight.
 *
 * Declaration order matters: `matchRoute` returns the first match, so static
 * paths must be declared before the `:slug` patterns that would swallow them.
 *
 * Kept dependency-free on purpose — the build scripts (prerenderer, sitemap)
 * import this file directly under plain Node.
 */
export const LANGS = ["fr", "en"];
export const DEFAULT_LANG = "fr";

export const PATHS = {
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
  becomePartner: { fr: "/devenir-partenaire", en: "/en/become-a-partner" },
  contact: { fr: "/contact", en: "/en/contact" },
  news: { fr: "/news", en: "/en/news" },
  partners: { fr: "/nos-partenaires", en: "/en/our-partners" },
  policy: { fr: "/politiques-de-confidentialite", en: "/en/privacy-policy" },
  country: { fr: "/marches/:slug", en: "/en/markets/:slug" },
  article: { fr: "/news/:slug", en: "/en/news/:slug" },
};

/** Page keys carrying a `:slug`, so callers know params are required. */
export const DYNAMIC_KEYS = ["country", "article"];

/**
 * Builds the URL of a page in a given language.
 * `pathFor("country", "en", { slug: "senegal" })` → `/en/markets/senegal`
 */
export const pathFor = (key, lang = DEFAULT_LANG, params = {}) => {
  const pattern = PATHS[key]?.[lang] ?? PATHS[key]?.[DEFAULT_LANG];
  if (!pattern) return "/";

  return Object.entries(params).reduce(
    (acc, [name, value]) => acc.replace(`:${name}`, value),
    pattern,
  );
};

/** Trailing slashes are meaningless here — one URL per page, always. */
export const normalise = (pathname) =>
  pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

/** Language carried by the URL prefix — the only source of truth for locale. */
export const langFromPath = (pathname) =>
  normalise(pathname) === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
