/**
 * One title and one description per page and per language.
 *
 * The brief (§20) rules out generic head terms: each entry targets a precise
 * intent ("direction commerciale export externalisée", "outsourced export
 * sales management", "recherche distributeur") rather than "conseil
 * commercial". Titles stay under ~60 characters before the brand suffix so
 * they are not truncated in results pages.
 */
const BRAND = "AS Biz Dev";

const withBrand = (title) => `${title} | ${BRAND}`;

export const SEO_META = {
  home: {
    fr: {
      title: withBrand("Développement commercial Afrique & Moyen-Orient"),
      description:
        "AS Biz Dev accompagne les PME dans l'ouverture, le développement et le pilotage de leurs marchés export en Afrique et au Moyen-Orient : clients, distributeurs, pipeline, prévisions de ventes.",
    },
    en: {
      title: withBrand("Business Development Africa & Middle East"),
      description:
        "AS Biz Dev helps SMEs open, grow and run their export markets across Africa and the Middle East: customers, distributors, pipeline and sales forecasting.",
    },
  },

  solutions: {
    fr: {
      title: withBrand("Accélération commerciale et pilotage export"),
      description:
        "Deux façons de travailler avec AS Biz Dev : accélérer un marché export, ou externaliser le pilotage commercial d'une zone — distributeurs, pipeline, forecast et reporting.",
    },
    en: {
      title: withBrand("Commercial acceleration & outsourced export sales"),
      description:
        "Two ways to work with AS Biz Dev: accelerate an export market, or outsource the sales management of a region — distributors, pipeline, forecast and reporting.",
    },
  },

  acceleration: {
    fr: {
      title: withBrand("Accélération commerciale export"),
      description:
        "Ouvrir un marché, identifier des clients, rechercher des distributeurs et transformer un potentiel en activité commerciale réelle en Afrique et au Moyen-Orient.",
    },
    en: {
      title: withBrand("Commercial acceleration — export markets"),
      description:
        "Open a market, identify customers, find distributors and turn identified potential into real commercial activity across Africa and the Middle East.",
    },
  },

  pilotage: {
    fr: {
      title: withBrand("Direction commerciale export externalisée"),
      description:
        "AS Biz Dev prend en charge tout ou partie du pilotage commercial de votre zone export : animation du réseau de distributeurs, pipeline, prévisions de ventes et reporting.",
    },
    en: {
      title: withBrand("Outsourced export sales management"),
      description:
        "AS Biz Dev runs all or part of your export sales activity in a defined region: distributor management, pipeline, sales forecasting and reporting.",
    },
  },

  markets: {
    fr: {
      title: withBrand("Marchés Afrique & Moyen-Orient"),
      description:
        "Les marchés sur lesquels AS Biz Dev dispose d'une capacité d'intervention en Afrique et au Moyen-Orient, pays par pays : secteurs, canaux de distribution et modes d'intervention.",
    },
    en: {
      title: withBrand("Africa & Middle East Markets"),
      description:
        "The markets where AS Biz Dev can operate across Africa and the Middle East, country by country: priority sectors, distribution channels and how we intervene.",
    },
  },

  africa: {
    fr: {
      title: withBrand("Développement commercial Afrique"),
      description:
        "Une connaissance concrète et un réseau professionnel structuré sur des marchés ciblés en Afrique du Nord, de l'Ouest et australe — pays par pays, sans couverture uniforme revendiquée.",
    },
    en: {
      title: withBrand("Business Development in Africa"),
      description:
        "Concrete knowledge and a structured professional network across targeted markets in North, West and Southern Africa — country by country, with no uniform coverage claimed.",
    },
  },

  middleEast: {
    fr: {
      title: withBrand("Développement commercial Moyen-Orient"),
      description:
        "Une zone stratégique de développement pour AS Biz Dev : Émirats arabes unis, Arabie saoudite, Qatar, Koweït, Bahreïn et Jordanie, avec un réseau qui se renforce progressivement.",
    },
    en: {
      title: withBrand("Business Development in the Middle East"),
      description:
        "A strategic development area for AS Biz Dev: United Arab Emirates, Saudi Arabia, Qatar, Kuwait, Bahrain and Jordan, with a network that is being strengthened progressively.",
    },
  },

  about: {
    fr: {
      title: withBrand("Accélérer. Développer. Piloter."),
      description:
        "Qui est AS Biz Dev : une capacité commerciale opérationnelle pour développer et piloter vos marchés en Afrique et au Moyen-Orient.",
    },
    en: {
      title: withBrand("Accelerate. Develop. Manage."),
      description:
        "Who AS Biz Dev is: an operational sales capability to develop and run your markets across Africa and the Middle East.",
    },
  },

  sectors: {
    fr: {
      title: withBrand("Secteurs & domaines de connaissance"),
      description:
        "Découvrez les secteurs dans lesquels AS Biz Dev mobilise sa connaissance des entreprises, réseaux de distribution et décideurs pour accompagner le développement commercial en Afrique et au Moyen-Orient.",
    },
    en: {
      title: withBrand("Sectors & Industry Knowledge"),
      description:
        "Discover the sectors where AS Biz Dev mobilises its knowledge of companies, distribution networks and decision-makers to support business development across Africa and the Middle East.",
    },
  },

  network: {
    fr: {
      title: withBrand("Notre réseau — Base de contacts et accès décideurs"),
      description:
        "La base propriétaire de contacts professionnels d'AS Biz Dev, l'accès aux bons niveaux de décision, et son écosystème de réseaux (APM, GIZ, Business France).",
    },
    en: {
      title: withBrand("Our network — Contact base and decision-maker access"),
      description:
        "AS Biz Dev's proprietary base of professional contacts, access to the right decision levels, and its network ecosystem (APM, GIZ, Business France).",
    },
  },

  becomePartner: {
    fr: {
      title: withBrand("Devenir partenaire commercial Afrique & Moyen-Orient"),
      description:
        "AS Biz Dev référence des business developers, agents commerciaux, distributeurs et experts sectoriels disposant d'un réseau réel sur ses marchés prioritaires.",
    },
    en: {
      title: withBrand("Become a commercial partner — Africa & Middle East"),
      description:
        "AS Biz Dev registers business developers, sales agents, distributors and sector experts with a real network in its priority markets.",
    },
  },

  contact: {
    fr: {
      title: withBrand("Parlons de votre marché"),
      description:
        "Décrivez votre marché cible et votre situation commerciale. Nous revenons vers vous pour organiser un premier échange.",
    },
    en: {
      title: withBrand("Let's talk about your market"),
      description:
        "Tell us about your target market and your current commercial situation. We will come back to you to set up a first conversation.",
    },
  },

  news: {
    fr: {
      title: withBrand("Articles & Insights — Actualités & Publications"),
      description:
        "Articles et publications LinkedIn d'AS Biz Dev sur le développement commercial et les marchés export en Afrique et au Moyen-Orient.",
    },
    en: {
      title: withBrand("Articles & Insights"),
      description:
        "AS Biz Dev's LinkedIn articles and posts on business development and export markets across Africa and the Middle East.",
    },
  },

  partners: {
    fr: {
      title: withBrand("Références & écosystème"),
      description:
        "Entreprises accompagnées par AS Biz Dev et réseaux professionnels & institutionnels (APM, GIZ, Business France, TAA) qui complètent son écosystème.",
    },
    en: {
      title: withBrand("References & Ecosystem"),
      description:
        "Companies supported by AS Biz Dev and the professional & institutional networks (APM, GIZ, Business France, TAA) that complement its ecosystem.",
    },
  },

  policy: {
    fr: {
      title: withBrand("Politique de confidentialité"),
      description:
        "Traitement des données personnelles collectées sur asbizdev.com.",
    },
    en: {
      title: withBrand("Privacy policy"),
      description: "How personal data collected on asbizdev.com is processed.",
    },
  },

  notFound: {
    fr: {
      title: withBrand("Page introuvable"),
      description: "Cette page n'existe pas ou a été déplacée.",
    },
    en: {
      title: withBrand("Page not found"),
      description: "This page does not exist or has been moved.",
    },
  },
};

/** Article pages (§24) are generated from data, so their metadata is too. */
export const articleMeta = (article, lang) => {
  const copy = article[lang] ?? article.fr;

  return {
    title: withBrand(copy.title),
    description: copy.preview,
  };
};
