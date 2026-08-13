/**
 * /mentions-legales (fr) / /en/legal-notice (en) — required legal notice.
 * Every fact AS Biz Dev hasn't confirmed is a literal [À COMPLÉTER] /
 * [TO BE COMPLETED] placeholder — never a guess. Whoever fills these in
 * should replace the placeholder text itself, not just the brackets.
 */
const legalNotice = {
  fr: {
    hero: {
      eyebrow: "AS Biz Dev",
      titleLead: "Mentions",
      titleAccent: "légales.",
      intro:
        "Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site asbizdev.com l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.",
    },
    sections: [
      {
        title: "Éditeur du site",
        body: "[À COMPLÉTER — dénomination sociale, forme juridique, adresse du siège social, numéro SIRET, capital social, numéro de TVA intracommunautaire]",
      },
      {
        title: "Directeur de la publication",
        body: "[À COMPLÉTER — nom et qualité du directeur de la publication]",
      },
      {
        title: "Hébergement",
        body: "Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.",
      },
      {
        title: "Contact",
        body: "Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse suivante :",
        email: true,
      },
      {
        title: "Propriété intellectuelle",
        body: "L'ensemble des éléments constituant le site asbizdev.com (textes, images, logos, structure) est protégé au titre du droit d'auteur et du droit des marques. Toute reproduction, représentation, modification ou adaptation, totale ou partielle, sans autorisation préalable, est interdite.",
      },
    ],
  },

  en: {
    hero: {
      eyebrow: "AS Biz Dev",
      titleLead: "Legal",
      titleAccent: "notice.",
      intro:
        "In accordance with applicable French law (loi n° 2004-575 of 21 June 2004 for confidence in the digital economy), users of asbizdev.com are informed of the identity of the parties involved in producing and maintaining it.",
    },
    sections: [
      {
        title: "Website publisher",
        body: "[TO BE COMPLETED — legal name, legal form, registered office address, company registration number, share capital, VAT number]",
      },
      {
        title: "Publication director",
        body: "[TO BE COMPLETED — name and role of the publication director]",
      },
      {
        title: "Hosting",
        body: "Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, United States.",
      },
      {
        title: "Contact",
        body: "For any question regarding this legal notice, you can contact us at the following address:",
        email: true,
      },
      {
        title: "Intellectual property",
        body: "All elements making up asbizdev.com (text, images, logos, structure) are protected by copyright and trademark law. Any reproduction, representation, modification or adaptation, in whole or in part, without prior authorisation, is prohibited.",
      },
    ],
  },
};

export default legalNotice;
