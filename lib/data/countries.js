import { MARKET_POSITIONS } from "./marketsMapData";

/**
 * @typedef {"north" | "west" | "south" | "middleEast"} Subregion
 * @typedef {"dense" | "developing" | "significant" | "strategic"} Tier
 * @typedef {Object} Country
 * @property {string} key - stable id, never translated
 * @property {string} slug
 * @property {Subregion} subregion
 * @property {Tier} tier
 * @property {string} flagCode - ISO 3166-1 alpha-2, matches /brand_assets/flags/{code}.svg
 * @property {{ fr: string, en: string }} name
 * @property {{ fr: string, en: string }} intro
 * @property {{ cx: number, cy: number } | null} [position] - merged in from marketsMapData.js, see below
 * @property {string[]} [sectors]
 * @property {string[]} [clientTypes]
 * @property {string[]} [distributionChannels]
 * @property {string[]} [marketChallenges]
 * @property {string[]} [interventions]
 * @property {string[]} [partnersSought]
 * @property {boolean} [published] - false hides the market from every page (default true)
 * @property {number} [displayOrder] - lower first; ties keep array order (default 0)
 */

/**
 * Countries shown on /marches — data only, no code changes needed to add one.
 *
 * The brief forbids naming a market before AS Biz Dev has confirmed it (§6,
 * §16, §22.1). The entries below are the markets AS Biz Dev has confirmed
 * (§"Nos marchés"): named because there is a real level of contacts or an
 * active build-out, not because AS Biz Dev covers them uniformly — hence the
 * `tier` field, which drives the coverage-level label shown on each card so
 * the site never implies the same reach everywhere (§16, §22.1).
 *
 * Shape:
 *
 *   {
 *     key: "senegal",              // stable id, never translated
 *     slug: "senegal",             // currently unused (its only consumer, findCountryBySlug, was removed as dead code)
 *     subregion: "west",           // "north" | "west" | "south" | "middleEast"
 *     tier: "developing",          // "dense" | "developing" | "significant" | "strategic"
 *     flagCode: "sn",              // ISO 3166-1 alpha-2, matches /brand_assets/flags/{code}.svg
 *     name: { fr: "Sénégal", en: "Senegal" },
 *     intro: { fr: "…", en: "…" },  // 1–2 sentences, factual
 *     position: { cx, cy },         // merged in below from marketsMapData.js
 *
 *     // Optional, all validated-content-only (§9, §26 of the brief) — a
 *     // section renders in the market modal only when its array is present
 *     // and non-empty. None of the 14 markets below have these yet.
 *     sectors: ["…"],
 *     clientTypes: ["…"],
 *     distributionChannels: ["…"],
 *     marketChallenges: ["…"],
 *     interventions: ["…"],
 *     partnersSought: ["…"],
 *
 *     // Optional, both default when omitted — kept out of every entry below
 *     // to avoid 14x noise, set only where a future CMS/editorial pass needs
 *     // to hide a market or reorder it without touching array position.
 *     published: true,    // false hides the market from every page
 *     displayOrder: 0,     // lower first; ties keep array order (stable sort)
 *   }
 */
