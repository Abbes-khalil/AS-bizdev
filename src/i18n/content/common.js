/**
 * Shared chrome copy — navigation and footer.
 *
 * Navigation entries carry a route *key*, never a URL: `pathFor(key, lang)`
 * resolves it, so the French and English trees stay in sync automatically.
 * The menu deliberately stays short (§18) — six entries, two of them with a
 * submenu — so the visitor is not asked to choose between fifteen services.
 */
const common = {
  fr: {
    nav: {
      skipLink: "Aller au contenu",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      mobileCta: "Parlons de votre marché",
      mobileCaption: "Afrique · Moyen-Orient",
      primaryAria: "Navigation principale",
      mobileAria: "Navigation mobile",
      homeAria: "AS Biz Dev — Accueil",
      language: "Choix de la langue",
      submenu: "Ouvrir le sous-menu {label}",
    },
    navigation: [
      { key: "home", label: "Accueil" },
      {
        key: "solutions",
        label: "Nos solutions",
        children: [
          { key: "acceleration", label: "Accélération commerciale" },
          { key: "pilotage", label: "Pilotage commercial externalisé" },
        ],
      },
      {
        key: "markets",
        label: "Marchés",
        children: [
          { key: "africa", label: "Afrique" },
          { key: "middleEast", label: "Moyen-Orient" },
        ],
      },
      { key: "about", label: "AS Biz Dev" },
      { key: "becomePartner", label: "Devenir partenaire" },
      { key: "contact", label: "Contact" },
    ],
    footerLinks: [
      {
        title: "Nos solutions",
        items: [
          { key: "acceleration", label: "Accélération commerciale" },
          { key: "pilotage", label: "Pilotage commercial externalisé" },
        ],
      },
      {
        title: "Marchés",
        items: [
          { key: "markets", label: "Tous les marchés" },
          { key: "africa", label: "Afrique" },
          { key: "middleEast", label: "Moyen-Orient" },
        ],
      },
      {
        title: "AS Biz Dev",
        items: [
          { key: "about", label: "Qui sommes-nous" },
          { key: "becomePartner", label: "Devenir partenaire" },
          { key: "partners", label: "Nos partenaires" },
          { key: "news", label: "Actualités" },
          { key: "contact", label: "Contact" },
        ],
      },
    ],
    footer: {
      tagline:
        "Une capacité commerciale opérationnelle pour développer et piloter vos marchés en Afrique et au Moyen-Orient.",
      ctaEyebrow: "Construisons la suite",
      ctaLine1: "Parlons de votre",
      ctaLine2: "marché",
      brandTagline: "Afrique & Moyen-Orient",
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
      mobileCta: "Let's talk about your market",
      mobileCaption: "Africa · Middle East",
      primaryAria: "Primary navigation",
      mobileAria: "Mobile navigation",
      homeAria: "AS Biz Dev — Home",
      language: "Language selection",
      submenu: "Open the {label} submenu",
    },
    navigation: [
      { key: "home", label: "Home" },
      {
        key: "solutions",
        label: "Solutions",
        children: [
          { key: "acceleration", label: "Commercial acceleration" },
          { key: "pilotage", label: "Outsourced export sales management" },
        ],
      },
      {
        key: "markets",
        label: "Markets",
        children: [
          { key: "africa", label: "Africa" },
          { key: "middleEast", label: "Middle East" },
        ],
      },
      { key: "about", label: "AS Biz Dev" },
      { key: "becomePartner", label: "Become a partner" },
      { key: "contact", label: "Contact" },
    ],
    footerLinks: [
      {
        title: "Solutions",
        items: [
          { key: "acceleration", label: "Commercial acceleration" },
          { key: "pilotage", label: "Outsourced export sales management" },
        ],
      },
      {
        title: "Markets",
        items: [
          { key: "markets", label: "All markets" },
          { key: "africa", label: "Africa" },
          { key: "middleEast", label: "Middle East" },
        ],
      },
      {
        title: "AS Biz Dev",
        items: [
          { key: "about", label: "Who we are" },
          { key: "becomePartner", label: "Become a partner" },
          { key: "partners", label: "Our partners" },
          { key: "news", label: "News" },
          { key: "contact", label: "Contact" },
        ],
      },
    ],
    footer: {
      tagline:
        "An operational sales capability to develop and run your markets across Africa and the Middle East.",
      ctaEyebrow: "Let's build what comes next",
      ctaLine1: "Let's talk about your",
      ctaLine2: "market",
      brandTagline: "Africa & Middle East",
      linkedinLabel: "LinkedIn — AS Biz Dev (new tab)",
      facebookLabel: "Facebook — AS Biz Dev (new tab)",
      policy: "Privacy policy",
      version: "v 3.0 — refreshed",
      copyright: "© {year} AS Biz Dev. All rights reserved.",
    },
  },
};

export default common;
