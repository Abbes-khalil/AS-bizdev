/**
 * Base path for images. Derived from Vite's BASE_URL so the same code works
 * at the domain root ("/") and inside a WordPress theme directory
 * ("/wp-content/themes/asbizdev/").
 */
export const ASSET = `${import.meta.env?.BASE_URL ?? "/"}brand_assets/`;

/**
 * Route hrefs — the single source of truth for navigation targets.
 * Localised labels live in `src/i18n/content/common.js`.
 */
export const ROUTES = {
  home: "/",
  whoIsWho: "/who-is-who",
  values: "/nos-valeurs",
  expertise: "/notre-savoir-faire",
  solutions: "/nos-solutions",
  partners: "/nos-partenaires",
  news: "/news",
  contact: "/contact",
  policy: "/politiques-de-confidentialite",
};

/**
 * Legacy paths kept alive so inbound links and search results still resolve:
 * the un-hyphenated slugs used by the previous build, plus the origin's
 * WordPress `/category/news/` archive path.
 */
export const ROUTE_ALIASES = {
  "/whoiswho": ROUTES.whoIsWho,
  "/nosvaleurs": ROUTES.values,
  "/notresavoirfaire": ROUTES.expertise,
  "/nossolutions": ROUTES.solutions,
  "/nospartenaire": ROUTES.partners,
  "/nospartenaires": ROUTES.partners,
  "/category/news": ROUTES.news,
};

export const CONTACT_EMAIL = "contact@asbizdev.com";
export const CONTACT_PHONE = "+33 06 07 38 69 63";
