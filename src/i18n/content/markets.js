/**
 * Markets hub, zone pages and the country-page template (§6, §10).
 *
 * No country is named here: the list lives in `src/data/countries.js` and is
 * empty until AS Biz Dev validates it. Until then the pages show explicit
 * "[PAYS À VALIDER]" slots — the brief forbids filling them with plausible
 * guesses (§16, §22.1).
 */
const markets = {
  fr: {
    hub: {
      hero: {
        eyebrow: "Marchés",
        titleLead: "Les marchés sur lesquels nous",
        titleAccent: "intervenons réellement.",
        intro:
          "Nous ne présentons pas AS Biz Dev comme un réseau international présent partout. Cette page nomme les marchés d'Afrique et du Moyen-Orient sur lesquels nous disposons d'une capacité d'intervention, ou sur lesquels nous construisons cette capacité.",
      },
      zones: [
        {
          routeKey: "africa",
          title: "Afrique",
          body: "Marchés couverts et marchés prioritaires en Afrique.",
        },
        {
          routeKey: "middleEast",
          title: "Moyen-Orient",
          body: "Marchés couverts et marchés prioritaires au Moyen-Orient.",
        },
      ],
      more: "Voir la zone",
      cta: {
        eyebrow: "Aller plus loin",
        heading: "Votre marché ne figure pas encore ici ?",
        label: "Parlons de votre marché",
      },
    },

    zones: {
      africa: {
        eyebrow: "Afrique",
        titleLead: "Marchés couverts et",
        titleAccent: "marchés prioritaires.",
        intro:
          "Chaque pays dispose d'une page présentant ses secteurs prioritaires, la typologie de clients, les canaux de distribution, les enjeux du marché et notre mode d'intervention.",
      },
      middleEast: {
        eyebrow: "Moyen-Orient",
        titleLead: "Marchés couverts et",
        titleAccent: "marchés prioritaires.",
        intro:
          "Chaque pays dispose d'une page présentant ses secteurs prioritaires, la typologie de clients, les canaux de distribution, les enjeux du marché et notre mode d'intervention.",
      },
    },

    empty: {
      title: "[PAYS À VALIDER]",
      body: "La liste des pays prioritaires est en cours de validation par AS Biz Dev. Cette page se remplira marché par marché, sans en annoncer aucun tant qu'il n'est pas confirmé.",
      cta: "Parler d'un marché",
    },

    country: {
      backToZone: "Retour à la zone",
      cta: {
        eyebrow: "Aller plus loin",
        heading: "Parler de ce marché",
        label: "Nous contacter",
      },
      sections: {
        sectors: "Secteurs prioritaires",
        clients: "Typologie de clients",
        channels: "Canaux de distribution",
        stakes: "Enjeux du marché",
        intervention: "Intervention possible d'AS Biz Dev",
        partners: "Partenaires recherchés",
      },
      toValidate: "[INFORMATION À VALIDER PAR AS BIZ DEV]",
    },
  },

  en: {
    hub: {
      hero: {
        eyebrow: "Markets",
        titleLead: "The markets where we",
        titleAccent: "actually operate.",
        intro:
          "We do not present AS Biz Dev as an international network present everywhere. This page names the markets across Africa and the Middle East where we can operate, or where we are building that capability.",
      },
      zones: [
        {
          routeKey: "africa",
          title: "Africa",
          body: "Markets covered and priority markets across Africa.",
        },
        {
          routeKey: "middleEast",
          title: "Middle East",
          body: "Markets covered and priority markets across the Middle East.",
        },
      ],
      more: "See the region",
      cta: {
        eyebrow: "Go further",
        heading: "Your market is not listed yet?",
        label: "Let's talk about your market",
      },
    },

    zones: {
      africa: {
        eyebrow: "Africa",
        titleLead: "Markets covered and",
        titleAccent: "priority markets.",
        intro:
          "Each country has its own page covering priority sectors, customer types, distribution channels, market challenges and how we can intervene.",
      },
      middleEast: {
        eyebrow: "Middle East",
        titleLead: "Markets covered and",
        titleAccent: "priority markets.",
        intro:
          "Each country has its own page covering priority sectors, customer types, distribution channels, market challenges and how we can intervene.",
      },
    },

    empty: {
      title: "[COUNTRY TO BE CONFIRMED]",
      body: "The list of priority countries is being validated by AS Biz Dev. This page will fill in market by market, and will announce none of them before they are confirmed.",
      cta: "Talk about a market",
    },

    country: {
      backToZone: "Back to the region",
      cta: {
        eyebrow: "Go further",
        heading: "Talk about this market",
        label: "Contact us",
      },
      sections: {
        sectors: "Priority sectors",
        clients: "Customer types",
        channels: "Distribution channels",
        stakes: "Market challenges",
        intervention: "How AS Biz Dev can intervene",
        partners: "Partners we are looking for",
      },
      toValidate: "[INFORMATION TO BE CONFIRMED BY AS BIZ DEV]",
    },
  },
};

export default markets;
