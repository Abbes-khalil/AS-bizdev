import { ASSET } from "../components/siteData";
import SectionHeading from "../components/SectionHeading";
import { ImageCard } from "../components/Card";

const solutions = [
  [
    "nossolutions/La-gestion-de-projet.webp",
    "La gestion de projet",
    "Lancer un produit, conquérir un marché ou trouver de nouveaux fournisseurs ne s'improvise pas. Business plan, planification, coordination, logistique et contrôle d'exécution : nous maîtrisons tous les maillons de la chaîne.",
  ],
  [
    "nossolutions/Le-developpement-0Acommercial-copie.webp",
    "Le développement commercial",
    "Vous avez un savoir-faire mais ne savez pas comment le faire savoir. Nous identifions les partenaires locaux, concevons la stratégie de distribution et adaptons les solutions techniques à vos marchés cibles.",
  ],
  [
    "nossolutions/Laccompagnement-.webp",
    "L'accompagnement",
    "Faire évoluer une entreprise impulse une nouvelle dynamique. Nous accompagnons vos collaborateurs pas à pas dans les transitions, les formations et les nouvelles perspectives de croissance.",
  ],
];

const values = [
  [
    "nosvaleurs/LOYAUTE.webp",
    "Loyauté",
    "Chez nous AS Biz Dev, la loyauté conditionne notre travail et constitue le pivot de notre relation client. C'est avoir un profond respect de qui vous êtes : que vous soyez une modeste PME ou un grand groupe industriel, nous adaptons nos méthodes à vos pratiques commerciales…",
    "/nosvaleurs",
  ],
  [
    "nosvaleurs/ENGAGEMENT.webp",
    "Engagement",
    "Notre engagement ne connaît pas de frontière : peu importe les kilomètres parcourus et les décalages horaires, notre temporalité est celle du terrain, de l'objectif à atteindre et des délais fixés. Nous nous adaptons à toutes les contraintes… pourvu qu'elles soient indispensables à la réussite du projet…",
    "/nosvaleurs",
  ],
  [
    "nosvaleurs/RESPONSABILITE-.webp",
    "Responsabilité",
    "AS Biz Dev n'est pas le fruit d'une ambition personnelle détachée des enjeux écologiques et sociétaux. Nous souhaitons, bien au contraire, apporter notre petite pierre à l'édifice vertueux du développement durable. Depuis sa création, notre entreprise s'inscrit dans une démarche responsable…",
    "/nosvaleurs",
  ],
];

const packs = [
  {
    n: "01",
    title: "Pack Découverte",
    body: "Diagnostic et évaluation précise du potentiel de votre marché, avec une analyse fine des écosystèmes et des ressources nécessaires.",
  },
  {
    n: "02",
    title: "Pack Conquête",
    body: "Appui sur notre réseau étendu et notre rôle d'agent pour faciliter vos transactions commerciales et accélérer votre prise de position.",
  },
  {
    n: "03",
    title: "Pack Développement",
    body: "Présence commerciale complète sur la zone — sans alourdir votre structure interne ni votre compte de résultat.",
  },
];

