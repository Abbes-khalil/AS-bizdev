/**
 * Paths from the previous site, kept alive so inbound links, bookmarks and
 * search results still resolve after the rebuild.
 *
 * The three former editorial pages (Who is Who, Nos valeurs, Notre
 * savoir-faire) and the old long "Nos solutions" page were absorbed into
 * `/as-biz-dev` and `/nos-solutions`, so they redirect there rather than 404.
 * The same list feeds the server-side 301s in `next.config.mjs`.
 */
export const LEGACY_REDIRECTS = {
  "/who-is-who": "about",
  "/whoiswho": "about",
  "/nos-valeurs": "about",
  "/nosvaleurs": "about",
  "/notre-savoir-faire": "about",
  "/notresavoirfaire": "about",
  "/nossolutions": "solutions",
  "/nospartenaire": "partners",
  "/nospartenaires": "partners",
  "/category/news": "news",
};
