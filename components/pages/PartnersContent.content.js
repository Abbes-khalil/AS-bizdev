/**
 * Page-shell copy for /nos-partenaires (fr) / /en/our-partners (en) — hero,
 * section labels, CTA. The references themselves (clients, network
 * institutions, partners — name, description, logo, sectors, all in one
 * object per entry) live in `components/pages/PartnersContent.data.js`.
 *
 * `edge.blocks[0].body` carries a `{contactsPhrase}` token, interpolated in
 * PartnersContent from `NETWORK_STATS.contactsCount` (PartnersContent.data.js)
 * — never hardcode a contact count back into this string.
 */

const partners = {
  fr: {
    hero: {
      eyebrow: "Références & écosystème",
      titleLead: "Ils nous ont fait",
      titleAccent: "confiance.",
      intro:
        "PME, ETI, groupes industriels et organisations nous sollicitent pour accélérer leur développement commercial, structurer leurs marchés et transformer leurs opportunités en résultats. AS Biz Dev intervient auprès d'entreprises de tailles et de secteurs différents, avec une forte spécialisation dans les environnements industriels, technologiques et B2B.",
    },
    sectorLabels: {
      ariaLabel: "Filtrer par secteur",
      all: "Tous",
      industrie: "Industrie",
      automobile: "Automobile",
      technologies: "Technologies",
      distribution: "Distribution",
      sante: "Santé",
      transport: "Transport",
      services: "Services",
    },
    referencesSection: {
      title: "Références clients",
      intro:
        "Entreprises avec lesquelles AS Biz Dev a directement travaillé, dans le cadre de missions d'accélération commerciale, de développement international, de recherche de partenaires ou de pilotage commercial externalisé.",
      featuredLabel: "Références principales",
      moreLabel: "Autres références",
    },
    groupLabel: "Marque",
    groupsLabel: "Marques associées",
    networkSection: {
      eyebrow: "Un écosystème de réseaux complémentaires",
      title: "Écosystèmes & réseaux",
      intro:
        "AS Biz Dev s'appuie également sur plusieurs réseaux professionnels, économiques et institutionnels qui complètent notre propre base de contacts et renforcent notre connaissance des marchés.",
      partnersIntro:
        "Un écosystème de partenaires pouvant apporter des expertises complémentaires selon les projets et les marchés.",
    },
    categoryLabel: "Catégorie",
    labels: {
      client: "Référence client",
      network: "Réseau & institution",
      partner: "Partenaire",
    },
    websiteLabel: "Site internet",
    logoAlt: "Logo {name}",
    categories: {
      industry: { title: "Industrie / Développement Commercial" },
      consulting: {
        title: "Conseils / Coaching en développement des organisations",
      },
    },
    edge: {
      eyebrow: "Au-delà des références",
      titleLead: "Des références, mais surtout",
      titleAccent: "une capacité à agir.",
      intro:
        "Notre réseau et nos références constituent un point de départ, pas une finalité. AS Biz Dev combine connaissance des marchés, accès aux décideurs, réseaux professionnels et institutionnels, et capacité d'exécution commerciale afin d'accélérer le développement de ses clients.",
      blocks: [
        {
          heading: "Un réseau propriétaire structuré",
          body: "AS Biz Dev dispose d'une base propriétaire de {contactsPhrase}, couvrant plusieurs milliers d'entreprises. Cette base est complétée par notre réseau personnel et par les différents écosystèmes auxquels nous participons.",
        },
        {
          heading: "Une forte présence de décideurs",
          body: "Notre réseau comprend de nombreux interlocuteurs occupant des fonctions de décision. La valeur d'AS Biz Dev ne repose donc pas uniquement sur le nombre de contacts, mais sur la capacité à identifier et atteindre les bons niveaux de décision.",
          list: [
            "Direction Générale",
            "Direction Commerciale",
            "Direction Export",
            "Business Development",
            "Achats",
            "Direction industrielle",
            "Direction de filiale",
          ],
        },
        {
          heading: "Une forte orientation industrielle et B2B",
          body: "Les références présentées illustrent notamment notre connaissance des environnements suivants.",
          list: [
            "Industrie",
            "Équipements techniques",
            "Automobile",
            "Aéronautique",
            "Électronique",
            "Distribution",
            "Transport et logistique",
            "Santé",
            "Technologies",
            "Services B2B",
          ],
        },
      ],
    },
    finalCta: {
      eyebrow: "Prochaine étape",
      heading: "Développons votre prochain marché",
      label: "Parlons de votre marché",
    },
  },

  en: {
    hero: {
      eyebrow: "References & ecosystem",
      titleLead: "Companies that",
      titleAccent: "trust us.",
      intro:
        "SMEs, mid-caps, industrial groups and organisations turn to AS Biz Dev to accelerate their business development, structure their markets and turn opportunities into results. AS Biz Dev works with companies of different sizes and sectors, with a strong specialisation in industrial, technology and B2B environments.",
    },
    sectorLabels: {
      ariaLabel: "Filter by sector",
      all: "All",
      industrie: "Industry",
      automobile: "Automotive",
      technologies: "Technology",
      distribution: "Distribution",
      sante: "Healthcare",
      transport: "Transport",
      services: "Services",
    },
    referencesSection: {
      title: "Client references",
      intro:
        "Companies AS Biz Dev has directly worked with, on commercial acceleration, international development, partner sourcing or outsourced sales management missions.",
      featuredLabel: "Main references",
      moreLabel: "Other references",
    },
    groupLabel: "Brand",
    groupsLabel: "Associated brands",
    networkSection: {
      eyebrow: "A complementary network ecosystem",
      title: "Ecosystem & networks",
      intro:
        "AS Biz Dev also draws on several professional, economic and institutional networks that complement our own contact base and strengthen our market knowledge.",
      partnersIntro:
        "An ecosystem of partners able to bring complementary expertise depending on the project and the market.",
    },
    categoryLabel: "Category",
    labels: {
      client: "Client reference",
      network: "Network & institution",
      partner: "Partner",
    },
    websiteLabel: "Website",
    logoAlt: "{name} logo",
    categories: {
      industry: { title: "Industry / Business Development" },
      consulting: { title: "Consulting / Organisational development coaching" },
    },
    edge: {
      eyebrow: "Beyond references",
      titleLead: "References, but above all",
      titleAccent: "the ability to act.",
      intro:
        "Our network and our references are a starting point, not an end in themselves. AS Biz Dev combines market knowledge, access to decision-makers, professional and institutional networks, and commercial execution capability to accelerate its clients' development.",
      blocks: [
        {
          heading: "A structured proprietary network",
          body: "AS Biz Dev holds a proprietary base of {contactsPhrase}, covering several thousand companies. This base is complemented by our personal network and by the various ecosystems we take part in.",
        },
        {
          heading: "A strong presence of decision-makers",
          body: "Our network includes many contacts in decision-making roles. AS Biz Dev's value doesn't rest solely on the number of contacts, but on the ability to identify and reach the right decision-making levels.",
          list: [
            "General Management",
            "Sales Management",
            "Export Management",
            "Business Development",
            "Purchasing",
            "Industrial Management",
            "Subsidiary Management",
          ],
        },
        {
          heading: "A strong industrial and B2B orientation",
          body: "The references presented notably illustrate our knowledge of the following environments.",
          list: [
            "Industry",
            "Technical equipment",
            "Automotive",
            "Aerospace",
            "Electronics",
            "Distribution",
            "Transport & logistics",
            "Healthcare",
            "Technology",
            "B2B services",
          ],
        },
      ],
    },
    finalCta: {
      eyebrow: "Next step",
      heading: "Let's grow your next market",
      label: "Let's talk about your market",
    },
  },
};

export default partners;