/** @type {Country[]} */
export const COUNTRIES = [
  {
    key: "tunisia",
    slug: "tunisie",
    subregion: "north",
    tier: "dense",
    flagCode: "tn",
    name: { fr: "Tunisie", en: "Tunisia", ar: "تونس" },
    intro: {
      fr: "AS Biz Dev dispose aujourd'hui d'une forte densité de contacts et d'une bonne connaissance de l'écosystème économique tunisien.",
      en: "AS Biz Dev has a strong density of contacts and a good understanding of the Tunisian economic ecosystem today.",
      ar: "تمتلك AS Biz Dev اليوم كثافة قوية من جهات الاتصال ومعرفة جيدة بالمنظومة الاقتصادية التونسية.",
    },
  },
  {
    key: "morocco",
    slug: "maroc",
    subregion: "north",
    tier: "dense",
    flagCode: "ma",
    name: { fr: "Maroc", en: "Morocco", ar: "المغرب" },
    intro: {
      fr: "AS Biz Dev dispose aujourd'hui d'une forte densité de contacts et d'une bonne connaissance de l'écosystème économique marocain.",
      en: "AS Biz Dev has a strong density of contacts and a good understanding of the Moroccan economic ecosystem today.",
      ar: "تمتلك AS Biz Dev اليوم كثافة قوية من جهات الاتصال ومعرفة جيدة بالمنظومة الاقتصادية المغربية.",
    },
  },
  {
    key: "egypt",
    slug: "egypte",
    subregion: "north",
    tier: "dense",
    flagCode: "eg",
    name: { fr: "Égypte", en: "Egypt", ar: "مصر" },
    intro: {
      fr: "AS Biz Dev dispose aujourd'hui d'une forte densité de contacts et d'une bonne connaissance de l'écosystème économique égyptien.",
      en: "AS Biz Dev has a strong density of contacts and a good understanding of the Egyptian economic ecosystem today.",
      ar: "تمتلك AS Biz Dev اليوم كثافة قوية من جهات الاتصال ومعرفة جيدة بالمنظومة الاقتصادية المصرية.",
    },
  },
  {
    key: "algeria",
    slug: "algerie",
    subregion: "north",
    tier: "dense",
    flagCode: "dz",
    name: { fr: "Algérie", en: "Algeria", ar: "الجزائر" },
    intro: {
      fr: "AS Biz Dev dispose aujourd'hui d'une forte densité de contacts et d'une bonne connaissance de l'écosystème économique algérien.",
      en: "AS Biz Dev has a strong density of contacts and a good understanding of the Algerian economic ecosystem today.",
      ar: "تمتلك AS Biz Dev اليوم كثافة قوية من جهات الاتصال ومعرفة جيدة بالمنظومة الاقتصادية الجزائرية.",
    },
  },
  {
    key: "ivoryCoast",
    slug: "cote-d-ivoire",
    subregion: "west",
    tier: "developing",
    flagCode: "ci",
    name: { fr: "Côte d'Ivoire", en: "Ivory Coast", ar: "ساحل العاج" },
    intro: {
      fr: "Le réseau d'AS Biz Dev est également développé en Côte d'Ivoire, et se renforce progressivement.",
      en: "AS Biz Dev's network is also developed in Ivory Coast, and is progressively being strengthened.",
      ar: "شبكة AS Biz Dev متطورة أيضاً في ساحل العاج، وتتعزز تدريجياً.",
    },
  },
  {
    key: "senegal",
    slug: "senegal",
    subregion: "west",
    tier: "developing",
    flagCode: "sn",
    name: { fr: "Sénégal", en: "Senegal", ar: "السنغال" },
    intro: {
      fr: "Le réseau d'AS Biz Dev est également développé au Sénégal, et se renforce progressivement.",
      en: "AS Biz Dev's network is also developed in Senegal, and is progressively being strengthened.",
      ar: "شبكة AS Biz Dev متطورة أيضاً في السنغال، وتتعزز تدريجياً.",
    },
  },
  {
    key: "nigeria",
    slug: "nigeria",
    subregion: "west",
    tier: "developing",
    flagCode: "ng",
    name: { fr: "Nigeria", en: "Nigeria", ar: "نيجيريا" },
    intro: {
      fr: "Le réseau d'AS Biz Dev est également développé au Nigeria, et se renforce progressivement.",
      en: "AS Biz Dev's network is also developed in Nigeria, and is progressively being strengthened.",
      ar: "شبكة AS Biz Dev متطورة أيضاً في نيجيريا، وتتعزز تدريجياً.",
    },
  },
  {
    key: "southAfrica",
    slug: "afrique-du-sud",
    subregion: "south",
    tier: "significant",
    flagCode: "za",
    name: { fr: "Afrique du Sud", en: "South Africa", ar: "جنوب أفريقيا" },
    intro: {
      fr: "La base et les réseaux d'AS Biz Dev comprennent une présence significative en Afrique du Sud.",
      en: "AS Biz Dev's base and networks include a significant presence in South Africa.",
      ar: "تشمل قاعدة AS Biz Dev وشبكاتها حضوراً ملحوظاً في جنوب أفريقيا.",
    },
  },
  {
    key: "uae",
    slug: "emirats-arabes-unis",
    subregion: "middleEast",
    tier: "strategic",
    flagCode: "ae",
    name: { fr: "Émirats arabes unis", en: "United Arab Emirates", ar: "الإمارات العربية المتحدة" },
    intro: {
      fr: "Le Moyen-Orient est une zone stratégique de développement pour AS Biz Dev ; notre réseau s'y développe notamment aux Émirats arabes unis.",
      en: "The Middle East is a strategic development area for AS Biz Dev; our network is growing there, notably in the United Arab Emirates.",
      ar: "الشرق الأوسط منطقة تطوير استراتيجية بالنسبة لـ AS Biz Dev؛ تتطور شبكتنا هناك، لا سيما في الإمارات العربية المتحدة.",
    },
  },
  {
    key: "saudiArabia",
    slug: "arabie-saoudite",
    subregion: "middleEast",
    tier: "strategic",
    flagCode: "sa",
    name: { fr: "Arabie saoudite", en: "Saudi Arabia", ar: "المملكة العربية السعودية" },
    intro: {
      fr: "Le Moyen-Orient est une zone stratégique de développement pour AS Biz Dev ; notre réseau s'y développe notamment en Arabie saoudite.",
      en: "The Middle East is a strategic development area for AS Biz Dev; our network is growing there, notably in Saudi Arabia.",
      ar: "الشرق الأوسط منطقة تطوير استراتيجية بالنسبة لـ AS Biz Dev؛ تتطور شبكتنا هناك، لا سيما في المملكة العربية السعودية.",
    },
  },
  {
    key: "qatar",
    slug: "qatar",
    subregion: "middleEast",
    tier: "strategic",
    flagCode: "qa",
    name: { fr: "Qatar", en: "Qatar", ar: "قطر" },
    intro: {
      fr: "Le Moyen-Orient est une zone stratégique de développement pour AS Biz Dev ; notre réseau s'y développe notamment au Qatar.",
      en: "The Middle East is a strategic development area for AS Biz Dev; our network is growing there, notably in Qatar.",
      ar: "الشرق الأوسط منطقة تطوير استراتيجية بالنسبة لـ AS Biz Dev؛ تتطور شبكتنا هناك، لا سيما في قطر.",
    },
  },
  {
    key: "kuwait",
    slug: "koweit",
    subregion: "middleEast",
    tier: "strategic",
    flagCode: "kw",
    name: { fr: "Koweït", en: "Kuwait", ar: "الكويت" },
    intro: {
      fr: "Le Moyen-Orient est une zone stratégique de développement pour AS Biz Dev ; notre réseau s'y développe notamment au Koweït.",
      en: "The Middle East is a strategic development area for AS Biz Dev; our network is growing there, notably in Kuwait.",
      ar: "الشرق الأوسط منطقة تطوير استراتيجية بالنسبة لـ AS Biz Dev؛ تتطور شبكتنا هناك، لا سيما في الكويت.",
    },
  },
  {
    key: "bahrain",
    slug: "bahrein",
    subregion: "middleEast",
    tier: "strategic",
    flagCode: "bh",
    name: { fr: "Bahreïn", en: "Bahrain", ar: "البحرين" },
    intro: {
      fr: "Le Moyen-Orient est une zone stratégique de développement pour AS Biz Dev ; notre réseau s'y développe notamment au Bahreïn.",
      en: "The Middle East is a strategic development area for AS Biz Dev; our network is growing there, notably in Bahrain.",
      ar: "الشرق الأوسط منطقة تطوير استراتيجية بالنسبة لـ AS Biz Dev؛ تتطور شبكتنا هناك، لا سيما في البحرين.",
    },
  },
  {
    key: "jordan",
    slug: "jordanie",
    subregion: "middleEast",
    tier: "strategic",
    flagCode: "jo",
    name: { fr: "Jordanie", en: "Jordan", ar: "الأردن" },
    intro: {
      fr: "Le Moyen-Orient est une zone stratégique de développement pour AS Biz Dev ; notre réseau s'y développe notamment en Jordanie.",
      en: "The Middle East is a strategic development area for AS Biz Dev; our network is growing there, notably in Jordan.",
      ar: "الشرق الأوسط منطقة تطوير استراتيجية بالنسبة لـ AS Biz Dev؛ تتطور شبكتنا هناك، لا سيما في الأردن.",
    },
  },
];

