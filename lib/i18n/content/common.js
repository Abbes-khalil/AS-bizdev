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
      manageCookies: "Gérer mes cookies",
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
        "An operational sales capability to develop and manage your markets across Africa and the Middle East.",
      ctaEyebrow: "Let's build what comes next",
      ctaLine1: "Let's talk about your",
      ctaLine2: "market",
      brandTagline: "Africa & Middle East",
      linkedinLabel: "LinkedIn — AS Biz Dev (new tab)",
      facebookLabel: "Facebook — AS Biz Dev (new tab)",
      policy: "Privacy policy",
      legalNotice: "Legal notice",
      manageCookies: "Manage cookies",
      version: "v 3.0 — refreshed",
      copyright: "© {year} AS Biz Dev. All rights reserved.",
    },
  },

  ar: {
    nav: {
      skipLink: "الانتقال إلى المحتوى",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      mobileCta: "لنتحدث عن سوقكم",
      headerCta: "لنتحدث عن سوقكم",
      mobileCaption: "أفريقيا · الشرق الأوسط",
      primaryAria: "التنقل الرئيسي",
      mobileAria: "التنقل على الجوال",
      homeAria: "AS Biz Dev — الصفحة الرئيسية",
      language: "اختيار اللغة",
      submenu: "فتح القائمة الفرعية {label}",
    },
    navigation: [
      {
        key: "solutions",
        label: "حلولنا",
        children: [
          { key: "acceleration", label: "تسريع التطوير التجاري" },
          { key: "pilotage", label: "الإدارة التجارية الخارجية" },
        ],
      },
      {
        key: "markets",
        label: "الأسواق",
        children: [
          { key: "markets", label: "جميع أسواقنا" },
          { key: "africa", label: "أفريقيا" },
          { key: "middleEast", label: "الشرق الأوسط" },
        ],
      },
      {
        key: "about",
        label: "AS Biz Dev",
        children: [
          { key: "about", label: "من نحن" },
          { key: "network", label: "شبكتنا" },
          { key: "sectors", label: "قطاعاتنا" },
        ],
      },
      { key: "partners", label: "المراجع والشركاء" },
      { key: "becomePartner", label: "كن شريكاً" },
    ],
    footerLinks: [
      {
        title: "حلولنا",
        items: [
          { key: "acceleration", label: "تسريع التطوير التجاري" },
          { key: "pilotage", label: "الإدارة التجارية الخارجية" },
          { key: "markets", label: "جميع الأسواق" },
        ],
      },
      {
        title: "AS Biz Dev",
        items: [
          { key: "about", label: "من نحن" },
          { key: "sectors", label: "قطاعاتنا" },
          { key: "network", label: "شبكتنا" },
          { key: "becomePartner", label: "كن شريكاً" },
        ],
      },
      {
        title: "الموارد",
        items: [
          { key: "partners", label: "المراجع والشركاء" },
          { key: "news", label: "الأخبار والمنشورات" },
          { key: "contact", label: "اتصل بنا" },
        ],
      },
    ],
    footer: {
      tagline:
        "قدرة تجارية تشغيلية لتطوير وإدارة أسواقكم في أفريقيا والشرق الأوسط.",
      ctaEyebrow: "لنبنِ ما هو قادم",
      ctaLine1: "لنتحدث عن",
      ctaLine2: "سوقكم",
      brandTagline: "أفريقيا والشرق الأوسط",
      linkedinLabel: "لينكدإن — AS Biz Dev (علامة تبويب جديدة)",
      facebookLabel: "فيسبوك — AS Biz Dev (علامة تبويب جديدة)",
      policy: "سياسة الخصوصية",
      legalNotice: "الإشعار القانوني",
      manageCookies: "إدارة ملفات تعريف الارتباط",
      version: "الإصدار 3.0 — محدّث",
      copyright: "© {year} AS Biz Dev. جميع الحقوق محفوظة.",
    },
  },
};

export default common;
