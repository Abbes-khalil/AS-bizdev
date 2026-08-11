/**
 * Every URL on the site, one entry per page — the single source of truth for
 * links, metadata (canonical/hreflang) and the sitemap.
 *
 * Plain lookup, nothing clever: `ROUTES.contact.fr`, `ROUTES.contact.en`.
 * French and English slugs are deliberately different per page (SEO — each
 * targets the phrase people actually search in that language), so a link
 * always goes through this table rather than a `/en` prefix guess.
 */
export const LANGS = ["fr", "en"];

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
};

/** `/news/:slug` and `/en/news/:slug` — the only route with a dynamic segment. */
export const articleUrl = (lang, slug) => `${ROUTES.news[lang]}/${slug}`;

/** The URL prefix is the only thing that decides the language. */
export const langFromPath = (pathname) =>
  pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";

/**
 * The other-language version of a URL — feeds the language switcher and
 * hreflang tags. Every static route is a straight lookup; `/news/:slug` is
 * the one dynamic case, handled with a small regex instead of a generic
 * route matcher.
 */
export const otherLanguageUrl = (pathname, lang) => {
  const other = lang === "fr" ? "en" : "fr";

  const newsMatch = pathname.match(/^\/(?:en\/)?news\/(.+)$/);
  if (newsMatch) return articleUrl(other, newsMatch[1]);

  const entry = Object.values(ROUTES).find((pair) => pair[lang] === pathname);
  return entry ? entry[other] : ROUTES.home[other];
};

/** `{ fr: "...", en: "..." }` for the current URL — feeds the language switcher. */
export const alternatesOf = (pathname, lang) =>
  lang === "fr"
    ? { fr: pathname, en: otherLanguageUrl(pathname, "fr") }
    : { fr: otherLanguageUrl(pathname, "en"), en: pathname };

/** Route key of the page currently displayed, to highlight the active nav entry. */
export const activeRouteKeyFor = (pathname) => {
  if (/^\/(en\/)?news(\/|$)/.test(pathname)) return "news";

  const entry = Object.entries(ROUTES).find(
    ([, pair]) => pair.fr === pathname || pair.en === pathname,
  );
  return entry?.[0] ?? null;
};
