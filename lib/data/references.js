/**
 * References & ecosystem — data only, no code changes needed to publish one.
 *
 * Shown on /nos-partenaires (fr) / /en/our-partners (en). Three relationship
 * types, never mixed on screen:
 *   - "client": a company AS Biz Dev has directly worked with.
 *   - "network": a national/international institution or professional
 *     network AS Biz Dev collaborates with or is referenced by — never a
 *     client, never a certifier, wording kept precise in i18n/content/partners.js.
 *   - "partner": the pre-existing digital/industry/consulting collaborators
 *     (admg, sysmic) — unchanged, kept separate from the four named
 *     institutional networks above.
 *
 * `logo` is omitted when no verified logo file exists yet — ReferenceCard
 * renders a typographic placeholder in that case. Adding a real logo later
 * is a data-only change: drop the file in public/brand_assets/partenaires/
 * and set `logo: "partenaires/Xxx.webp"`.
 *
 * `sectors` (client entries only) keys into SECTORS below for the filter
 * tabs; list every sector that applies but the org still renders once.
 *
 * `group.brands` renders as "Name — Brand · Brand" and only exists where
 * AS Biz Dev's contact was with a holding company whose sub-brands are worth
 * naming (Robertshaw Group, Les Nouvelles Pailles, Sementis). Decathlon and
 * Groupe Ennakl never get a `group` — showing the brands they distribute
 * would misrepresent who AS Biz Dev actually worked with.
 *
 * `sortOrder` bands: 1–19 featured clients, 20–39 secondary clients,
 * 40–49 network entries, 50+ legacy partner sub-tier.
 */
export const SECTORS = [
  "industrie",
  "automobile",
  "technologies",
  "distribution",
  "sante",
  "transport",
  "services",
];

const LOGOS = {
  ts: "partenaires/TS.webp",
  incenteev: "partenaires/Incenteev.webp",
  bbc: "partenaires/BBC.webp",
  admg: "partenaires/ADMG.webp",
  sysmic: "partenaires/SySmic.webp",
  emba: "partenaires/Emba.webp",
  decathlon: "partenaires/Decathlon.png",
  interroll: "partenaires/Interroll.png",
  Figeac_Aero: "partenaires/Figeac_Aero.png",
  Robertshaw: "partenaires/Robertshaw.png",
  Ennakl: "partenaires/Ennakl.png",
  Groupama: "partenaires/Groupama.png",
  Bontaz: "partenaires/Bontaz.png",
  Komax: "partenaires/Komax.png",
  Vectorys: "partenaires/Vectorys.png",
  Michaud: "partenaires/Michaud.png",
  Foshan_Tongbao: "partenaires/Foshan_Tongbao.png",
  Surfaprotec: "partenaires/Surfaprotec.png",
  La_Pratique_Electronique: "partenaires/La_Pratique_Electronique.png",
  ASSAD_Batteries: "partenaires/ASSAD_Batteries.png",
  Cromes: "partenaires/Cromes.png",
  Les_Nouvelles_Pailles: "partenaires/Les_Nouvelles_Pailles.png",
  Sementis: "artenaires/Sementis.png",
  Promedtech: "partenaires/Promedtech.png",
  Shield_scientific: "partenaires/Shield_scientific.png",
  Vocalcom: "partenaires/Vocalcom.png",
  HR_maps: "partenaires/HR_maps.png",
  ACH: "partenaires/ACH.png",
};

