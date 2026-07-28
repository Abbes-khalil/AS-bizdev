import { ASSET } from "../components/siteData";
import SectionHeading from "../components/SectionHeading";

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
      "La confiance que vous placez en nous se mérite. AS Biz Dev a choisi de rester fidèle à ses valeurs fondamentales — elles façonnent nos choix, nos actions et nous portent vers l'excellence.",
    items: [
      ["nosvaleurs/LOYAUTE.webp", "Loyauté", "La loyauté conserve sa noblesse chez AS Biz Dev. Elle conditionne notre travail et constitue le pivot de la relation client. Être loyal, c'est avoir un profond respect pour qui vous êtes — du modeste PME au grand groupe industriel, en Europe, en Asie, en Amérique du Nord ou au Moyen-Orient. Nous adaptons nos méthodes de travail à votre culture et tenons notre parole : pas de promesses hasardeuses, pas de dérapage budgétaire."],
      ["nosvaleurs/ENGAGEMENT.webp", "Engagement", "Travailler avec vous ne se résume pas à quelques signatures au dos d'un contrat. C'est l'engagement indéfectible de toute une équipe pour amener votre entreprise là où vous l'avez projetée. Notre investissement ne connaît ni frontière ni fuseau horaire : notre temporalité est celle du terrain, de l'objectif et des délais. Nous nous adaptons à toutes les contraintes, avec discernement, pragmatisme et transparence."],
      ["nosvaleurs/RESPONSABILITE-.webp", "Responsabilité", "AS Biz Dev n'est pas le fruit d'une ambition personnelle détachée des enjeux écologiques et sociétaux. Nous souhaitons, au contraire, apporter notre petite pierre à l'édifice vertueux du développement durable. Notre responsabilité est économique (tarification équitable), sociale (droits des travailleurs, diversité, formation) et environnementale (limitation de l'empreinte carbone, tri et recyclage)."],
    ],
  },
  expertise: {
    eyebrow: "Notre savoir-faire",
    title: (
      <>
        Toute la palette de notre{" "}
        <span className="italic text-orange">expérience.</span>
      </>
    ),
    intro:
      "Vous faire profiter de notre expérience internationale dans les secteurs clés du business development. Trois compétences au service d'un même objectif : votre croissance.",
    items: [
      ["notresavoirfaire/Organiser-en-amont.webp", "Organiser en amont", "D'une bonne organisation en amont dépend souvent la réussite d'un projet. Nous maîtrisons la chaîne produit, du sourcing à la gestion des stocks, pour vous aider à prendre les bonnes décisions."],
      ["notresavoirfaire/Accroitre-la-visibilite.webp", "Accroître la visibilité", "Un produit ne vaut que s'il est connu et adopté. Nous travaillons le positionnement, la communication, l'étude de marché et les bons relais pour capter les clients potentiels."],
      ["notresavoirfaire/management.webp", "Accompagner le management", "Le management ne se décrète pas. Nous apportons un regard extérieur expérimenté pour valoriser les compétences, former les équipes et instaurer la confiance dans les périodes de changement."],
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
      "Vous avez envie de faire évoluer votre entreprise ? Vous ne savez pas comment développer son potentiel et valoriser ses atouts ? AS Biz Dev peut vous donner le coup d'accélérateur nécessaire en mettant à votre service ses compétences multisectorielles, un savoir-faire éprouvé, son expertise de la zone Afrique & Moyen-Orient et son réseau international de professionnels chevronnés.",
    items: [
      ["nossolutions/La-gestion-de-projet.webp", "La gestion de projet", "Lancer un produit, conquérir un marché ou plus simplement trouver de nouveaux fournisseurs ne s'improvise pas. Cela nécessite une parfaite connaissance de la gestion de projet : rédaction du business plan, planification et coordination des tâches, mise en œuvre de solutions logistiques et opérationnelles, contrôle d'exécution, optimisation des ressources et gestion des risques. Avec nous, vous gagnerez du temps et de l'argent."],
      ["nossolutions/Le-developpement-0Acommercial-copie.webp", "Le développement commercial", "Vous possédez un réel savoir-faire mais vous ne savez pas comment le faire savoir. Nous vous proposons une stratégie de distribution efficace : identification de futurs partenaires locaux, conception et adaptation de solutions techniques pour conquérir de nouveaux marchés, gestion de la stratégie marketing et de la relation client."],
      ["nossolutions/Laccompagnement-.webp", "L'accompagnement", "Faire évoluer une entreprise impulse souvent une nouvelle dynamique, synonyme de changements internes. AS Biz Dev vous permet de passer le cap en douceur grâce à sa solide expérience des situations de transition. Nous accompagnons vos collaborateurs pas à pas, en les impliquant dans le changement d'organisation et en leur proposant des formations ad hoc pour gérer les nouvelles perspectives de croissance."],
    ],
  },
};

export default function ContentPage({ kind }) {
  const page = pageContent[kind];
  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 pattern-dots opacity-[0.15]"
          aria-hidden="true"
        />
        <div className="relative container-x py-20 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-orange" aria-hidden="true" />
              <p className="eyebrow text-orange">{page.eyebrow}</p>
            </div>
            <h1 className="mt-6 font-display display-xl font-semibold text-navy text-balance">
              {page.title}
            </h1>
            <p className="mt-8 text-[1.125rem] leading-[1.7] text-gray-700">
              {page.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 lg:pb-32">
        <div className="container-x">
          <div className="space-y-24 lg:space-y-32">
            {page.items.map(([src, title, text], i) => (
              <article
                key={title}
                className={`grid items-center gap-10 lg:gap-16 lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-gray-100 shadow-lift">
                  <img
                    src={ASSET + src}
                    alt={title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-badge bg-white/95 px-3 py-1.5 shadow-soft backdrop-blur">
                    <span className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-navy">
                      0{i + 1} — {page.eyebrow}
                    </span>
                  </div>
                  {/* Orange accent line at top */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-1 w-1/3 bg-orange"
                  />
                </div>
                <div>
                  <p className="font-display text-[0.75rem] font-medium uppercase tracking-widest text-orange">
                    0{i + 1} / 0{page.items.length}
                  </p>
                  <h2 className="mt-4 font-display display-md font-semibold tracking-tight text-navy">
                    {title}
                  </h2>
                  <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.7] text-gray-700">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-24 flex flex-col items-center gap-4 text-center lg:mt-32">
            <div className="inline-flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-orange" aria-hidden="true" />
              <p className="eyebrow text-orange">Aller plus loin</p>
            </div>
            <h3 className="font-display display-md font-semibold tracking-tight text-navy text-balance">
              Prêt à transformer ces principes en croissance ?
            </h3>
            <a href="/contact" className="btn-primary mt-2">
              Démarrer un projet
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
