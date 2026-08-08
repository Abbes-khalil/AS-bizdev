const LOGOS = {
  ts: "partenaires/TS.webp",
  incenteev: "partenaires/Incenteev.webp",
  bbc: "partenaires/BBC.webp",
  admg: "partenaires/ADMG.webp",
  sysmic: "partenaires/SySmic.webp",
  emba: "partenaires/Emba.webp",
};

/**
 * Language-agnostic registry of every organisation shown on /nos-partenaires.
 * `type` reflects AS Biz Dev's relationship: "client" for a company AS Biz
 * Dev has actually worked with on a commercial development mission, "partner"
 * for an ecosystem collaborator (digital, industry, consulting, schools...).
 *
 * None of these six entries has a confirmed client relationship anywhere in
 * the existing content — they were all previously shown under one undivided
 * "partner" label. Rather than guess, they all stay `type: "partner"` here.
 * TODO(AS Biz Dev validation): reclassify individual entries to `"client"`
 * once AS Biz Dev confirms which of these were actual client engagements.
 *
 * Only `isPublished: true` entries render. `sortOrder` controls the order
 * within a section (ascending); `category` keys into each language's
 * `categories` map below and only matters for `type: "partner"` entries.
 */
export const ORGANIZATIONS = [
  {
    key: "ts",
    type: "partner",
    category: "digital",
    logo: LOGOS.ts,
    website: undefined,
    isPublished: true,
    sortOrder: 1,
  },
  {
    key: "incenteev",
    type: "partner",
    category: "digital",
    logo: LOGOS.incenteev,
    website: undefined,
    isPublished: true,
    sortOrder: 2,
  },
  {
    key: "bbc",
    type: "partner",
    category: "industry",
    logo: LOGOS.bbc,
    website: undefined,
    isPublished: true,
    sortOrder: 3,
  },
  {
    key: "admg",
    type: "partner",
    category: "industry",
    logo: LOGOS.admg,
    website: undefined,
    isPublished: true,
    sortOrder: 4,
  },
  {
    key: "sysmic",
    type: "partner",
    category: "consulting",
    logo: LOGOS.sysmic,
    website: undefined,
    isPublished: true,
    sortOrder: 5,
  },
  {
    key: "emba",
    type: "partner",
    category: "consulting",
    logo: LOGOS.emba,
    website: undefined,
    isPublished: true,
    sortOrder: 6,
  },
];

