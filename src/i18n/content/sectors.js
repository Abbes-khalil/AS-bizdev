/**
 * "Nos secteurs" page.
 *
 * AS Biz Dev is not presented as a specialist of every sector: only the
 * environments where our contact base and networks give a real understanding
 * of the economic actors, distribution circuits and decision-makers. Énergie
 * & infrastructures is marked explicitly as a domain still being built.
 *
 * `items` drives the desktop tab + panel explorer and the mobile accordion —
 * same data, same SectorExplorer component. `highlight` gives Industrie &
 * équipements its slightly stronger visual weight (it's the main axis of
 * AS Biz Dev's positioning); `status: "developing"` is what marks Énergie &
 * infrastructures as still being built rather than an established practice.
 */
const sectors = {
  fr: {
    hero: {
      eyebrow: "Nos secteurs",
      titleLead: "Des environnements sectoriels",
      titleAccent: "que nous connaissons.",
      intro:
        "AS Biz Dev intervient dans des secteurs où notre expérience, notre base de contacts et nos réseaux nous permettent d'identifier les acteurs économiques, les circuits de distribution et les interlocuteurs pertinents.",
    },
    heroNote:
      "Notre approche ne consiste pas à revendiquer une expertise de tous les secteurs, mais à mobiliser une connaissance concrète des écosystèmes dans lesquels nous pouvons agir.",

    explorer: {
      eyebrow: "Nos domaines de connaissance",
      titleLead: "Huit environnements,",
      titleAccent: "une connaissance concrète.",
      areasLabel: "Domaines représentés",
      actorsLabel: "Acteurs identifiables",
      highlightLabel: "Axe majeur",
      developingLabel: "Domaine en développement",
    },

    items: [
      {
        id: "industry",
        highlight: true,
        title: "Industrie & équipements",
        intro:
          "Un axe majeur du positionnement AS Biz Dev. Notre connaissance de ces environnements permet d'identifier plus rapidement les entreprises et interlocuteurs pertinents.",
        areas: [
          "Équipements industriels",
          "Mécanique",
          "Métallurgie",
          "Automatisation",
          "Électricité",
          "Électronique",
          "Plasturgie",
          "Emballage",
          "Équipements techniques",
          "Sous-traitance industrielle",
        ],
        actors: [
          "Industriels",
          "Donneurs d'ordres",
          "Équipementiers",
          "Intégrateurs",
          "Distributeurs spécialisés",
          "Partenaires commerciaux ou techniques",
        ],
      },
      {
        id: "distribution",
        title: "Distribution & réseaux commerciaux",
        intro:
          "AS Biz Dev peut intervenir aussi bien dans la recherche et la sélection de nouveaux partenaires que dans l'animation et le développement d'un réseau existant.",
        areas: [
          "Distributeurs",
          "Importateurs",
          "Agents commerciaux",
          "Intégrateurs",
          "Négociants",
          "Partenaires locaux",
          "Réseaux B2B",
        ],
      },
      {
        id: "agrifood",
        title: "Agroalimentaire & agriculture",
        areas: [
          "Industrie agroalimentaire",
          "Transformation",
          "Production",
          "Agriculture",
          "Distribution",
          "Équipement professionnel",
        ],
      },
      {
        id: "health",
        title: "Santé & pharmaceutique",
        areas: [
          "Industrie pharmaceutique",
          "Laboratoires",
          "Distribution spécialisée",
          "Santé",
          "Équipements médicaux",
        ],
      },
      {
        id: "construction",
        title: "Construction & équipements techniques",
        areas: [
          "Construction",
          "BTP",
          "HVAC / CVC",
          "Réfrigération",
          "Équipements techniques",
          "Fournisseurs spécialisés",
          "Distributeurs spécialisés",
        ],
      },
      {
        id: "automotive",
        title: "Automobile & mobilité",
        areas: [
          "Industriels",
          "Équipementiers",
          "Distributeurs",
          "Fournisseurs",
          "Entreprises liées à la mobilité",
        ],
      },
      {
        id: "transport",
        title: "Transport & logistique",
        areas: ["Transport", "Logistique", "Fret", "Entreposage", "Supply chain"],
      },
      {
        id: "energy",
        status: "developing",
        title: "Énergie & infrastructures",
        intro:
          "Un domaine à développer progressivement en fonction des marchés, missions, partenaires et références réellement disponibles.",
        areas: [],
      },
    ],

    cross: {
      eyebrow: "Ce que cela permet",
      titleLead: "Une connaissance qui croise",
      titleAccent: "marché, secteur et décideur.",
      intro:
        "La valeur de notre approche vient de la possibilité de croiser plusieurs dimensions pour aller directement vers l'action commerciale.",
      factors: ["Pays", "Secteur", "Entreprise", "Fonction", "Niveau de décision"],
      outcome: "Action commerciale",
      examples: [
        "Identifier des décideurs industriels au Maroc",
        "Rechercher des distributeurs techniques en Côte d'Ivoire",
        "Identifier des acteurs agroalimentaires en Tunisie",
        "Rechercher des partenaires au Sénégal",
        "Identifier des interlocuteurs commerciaux aux Émirats arabes unis",
      ],
    },

    marketsLink: {
      eyebrow: "Aller plus loin",
      titleLead: "Une connaissance sectorielle qui s'inscrit",
      titleAccent: "dans des marchés ciblés.",
      body: "Nos domaines de connaissance prennent leur valeur lorsqu'ils sont croisés avec une compréhension concrète des marchés, des entreprises et des circuits de décision locaux.",
      cta: "Découvrir nos marchés",
    },

    offers: {
      eyebrow: "Deux façons de mobiliser cette connaissance",
      titleLead: "De l'identification",
      titleAccent: "au pilotage commercial.",
      items: [
        {
          routeKey: "acceleration",
          label: "Accélérer",
          body: "Identifier des prospects, donneurs d'ordres, distributeurs, intégrateurs et partenaires afin de créer de nouvelles opportunités commerciales.",
        },
        {
          routeKey: "pilotage",
          label: "Piloter",
          body: "Animer les distributeurs, développer les comptes, suivre les opportunités, structurer le pipeline et consolider les prévisions de ventes.",
        },
      ],
      more: "En savoir plus",
    },

    cta: {
      eyebrow: "Aller plus loin",
      heading: "Vous souhaitez développer votre activité dans l'un de ces secteurs ?",
      label: "Parlons de votre projet",
    },
  },

  en: {
    hero: {
      eyebrow: "Our sectors",
      titleLead: "Sector environments",
      titleAccent: "we actually know.",
      intro:
        "AS Biz Dev works in sectors where our experience, our contact base and our networks let us identify the relevant economic players, distribution circuits and contacts.",
    },
    heroNote:
      "Our approach is not to claim expertise across every sector, but to mobilise concrete knowledge of the ecosystems where we can genuinely act.",

    explorer: {
      eyebrow: "Our areas of knowledge",
      titleLead: "Eight environments,",
      titleAccent: "one concrete knowledge base.",
      areasLabel: "Areas covered",
      actorsLabel: "Players we can identify",
      highlightLabel: "Key focus area",
      developingLabel: "Domain in development",
    },

    items: [
      {
        id: "industry",
        highlight: true,
        title: "Industry & Equipment",
        intro:
          "A key focus area of AS Biz Dev's positioning. Our knowledge of these environments helps identify the relevant companies and contacts faster.",
        areas: [
          "Industrial equipment",
          "Mechanics",
          "Metalworking",
          "Automation",
          "Electricity",
          "Electronics",
          "Plastics",
          "Packaging",
          "Technical equipment",
          "Industrial subcontracting",
        ],
        actors: [
          "Manufacturers",
          "Buyers",
          "Equipment makers",
          "Integrators",
          "Specialised distributors",
          "Commercial or technical partners",
        ],
      },
      {
        id: "distribution",
        title: "Distribution & Sales Networks",
        intro:
          "AS Biz Dev can work both on finding and selecting new partners and on managing and growing an existing network.",
        areas: [
          "Distributors",
          "Importers",
          "Sales agents",
          "Integrators",
          "Traders",
          "Local partners",
          "B2B networks",
        ],
      },
      {
        id: "agrifood",
        title: "Agrifood & Agriculture",
        areas: [
          "Food industry",
          "Processing",
          "Production",
          "Agriculture",
          "Distribution",
          "Professional equipment",
        ],
      },
      {
        id: "health",
        title: "Healthcare & Pharmaceuticals",
        areas: [
          "Pharmaceutical industry",
          "Laboratories",
          "Specialised distribution",
          "Health",
          "Medical equipment",
        ],
      },
      {
        id: "construction",
        title: "Construction & Technical Equipment",
        areas: [
          "Construction",
          "Building",
          "HVAC",
          "Refrigeration",
          "Technical equipment",
          "Specialised suppliers",
          "Specialised distributors",
        ],
      },
      {
        id: "automotive",
        title: "Automotive & Mobility",
        areas: [
          "Industrial players",
          "Equipment makers",
          "Distributors",
          "Suppliers",
          "Mobility-related companies",
        ],
      },
      {
        id: "transport",
        title: "Transport & Logistics",
        areas: ["Transport", "Logistics", "Freight", "Warehousing", "Supply chain"],
      },
      {
        id: "energy",
        status: "developing",
        title: "Energy & Infrastructure",
        intro:
          "A domain to be developed progressively, depending on actual markets, missions, partners and references available.",
        areas: [],
      },
    ],

    cross: {
      eyebrow: "What this enables",
      titleLead: "Knowledge that crosses",
      titleAccent: "market, sector and decision-maker.",
      intro:
        "The value of our approach comes from crossing several dimensions to move straight to commercial action.",
      factors: ["Country", "Sector", "Company", "Function", "Decision level"],
      outcome: "Commercial action",
      examples: [
        "Identifying industrial decision-makers in Morocco",
        "Finding technical distributors in Ivory Coast",
        "Identifying agrifood players in Tunisia",
        "Finding partners in Senegal",
        "Identifying commercial contacts in the United Arab Emirates",
      ],
    },

    marketsLink: {
      eyebrow: "Go further",
      titleLead: "Sector knowledge that fits into",
      titleAccent: "targeted markets.",
      body: "Our areas of knowledge take on their value when crossed with a concrete understanding of local markets, companies and decision circuits.",
      cta: "Discover our markets",
    },

    offers: {
      eyebrow: "Two ways to mobilise this knowledge",
      titleLead: "From identification",
      titleAccent: "to sales management.",
      items: [
        {
          routeKey: "acceleration",
          label: "Accelerate",
          body: "Identify prospects, buyers, distributors, integrators and partners to create new commercial opportunities.",
        },
        {
          routeKey: "pilotage",
          label: "Manage",
          body: "Manage distributors, grow accounts, track opportunities, structure the pipeline and consolidate sales forecasts.",
        },
      ],
      more: "Learn more",
    },

    cta: {
      eyebrow: "Go further",
      heading: "Want to grow your activity in one of these sectors?",
      label: "Let's talk about your project",
    },
  },
};

export default sectors;
