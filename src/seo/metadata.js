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
      title: withBrand("Marchés couverts en Afrique et au Moyen-Orient"),
      description:
        "Les marchés sur lesquels AS Biz Dev dispose d'une capacité d'intervention en Afrique et au Moyen-Orient, pays par pays : secteurs, canaux de distribution et modes d'intervention.",
    },
    en: {
      title: withBrand("Markets covered in Africa & the Middle East"),
      description:
        "The markets where AS Biz Dev can operate across Africa and the Middle East, country by country: priority sectors, distribution channels and how we intervene.",
    },
  },

  africa: {
    fr: {
      title: withBrand("Développement commercial en Afrique"),
      description:
        "Développement commercial, recherche de distributeurs et pilotage export sur les marchés africains prioritaires d'AS Biz Dev.",
    },
    en: {
      title: withBrand("Business development in Africa"),
      description:
        "Business development, distributor search and export sales management across AS Biz Dev's priority African markets.",
    },
  },

  middleEast: {
    fr: {
      title: withBrand("Développement commercial au Moyen-Orient"),
      description:
        "Développement commercial, recherche de distributeurs et animation de réseau sur les marchés prioritaires d'AS Biz Dev au Moyen-Orient.",
    },
    en: {
      title: withBrand("Business development in the Middle East"),
      description:
        "Business development, distributor search and distributor management across AS Biz Dev's priority Middle Eastern markets.",
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
      title: withBrand("Nos partenaires"),
      description:
        "Les partenaires avec lesquels AS Biz Dev travaille sur ses marchés.",
    },
    en: {
      title: withBrand("Our partners"),
      description: "The partners AS Biz Dev works with across its markets.",
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

/**
 * Country pages are generated from data, so their metadata is too.
 * `inName` carries the prepositional form ("au Sénégal", "en Côte d'Ivoire",
 * "in Senegal") because French prepositions vary with the country.
 */
export const countryMeta = (country, lang) => {
  const name = country.name[lang] ?? country.name.fr;
  const inName = country.inName?.[lang] ?? name;

  return lang === "en"
    ? {
        title: withBrand(`Business development in ${name}`),
        description: `Business development, distributor search and export sales management ${inName} with AS Biz Dev.`,
      }
    : {
        title: withBrand(`Développement commercial ${name}`),
        description: `Développement commercial, recherche de distributeurs et pilotage commercial export ${inName} avec AS Biz Dev.`,
      };
};

/** Article pages (§24) are generated from data, so their metadata is too. */
export const articleMeta = (article, lang) => {
  const copy = article[lang] ?? article.fr;

  return {
    title: withBrand(copy.title),
    description: copy.preview,
  };
};
