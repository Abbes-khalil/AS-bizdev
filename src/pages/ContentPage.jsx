import { ASSET } from "../components/siteData";
import RevealOnScroll from "../components/RevealOnScroll";

/**
 * pageContent — verbatim copy from asbizdev.com (origin).
 *
 * Each `items` entry renders an alternating image+text block. Some origin
 * sections have a labeled intro paragraph followed by sub-blocks. For those
 * we use a structured `subsections` array per item. Items without
 * subsections simply render the intro + a single body paragraph.
 *
 * Each value-section can include an "body" string used when there is no
 * `subsections` array, plus an `accent` flag rendered as italic emphasis
 * (used for the partnership / loyalty inline subtitles on the origin).
 */

export const pageContent = {
  values: {
    eyebrow: "Parce qu'elles nous rendent meilleurs",
    title: (
      <>
        Loyauté, engagement,{" "}
        <span className="italic text-orange">responsabilité.</span>
      </>
    ),
    intro:
      "La confiance que vous placez en nous se mérite. Pour la gagner, nous avons choisi d'être nous-mêmes, fidèles aux valeurs de loyauté, d'engagement et de responsabilité qui nous caractérisent au quotidien. Constitutives de notre ADN, elles irriguent nos choix, façonnent nos actions et nous poussent à l'excellence.",
    cta: {
      eyebrow: "Aller plus loin",
      heading: "Prêt à transformer ces principes en croissance ?",
      label: "Démarrer un projet",
      href: "/contact",
    },
    items: [
      {
        src: "nosvaleurs/LOYAUTE.webp",
        title: "Loyauté",
        intro:
          "Chez AS Biz Dev, la loyauté a gardé toutes ses lettres de noblesse. Elle conditionne notre travail et constitue le pivot de la relation client.",
        subsections: [
          {
            heading: "« Pour nous, être loyal c'est avoir un profond respect de qui vous êtes »",
            body: "Chaque client, du modeste PME au grand groupe industriel, en Europe, en Asie, en Amérique du Nord ou au Moyen-Orient, est considéré avec la même attention à sa culture.",
          },
          {
            heading: "« Pour nous être loyal, c'est respecter la parole donnée »",
            body: "Pas de promesses hasardeuses, pas de dérapage budgétaire : nos clients savent en permanence où ils vont. Nous nous engageons à faire ce que nous disons.",
          },
          {
            heading: "« Pour nous, être loyal, c'est surtout être intègre »",
            body: "Entretenir une relation de confiance, dans la fidélité la plus totale à l'exécution du projet, voilà un autre engagement fondamental.",
          },
        ],
      },
      {
        src: "nosvaleurs/ENGAGEMENT.webp",
        title: "Engagement",
        intro:
          "Travailler avec vous ne se résume pas à quelques signatures au dos d'un contrat.",
        body: "C'est l'engagement indéfectible de toute une équipe pour amener votre entreprise là où vous l'avez projetée. Notre investissement ne connaît ni frontière ni fuseau horaire : notre temporalité est celle du terrain, de l'objectif et des délais. Plutôt que de foncer tête baissée, nous nous engageons avec discernement et pragmatisme, et ne faisons que ce qui peut être fait avec honnêteté et transparence. Nous ne présentons jamais à nos clients un fait accompli : une fois le problème clairement posé, nous leur apportons la solution la plus fiable, avec abnégation et persévérance.",
      },
      {
        src: "nosvaleurs/RESPONSABILITE-.webp",
        title: "Responsabilité",
        intro:
          "AS Biz Dev n'est pas le fruit d'une ambition personnelle détachée des enjeux écologiques et sociétaux.",
        body: "Nous souhaitons, au contraire, apporter notre petite pierre à l'édifice vertueux du développement durable. Notre responsabilité est triple : économique (tarification équitable, factures payées en temps et en heure, soutien aux fournisseurs locaux), sociale (respect des droits des travailleurs, développement de l'égalité des chances et de la diversité, garantie des conditions d'hygiène et de sécurité au travail, formation des collaborateurs) et environnementale (limitation de notre empreinte carbone en ne nous déplaçant que lorsque c'est indispensable, limitation et tri des déchets, incitation à l'utilisation de matériaux recyclés, et favorisation des circuits courts de distribution et d'approvisionnement).",
      },
    ],
  },

  expertise: {
    eyebrow: "Notre savoir-faire",
    title: (
      <>
        Vous faire profiter de toute la{" "}
        <span className="italic text-orange">palette de notre expérience.</span>
      </>
    ),
    intro:
      "Avec AS Biz Dev, vous bénéficiez d'un savoir-faire opérationnel unique, basé sur 20 ans d'expérience internationale dans tous les secteurs clés du business development. Nous sommes les premiers de cordée qui vous ouvrons la voie du succès.",
    epigraph:
      "Un bon projet, sur le papier, le reste-t-il sur le terrain ? Une organisation mal préparée en amont, un développement mal géré en aval, un management hasardeux… et c'est la sortie de route avant même le premier coup d'accélérateur.",
    cta: {
      eyebrow: "Aller plus loin",
      heading: "Prêt à transformer ces principes en croissance ?",
      label: "Démarrer un projet",
      href: "/contact",
    },
    items: [
      {
        src: "notresavoirfaire/Organiser-en-amont.webp",
        title: "Organiser en amont",
        lead: "« Rien ne sert de courir, il faut partir à point »",
        body: "Frappé au coin du bon sens, le proverbe a vu juste : d'une bonne organisation en amont dépend souvent la réussite d'un projet. Quel fournisseur ? À quel coût ? Dans quels délais ? Autant de questions qui nécessitent une connaissance fine du processus industriel et une réelle maîtrise de la chaîne produit. De l'usine au client, AS Biz Dev est dans son jardin. Développé à l'échelle internationale au contact de l'industrie automobile (Mecaplast, CNH Industrial), son savoir-faire couvre toutes les étapes de la fabrication jusqu'à l'arrivée du produit : sourcing, planification, commandes, gestion du stock, nous sommes là pour évaluer les impacts économiques et vous aider à prendre les bonnes décisions. Avec nous, la production ressemble à long fleuve (presque) tranquille.",
      },
      {
        src: "notresavoirfaire/Accroitre-la-visibilite.webp",
        title: "Accroître la visibilité",
        body: "Aussi innovant ou séduisant soit-il, un produit ne vaut que s'il est connu et adopté par le plus grand nombre. Cela implique d'avoir réfléchi à une politique de développement en aval de la production. AS Biz Dev peut contribuer à vous démarquer et vous rendre plus visible car nous avons un véritable savoir-faire du faire savoir. Pour avoir géré de gros budgets marketing et communication, notamment chez Primagaz France, le Product Marketing et la Marketing Communication n'ont plus de secret pour nous. Nous en maîtrisons les codes et savons les utiliser pour une efficacité maximale. Mise en valeur de la qualité du produit, études de la concurrence et du marché à toucher, plan de communication, nous trouvons les bons arguments et ciblons les bons supports médias pour capter les clients potentiels. Vous avez le produit, nous vous offrons sa vitrine.",
      },
      {
        src: "notresavoirfaire/management.webp",
        title: "Accompagner le management",
        body: "Tout changement dans une organisation bien huilée, voire routinière, devient vite un caillou dans la chaussure de qui ne sait pas l'accompagner. Compétence douce s'il en est, le management ne se décrète pas. Il s'adapte, s'affine et évolue avec l'entreprise. Gérer un budget en pleine croissance, emporter l'adhésion d'une équipe ne sont pas choses faciles. Un regard extérieur, surtout s'il est expérimenté, aide souvent à passer le cap. AS Biz Dev peut vous apporter cette expertise. Gérer un effectif de 50 personnes sur cinq sites différents et en quatre langues fut notre quotidien pendant quelques années. Grâce à cela, nous avons appris comment s'appuyer sur l'existant pour aller de l'avant et instaurer la confiance. Être sincère avec ses collaborateurs, être bien organisé, valoriser les compétences, en apporter de nouvelles par le biais de la formation, donner du sens à ce qui est fait par chacun, telles sont les quelques clés d'un management réussi pour faire grandir votre entreprise en toute sérénité.",
      },
    ],
  },

  solutions: {
    eyebrow: "Accompagner votre croissance",
    title: (
      <>
        Du projet à son{" "}
        <span className="italic text-orange">déploiement.</span>
      </>
    ),
    intro:
      "Vous avez envie de faire évoluer votre entreprise ? Vous ne savez pas comment développer son potentiel et valoriser ses atouts ? AS Biz Dev peut vous donner le coup d'accélérateur nécessaire en mettant à votre service ses compétences multisectorielles, un savoir-faire éprouvé, son expertise de la zone Afrique & Moyen-Orient ainsi que son réseau international de professionnels chevronnés. Que vous soyez une modeste PME locale ou un groupe industriel mondial, nos solutions s'ajustent à vos besoins en toute flexibilité. Elles vous sont fournies, clés en main, avec la garantie d'une exécution au cordeau puisque nous en assurons le suivi du début à la fin. S'inscrivant dans une véritable démarche-qualité, nos services sont conçus comme un parcours en trois étapes, celles-ci pouvant être également développées séparément en fonction de l'objectif à atteindre. Avant d'envisager des opportunités de croissance, il convient tout d'abord de dresser un état des lieux de votre entreprise afin d'analyser ses forces et ses faiblesses…",
    cta: {
      eyebrow: "Aller plus loin",
      heading: "Prêt à transformer ces principes en croissance ?",
      label: "Démarrer un projet",
      href: "/contact",
    },
    items: [
      {
        src: "nossolutions/La-gestion-de-projet.webp",
        title: "La gestion de projet",
        body: "Lancer un produit, conquérir un marché ou plus simplement trouver de nouveaux fournisseurs ne s'improvise pas. Cela nécessite une parfaite connaissance de la gestion de projet car de son efficacité, dépend souvent la réussite de ce dernier. C'est justement là où AS Biz Dev vous sera précieuse : rédaction d'un business plan, planification et coordination des tâches, mise en œuvre de solutions logistiques et opérationnelles, contrôle d'exécution, optimisation des ressources, gestion des risques, nous maîtrisons tous les maillons de la chaîne. Avec nous, vous gagnerez du temps et de l'argent en mobilisant vos ressources a minima.",
      },
      {
        src: "nossolutions/Le-developpement-0Acommercial-copie.webp",
        title: "Le développement commercial",
        body: "Vous possédez un réel savoir-faire mais vous ne savez pas comment le faire savoir. AS Biz Dev peut vous y aider en devenant votre porte-voix. Nous sommes à même de vous proposer une stratégie de distribution efficace que nous développons à vos côtés : nous identifions de futurs partenaires locaux et vous mettons en relation avec eux. Nous concevons et adaptons des solutions techniques pour conquérir de nouveaux marchés. Nous gérons, également, la stratégie marketing et la relation client. Grâce à nous, votre développement commercial décollera et vous en serez le copilote.",
      },
      {
        src: "nossolutions/Laccompagnement-.webp",
        title: "L'accompagnement",
        body: "Faire évoluer une entreprise impulse souvent une nouvelle dynamique, synonyme de changements internes. Quelles que soient leur importance, ces innovations rompent avec une organisation établie et bouleversent les habitudes. Elles sont alors trop souvent vécues dans l'inconfort et le stress liés à l'inconnu. AS Biz Dev vous permet de passer le cap en douceur grâce à sa solide expérience des situations de transition. Pour nous, l'évolution d'une entreprise n'est bénéfique que si elle est comprise et partagée par tous. Nous accompagnons donc vos collaborateurs, pas à pas, dans leur conversion, en prêtant une oreille attentive à leur ressenti et en les impliquant dans le changement d'organisation. Nous pouvons également leur proposer des formations ad hoc afin de les préparer à gérer au mieux les nouvelles perspectives de croissance qui les attendent. Parce qu'il nous semble tout aussi capital de préparer très concrètement les entrepreneurs de demain aux enjeux économiques mondiaux, AS Biz Dev est également en capacité de développer des formations thématiques de business development à destination des étudiants des universités, des écoles de commerce et de management ou des écoles d'ingénieur. La transmission fait, en effet, partie de nos valeurs et nous serons toujours heureux et fiers de partager notre savoir-faire avec le plus grand nombre.",
      },
    ],
  },
};