export const REFERENCES = [
  // --- featured clients ---
  {
    key: "decathlon",
    type: "client",
    featured: true,
    sectors: ["distribution"],
    logo: LOGOS.decathlon,
    isPublished: true,
    sortOrder: 1,
  },
  {
    key: "interroll",
    type: "client",
    featured: true,
    sectors: ["industrie"],
    logo: LOGOS.interroll,
    isPublished: true,
    sortOrder: 2,
  },
  {
    key: "figeacAero",
    type: "client",
    featured: true,
    sectors: ["industrie"],
    logo: LOGOS.Figeac_Aero,
    isPublished: true,
    sortOrder: 3,
  },
  {
    key: "robertshaw",
    type: "client",
    featured: true,
    sectors: ["industrie"],
    group: { brands: ["Robertshaw", "Ranco", "CastFutura"] },
    logo: LOGOS.Robertshaw,
    isPublished: true,
    sortOrder: 4,
  },
  {
    key: "ennakl",
    type: "client",
    featured: true,
    sectors: ["automobile"],
    logo: LOGOS.Ennakl,
    isPublished: true,
    sortOrder: 5,
  },
  {
    key: "groupama",
    type: "client",
    featured: true,
    sectors: ["services"],
    logo: LOGOS.Groupama,
    isPublished: true,
    sortOrder: 6,
  },
  {
    key: "bontaz",
    type: "client",
    featured: true,
    sectors: ["industrie", "automobile"],
    logo: LOGOS.Bontaz,
    isPublished: true,
    sortOrder: 7,
  },
  {
    key: "komax",
    type: "client",
    featured: true,
    sectors: ["industrie"],
    logo: LOGOS.Komax,
    isPublished: true,
    sortOrder: 8,
  },
  {
    key: "vectorys",
    type: "client",
    featured: true,
    sectors: ["transport"],
    logo: LOGOS.Vectorys,
    isPublished: true,
    sortOrder: 9,
  },
  {
    key: "bbc",
    type: "client",
    featured: true,
    sectors: ["industrie"],
    logo: LOGOS.bbc,
    isPublished: true,
    sortOrder: 10,
  },

  // --- secondary clients: industrie / équipements / technologies ---
  {
    key: "michaud",
    type: "client",
    featured: false,
    sectors: ["industrie"],
    logo: LOGOS.Michaud,
    isPublished: true,
    sortOrder: 20,
  },
  {
    key: "foshanTongbao",
    type: "client",
    featured: false,
    sectors: ["industrie"],
    logo: LOGOS.Foshan_Tongbao,
    isPublished: true,
    sortOrder: 21,
  },
  {
    key: "surfaprotec",
    type: "client",
    featured: false,
    sectors: ["industrie"],
    logo: LOGOS.Surfaprotec,
    isPublished: true,
    sortOrder: 22,
  },
  {
    key: "lpe",
    type: "client",
    featured: false,
    sectors: ["industrie"],
    logo: LOGOS.La_Pratique_Electronique,
    isPublished: true,
    sortOrder: 23,
  },
  {
    key: "assadBatteries",
    type: "client",
    featured: false,
    sectors: ["industrie", "automobile"],
    logo: LOGOS.ASSAD_Batteries,
    isPublished: true,
    sortOrder: 24,
  },
  {
    key: "cromes",
    type: "client",
    featured: false,
    sectors: ["industrie"],
    logo: LOGOS.Cromes,
    isPublished: true,
    sortOrder: 25,
  },

  // --- secondary clients: distribution / retail ---
  {
    key: "nouvellesPailles",
    type: "client",
    featured: false,
    sectors: ["distribution"],
    logo: LOGOS.Les_Nouvelles_Pailles,
    group: { brands: ["MOOM Tableware"] },
    isPublished: true,
    sortOrder: 26,
  },
  {
    key: "sementis",
    type: "client",
    featured: false,
    sectors: ["distribution"],
    logo: LOGOS.Sementis,
    group: { brands: ["Ehop"] },
    isPublished: true,
    sortOrder: 27,
  },

  // --- secondary clients: santé / sciences ---
  {
    key: "promedtech",
    type: "client",
    featured: false,
    sectors: ["sante"],
    logo: LOGOS.Promedtech,
    isPublished: true,
    sortOrder: 28,
  },
  {
    key: "shieldScientific",
    type: "client",
    featured: false,
    logo: LOGOS.Shield_scientific,
    sectors: ["sante"],
    isPublished: true,
    sortOrder: 29,
  },

  // --- secondary clients: services / technologies / business development ---
  {
    key: "vocalcom",
    type: "client",
    featured: false,
    logo: LOGOS.Vocalcom,
    sectors: ["services"],
    isPublished: true,
    sortOrder: 30,
  },
  {
    key: "incenteev",
    type: "client",
    featured: false,
    sectors: ["services"],
    logo: LOGOS.incenteev,
    isPublished: true,
    sortOrder: 31,
  },
  {
    key: "hrMaps",
    type: "client",
    featured: false,
    sectors: ["services"],
    logo: LOGOS.HR_maps,
    isPublished: true,
    sortOrder: 32,
  },
  {
    key: "ts",
    type: "client",
    featured: false,
    sectors: ["services"],
    logo: LOGOS.ts,
    isPublished: true,
    sortOrder: 33,
  },
  {
    key: "emba",
    type: "client",
    featured: false,
    sectors: ["services"],
    logo: LOGOS.emba,
    isPublished: true,
    sortOrder: 34,
  },
  {
    key: "ach",
    type: "client",
    featured: false,
    sectors: ["services"],
    logo: LOGOS.ACH,
    isPublished: true,
    sortOrder: 35,
  },

  // --- ecosystem: named institutional networks ---
  { key: "apm", type: "network", isPublished: true, sortOrder: 40 },
  { key: "giz", type: "network", isPublished: true, sortOrder: 41 },
  { key: "businessFrance", type: "network", isPublished: true, sortOrder: 42 },
  { key: "taa", type: "network", isPublished: true, sortOrder: 43 },

  // --- ecosystem: legacy partner sub-tier (unchanged) ---
  {
    key: "admg",
    type: "partner",
    category: "industry",
    logo: LOGOS.admg,
    isPublished: true,
    sortOrder: 50,
  },
  {
    key: "sysmic",
    type: "partner",
    category: "consulting",
    logo: LOGOS.sysmic,
    isPublished: true,
    sortOrder: 51,
  },
];
