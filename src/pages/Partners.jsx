import RevealOnScroll from "../components/RevealOnScroll";

const categories = [
  {
    title: "Digital Transformation",
    partners: [
      {
        src: "partenaires/TS.webp",
        name: "TS",
        description:
          "Pour nos clients, « Développer l'humain au cœur des échanges » signifie que nous positionnons le digital au service de la relation humaine. Nous participons à une réhumanisation des échanges en tirant profit des outils digitaux. Par nos outils et services, nos clients vont pouvoir se concentrer sur la relation humaine et faire ainsi progresser leurs ventes, en cohérence avec leur stratégie d'entreprise. Nous développons, fournissons et implémentons les outils et services qui permettent à nos clients de développer une force de vente plus efficace et une relation client plus performante.",
      },
      {
        src: "partenaires/Incenteev.webp",
        name: "Incenteev",
        description:
          "Nous sommes convaincus que l'entreprise a un rôle clé à jouer dans le progrès collectif. Pour cela, nous collaborons avec des associations dont nous partageons les valeurs : notre communauté Open Source, Le Réseau Entreprendre, l'association Entourage/LinkedOut, Les Petits Frères des Pauvres. Nous encourageons et soutenons toutes les initiatives des collaborateurs qui veulent s'engager dans leur communauté. Pour cadrer cette action, nous désirons inscrire cette volonté d'impact dans nos statuts pour devenir une entreprise à mission.",
      },
    ],
  },
  {
    title: "Industrie / Développement Commercial",
    partners: [
      {
        src: "partenaires/BBC.webp",
        name: "BBC Bircher",
        description:
          "L'entreprise BBC Bircher réussit avec succès sur le marché international en tant que grand fournisseur et producteur mondial. En effet, ses deux branches d'activité spécialisées et expertes en technologie des capteurs ainsi qu'en contrôle des processus notamment pour portes et portails automatiques, lui permettent de placer au premier plan la sécurité des personnes, des véhicules et des installations avec une garantie assurée de qualité durable et accrue.",
      },
      {
        src: "partenaires/ADMG.webp",
        name: "ADMG technology",
        description:
          "ADMG technology, une start-up innovante née au sein du groupe AGF pour créer des systèmes de pointe dans l'automatisation de la métallurgie pour des tiers. Grâce à des collaborations avec diverses universités, des brevets et des technologies modernes, ADMG a réussi à créer son propre espace de marché avec des produits très innovants. L'étude et la conception sont la base de la vie de l'entreprise, où l'accent est constamment mis sur la relation avec le client, l'attention à la qualité des produits et l'utilisation des technologies les plus modernes.",
      },
    ],
  },
  {
    title: "Conseils / Coaching en développement des organisations",
    partners: [
      {
        src: "partenaires/SySmic.webp",
        name: "SYS'MIC",
        description:
          "Dans un monde globalisé, complexe et incertain, l'enjeu pour les organisations est de rebondir sur les « secousses » pour construire un avenir réussi. Agir, avec agilité et co-responsabilité : SYS'MIC s'appuie sur le mouvement et l'intelligence collective pour faire émerger la vision partagée qui précède l'action.",
      },
      {
        src: "partenaires/Emba.webp",
        name: "EMBA Business School",
        description:
          "L'EMBA Business School est l'école supérieure de commerce et de management de la CCI métropolitaine Bretagne ouest (CCIMBO). Au cœur du pôle de formation universitaire et tertiaire de Creac'h Gwen à Quimper, près de Brest dans le Finistère, son campus accueille des élèves et enseignants de France et du monde entier. Depuis plusieurs années, l'école est engagée dans un processus Qualité ambitieux et exigent, comme en témoigne la certification récente Qualiopi, obtenue en juillet 2020 pour nos actions de formation en apprentissage.",
      },
    ],
  },
];

const PartnerCard = ({ partner, i }) => (
  <RevealOnScroll
    as="article"
    variant="up"
    delay={0.05}
    index={i}
    className="flex h-full flex-col rounded-card border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lift"
  >
    <div className="grid h-32 place-items-center">
      <img
        src={`/brand_assets/${partner.src}`}
        alt={`Logo ${partner.name} — partenaire AS Biz Dev`}
        loading="lazy"
        decoding="async"
        width="192"
        height="80"
        className="max-h-20 max-w-[12rem] object-contain opacity-90 transition-all duration-500 hover:opacity-100"
      />
    </div>
    <div className="mt-6 flex items-center gap-3">
      <span aria-hidden="true" className="h-px flex-1 bg-gray-200" />
      <span className="font-display text-[0.65rem] font-medium uppercase tracking-widest text-gray-400">
        Partenaire
      </span>
      <span aria-hidden="true" className="h-px flex-1 bg-gray-200" />
    </div>
    <h3 className="mt-4 font-display text-[1.25rem] font-semibold leading-tight tracking-tight text-navy">
      {partner.name}
    </h3>
    <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-700">
      {partner.description}
    </p>
  </RevealOnScroll>
);

export default function Partners() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 pattern-dots opacity-[0.15]"
          aria-hidden="true"
        />
        <div className="relative container-x py-20 lg:py-28">
          <RevealOnScroll
            variant="up"
            className="grid items-end gap-12 lg:grid-cols-[1fr_1fr]"
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <span
                  className="h-1 w-10 rounded-full bg-orange"
                  aria-hidden="true"
                />
                <p className="eyebrow text-orange">Notre réseau</p>
              </div>
              <h1 className="mt-6 font-display display-xl font-semibold text-navy text-balance">
                Ils nous font{" "}
                <span className="italic text-orange">confiance.</span>
              </h1>
            </div>
            <p className="max-w-md text-[1.125rem] leading-[1.7] text-gray-700">
              Des partenaires engagés à nos côtés pour développer des solutions
              utiles, durables et adaptées aux réalités du terrain.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-surface-alt pb-24 lg:pb-32">
        <div className="container-x space-y-20">
          {categories.map((cat, catIdx) => (
            <div key={cat.title}>
              <RevealOnScroll variant="up" className="mb-10">
                <p className="eyebrow text-orange">
                  Catégorie 0{catIdx + 1}
                </p>
                <h2 className="mt-3 font-display text-[1.5rem] font-semibold tracking-tight text-navy lg:text-[1.75rem]">
                  {cat.title}
                </h2>
              </RevealOnScroll>
              <ul
                role="list"
                className="grid gap-6 md:grid-cols-2 lg:gap-8"
              >
                {cat.partners.map((partner, i) => (
                  <li key={partner.name}>
                    <PartnerCard partner={partner} i={i} />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <RevealOnScroll
            variant="up"
            className="mt-16 flex flex-col items-center gap-4 text-center"
          >
            <div className="inline-flex items-center gap-3">
              <span
                className="h-1 w-10 rounded-full bg-orange"
                aria-hidden="true"
              />
              <p className="eyebrow text-orange">Devenir partenaire</p>
            </div>
            <h2 className="font-display display-md font-semibold tracking-tight text-navy text-balance">
              Vous souhaitez rejoindre notre réseau ?
            </h2>
            <a href="/contact" className="btn-primary mt-2">
              Nous écrire
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