export default function ContentPage({ kind }) {
  const page = pageContent[kind];
  const total = page.items.length;
  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 pattern-dots opacity-[0.15]"
          aria-hidden="true"
        />
        <div className="relative container-x py-20 lg:py-28">
          <RevealOnScroll variant="up" className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-3">
              <span
                className="h-1 w-10 rounded-full bg-orange"
                aria-hidden="true"
              />
              <p className="eyebrow text-orange">{page.eyebrow}</p>
            </div>
            <h1 className="mt-6 font-display display-xl font-semibold text-navy text-balance">
              {page.title}
            </h1>
            <p className="mt-8 text-[1.125rem] leading-[1.7] text-gray-700">
              {page.intro}
            </p>
            {page.epigraph && (
              <blockquote className="mt-10 border-l-2 border-orange pl-6 italic text-[1.0625rem] leading-[1.7] text-navy">
                {page.epigraph}
              </blockquote>
            )}
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-white pb-24 lg:pb-32">
        <div className="container-x">
          <div className="space-y-24 lg:space-y-32">
            {page.items.map((item, i) => (
              <RevealOnScroll
                as="article"
                key={item.title}
                variant={i % 2 ? "left" : "right"}
                className={`grid items-center gap-10 lg:gap-16 lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-gray-100 shadow-lift">
                  <img
                    src={ASSET + item.src}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-badge bg-white/95 px-3 py-1.5 shadow-soft backdrop-blur">
                    <span className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-navy">
                      0{i + 1} — {page.eyebrow}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-1 w-1/3 bg-orange"
                  />
                </div>
                <div>
                  <p className="font-display text-[0.75rem] font-medium uppercase tracking-widest text-orange">
                    0{i + 1} / 0{total}
                  </p>
                  <h2 className="mt-4 font-display display-md font-semibold tracking-tight text-navy">
                    {item.title}
                  </h2>
                  {item.intro && (
                    <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.7] text-gray-700">
                      {item.intro}
                    </p>
                  )}
                  {item.lead && (
                    <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.7] italic text-navy">
                      {item.lead}
                    </p>
                  )}
                  {item.body && (
                    <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.7] text-gray-700">
                      {item.body}
                    </p>
                  )}
                  {Array.isArray(item.subsections) && item.subsections.length > 0 && (
                    <div className="mt-8 space-y-8">
                      {item.subsections.map((sub, j) => (
                        <div key={j}>
                          <h3 className="font-display text-[1.125rem] font-semibold leading-tight text-navy">
                            {sub.heading}
                          </h3>
                          <p className="mt-3 max-w-xl text-[1.0625rem] leading-[1.7] text-gray-700">
                            {sub.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll
            variant="up"
            className="mt-24 flex flex-col items-center gap-4 text-center lg:mt-32"
          >
            <div className="inline-flex items-center gap-3">
              <span
                className="h-1 w-10 rounded-full bg-orange"
                aria-hidden="true"
              />
              <p className="eyebrow text-orange">{page.cta.eyebrow}</p>
            </div>
            <h3 className="font-display display-md font-semibold tracking-tight text-navy text-balance">
              {page.cta.heading}
            </h3>
            <a href={page.cta.href} className="btn-primary mt-2">
              {page.cta.label}
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
      </section>
    </main>
  );
}
