import { ASSET } from "../components/siteData";
import { ImageCard } from "../components/Card";
import RevealOnScroll from "../components/RevealOnScroll";

const solutions = [
  [
    "nossolutions/La-gestion-de-projet.webp",
    "La gestion de projet",
    "Lancer un produit, conquérir un marché ou plus simplement trouver de nouveaux fournisseurs ne s'improvise pas…",
  ],
  [
    "nossolutions/Le-developpement-0Acommercial-copie.webp",
    "Le développement commercial",
    "Vous possédez un réel savoir-faire mais vous ne savez pas comment le faire savoir…",
  ],
  [
    "nossolutions/Laccompagnement-.webp",
    "L'accompagnement",
    "Faire évoluer une entreprise impulse souvent une nouvelle dynamique, synonyme de changements internes…",
  ],
];

const values = [
  [
    "nosvaleurs/LOYAUTE.webp",
    "Loyauté",
    "Chez AS Biz Dev, la loyauté a gardé toutes ses lettres de noblesse. Elle conditionne notre travail et constitue le pivot de la relation client.",
  ],
  [
    "nosvaleurs/ENGAGEMENT.webp",
    "Engagement",
    "Travailler avec vous ne se résume pas à quelques signatures au dos d'un contrat.",
  ],
  [
    "nosvaleurs/RESPONSABILITE-.webp",
    "Responsabilité",
    "AS Biz Dev n'est pas le fruit d'une ambition personnelle détachée des enjeux écologiques et sociétaux. Nous souhaitons, au contraire, apporter notre petite pierre à l'édifice vertueux du développement durable.",
  ],
];

