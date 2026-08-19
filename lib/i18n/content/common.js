/**
 * Shared chrome copy — navigation and footer.
 *
 * Navigation entries carry a route *key*, never a URL: `ROUTES[key][lang]`
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
      headerCta: "Parlons de votre marché",
      mobileCaption: "Afrique · Moyen-Orient",
      primaryAria: "Navigation principale",
      mobileAria: "Navigation mobile",
      homeAria: "AS Biz Dev — Accueil",
      language: "Choix de la langue",
      submenu: "Ouvrir le sous-menu {label}",
    },
    navigation: [
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
          { key: "markets", label: "Nos Marchés" },
          { key: "africa", label: "Afrique" },
          { key: "middleEast", label: "Moyen-Orient" },
        ],
      },
      {
        key: "about",
        label: "AS Biz Dev",
        children: [
          { key: "about", label: "À propos" },
          { key: "network", label: "Notre réseau" },
          { key: "sectors", label: "Nos Secteurs" },
        ],
      },
      { key: "partners", label: "Références & Écosystème" },
      { key: "becomePartner", label: "Devenir partenaire" },
    ],
    footerLinks: [
      {
        title: "Nos solutions",
        items: [
          { key: "acceleration", label: "Accélération commerciale" },
          { key: "pilotage", label: "Pilotage commercial externalisé" },
          { key: "markets", label: "Tous les marchés" },
        ],
      },
      {
        title: "AS Biz Dev",
        items: [
          { key: "about", label: "Qui sommes-nous" },
          { key: "sectors", label: "Nos secteurs" },
          { key: "network", label: "Notre réseau" },
          { key: "becomePartner", label: "Devenir partenaire" },
        ],
      },
      {
        title: "Ressources",
        items: [
          { key: "partners", label: "Références & écosystème" },
          { key: "news", label: "Actualités & Publications" },
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
      legalNotice: "Mentions légales",
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
      headerCta: "Discuss your market",
      mobileCaption: "Africa · Middle East",
      primaryAria: "Primary navigation",
      mobileAria: "Mobile navigation",
      homeAria: "AS Biz Dev — Home",
      language: "Language selection",
      submenu: "Open the {label} submenu",
    },
    navigation: [
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
          { key: "markets", label: "All markets" },
          { key: "africa", label: "Africa" },
          { key: "middleEast", label: "Middle East" },
        ],
      },
      {
        key: "about",
        label: "AS Biz Dev",
        children: [
          { key: "about", label: "Who we are" },
          { key: "network", label: "Our network" },
          { key: "sectors", label: "Our sectors" },
        ],
      },
      { key: "partners", label: "References & Ecosystem" },
      { key: "becomePartner", label: "Become a partner" },
    ],
    footerLinks: [
      {
        title: "Solutions",
        items: [
          { key: "acceleration", label: "Commercial acceleration" },
          { key: "pilotage", label: "Outsourced export sales management" },
          { key: "markets", label: "All markets" },
        ],
      },
      {
        title: "AS Biz Dev",
        items: [
          { key: "about", label: "Who we are" },
          { key: "sectors", label: "Our sectors" },
          { key: "network", label: "Our network" },
          { key: "becomePartner", label: "Become a partner" },
        ],
      },
      {
        title: "Resources",
        items: [
          { key: "partners", label: "References & ecosystem" },
          { key: "news", label: "Articles & Insights" },
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
      legalNotice: "Legal notice",
      version: "v 3.0 — refreshed",
      copyright: "© {year} AS Biz Dev. All rights reserved.",
    },
  },
};

export default common;
