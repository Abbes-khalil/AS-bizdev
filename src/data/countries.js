/**
 * Country pages — data only, no code changes needed to publish one.
 *
 * The brief forbids naming a market before AS Biz Dev has confirmed it (§6,
 * §16, §22.1), so this list ships empty: `/marches` shows "[PAYS À VALIDER]"
 * slots until real entries land here. Adding a country creates its page, its
 * card on the zone page, its sitemap entry and its hreflang pair.
 *
 * Shape — every section is optional; anything omitted renders as
 * "à valider" rather than being filled with plausible copy:
 *
 *   {
 *     key: "senegal",              // stable id, never translated
 *     zone: "africa",              // "africa" | "middleEast"
 *     slug: { fr: "senegal", en: "senegal" },
 *     name: { fr: "Sénégal", en: "Senegal" },
 *     inName: { fr: "au Sénégal", en: "in Senegal" },  // prepositional form
 *                                                      // used in page titles
 *     fr: {
 *       intro: "…",                // 1–2 sentences, factual
 *       sectors: ["…"],            // secteurs prioritaires
 *       clients: ["…"],            // typologie de clients
 *       channels: ["…"],           // canaux de distribution
 *       stakes: ["…"],             // enjeux du marché
 *       intervention: ["…"],       // intervention possible d'AS Biz Dev
 *       partners: ["…"],           // partenaires recherchés
 *     },
 *     en: { … same keys … },
 *   }
 */
export const COUNTRIES = [];

/** How many "[PAYS À VALIDER]" slots a zone page shows while its list is empty. */
export const PLACEHOLDER_SLOTS = 3;

export const ZONES = ["africa", "middleEast"];

export const countriesByZone = (zone) =>
  COUNTRIES.filter((country) => country.zone === zone);

/** Finds a country from a slug in either language — used to resolve routes. */
export const findCountryBySlug = (slug) =>
  COUNTRIES.find(
    (country) => country.slug.fr === slug || country.slug.en === slug,
  );
