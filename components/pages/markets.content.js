/**
 * /marches — single page: interactive map + on-page market modal (§1–§23 of
 * the brief). No separate zone or country routes; everything named here
 * renders directly on this one page, in both languages.
 */
const markets = {
  fr: {
    hero: {
      eyebrow: "Marchés",
      titleLead: "Les marchés sur lesquels nous",
      titleAccent: "intervenons réellement.",
      intro:
        "Nous ne présentons pas AS Biz Dev comme un réseau international présent partout. Cette carte nomme les marchés d'Afrique et du Moyen-Orient sur lesquels nous disposons d'une capacité d'intervention, ou sur lesquels nous construisons cette capacité.",
    },

    closing: {
      quote: "Nous ne partons pas d'une feuille blanche lorsque nous abordons un marché.",
      body: "AS Biz Dev capitalise progressivement une connaissance des entreprises, des décideurs, des secteurs et des réseaux locaux afin d'accélérer le développement commercial de ses clients.",
    },

    mapLabel: "Carte des marchés AS Biz Dev en Afrique et au Moyen-Orient",

    filters: {
      ariaLabel: "Filtrer les marchés par région",
      all: "Tous",
      north: "Afrique du Nord",
      west: "Afrique de l'Ouest",
      south: "Afrique australe",
      middleEast: "Moyen-Orient",
    },

    zonesCta: "Découvrir la zone",

    selectInstruction:
      "Sélectionnez un marché pour découvrir les informations disponibles et les modalités d'intervention d'AS Biz Dev.",
    exploreMarket: "Explorer ce marché",
    openMarketLabel: "Ouvrir les informations sur {name}",

    zoneLinks: {
      eyebrow: "Passer à l'action",
      titleLead: "Du marché à",
      titleAccent: "l'action commerciale.",
      intro: "Deux portes d'entrée :",
      items: [
        {
          routeKey: "acceleration",
          title: "Accélération commerciale",
          body: "Identifier, prospecter, ouvrir et développer un marché.",
        },
        {
          routeKey: "pilotage",
          title: "Pilotage commercial export externalisé",
          body: "Animer, développer, piloter, prévoir et reporter l'activité commerciale sur une zone.",
        },
      ],
    },

    networkLink: "Découvrir notre réseau",

    sectorsBridge: {
      eyebrow: "Des marchés aux secteurs",
      titleLead: "Des marchés aux",
      titleAccent: "écosystèmes sectoriels.",
      intro:
        "Notre connaissance des marchés se combine avec une connaissance des acteurs économiques, des circuits de distribution et des niveaux de décision dans plusieurs environnements B2B.",
    },

    capabilities: {
      eyebrow: "Ce que cela permet",
      titleLead: "Ce que cette connaissance des marchés",
      titleAccent: "permet concrètement.",
      intro:
        "Nous ne partons pas d'une feuille blanche lorsque nous abordons un marché. AS Biz Dev peut notamment :",
      items: [
        "Identifier les entreprises pertinentes sur un marché",
        "Identifier des prospects et donneurs d'ordres",
        "Rechercher des distributeurs, agents ou intégrateurs",
        "Identifier les bons niveaux de décision",
        "Rechercher des partenaires commerciaux locaux",
        "Comprendre les circuits de distribution",
        "Qualifier les opportunités",
        "Accélérer les prises de contact",
        "Construire ou renforcer un réseau commercial local",
        "Accompagner les premières démarches commerciales, puis éventuellement prendre en charge le pilotage commercial de la zone",
      ],
    },

    capabilityGroups: [
      {
        title: "Identifier",
        body: "Entreprises, prospects, donneurs d'ordres et décideurs.",
      },
      {
        title: "Rechercher",
        body: "Distributeurs, agents, intégrateurs et partenaires commerciaux.",
      },
      {
        title: "Développer",
        body: "Prises de contact, opportunités et réseau commercial local.",
      },
      {
        title: "Piloter",
        body: "Suivi commercial et, lorsque nécessaire, pilotage de la zone.",
      },
    ],

    cta: {
      eyebrow: "Aller plus loin",
      heading: "Votre marché ne figure pas encore ici ?",
      label: "Parlons de votre marché",
    },

    zoneCta: {
      eyebrow: "Prochaine étape",
      heading: "Vous souhaitez développer votre activité sur l'un de ces marchés ?",
      label: "Parlons de votre marché",
    },

    sectorsLink: "Découvrir nos secteurs",

    modal: {
      close: "Fermer",
      cta: "Parler de ce marché",
      empty: "Information à venir",
      sections: {
        sectors: "Secteurs prioritaires",
        clients: "Typologie de clients",
        channels: "Canaux de distribution",
        stakes: "Enjeux du marché",
        intervention: "Intervention possible d'AS Biz Dev",
        partners: "Partenaires recherchés",
      },
    },

    zones: {
      africa: {
        eyebrow: "Afrique",
        titleLead: "Nos marchés en",
        titleAccent: "Afrique.",
        intro:
          "AS Biz Dev développe une connaissance structurée de plusieurs marchés africains, avec une forte densité de contacts sur certains pays et un réseau progressivement renforcé sur d'autres.",
        mapLabel: "Carte des marchés AS Biz Dev en Afrique",
      },
      middleEast: {
        eyebrow: "Moyen-Orient",
        titleLead: "Nos marchés au",
        titleAccent: "Moyen-Orient.",
        intro:
          "Le Moyen-Orient constitue une zone stratégique de développement pour AS Biz Dev. Notre réseau s'y développe notamment sur les Émirats arabes unis, l'Arabie saoudite, le Qatar, le Koweït, le Bahreïn et la Jordanie.",
        mapLabel: "Carte des marchés AS Biz Dev au Moyen-Orient",
        developing: {
          eyebrow: "Une zone stratégique",
          titleLead: "Une zone stratégique",
          titleAccent: "en développement.",
          body: "Notre connaissance et nos réseaux se renforcent progressivement sur ces marchés, pays par pays, au fil des missions et des relations développées localement.",
          coverageNote:
            "Notre niveau de connaissance et de réseau varie selon les marchés et se renforce progressivement dans la région.",
        },
      },
    },
  },

  en: {
    hero: {
      eyebrow: "Markets",
      titleLead: "The markets where we",
      titleAccent: "actually operate.",
      intro:
        "We do not present AS Biz Dev as an international network present everywhere. This map names the markets across Africa and the Middle East where we can operate, or where we are building that capability.",
    },

    closing: {
      quote: "We do not start from a blank page when we approach a market.",
      body: "AS Biz Dev progressively builds up a knowledge of companies, decision-makers, sectors and local networks in order to accelerate its clients' business development.",
    },

    mapLabel: "Map of AS Biz Dev's markets across Africa and the Middle East",

    filters: {
      ariaLabel: "Filter markets by region",
      all: "All",
      north: "North Africa",
      west: "West Africa",
      south: "Southern Africa",
      middleEast: "Middle East",
    },

    zonesCta: "Explore the zone",

    selectInstruction:
      "Select a market to see the information available and how AS Biz Dev can get involved.",
    exploreMarket: "Explore this market",
    openMarketLabel: "View information about {name}",

    zoneLinks: {
      eyebrow: "Take action",
      titleLead: "From market to",
      titleAccent: "commercial action.",
      intro: "Two ways in:",
      items: [
        {
          routeKey: "acceleration",
          title: "Commercial acceleration",
          body: "Identify, prospect, open up and develop a market.",
        },
        {
          routeKey: "pilotage",
          title: "Outsourced export sales management",
          body: "Run, develop, steer, forecast and report on commercial activity across a zone.",
        },
      ],
    },

    networkLink: "Discover our network",

    sectorsBridge: {
      eyebrow: "From markets to sectors",
      titleLead: "From markets to",
      titleAccent: "sector ecosystems.",
      intro:
        "Our market knowledge combines with an understanding of economic players, distribution channels and decision-making levels across several B2B environments.",
    },

    capabilities: {
      eyebrow: "What this enables",
      titleLead: "What this market knowledge",
      titleAccent: "enables in practice.",
      intro:
        "We do not start from a blank page when we approach a market. AS Biz Dev can notably:",
      items: [
        "Identify the relevant companies in a market",
        "Identify prospects and buyers",
        "Find distributors, agents or integrators",
        "Identify the right decision-making levels",
        "Find local commercial partners",
        "Understand distribution channels",
        "Qualify opportunities",
        "Speed up first contacts",
        "Build or strengthen a local sales network",
        "Support the first commercial steps, and possibly take over the sales management of the region",
      ],
    },

    capabilityGroups: [
      {
        title: "Identify",
        body: "Companies, prospects, buyers and decision-makers.",
      },
      {
        title: "Find",
        body: "Distributors, agents, integrators and commercial partners.",
      },
      {
        title: "Develop",
        body: "First contacts, opportunities and a local sales network.",
      },
      {
        title: "Steer",
        body: "Sales follow-up and, where needed, managing the zone.",
      },
    ],

    cta: {
      eyebrow: "Go further",
      heading: "Your market is not listed yet?",
      label: "Let's talk about your market",
    },

    zoneCta: {
      eyebrow: "Next step",
      heading: "Want to grow your business in one of these markets?",
      label: "Let's talk about your market",
    },

    sectorsLink: "Discover our sectors",

    modal: {
      close: "Close",
      cta: "Discuss this market",
      empty: "Information coming soon",
      sections: {
        sectors: "Priority sectors",
        clients: "Customer types",
        channels: "Distribution channels",
        stakes: "Market challenges",
        intervention: "How AS Biz Dev can intervene",
        partners: "Partners we are looking for",
      },
    },

    zones: {
      africa: {
        eyebrow: "Africa",
        titleLead: "Our markets in",
        titleAccent: "Africa.",
        intro:
          "AS Biz Dev builds a structured knowledge of several African markets, with a strong density of contacts in some countries and a network that is progressively strengthened in others.",
        mapLabel: "Map of AS Biz Dev's markets across Africa",
      },
      middleEast: {
        eyebrow: "Middle East",
        titleLead: "Our markets in the",
        titleAccent: "Middle East.",
        intro:
          "The Middle East is a strategic development area for AS Biz Dev. Our network is growing there, notably across the United Arab Emirates, Saudi Arabia, Qatar, Kuwait, Bahrain and Jordan.",
        mapLabel: "Map of AS Biz Dev's markets across the Middle East",
        developing: {
          eyebrow: "A strategic zone",
          titleLead: "A strategic zone",
          titleAccent: "in development.",
          body: "Our knowledge and networks are being strengthened progressively across these markets, country by country, as missions and local relationships develop.",
          coverageNote:
            "Our level of market knowledge and network varies between markets and is strengthened progressively across the region.",
        },
      },
    },
  },
};

export default markets;