const packs = [
  {
    title: "Pack Découverte",
    body: "Obtenez une évaluation précise du potentiel de votre marché avec notre expertise spécialisée.",
  },
  {
    title: "Pack Conquête",
    body: "Profitez de notre réseau étendu et de notre rôle d'agent pour faciliter vos transactions commerciales.",
  },
  {
    title: "Pack Développement",
    body: "Choisissez une solution tout-en-un pour votre présence commerciale sur la zone, sans impacter votre P&L.",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative container-x pt-[160px] pb-20 md:pt-[180px] md:pb-24 lg:pt-[200px] lg:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <RevealOnScroll variant="up">
              <h1 className="font-display text-[2.5rem] font-semibold leading-[1.15] tracking-tight text-navy text-balance md:text-[3rem] lg:text-[3.25rem]">
                Accélérez et consolidez votre développement en France, Afrique et
                Moyen-Orient
              </h1>
              <p className="mt-8 max-w-xl text-[1.0625rem] leading-[1.65] text-gray-700 text-pretty">
                Notre approche agile est au cœur de notre capacité à vous aider
                à détecter et capitaliser sur les opportunités de croissance, en
                vous permettant d'agir avec précision et efficacité.
              </p>
              <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.65] text-gray-700 text-pretty">
                Spécialisés dans le développement commercial, nous opérons
                principalement dans deux domaines étroitement liés : les
                solutions industrielles innovantes et la digitalisation des
                processus industriels et commerciaux.
              </p>
              <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.65] text-gray-700 text-pretty">
                Nous vous offrons des solutions qui intègrent notre profonde
                compréhension des dynamiques spécifiques des marchés français,
                africains et moyen-orientaux, un accès privilégié à un réseau
                influent de décideurs, ainsi qu'une expertise poussée dans
                l'évaluation des atouts et des défis propres à ces régions.
              </p>
              <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.65] text-gray-700 text-pretty">
                Animés par la volonté de construire avec vous des entreprises
                durables, profitables sur le moyen et long terme, et guidées
                par des valeurs fortes et saines, nous sommes vos partenaires
                privilégiés pour un développement pérenne.
              </p>
              <div className="mt-10">
                <a href="/contact" className="btn-primary">
                  contactez-nous
                </a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="right" delay={0.15} className="relative">
              <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-card border border-gray-200 bg-gray-100 shadow-lift">
                <img
                  src={ASSET + "maps.webp"}
                  alt="Carte des zones d'intervention d'AS Biz Dev couvrant la France, l'Afrique et le Moyen-Orient."
                  width="640"
                  height="800"
                  fetchPriority="high"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* PACKS — Transformez vos ambitions en succès durable */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <RevealOnScroll variant="up" className="max-w-3xl">
            <h2 className="font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-navy text-balance md:text-[2.5rem] lg:text-[2.75rem]">
              Transformez vos ambitions en{" "}
              <span className="italic text-orange">succès durable !</span>
            </h2>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.7] text-gray-700">
              Que vous soyez une modeste PME locale ou un groupe industriel
              mondial, nos solutions s'ajustent à vos besoins en toute
              flexibilité.
            </p>
            <ul className="mt-8 space-y-3 text-[1.0625rem] leading-[1.7] text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange" aria-hidden="true" />
                <span>Notre offre claire,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange" aria-hidden="true" />
                <span>Notre réseau étendu de partenaires stratégiques,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange" aria-hidden="true" />
                <span>Notre expertise approfondie des langues, des spécificités politiques et culturelles de la région,</span>
              </li>
            </ul>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.7] text-gray-700">
              Font de nous le partenaire de confiance idéal pour accompagner
              votre expansion.
            </p>
          </RevealOnScroll>

          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
            {packs.map((p, i) => (
              <RevealOnScroll
                as="article"
                key={p.title}
                variant="up"
                delay={0.1}
                index={i}
                className="rounded-card border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lift lg:p-10"
              >
                <h3 className="font-display text-[1.5rem] font-semibold leading-tight tracking-tight text-navy lg:text-[1.625rem]">
                  Pack « {p.title} »
                </h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-gray-700">
                  {p.body}
                </p>
                <a
                  href="/nossolutions"
                  className="mt-6 inline-flex items-center gap-2 font-display text-[0.9rem] font-medium text-navy link-underline"
                >
                  En savoir plus
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 7H13M13 7L7 1M13 7L7 13"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS — Trois piliers */}
      <section className="bg-surface-alt py-20 lg:py-28">
        <div className="container-x">
          <RevealOnScroll variant="up">
            <p className="eyebrow text-orange">Nos solutions</p>
            <h2 className="mt-4 max-w-3xl font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-navy text-balance md:text-[2.5rem] lg:text-[2.75rem]">
              Trois piliers pour{" "}
              <span className="italic text-orange">concrétiser vos projets.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.7] text-gray-700">
              Nos services sont conçus comme un parcours en trois étapes —
              celles-ci pouvant être également développées séparément en
              fonction de l'objectif à atteindre. Du diagnostic à la conquête
              de nouveaux marchés.
            </p>
          </RevealOnScroll>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {solutions.map(([src, title, desc], i) => (
              <RevealOnScroll key={title} variant="up" delay={0.1} index={i}>
                <ImageCard
                  src={src}
                  title={title}
                  description={desc}
                  href="/nossolutions"
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* "Accélérateur de particules" — About / positionnement */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <RevealOnScroll variant="up" className="relative">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-card border border-gray-200 bg-gray-100 shadow-lift">
                <img
                  src={ASSET + "accela-scaled.webp"}
                  alt="L'équipe AS Biz Dev au travail — accélérateur de particules."
                  width="1024"
                  height="748"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll variant="right" delay={0.15}>
              <p className="eyebrow text-orange">Notre posture</p>
              <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-navy text-balance md:text-[2.5rem] lg:text-[2.75rem]">
                Accélérateur{" "}
                <span className="italic text-orange">de particules.</span>
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-gray-700">
                Heureusement pour vous, AS Biz Dev n'est pas du tout celle que
                vous croyez ! Nous ne sommes pas cette énième start-up de
                business development qui vous vend du rêve à la pelle et des
                solutions miracle pour vous rendre plus beaux et plus forts. À
                dire vrai, nous sommes même tout le contraire. Chez AS Biz
                Dev, nous savons garder les pieds sur terre et tenir nos
                engagements. Nous trouvons les réponses les plus adaptées à vos
                besoins en développant, à vos côtés, des projets clés en main
                que nous exécutons de bout en bout, et plus particulièrement
                sur la zone Afrique &amp; Moyen-Orient.
              </p>
              <p className="mt-4 text-[1.0625rem] leading-[1.7] text-gray-700 italic text-navy">
                Votre réussite est notre marque de fabrique.
              </p>
              <a href="/whoiswho" className="btn-ghost mt-8">
                Découvrir l'équipe
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 7H13M13 7L7 1M13 7L7 13"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* NOS VALEURS */}
      <section className="bg-surface-alt py-20 lg:py-28">
        <div className="container-x">
          <RevealOnScroll variant="up" className="max-w-3xl">
            <p className="eyebrow text-orange">Nos valeurs</p>
            <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-navy text-balance md:text-[2.5rem] lg:text-[2.75rem]">
              Parce qu'elles nous rendent{" "}
              <span className="italic text-orange">meilleurs.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.7] text-gray-700">
              La confiance que vous placez en nous se mérite. Pour la gagner,
              nous avons choisi d'être nous-mêmes, fidèles aux valeurs de
              loyauté, d'engagement et de responsabilité qui nous
              caractérisent au quotidien. Constitutives de notre ADN, elles
              irriguent nos choix, façonnent nos actions et nous poussent à
              l'excellence.
            </p>
          </RevealOnScroll>

          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
            {values.map(([src, title, desc], i) => (
              <RevealOnScroll
                as="article"
                key={title}
                variant="up"
                delay={0.1}
                index={i}
                className="rounded-card border border-gray-200 bg-white p-2 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-gray-100">
                  <img
                    src={ASSET + src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width="640"
                    height="480"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-[1.5rem] font-semibold leading-tight tracking-tight text-navy lg:text-[1.625rem]">
                    {title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-700">
                    {desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
