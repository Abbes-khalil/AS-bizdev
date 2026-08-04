import { ROUTES } from "../../components/siteData.js";

/**
 * Shared chrome copy — navigation, footer.
 * Hrefs come from ROUTES (single source of truth); only labels are localised.
 */
const common = {
  fr: {
    nav: {
      skipLink: "Aller au contenu",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      mobileCta: "Contactez-nous",
      mobileCaption: "France · Afrique · Moyen-Orient",
      primaryAria: "Navigation principale",
      mobileAria: "Navigation mobile",
      homeAria: "AS Biz Dev — Accueil",
      language: "Choix de la langue",
    },
    navigation: [
      ["Accueil", ROUTES.home],
      ["Who is Who", ROUTES.whoIsWho],
      ["Nos valeurs", ROUTES.values],
      ["Notre savoir-faire", ROUTES.expertise],
      ["Nos solutions", ROUTES.solutions],
      ["Nos partenaires", ROUTES.partners],
      ["News", ROUTES.news],
      ["Contact", ROUTES.contact],
    ],
    footerLinks: [
      {
        title: "Compagnie",
        items: [
          ["Who is Who", ROUTES.whoIsWho],
          ["Nos valeurs", ROUTES.values],
          ["Nos partenaires", ROUTES.partners],
          ["News", ROUTES.news],
        ],
      },
      {
        title: "Expertise",
        items: [
          ["Notre savoir-faire", ROUTES.expertise],
          ["Nos solutions", ROUTES.solutions],
          ["Contact", ROUTES.contact],
        ],
      },
    ],
    footer: {
      tagline:
        "Votre relais opérationnel pour développer vos marchés en Afrique et au Moyen-Orient.",
      ctaEyebrow: "Construisons la suite",
      ctaLine1: "Parlons de votre",
      ctaLine2: "territoire",
      brandTagline: "International",
      linkedinLabel: "LinkedIn — AS Biz Dev (nouvel onglet)",
      facebookLabel: "Facebook — AS Biz Dev (nouvel onglet)",
      policy: "Politique de confidentialité",
      version: "v 3.0 — refreshed",
      copyright: "© {year} AS Biz Dev. Tous droits réservés.",
    },
  },

  en: {
    nav: {
      skipLink: "Skip to content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mobileCta: "Get in touch",
      mobileCaption: "France · Africa · Middle East",
      primaryAria: "Primary navigation",
      mobileAria: "Mobile navigation",
      homeAria: "AS Biz Dev — Home",
      language: "Language selection",
    },
    navigation: [
      ["Home", ROUTES.home],
      ["Who is Who", ROUTES.whoIsWho],
      ["Our values", ROUTES.values],
      ["Our expertise", ROUTES.expertise],
      ["Our solutions", ROUTES.solutions],
      ["Our partners", ROUTES.partners],
      ["News", ROUTES.news],
      ["Contact", ROUTES.contact],
    ],
    footerLinks: [
      {
        title: "Company",
        items: [
          ["Who is Who", ROUTES.whoIsWho],
          ["Our values", ROUTES.values],
          ["Our partners", ROUTES.partners],
          ["News", ROUTES.news],
        ],
      },
      {
        title: "Expertise",
        items: [
          ["Our expertise", ROUTES.expertise],
          ["Our solutions", ROUTES.solutions],
          ["Contact", ROUTES.contact],
        ],
      },
    ],
    footer: {
      tagline:
        "Your operational relay to grow your markets across Africa and the Middle East.",
      ctaEyebrow: "Let's build what comes next",
      ctaLine1: "Let's talk about your",
      ctaLine2: "territory",
      brandTagline: "International",
      linkedinLabel: "LinkedIn — AS Biz Dev (new tab)",
      facebookLabel: "Facebook — AS Biz Dev (new tab)",
      policy: "Privacy policy",
      version: "v 3.0 — refreshed",
      copyright: "© {year} AS Biz Dev. All rights reserved.",
    },
  },
};

export default common;
