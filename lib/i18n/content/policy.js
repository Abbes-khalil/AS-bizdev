/**
 * Sections carry an optional `email: true` flag — the component then appends
 * a mailto link after the body text rather than embedding markup here.
 */
const policy = {
  fr: {
    hero: {
      eyebrow: "AS Biz Dev",
      titleLead: "Politique de",
      titleAccent: "confidentialité.",
      intro:
        "AS Biz Dev s'engage à protéger la vie privée des visiteurs de son site Web. La présente Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD).",
      effectiveDate: "Date d'entrée en vigueur : 20 janvier 2021.",
      updatedDate:
        "Cette Politique de Confidentialité a été mise à jour le 05 novembre 2023.",
    },
    sections: [
      {
        title: "Collecte des données personnelles",
        body: "Nous recueillons les informations que vous nous fournissez directement (nom, adresse e-mail, numéro de téléphone, adresse postale, ainsi que toute information que vous choisissez de nous communiquer via nos formulaires). Nous collectons également de manière automatique certaines informations lors de votre visite sur notre site : adresse IP, type de navigateur, pages visitées, horodatages de connexion, et données issues de cookies ou autres traceurs.",
      },
      {
        title: "Utilisation des données personnelles",
        body: "Les informations que nous collectons sont utilisées pour fournir, maintenir et améliorer nos services, répondre à vos demandes, communiquer avec vous au sujet de nos services et offres, analyser l'audience de notre site et respecter nos obligations légales.",
      },
      {
        title: "Partage des données personnelles",
        body: "Nous ne partageons pas vos données personnelles avec des tiers, sauf dans les cas suivants : avec votre consentement préalable, pour répondre à une obligation légale, pour protéger nos droits ou notre propriété, ou dans le cadre d'une transaction commerciale (fusion, acquisition ou cession d'actifs).",
      },
      {
        title: "Sécurité des données",
        body: "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées (pare-feu, chiffrement, contrôles d'accès physiques et administratifs) pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction.",
      },
      {
        title: "Vos droits",
        body: "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression, de limitation du traitement, de portabilité de vos données, ainsi que du droit de vous opposer au traitement et d'en retirer votre consentement à tout moment. Pour exercer ces droits, contactez-nous à",
        email: true,
      },
      {
        title: "Transferts internationaux",
        body: "Vos données peuvent être transférées et traitées dans des pays situés en dehors de l'Espace économique européen (EEE). Dans ce cas, nous nous assurons que ces transferts sont réalisés conformément aux exigences du RGPD et qu'ils bénéficient d'un niveau de protection adéquat.",
      },
      {
        title: "Modifications de notre Politique de confidentialité",
        body: "Nous pouvons être amenés à mettre à jour cette Politique de confidentialité périodiquement. Toute modification sera publiée sur cette page avec une date de révision actualisée. Nous vous invitons à la consulter régulièrement.",
      },
      {
        title: "Contact",
        body: "Pour toute question relative à cette Politique de confidentialité ou à la protection de vos données personnelles, vous pouvez nous contacter à l'adresse suivante :",
        email: true,
      },
    ],
  },

  en: {
    hero: {
      eyebrow: "AS Biz Dev",
      titleLead: "Privacy",
      titleAccent: "policy.",
      intro:
        "AS Biz Dev is committed to protecting the privacy of visitors to its website. This Privacy Policy explains how we collect, use, disclose and protect your personal data, in accordance with the General Data Protection Regulation (GDPR).",
      effectiveDate: "Effective date: 20 January 2021.",
      updatedDate: "This Privacy Policy was last updated on 05 November 2023.",
    },
    sections: [
      {
        title: "Collection of personal data",
        body: "We collect the information you provide to us directly (name, email address, telephone number, postal address, and any information you choose to share through our forms). We also automatically collect certain information when you visit our site: IP address, browser type, pages visited, connection timestamps, and data from cookies or other trackers.",
      },
      {
        title: "Use of personal data",
        body: "The information we collect is used to provide, maintain and improve our services, respond to your requests, communicate with you about our services and offers, analyse our site's audience, and comply with our legal obligations.",
      },
      {
        title: "Sharing of personal data",
        body: "We do not share your personal data with third parties, except in the following cases: with your prior consent, to meet a legal obligation, to protect our rights or property, or as part of a commercial transaction (merger, acquisition or transfer of assets).",
      },
      {
        title: "Data security",
        body: "We implement appropriate technical and organisational security measures (firewalls, encryption, physical and administrative access controls) to protect your data against unauthorised access, alteration, disclosure or destruction.",
      },
      {
        title: "Your rights",
        body: "Under the General Data Protection Regulation (GDPR), you have the right to access, rectify, erase, restrict the processing of and port your data, as well as the right to object to processing and to withdraw your consent at any time. To exercise these rights, contact us at",
        email: true,
      },
      {
        title: "International transfers",
        body: "Your data may be transferred to and processed in countries outside the European Economic Area (EEA). In such cases, we ensure that these transfers are carried out in accordance with GDPR requirements and benefit from an adequate level of protection.",
      },
      {
        title: "Changes to our Privacy Policy",
        body: "We may update this Privacy Policy from time to time. Any change will be published on this page along with an updated revision date. We invite you to review it regularly.",
      },
      {
        title: "Contact",
        body: "For any question regarding this Privacy Policy or the protection of your personal data, you can contact us at the following address:",
        email: true,
      },
    ],
  },
};

export default policy;
