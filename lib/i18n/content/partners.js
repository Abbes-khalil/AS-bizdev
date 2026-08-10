/**
 * Copy for /nos-partenaires (fr) / /en/our-partners (en).
 *
 * Structural data (who's a client, who's a network, sectors, groups) lives in
 * src/data/references.js — this file only holds language copy, keyed by the
 * same `key` as each REFERENCES entry. A missing `copy[key].description` is
 * intentional: several client entries only have a confirmed name and sector
 * (no verified company description to draw from), and the brief's own
 * warning is explicit — never invent a description, a relationship, or a
 * sub-brand that hasn't been confirmed.
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
      featuredLabel: "Références majeures",
      moreLabel: "Autres références",
    },
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
          body: "AS Biz Dev dispose d'une base propriétaire de près de 5 000 contacts professionnels, couvrant plusieurs milliers d'entreprises. Cette base est complétée par notre réseau personnel et par les différents écosystèmes auxquels nous participons.",
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
    copy: {
      // --- clients with confirmed description ---
      incenteev: {
        name: "Incenteev",
        description:
          "Nous sommes convaincus que l'entreprise a un rôle clé à jouer dans le progrès collectif. Pour cela, nous collaborons avec des associations dont nous partageons les valeurs : notre communauté Open Source, Le Réseau Entreprendre, l'association Entourage/LinkedOut, Les Petits Frères des Pauvres. Nous encourageons et soutenons toutes les initiatives des collaborateurs qui veulent s'engager dans leur communauté.",
      },
      bbc: {
        name: "BBC Bircher",
        description:
          "L'entreprise BBC Bircher réussit avec succès sur le marché international en tant que grand fournisseur et producteur mondial. Ses deux branches d'activité, spécialisées et expertes en technologie des capteurs ainsi qu'en contrôle des processus pour portes et portails automatiques, lui permettent de placer au premier plan la sécurité des personnes, des véhicules et des installations.",
      },
      ts: {
        name: "TS",
        description:
          "Pour nos clients, « Développer l'humain au cœur des échanges » signifie que nous positionnons le digital au service de la relation humaine. Par nos outils et services, nos clients se concentrent sur la relation humaine et font progresser leurs ventes, en cohérence avec leur stratégie d'entreprise.",
      },
      emba: {
        name: "EMBA Business School",
        description:
          "L'EMBA Business School est l'école supérieure de commerce et de management de la CCI métropolitaine Bretagne ouest (CCIMBO). Au cœur du pôle de formation universitaire et tertiaire de Creac'h Gwen à Quimper, son campus accueille des élèves et enseignants de France et du monde entier.",
      },

      // --- clients: name + sector only, no invented description ---
      decathlon: { name: "Decathlon" },
      interroll: { name: "Interroll" },
      figeacAero: { name: "Figeac Aéro" },
      robertshaw: { name: "Robertshaw Group" },
      ennakl: { name: "Groupe Ennakl" },
      groupama: { name: "Groupama" },
      bontaz: { name: "Bontaz" },
      komax: { name: "Komax" },
      vectorys: { name: "Vectorys" },
      michaud: { name: "Michaud" },
      foshanTongbao: { name: "Foshan Tongbao" },
      surfaprotec: { name: "Surfaprotec" },
      lpe: { name: "La Pratique Électronique" },
      assadBatteries: { name: "ASSAD Batteries" },
      cromes: { name: "Cromes" },
      nouvellesPailles: { name: "Les Nouvelles Pailles" },
      sementis: { name: "Sementis" },
      promedtech: { name: "Promedtech" },
      shieldScientific: { name: "Shield Scientific" },
      vocalcom: { name: "Vocalcom" },
      hrMaps: { name: "HR Maps" },
      ach: { name: "ACH" },

      // --- ecosystem: named institutional networks ---
      apm: {
        name: "APM",
        description:
          "Réseau français de dirigeants d'entreprise organisé autour de clubs d'échange, de formation et de partage d'expérience entre pairs.",
        contribution:
          "Un accès privilégié à un écosystème de dirigeants de PME et d'ETI.",
      },
      giz: {
        name: "GIZ",
        description:
          "Agence allemande de coopération internationale, très active en Afrique et dans les économies émergentes sur des programmes de développement économique et industriel.",
        contribution:
          "Collaboration directe avec la GIZ sur des projets et écosystèmes de développement économique.",
      },
      businessFrance: {
        name: "Business France",
        description:
          "Agence publique française chargée notamment d'accompagner les entreprises françaises dans leur développement international.",
        contribution:
          "AS Biz Dev collabore avec Business France et est référencé dans ses dispositifs / réseaux.",
      },
      taa: {
        name: "TAA — Tunisian Automotive Association",
        description:
          "Organisation professionnelle représentant l'écosystème et les entreprises de l'industrie automobile tunisienne.",
        contribution:
          "Collaboration avec des acteurs et réseaux de l'écosystème TAA.",
      },

      // --- ecosystem: legacy partner sub-tier (unchanged) ---
      admg: {
        name: "ADMG technology",
        description:
          "ADMG technology, une start-up innovante née au sein du groupe AGF pour créer des systèmes de pointe dans l'automatisation de la métallurgie pour des tiers. Grâce à des collaborations avec diverses universités, des brevets et des technologies modernes, ADMG a réussi à créer son propre espace de marché avec des produits très innovants.",
      },
      sysmic: {
        name: "SYS'MIC",
        description:
          "Dans un monde globalisé, complexe et incertain, l'enjeu pour les organisations est de rebondir sur les « secousses » pour construire un avenir réussi. SYS'MIC s'appuie sur le mouvement et l'intelligence collective pour faire émerger la vision partagée qui précède l'action.",
      },
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
      featuredLabel: "Key references",
      moreLabel: "Other references",
    },
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
          body: "AS Biz Dev holds a proprietary base of close to 5,000 professional contacts, covering several thousand companies. This base is complemented by our personal network and by the various ecosystems we take part in.",
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
    copy: {
      // --- clients with confirmed description ---
      incenteev: {
        name: "Incenteev",
        description:
          "We are convinced that business has a key role to play in collective progress. That is why we work with associations whose values we share: our Open Source community, Le Réseau Entreprendre, the Entourage/LinkedOut association, and Les Petits Frères des Pauvres. We encourage and support every initiative from employees who want to get involved in their community.",
      },
      bbc: {
        name: "BBC Bircher",
        description:
          "BBC Bircher succeeds on the international market as a major global supplier and producer. Its two business divisions, specialised and expert in sensor technology and process control — notably for automatic doors and gates — put the safety of people, vehicles and installations first.",
      },
      ts: {
        name: "TS",
        description:
          "For our clients, “putting people at the heart of every exchange” means we position digital in the service of human relationships. Through our tools and services, our clients focus on the human relationship and grow their sales in line with their corporate strategy.",
      },
      emba: {
        name: "EMBA Business School",
        description:
          "EMBA Business School is the business and management school of the CCI métropolitaine Bretagne ouest (CCIMBO). At the heart of the Creac'h Gwen university and tertiary training hub in Quimper, its campus welcomes students and teachers from France and around the world.",
      },

      // --- clients: name + sector only, no invented description ---
      decathlon: { name: "Decathlon" },
      interroll: { name: "Interroll" },
      figeacAero: { name: "Figeac Aéro" },
      robertshaw: { name: "Robertshaw Group" },
      ennakl: { name: "Groupe Ennakl" },
      groupama: { name: "Groupama" },
      bontaz: { name: "Bontaz" },
      komax: { name: "Komax" },
      vectorys: { name: "Vectorys" },
      michaud: { name: "Michaud" },
      foshanTongbao: { name: "Foshan Tongbao" },
      surfaprotec: { name: "Surfaprotec" },
      lpe: { name: "La Pratique Électronique" },
      assadBatteries: { name: "ASSAD Batteries" },
      cromes: { name: "Cromes" },
      nouvellesPailles: { name: "Les Nouvelles Pailles" },
      sementis: { name: "Sementis" },
      promedtech: { name: "Promedtech" },
      shieldScientific: { name: "Shield Scientific" },
      vocalcom: { name: "Vocalcom" },
      hrMaps: { name: "HR Maps" },
      ach: { name: "ACH" },

      // --- ecosystem: named institutional networks ---
      apm: {
        name: "APM",
        description:
          "A French network of business leaders organised around peer clubs for exchange, training and shared experience.",
        contribution:
          "Privileged access to an ecosystem of SME and mid-cap leaders.",
      },
      giz: {
        name: "GIZ",
        description:
          "A German international cooperation agency, highly active in Africa and emerging economies on economic and industrial development programmes.",
        contribution:
          "Direct collaboration with GIZ on economic development projects and ecosystems.",
      },
      businessFrance: {
        name: "Business France",
        description:
          "A French public agency notably tasked with supporting French companies in their international development.",
        contribution:
          "AS Biz Dev works with Business France and is referenced within its programmes / networks.",
      },
      taa: {
        name: "TAA — Tunisian Automotive Association",
        description:
          "A professional organisation representing the ecosystem and companies of the Tunisian automotive industry.",
        contribution:
          "Collaboration with players and networks within the TAA ecosystem.",
      },

      // --- ecosystem: legacy partner sub-tier (unchanged) ---
      admg: {
        name: "ADMG technology",
        description:
          "ADMG technology is an innovative start-up born within the AGF group to create cutting-edge systems for metallurgy automation on behalf of third parties. Through collaborations with various universities, patents and modern technologies, ADMG has carved out its own market space with highly innovative products.",
      },
      sysmic: {
        name: "SYS'MIC",
        description:
          "In a globalised, complex and uncertain world, the challenge for organisations is to rebound from the “tremors” in order to build a successful future. SYS'MIC draws on movement and collective intelligence to bring out the shared vision that precedes action.",
      },
    },
  },
};

export default partners;
