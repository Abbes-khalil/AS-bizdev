/**
 * Everything about /nos-partenaires (fr) / /en/our-partners (en) lives here:
 * one object per reference (client, network institution, or partner), with
 * both languages inline — no separate file keyed by the same `key` to keep
 * in sync. A missing `content.<lang>.description` is intentional: several
 * client entries only have a confirmed name and sector (no verified company
 * description to draw from), and the brief's own warning is explicit — never
 * invent a description, a relationship, or a sub-brand that hasn't been
 * confirmed.
 *
 * Only companies with a verified, correctly-matching logo file get a `logo`.
 * Foshan Tongbao and ACH have no verified asset and carry no `logo` field —
 * they render the typographic placeholder in ReferenceCard until a real,
 * checked logo is supplied. Surfaprotec, La Pratique Électronique and HR
 * Maps were re-checked and their files on disk do match the company, so
 * they keep their `logo` field.
 *
 * `logoBackground: "dark"` flags a logo that's white/light and needs a dark
 * backing plate to stay visible (e.g. APM) — the card applies the background
 * to the logo zone only, never inferred from the org's name.
 *
 * `edge.blocks[0].body` in PartnersContent.content.js (page-shell copy)
 * carries a `{contactsPhrase}` token, interpolated in PartnersContent from
 * `NETWORK_STATS.contactsCount` below — never hardcode a contact count back
 * into that string.
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

export const NETWORK_STATS = {
  contactsCount: null,
};

export const REFERENCES = [
  // --- featured clients ---
  {
    key: "decathlon",
    type: "client",
    featured: true,
    sectors: ["distribution"],
    logo: "partenaires/Decathlon.png",
    logoScale: 1.15,
    isPublished: true,
    sortOrder: 1,
    content: {
      fr: { name: "Decathlon" },
      en: { name: "Decathlon" },
    },
  },
  {
    key: "interroll",
    type: "client",
    featured: true,
    sectors: ["industrie", "equipements", "technologies"],
    logo: "partenaires/Interroll.png",
    isPublished: true,
    sortOrder: 2,
    content: {
      fr: { name: "Interroll" },
      en: { name: "Interroll" },
    },
  },
  {
    key: "figeacAero",
    type: "client",
    featured: true,
    sectors: ["industrie", "automobile"],
    logo: "partenaires/Figeac_Aero.png",
    isPublished: true,
    sortOrder: 3,
    content: {
      fr: { name: "Figeac Aéro" },
      en: { name: "Figeac Aéro" },
    },
  },
  {
    key: "robertshaw",
    type: "client",
    featured: true,
    sectors: ["industrie", "equipements", "technologies"],
    group: { brands: ["Robertshaw", "Ranco", "CastFutura"] },
    logo: "partenaires/Robertshaw.png",
    isPublished: true,
    sortOrder: 4,
    content: {
      fr: { name: "Robertshaw Group" },
      en: { name: "Robertshaw Group" },
    },
  },
  {
    key: "ennakl",
    type: "client",
    featured: true,
    sectors: ["automobile"],
    logo: "partenaires/Ennakl.png",
    isPublished: true,
    sortOrder: 5,
    content: {
      fr: { name: "Groupe Ennakl" },
      en: { name: "Groupe Ennakl" },
    },
  },
  {
    key: "groupama",
    type: "client",
    featured: true,
    sectors: ["services"],
    logo: "partenaires/Groupama.png",
    isPublished: true,
    sortOrder: 6,
    content: {
      fr: { name: "Groupama" },
      en: { name: "Groupama" },
    },
  },
  {
    key: "bontaz",
    type: "client",
    featured: true,
    sectors: ["industrie", "equipements", "technologies", "automobile"],
    logo: "partenaires/Bontaz.png",
    isPublished: true,
    sortOrder: 7,
    content: {
      fr: { name: "Bontaz" },
      en: { name: "Bontaz" },
    },
  },
  {
    key: "komax",
    type: "client",
    featured: true,
    sectors: ["industrie", "equipements", "technologies"],
    logo: "partenaires/Komax.png",
    isPublished: true,
    sortOrder: 8,
    content: {
      fr: { name: "Komax" },
      en: { name: "Komax" },
    },
  },
  {
    key: "vectorys",
    type: "client",
    featured: true,
    sectors: ["transport"],
    logo: "partenaires/Vectorys.png",
    isPublished: true,
    sortOrder: 9,
    content: {
      fr: { name: "Vectorys" },
      en: { name: "Vectorys" },
    },
  },
  {
    key: "bbc",
    type: "client",
    featured: true,
    sectors: ["industrie", "technologies"],
    logo: "partenaires/BBC.webp",
    isPublished: true,
    sortOrder: 10,
    content: {
      fr: {
        name: "BBC Bircher",
        description:
          "L'entreprise BBC Bircher réussit avec succès sur le marché international en tant que grand fournisseur et producteur mondial. Ses deux branches d'activité, spécialisées et expertes en technologie des capteurs ainsi qu'en contrôle des processus pour portes et portails automatiques, lui permettent de placer au premier plan la sécurité des personnes, des véhicules et des installations.",
      },
      en: {
        name: "BBC Bircher",
        description:
          "BBC Bircher succeeds on the international market as a major global supplier and producer. Its two business divisions, specialised and expert in sensor technology and process control — notably for automatic doors and gates — put the safety of people, vehicles and installations first.",
      },
    },
  },

  // --- secondary clients: industrie / équipements / technologies ---
  {
    key: "michaud",
    type: "client",
    featured: false,
    sectors: ["industrie", "technologies"],
    logo: "partenaires/Michaud.png",
    isPublished: true,
    sortOrder: 20,
    content: {
      fr: { name: "Michaud" },
      en: { name: "Michaud" },
    },
  },
  {
    key: "foshanTongbao",
    type: "client",
    featured: false,
    sectors: ["industrie", "technologies"],
    isPublished: true,
    sortOrder: 21,
    content: {
      fr: { name: "Foshan Tongbao" },
      en: { name: "Foshan Tongbao" },
    },
  },
  {
    key: "surfaprotec",
    type: "client",
    featured: false,
    sectors: ["industrie", "technologies"],
    logo: "partenaires/Surfaprotec.png",
    isPublished: true,
    sortOrder: 22,
    content: {
      fr: { name: "Surfaprotec" },
      en: { name: "Surfaprotec" },
    },
  },
  {
    key: "lpe",
    type: "client",
    featured: false,
    sectors: ["industrie", "technologies"],
    isPublished: true,
    logo: "partenaires/lpe.jpg",
    sortOrder: 23,
    content: {
      fr: { name: "La Pratique Électronique" },
      en: { name: "La Pratique Électronique" },
    },
  },
  {
    key: "assadBatteries",
    type: "client",
    featured: false,
    sectors: ["industrie", "technologies", "automobile"],
    logo: "partenaires/ASSAD_batteries.png",
    isPublished: true,
    sortOrder: 24,
    content: {
      fr: { name: "ASSAD Batteries" },
      en: { name: "ASSAD Batteries" },
    },
  },
  {
    key: "cromes",
    type: "client",
    featured: false,
    sectors: ["industrie", "technologies"],
    logo: "partenaires/Cromes.png",
    isPublished: true,
    sortOrder: 25,
    content: {
      fr: { name: "Cromes" },
      en: { name: "Cromes" },
    },
  },

  // --- secondary clients: distribution / retail ---
  {
    key: "nouvellesPailles",
    type: "client",
    featured: false,
    sectors: ["distribution"],
    logo: "partenaires/Les_Nouvelles_Pailles.png",
    group: { brands: ["MOOM Tableware"] },
    isPublished: true,
    sortOrder: 26,
    content: {
      fr: { name: "Les Nouvelles Pailles" },
      en: { name: "Les Nouvelles Pailles" },
    },
  },
  {
    key: "sementis",
    type: "client",
    featured: false,
    sectors: ["distribution"],
    logo: "partenaires/Sementis.png",
    group: { brands: ["Ehop"] },
    isPublished: true,
    sortOrder: 27,
    content: {
      fr: { name: "Sementis" },
      en: { name: "Sementis" },
    },
  },

  // --- secondary clients: santé / sciences ---
  {
    key: "promedtech",
    type: "client",
    featured: false,
    sectors: ["sante"],
    logo: "partenaires/Promed.png",
    isPublished: true,
    sortOrder: 28,
    content: {
      fr: { name: "Promedtech" },
      en: { name: "Promedtech" },
    },
  },
  {
    key: "shieldScientific",
    type: "client",
    featured: false,
    logo: "partenaires/Shield_scientific.png",
    sectors: ["sante"],
    isPublished: true,
    sortOrder: 29,
    content: {
      fr: { name: "Shield Scientific" },
      en: { name: "Shield Scientific" },
    },
  },

  // --- secondary clients: services / technologies / business development ---
  {
    key: "vocalcom",
    type: "client",
    featured: false,
    logo: "partenaires/Vocalcom.png",
    sectors: ["services"],
    isPublished: true,
    sortOrder: 30,
    content: {
      fr: { name: "Vocalcom" },
      en: { name: "Vocalcom" },
    },
  },
  {
    key: "incenteev",
    type: "client",
    featured: false,
    sectors: ["services"],
    logo: "partenaires/Incenteev.webp",
    isPublished: true,
    sortOrder: 31,
    content: {
      fr: {
        name: "Incenteev",
        description:
          "Nous sommes convaincus que l'entreprise a un rôle clé à jouer dans le progrès collectif. Pour cela, nous collaborons avec des associations dont nous partageons les valeurs : notre communauté Open Source, Le Réseau Entreprendre, l'association Entourage/LinkedOut, Les Petits Frères des Pauvres. Nous encourageons et soutenons toutes les initiatives des collaborateurs qui veulent s'engager dans leur communauté.",
      },
      en: {
        name: "Incenteev",
        description:
          "We are convinced that business has a key role to play in collective progress. That is why we work with associations whose values we share: our Open Source community, Le Réseau Entreprendre, the Entourage/LinkedOut association, and Les Petits Frères des Pauvres. We encourage and support every initiative from employees who want to get involved in their community.",
      },
    },
  },
  {
    key: "hrMaps",
    type: "client",
    featured: false,
    sectors: ["services"],
    isPublished: true,
    logo: "partenaires/HRmaps.png",
    sortOrder: 32,
    content: {
      fr: { name: "HR Maps" },
      en: { name: "HR Maps" },
    },
  },
  {
    key: "ts",
    type: "client",
    featured: false,
    sectors: ["services"],
    logo: "partenaires/TS.webp",
    isPublished: true,
    sortOrder: 33,
    content: {
      fr: {
        name: "TS",
        description:
          "Pour nos clients, « Développer l'humain au cœur des échanges » signifie que nous positionnons le digital au service de la relation humaine. Par nos outils et services, nos clients se concentrent sur la relation humaine et font progresser leurs ventes, en cohérence avec leur stratégie d'entreprise.",
      },
      en: {
        name: "TS",
        description:
          "For our clients, “putting people at the heart of every exchange” means we position digital in the service of human relationships. Through our tools and services, our clients focus on the human relationship and grow their sales in line with their corporate strategy.",
      },
    },
  },
  {
    key: "emba",
    type: "client",
    featured: false,
    sectors: ["services"],
    logo: "partenaires/Emba.webp",
    isPublished: true,
    sortOrder: 34,
    content: {
      fr: {
        name: "EMBA Business School",
        description:
          "L'EMBA Business School est l'école supérieure de commerce et de management de la CCI métropolitaine Bretagne ouest (CCIMBO). Au cœur du pôle de formation universitaire et tertiaire de Creac'h Gwen à Quimper, son campus accueille des élèves et enseignants de France et du monde entier.",
      },
      en: {
        name: "EMBA Business School",
        description:
          "EMBA Business School is the business and management school of the CCI métropolitaine Bretagne ouest (CCIMBO). At the heart of the Creac'h Gwen university and tertiary training hub in Quimper, its campus welcomes students and teachers from France and around the world.",
      },
    },
  },
  {
    key: "EDF",
    type: "client",
    featured: false,
    sectors: ["technologies", "services"],
    logo: "partenaires/EDF.png",
    isPublished: true,
    sortOrder: 36,
    content: {
      fr: { name: "EDF" },
      en: { name: "EDF" },
    },
  },
  {
    key: "ach",
    type: "client",
    featured: false,
    sectors: ["services"],
    isPublished: true,
    sortOrder: 35,
    content: {
      fr: { name: "ACH" },
      en: { name: "ACH" },
    },
  },

  // --- ecosystem: named institutional networks ---
  {
    key: "apm",
    logo: "partenaires/apm.webp",
    logoBackground: "dark",
    type: "network",
    isPublished: true,
    sortOrder: 40,
    content: {
      fr: {
        name: "APM",
        description:
          "Réseau français de dirigeants d'entreprise  autour de clubs d'échange, de formation et de partage d'expérience entre pairs.",
        contribution:
          "Réseau français de dirigeants d'entreprise organisé autour de clubs d'échange, de formation et de partage d'expérience entre pairs.",
      },
      en: {
        name: "APM",
        description:
          "A French network of business leaders organised around peer clubs for exchange, training and shared experience.",
        contribution:
          "Privileged access to an ecosystem of SME and mid-cap leaders.",
      },
    },
  },
  {
    key: "giz",
    logo: "partenaires/GIZ.png",
    type: "network",
    isPublished: true,
    sortOrder: 41,
    content: {
      fr: {
        name: "GIZ",
        description:
          "Agence allemande de coopération internationale, très active en Afrique et dans les économies émergentes sur des programmes de développement économique et industriel.",
        contribution:
          "Collaboration directe avec la GIZ sur des projets et écosystèmes de développement économique.",
      },
      en: {
        name: "GIZ",
        description:
          "A German international cooperation agency, highly active in Africa and emerging economies on economic and industrial development programmes.",
        contribution:
          "Direct collaboration with GIZ on economic development projects and ecosystems.",
      },
    },
  },
  {
    key: "businessFrance",
    logo: "partenaires/Business_france.png",
    type: "network",
    isPublished: true,
    sortOrder: 42,
    content: {
      fr: {
        name: "Business France",
        description:
          "Agence publique française chargée notamment d'accompagner les entreprises françaises dans leur développement international.",
        contribution:
          "AS Biz Dev collabore avec Business France et est référencé dans ses dispositifs / réseaux.",
      },
      en: {
        name: "Business France",
        description:
          "A French public agency notably tasked with supporting French companies in their international development.",
        contribution:
          "AS Biz Dev works with Business France and is referenced within its programmes / networks.",
      },
    },
  },
  {
    key: "taa",
    logo: "partenaires/taa.png",
    type: "network",
    isPublished: true,
    sortOrder: 43,
    content: {
      fr: {
        name: "TAA — Tunisian Automotive Association",
        description:
          "Organisation professionnelle représentant l'écosystème et les entreprises de l'industrie automobile tunisienne.",
        contribution:
          "Collaboration avec des acteurs et réseaux de l'écosystème TAA.",
      },
      en: {
        name: "TAA — Tunisian Automotive Association",
        description:
          "A professional organisation representing the ecosystem and companies of the Tunisian automotive industry.",
        contribution:
          "Collaboration with players and networks within the TAA ecosystem.",
      },
    },
  },

  // --- ecosystem: legacy partner sub-tier (unchanged) ---
  {
    key: "admg",
    type: "partner",
    category: "industry",
    logo: "partenaires/ADMG.webp",
    isPublished: true,
    sortOrder: 50,
    content: {
      fr: {
        name: "ADMG technology",
        description:
          "ADMG technology, une start-up innovante née au sein du groupe AGF pour créer des systèmes de pointe dans l'automatisation de la métallurgie pour des tiers. Grâce à des collaborations avec diverses universités, des brevets et des technologies modernes, ADMG a réussi à créer son propre espace de marché avec des produits très innovants.",
      },
      en: {
        name: "ADMG technology",
        description:
          "ADMG technology is an innovative start-up born within the AGF group to create cutting-edge systems for metallurgy automation on behalf of third parties. Through collaborations with various universities, patents and modern technologies, ADMG has carved out its own market space with highly innovative products.",
      },
    },
  },
  {
    key: "sysmic",
    type: "partner",
    category: "consulting",
    logo: "partenaires/SySmic.webp",
    isPublished: true,
    sortOrder: 51,
    content: {
      fr: {
        name: "SYS'MIC",
        description:
          "Dans un monde globalisé, complexe et incertain, l'enjeu pour les organisations est de rebondir sur les « secousses » pour construire un avenir réussi. SYS'MIC s'appuie sur le mouvement et l'intelligence collective pour faire émerger la vision partagée qui précède l'action.",
      },
      en: {
        name: "SYS'MIC",
        description:
          "In a globalised, complex and uncertain world, the challenge for organisations is to rebound from the “tremors” in order to build a successful future. SYS'MIC draws on movement and collective intelligence to bring out the shared vision that precedes action.",
      },
    },
  },
];