// Merges each country's on-map position in from marketsMapData.js (generated
// by scripts/build-markets-map.mjs from real geography — never hand-edit
// positions there) so every consumer reads flag/name/tier/position off one
// object instead of joining two files by `key` at each call site.
COUNTRIES.forEach((country) => {
  country.position = MARKET_POSITIONS[country.key] ?? null;
});

/**
 * Coverage-level label shown on each country card — never implies uniform reach.
 * @type {Record<Tier, { fr: string, en: string }>}
 */
export const TIER_LABELS = {
  dense: { fr: "Réseau dense", en: "Established network", ar: "شبكة كثيفة" },
  developing: {
    fr: "Réseau en développement",
    en: "Growing network",
    ar: "شبكة قيد التطوير",
  },
  significant: {
    fr: "Présence significative",
    en: "Significant presence",
    ar: "حضور ملحوظ",
  },
  strategic: {
    fr: "Zone stratégique",
    en: "Strategic development",
    ar: "منطقة تطوير استراتيجية",
  },
};

/**
 * Markets actually shown on the site: unpublished entries dropped, the rest
 * ordered by `displayOrder` (ties keep their position in `COUNTRIES` — Array
 * sort is stable). Every page-facing list should read from this, not
 * `COUNTRIES` directly, so a future CMS only has to set two fields to hide
 * or reorder a market.
 * @type {Country[]}
 */
export const PUBLISHED_COUNTRIES = COUNTRIES.filter((country) => country.published !== false).sort(
  (a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0),
);

/**
 * Resolves a stable `key` to a market, or null.
 * @param {string} key
 * @returns {Country | null}
 */
export const findCountryByKey = (key) =>
  COUNTRIES.find((country) => country.key === key) ?? null;