const regions = [
  "France",
  "Maroc",
  "Tunisie",
  "Algérie",
  "Sénégal",
  "Côte d'Ivoire",
  "Cameroun",
  "Émirats",
  "Arabie Saoudite",
  "Qatar",
  "Égypte",
  "Turquie",
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        {/* Decorative navy dot grid (Pattern 01) */}
        <div
          className="pointer-events-none absolute inset-0 pattern-dots opacity-[0.18]"
          aria-hidden="true"
        />
        {/* Orange diagonal line corner accent (Pattern 02) */}
        <div
          className="pointer-events-none absolute -right-20 top-0 h-[40rem] w-[40rem] opacity-[0.08] pattern-lines"
          aria-hidden="true"
        />
        {/* Large floating circles (Pattern 06) */}
        <div
          className="pointer-events-none absolute -left-40 top-40 h-[40rem] w-[40rem] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(closest-side, #1D3D6D, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative container-x pt-[120px] pb-24 md:pt-[140px] md:pb-32 lg:pt-[160px] lg:pb-40">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div className="reveal">
              <div className="inline-flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-orange" aria-hidden="true" />
                <p className="eyebrow text-orange">
                  Accélérez et consolidez votre développement
                </p>
              </div>
              <h1 className="mt-8 font-display display-xl font-semibold text-navy text-balance">
                Votre relais opérationnel{" "}
                <span className="italic text-orange">sur trois continents.</span>
              </h1>
              <p className="mt-6 font-display text-[1.125rem] leading-snug text-gray-700">
                France · Afrique · Moyen-Orient
              </p>

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

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="/contact" className="btn-primary">
                  Contactez-Nous
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
                <a href="/notresavoirfaire" className="btn-secondary">
                  Découvrir nos méthodes
                </a>
              </div>

              <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-gray-200 pt-10">
                <div>
                  <dt className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-gray-500">
                    Années
                  </dt>
                  <dd className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy lg:text-4xl">
                    <span aria-label="Plus de 7 ans">7+</span>
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-gray-500">
                    Entreprises
                  </dt>
                  <dd className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy lg:text-4xl">
                    <span aria-label="Plus de 30 Entreprises">
                      30<span className="text-orange">+</span>
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-gray-500">
                    Décideurs Qualifiés
                  </dt>
                  <dd className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy lg:text-4xl">
                    <span aria-label="Plus de 7000 décideurs qualifiés ">
                      7000+
                    </span>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="reveal reveal-d2 relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card border border-gray-200 bg-gray-100 shadow-lift">
                <img
                  src={ASSET + "maps.webp"}
                  alt="Carte des zones d'intervention d'AS Biz Dev couvrant la France, l'Afrique du Nord, l'Afrique de l'Ouest et le Moyen-Orient."
                  width="640"
                  height="800"
                  fetchpriority="high"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent"
                  aria-hidden="true"
                />
                {/* Floating badge */}
                <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 shadow-soft backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange" />
                  <span className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-navy">
                    Live ops · 4 zones
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 rounded-card bg-white/95 p-5 shadow-lift backdrop-blur">
                  <p className="eyebrow text-orange">Cap opérationnel</p>
                  <p className="mt-2 font-display text-xl font-semibold leading-tight text-navy">
                    France · Afrique du Nord · Afrique de l'Ouest · Moyen-Orient
                  </p>
                </div>
              </div>
              {/* Decorative offset element (Pattern 04) */}
              <div
                className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-card border border-gray-200 bg-white lg:block"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Marquee — list of regions served */}
        <div
          className="relative border-y border-gray-200 bg-surface-alt"
          aria-label="Régions d'intervention"
        >
          <ul className="marquee-mask flex w-max animate-marquee items-center gap-12 py-6">
            {[...regions, ...regions].map((r, i) => (
              <li
                key={`${r}-${i}`}
                className="flex items-center gap-12 font-display text-2xl font-medium tracking-tight text-gray-400"
                aria-hidden={i >= regions.length ? "true" : undefined}
              >
                {r}
                <span className="text-orange" aria-hidden="true">
                  ●
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-x">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <div className="inline-flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-orange" aria-hidden="true" />
                <p className="eyebrow text-orange">Une ambition, une méthode</p>
              </div>
              <h2 className="mt-6 font-display display-lg font-semibold text-navy text-balance">
                Votre relais opérationnel
                <br />
                <span className="italic text-orange">sur les marchés</span>{" "}
                internationaux.
              </h2>
            </div>
            <div className="space-y-6 text-gray-700 lg:max-w-xl">
              <p className="text-[1.0625rem] leading-[1.7]">
                Animés par la volonté de construire avec vous des entreprises
                durables, nous mettons à votre service des solutions industrielles
                innovantes et la digitalisation des processus industriels et
                commerciaux, avec une approche agile au cœur de notre capacité à
                détecter les bonnes opportunités.
              </p>
              <p className="font-display text-2xl font-semibold leading-tight text-navy">
                Heureusement pour vous, AS Biz Dev{" "}
                <span className="italic text-orange">
                  n'est pas du tout celle que vous croyez !
                </span>
              </p>
              <a href="/whoiswho" className="btn-ghost mt-2">
                Rencontrer l'équipe
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
            </div>
          </div>
        </div>
      </section>

      {/* PACKS — Navy dark band */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          className="pointer-events-none absolute inset-0 grid-bg-dark opacity-40"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-40 top-20 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,106,0,0.25), transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative container-x py-24 lg:py-32">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-orange" aria-hidden="true" />
                <p className="eyebrow text-orange">Notre offre</p>
              </div>
              <h2 className="mt-6 font-display display-lg font-semibold text-white text-balance">
                Accompagner votre{" "}
                <span className="italic text-orange">croissance.</span>
              </h2>
              <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.7] text-white/75">
                Que vous soyez une modeste PME locale ou un groupe industriel
                mondial, nos solutions s'ajustent à vos besoins en toute
                flexibilité.
              </p>
            </div>
            <a
              href="/nossolutions"
              className="inline-flex items-center gap-2 font-display text-[0.95rem] font-medium text-white/85 link-underline"
            >
              Voir toutes les solutions
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
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-card border border-white/15 bg-white/10 lg:grid-cols-3">
            {packs.map((p) => (
              <article
                key={p.n}
                className="group relative bg-navy p-8 transition-colors duration-500 hover:bg-navy-700 lg:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-[0.875rem] font-semibold tracking-widest text-orange">
                    {p.n}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/85 transition-all duration-300 group-hover:border-orange group-hover:bg-orange group-hover:text-white group-focus-visible:border-orange group-focus-visible:bg-orange group-focus-visible:text-white">
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
                  </span>
                </div>
                <h3 className="mt-12 font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-white">
                  Pack « {p.title} »
                </h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-white/75">
                  {p.body}
                </p>
                <a
                  href="/nossolutions"
                  className="mt-8 inline-flex items-center gap-2 font-display text-[0.95rem] font-medium text-white/85 link-underline"
                >
                  En savoir plus
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Nos solutions"
            title={
              <>
                Du projet à son{" "}
                <span className="italic text-orange">déploiement.</span>
              </>
            }
          >
            <p className="mx-auto max-w-2xl">
              Nos services sont conçus comme un parcours en trois étapes —
              celles-ci pouvant être également développées séparément en fonction
              de l'objectif à atteindre. Du diagnostic à la conquête de nouveaux
              marchés.
            </p>
          </SectionHeading>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {solutions.map(([src, title, desc], i) => (
              <ImageCard
                key={title}
                src={src}
                title={title}
                number={`0${i + 1}`}
                description={desc}
                href="/nossolutions"
              />
            ))}
          </div>
        </div>
      </section>

      {/* VALUES — split layout */}
      <section className="bg-surface-alt py-24 lg:py-32">
        <div className="container-x">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="inline-flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-orange" aria-hidden="true" />
                <p className="eyebrow text-orange">Nos valeurs</p>
              </div>
              <h2 className="mt-6 font-display display-lg font-semibold text-navy text-balance">
                Parce qu'elles nous
                <br />
                rendent <span className="italic text-orange">meilleurs.</span>
              </h2>
              <p className="mt-6 max-w-md text-gray-700">
                La confiance que vous placez en nous se mérite. Pour la gagner,
                nous avons choisi d'être nous-mêmes, fidèles aux valeurs de
                loyauté, d'engagement et de responsabilité qui nous caractérisent
                au quotidien. Constitutives de notre ADN, elles irriguent nos
                choix, façonnent nos actions et nous poussent à l'excellence.
              </p>
              <a href="/nosvaleurs" className="btn-ghost mt-8">
                Lire notre manifeste
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
            </div>

            <div className="space-y-6">
              {values.map(([src, title, desc, href], i) => (
                <a
                  key={title}
                  href={href}
                  className="group flex items-center gap-6 rounded-card border border-gray-200 bg-white p-4 transition-all duration-500 hover:border-navy hover:shadow-lift focus-visible:border-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white lg:p-6"
                >
                  <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-card bg-gray-100 lg:w-32">
                    <img
                      src={ASSET + src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width="128"
                      height="128"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus-visible:scale-105"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-orange">
                      0{i + 1} — Valeur
                    </span>
                    <h3 className="mt-2 font-display text-[1.5rem] font-semibold tracking-tight text-navy">
                      {title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] text-gray-700">{desc}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gray-200 text-navy transition-all duration-300 group-hover:border-orange group-hover:bg-orange group-hover:text-white group-focus-visible:border-orange group-focus-visible:bg-orange group-focus-visible:text-white"
                  >
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
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-white pb-24 lg:pb-32">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-card bg-surface-alt p-10 lg:p-20">
            {/* Orange corner accent (Pattern 02 + 06) */}
            <div
              className="pointer-events-none absolute -right-32 -top-32 h-[40rem] w-[40rem] rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,106,0,0.25), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-3">
                  <span className="h-1 w-10 rounded-full bg-orange" aria-hidden="true" />
                  <p className="eyebrow text-orange">
                    Prêt à passer à l'échelle ?
                  </p>
                </div>
                <h2 className="mt-6 font-display display-lg font-semibold text-navy text-balance">
                  Construisons votre
                  <br />
                  prochain{" "}
                  <span className="italic text-orange">
                    territoire de croissance.
                  </span>
                </h2>
              </div>
              <div className="space-y-5">
                <p className="text-gray-700">
                  Décrivez-nous votre ambition. Nous organisons un premier échange
                  sous 48 heures pour cadrer les hypothèses et les zones
                  d'intervention pertinentes.
                </p>
                <a href="/contact" className="btn-primary">
                  Contactez-Nous
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