const partners = {
  fr: {
    hero: {
      eyebrow: "Références & partenaires",
      titleLead: "Des collaborations construites",
      titleAccent: "dans la durée.",
      intro:
        "AS Biz Dev accompagne des entreprises dans leurs projets de développement commercial et s'appuie également sur un écosystème de partenaires complémentaires.",
    },
    clientsSection: {
      title: "Références clients",
      intro:
        "Entreprises accompagnées par AS Biz Dev dans le cadre de missions de développement commercial, de développement export ou de pilotage commercial.",
      empty:
        "Références en cours de validation avec AS Biz Dev — à venir prochainement.",
    },
    partnersSection: {
      title: "Nos partenaires",
      intro:
        "Un écosystème de partenaires pouvant apporter des expertises complémentaires selon les projets et les marchés.",
    },
    categoryLabel: "Catégorie",
    labels: {
      client: "Référence client",
      partner: "Partenaire",
    },
    statusLabels: {
      current: "Collaboration en cours",
      past: "Mission passée",
    },
    websiteLabel: "Site internet",
    logoAlt: "Logo {name}",
    cta: {
      eyebrow: "Devenir partenaire",
      heading: "Vous souhaitez rejoindre notre réseau ?",
      label: "Nous écrire",
    },
    categories: {
      digital: { title: "Digital Transformation" },
      industry: { title: "Industrie / Développement Commercial" },
      consulting: { title: "Conseils / Coaching en développement des organisations" },
    },
    copy: {
      ts: {
        name: "TS",
        sector: undefined,
        description:
          "Pour nos clients, « Développer l'humain au cœur des échanges » signifie que nous positionnons le digital au service de la relation humaine. Nous participons à une réhumanisation des échanges en tirant profit des outils digitaux. Par nos outils et services, nos clients vont pouvoir se concentrer sur la relation humaine et faire ainsi progresser leurs ventes, en cohérence avec leur stratégie d'entreprise. Nous développons, fournissons et implémentons les outils et services qui permettent à nos clients de développer une force de vente plus efficace et une relation client plus performante.",
      },
      incenteev: {
        name: "Incenteev",
        sector: undefined,
        description:
          "Nous sommes convaincus que l'entreprise a un rôle clé à jouer dans le progrès collectif. Pour cela, nous collaborons avec des associations dont nous partageons les valeurs : notre communauté Open Source, Le Réseau Entreprendre, l'association Entourage/LinkedOut, Les Petits Frères des Pauvres. Nous encourageons et soutenons toutes les initiatives des collaborateurs qui veulent s'engager dans leur communauté. Pour cadrer cette action, nous désirons inscrire cette volonté d'impact dans nos statuts pour devenir une entreprise à mission.",
      },
      bbc: {
        name: "BBC Bircher",
        sector: undefined,
        description:
          "L'entreprise BBC Bircher réussit avec succès sur le marché international en tant que grand fournisseur et producteur mondial. En effet, ses deux branches d'activité spécialisées et expertes en technologie des capteurs ainsi qu'en contrôle des processus notamment pour portes et portails automatiques, lui permettent de placer au premier plan la sécurité des personnes, des véhicules et des installations avec une garantie assurée de qualité durable et accrue.",
      },
      admg: {
        name: "ADMG technology",
        sector: undefined,
        description:
          "ADMG technology, une start-up innovante née au sein du groupe AGF pour créer des systèmes de pointe dans l'automatisation de la métallurgie pour des tiers. Grâce à des collaborations avec diverses universités, des brevets et des technologies modernes, ADMG a réussi à créer son propre espace de marché avec des produits très innovants. L'étude et la conception sont la base de la vie de l'entreprise, où l'accent est constamment mis sur la relation avec le client, l'attention à la qualité des produits et l'utilisation des technologies les plus modernes.",
      },
      sysmic: {
        name: "SYS'MIC",
        sector: undefined,
        description:
          "Dans un monde globalisé, complexe et incertain, l'enjeu pour les organisations est de rebondir sur les « secousses » pour construire un avenir réussi. Agir, avec agilité et co-responsabilité : SYS'MIC s'appuie sur le mouvement et l'intelligence collective pour faire émerger la vision partagée qui précède l'action.",
      },
      emba: {
        name: "EMBA Business School",
        sector: undefined,
        description:
          "L'EMBA Business School est l'école supérieure de commerce et de management de la CCI métropolitaine Bretagne ouest (CCIMBO). Au cœur du pôle de formation universitaire et tertiaire de Creac'h Gwen à Quimper, près de Brest dans le Finistère, son campus accueille des élèves et enseignants de France et du monde entier. Depuis plusieurs années, l'école est engagée dans un processus Qualité ambitieux et exigeant, comme en témoigne la certification récente Qualiopi, obtenue en juillet 2020 pour nos actions de formation en apprentissage.",
      },
    },
  },

  en: {
    hero: {
      eyebrow: "References & partners",
      titleLead: "Collaborations built",
      titleAccent: "to last.",
      intro:
        "AS Biz Dev supports companies in their business development projects, and also draws on an ecosystem of complementary partners.",
    },
    clientsSection: {
      title: "Selected Clients",
      intro:
        "Companies supported by AS Biz Dev on business development, export development or outsourced sales management missions.",
      empty: "References pending validation with AS Biz Dev — coming soon.",
    },
    partnersSection: {
      title: "Our Partners",
      intro:
        "An ecosystem of partners able to bring complementary expertise depending on the project and the market.",
    },
    categoryLabel: "Category",
    labels: {
      client: "Client reference",
      partner: "Partner",
    },
    statusLabels: {
      current: "Ongoing collaboration",
      past: "Past engagement",
    },
    websiteLabel: "Website",
    logoAlt: "{name} logo",
    cta: {
      eyebrow: "Become a partner",
      heading: "Interested in joining our partner network?",
      label: "Write to us",
    },
    categories: {
      digital: { title: "Digital Transformation" },
      industry: { title: "Industry / Business Development" },
      consulting: { title: "Consulting / Organisational development coaching" },
    },
    copy: {
      ts: {
        name: "TS",
        sector: undefined,
        description:
          "For our clients, “putting people at the heart of every exchange” means we position digital in the service of human relationships. We help re-humanise interactions by making the most of digital tools. Through our tools and services, our clients can focus on the human relationship and grow their sales in line with their corporate strategy. We develop, supply and implement the tools and services that allow our clients to build a more effective sales force and a stronger customer relationship.",
      },
      incenteev: {
        name: "Incenteev",
        sector: undefined,
        description:
          "We are convinced that business has a key role to play in collective progress. That is why we work with associations whose values we share: our Open Source community, Le Réseau Entreprendre, the Entourage/LinkedOut association, and Les Petits Frères des Pauvres. We encourage and support every initiative from employees who want to get involved in their community. To frame this, we intend to write this commitment to impact into our articles of association and become a mission-led company.",
      },
      bbc: {
        name: "BBC Bircher",
        sector: undefined,
        description:
          "BBC Bircher succeeds on the international market as a major global supplier and producer. Its two business divisions, specialised and expert in sensor technology and process control — notably for automatic doors and gates — allow it to put the safety of people, vehicles and installations first, with a guarantee of lasting, ever-higher quality.",
      },
      admg: {
        name: "ADMG technology",
        sector: undefined,
        description:
          "ADMG technology is an innovative start-up born within the AGF group to create cutting-edge systems for metallurgy automation on behalf of third parties. Through collaborations with various universities, patents and modern technologies, ADMG has carved out its own market space with highly innovative products. Research and design are the foundation of the company's life, with a constant focus on the customer relationship, attention to product quality and the use of the most modern technologies.",
      },
      sysmic: {
        name: "SYS'MIC",
        sector: undefined,
        description:
          "In a globalised, complex and uncertain world, the challenge for organisations is to rebound from the “tremors” in order to build a successful future. Acting with agility and shared responsibility: SYS'MIC draws on movement and collective intelligence to bring out the shared vision that precedes action.",
      },
      emba: {
        name: "EMBA Business School",
        sector: undefined,
        description:
          "EMBA Business School is the business and management school of the CCI métropolitaine Bretagne ouest (CCIMBO). At the heart of the Creac'h Gwen university and tertiary training hub in Quimper, near Brest in Finistère, its campus welcomes students and teachers from France and around the world. For several years the school has been engaged in an ambitious and demanding quality process, as shown by its recent Qualiopi certification, obtained in July 2020 for its apprenticeship training programmes.",
      },
    },
  },
};

export default partners;
