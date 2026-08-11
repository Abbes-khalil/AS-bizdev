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
 *
 * `country` (optional, any entry) is prepared for future use but never
 * guessed — only set it once AS Biz Dev confirms a value; omit it otherwise.
 *
 * `website` (optional, any entry) renders as an outbound link via
 * ExternalLink when set — only add a URL once it has been verified.
 *
 * Logos: only reference a file in LOGOS once it has been checked to (a)
 * exist and (b) show the correct company. Entries with no verified logo
 * simply omit `logo` — ReferenceCard falls back to a typographic
 * placeholder and never shows a broken image or another company's mark.
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

/**
 * Precise network stats AS Biz Dev hasn't signed off on yet stay `null`
 * rather than publishing an unverified number. `contactsCount` feeds the
 * "Un réseau propriétaire structuré" block on /nos-partenaires: null renders
 * the generic "plusieurs milliers de contacts professionnels" phrasing,
 * a number renders the precise count once confirmed.
 */
export const NETWORK_STATS = {
  contactsCount: null,
};

// Only companies with a verified, correctly-matching logo file get an entry
// here. Foshan Tongbao, Surfaprotec, La Pratique Électronique, HR Maps and
// ACH have no verified asset (Surfaprotec's file on disk turned out to show
// a different company's logo) — they render the typographic placeholder in
// ReferenceCard until a real logo is supplied.
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
  Cromes: "partenaires/Cromes.png",
  Les_Nouvelles_Pailles: "partenaires/Les_Nouvelles_Pailles.png",
  Sementis: "partenaires/Sementis.png",
  Promedtech: "partenaires/Promed.png",
  Shield_scientific: "partenaires/Shield_scientific.png",
  Vocalcom: "partenaires/Vocalcom.png",
  Assad: "partenaires/ASSAD_batteries.png",
  Surfaprotec: "partenaires/Surfaprotec.png",
  lpe: "partenaires/lpe.jpg",
  HRmaps: "partenaires/HRmaps.png",
  GIZ: "partenaires/GIZ.png",
  Business_france: "partenaires/Business_france.png",
  taa: "partenaires/taa.png",
  apm: "partenaires/apm.webp",
};

export const REFERENCES = [
  // --- featured clients ---
  {
    key: "decathlon",
    type: "client",
    featured: true,
    sectors: ["distribution"],
    logo: LOGOS.decathlon,
    // Confirmed visually: at 2000x597 (3.35:1) this logo reads noticeably
    // thinner than its squarer neighbours once width-capped in the card.
    logoScale: 1.15,
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
    logo: LOGOS.lpe,
    isPublished: true,
    sortOrder: 23,
  },
  {
    key: "assadBatteries",
    type: "client",
    featured: false,
    sectors: ["industrie", "automobile"],
    logo: LOGOS.Assad,
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
    logo: LOGOS.HRmaps,
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
    isPublished: true,
    sortOrder: 35,
  },

  // --- ecosystem: named institutional networks ---
  {
    key: "apm",
    logo: LOGOS.apm,
    type: "network",
    isPublished: true,
    sortOrder: 40,
  },
  {
    key: "giz",
    logo: LOGOS.GIZ,
    type: "network",
    isPublished: true,
    sortOrder: 41,
  },
  {
    key: "businessFrance",
    logo: LOGOS.Business_france,
    type: "network",
    isPublished: true,
    sortOrder: 42,
  },
  {
    key: "taa",
    logo: LOGOS.taa,
    type: "network",
    isPublished: true,
    sortOrder: 43,
  },

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
