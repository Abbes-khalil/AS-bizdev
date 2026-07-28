import { useState } from "react";
import Modal from "../components/Modal";

export default function News() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      label: "News / asbizdev",
      title:
        "Surmonter les Barrières de Paiement dans le Commerce avec l’Afrique : Stratégies et Solutions",
      preview:
        "Lors de mes récentes rencontres professionnelles à Paris, une préoccupation commune a émergé : la crainte des paiements en retard, partiels ou des impayés dans le commerce avec l’Afrique.",
      number: "01",
      content: [
        {
          type: "paragraph",
          text: `Lors de mes récentes rencontres professionnelles à Paris, une préoccupation commune a émergé de mes discussions avec des interlocuteurs européens, américains et chinois : la crainte des paiements en retard, partiels, ou des impayés dans le commerce avec l’Afrique. Cette inquiétude, presque immédiatement soulevée dès qu’il est question de commercer avec ce continent, révèle un obstacle majeur à l’accélération des échanges commerciaux. Pourtant, il existe des stratégies efficaces pour atténuer ces risques et favoriser une collaboration fructueuse.`,
        },
        {
          type: "heading",
          text: "1. La Lettre de Crédit : Une Solution Ancienne mais Fiable",
        },
        {
          type: "paragraph",
          text: `La lettre de crédit se présente comme une solution éprouvée, émise par les banques pour garantir le paiement. Cette méthode offre une sécurité notable, à condition que l’intermédiaire bancaire soit fiable. Cependant, elle implique des contraintes de délai et une rigueur qui limitent toute flexibilité une fois l’accord commercial conclu. Malgré ces contraintes, la lettre de crédit demeure une option solide pour les transactions nécessitant une garantie de paiement.`,
        },
        {
          type: "heading",
          text: "2. L’Assurance-Crédit : Évaluer et Qualifier le Risque",
        },
        {
          type: "paragraph",
          text: `Faire appel à une société d’assurance-crédit peut aider à « qualifier » le risque de défaut de paiement. Des acteurs comme COFACE ou ALLIANZ TRADE jouent un rôle crucial dans ce processus. Toutefois, le principal défi réside dans l’obtention d’informations fiables. En Afrique, nombreux sont les clients qui sont mal identifiés, mal évalués, ou jugés sur la base d’informations obsolètes, voire erronées. Bien que ces assurances offrent une couche de protection, elles ne garantissent pas le paiement intégral et dans les temps.`,
        },
        {
          type: "heading",
          text: "3. Une Approche Hybride : Connaissance Locale et Solutions Combinées",
        },
        {
          type: "paragraph",
          text: `La stratégie la plus efficace pourrait être de combiner les deux méthodes précédentes, en s’associant à un partenaire ayant une connaissance approfondie du marché africain. Un tel partenaire peut évaluer le sérieux d’un client potentiel en s’appuyant sur des informations diverses, souvent absentes des bases de données des assureurs-crédits. Cette approche permet de naviguer avec plus de sûreté dans un environnement commercial complexe, où les données fiables sont parfois difficiles à obtenir.`,
        },
        {
          type: "heading",
          text: "Le Défi des Monnaies Non Convertibles ou Partiellement Convertibles",
        },
        {
          type: "paragraph",
          text: `Un autre aspect à ne pas négliger est la présence de nombreuses monnaies non convertibles ou partiellement convertibles en Afrique. Cette réalité nécessite une intervention accrue des banques centrales, entraînant davantage de procédures administratives et de retards. Ce facteur contribue également à la perception négative des clients africains comme étant de « mauvais payeurs ».`,
        },
        {
          type: "heading",
          text: "Conclusion",
        },
        {
          type: "paragraph",
          text: `Le commerce avec l’Afrique, malgré ses défis, offre d’énormes opportunités. En adoptant une approche stratégique et en utilisant les bons outils, il est possible de minimiser les risques liés aux paiements tout en tirant parti du potentiel commercial du continent. La clé réside dans la connaissance du marché, l’utilisation judicieuse des instruments financiers et l’adaptation aux spécificités régionales.`,
        },
        {
          type: "highlight",
          text: `Dernier conseil : avant de parler prix, pensez à intégrer le coût du risque de paiement dans votre négociation à venir.`,
        },
      ],
    },

    {
      label: "News / asbizdev",
      title:
        "Vendre sur l’Afrique & le Moyen-Orient : Leçons tirées de nos longues années d’expériences de la culture africaine et moyen-orientale",
      preview:
        "Suivre l’évolution d’un monde de plus en plus globalisé n’est pas une mince affaire. Pour réussir en Afrique et au Moyen-Orient, il est essentiel de comprendre les cultures locales.",
      number: "02",
      content: [
        {
          type: "paragraph",
          text: `Suivre l’évolution d’un monde de plus en plus globalisé n’est pas une mince affaire. Les entreprises se développent sur de nouveaux marchés à une vitesse vertigineuse. Il est donc plus important que jamais pour les organisations d’être à la pointe de la vente.`,
        },
        {
          type: "paragraph",
          text: `Pour ceux qui ne se sont pas encore aventurés dans la zone Afrique et Moyen-Orient, voici quelques enseignements que nous avons tirés de notre immersion dans les différentes cultures de cette région riche en opportunités.`,
        },
        {
          type: "heading",
          text: "Soyez flexible dans votre approche",
        },
        {
          type: "paragraph",
          text: `L’une des premières choses à intégrer est que les clients et prospects de cette région accordent beaucoup d’importance aux relations. Ils aiment construire des relations durables et ont tendance à faire confiance aux personnes avec lesquelles ils entretiennent de bons échanges.`,
        },
        {
          type: "paragraph",
          text: `Qu’est-ce que cela signifie pour la vente ? Une approche traditionnelle qui consiste à imposer directement un produit ou un service au client, sans construire de relation, a peu de chances de fonctionner.`,
        },
        {
          type: "paragraph",
          text: `Vos interlocuteurs veulent apprendre à vous connaître, créer une relation avec vous et comprendre clairement comment ce que vous proposez peut leur être bénéfique.`,
        },
        {
          type: "heading",
          text: "Soyez transparent et établissez une relation de confiance avec votre public",
        },
        {
          type: "paragraph",
          text: `Vos interlocuteurs, qu’ils soient prospects ou clients, recherchent de la transparence dans leurs décisions d’achat. Ils veulent comprendre comment votre produit ou votre service peut répondre directement à leurs besoins.`,
        },
        {
          type: "paragraph",
          text: `Une approche marketing traditionnelle qui se concentre uniquement sur les avantages du produit et les forces de l’entreprise a donc peu de chances de fonctionner.`,
        },
        {
          type: "paragraph",
          text: `Votre message marketing doit être clair, facile à comprendre et montrer concrètement au client comment votre solution peut l’aider. Cela est particulièrement important dans le domaine des ventes B2B, où les clients achètent rarement uniquement sur la base des caractéristiques techniques ou des avantages du produit.`,
        },
        {
          type: "heading",
          text: "Le contexte est roi : connaissez votre public et comprenez l’environnement",
        },
        {
          type: "paragraph",
          text: `Lorsque nous avons commencé à travailler sur la zone AME, Afrique et Moyen-Orient, notre objectif initial était de rechercher et de comprendre l’environnement commercial des entreprises industrielles et technologiques.`,
        },
        {
          type: "paragraph",
          text: `Il est essentiel de comprendre le contexte dans lequel vous développez vos activités commerciales.`,
        },
        {
          type: "list",
          items: [
            "Qui sont les principaux décideurs ?",
            "Quels sont les problèmes auxquels ils sont confrontés ?",
            "Quels sont les objectifs de leur organisation ?",
            "Quels résultats souhaitent-ils atteindre ?",
            "Quels sont leurs principaux points sensibles ?",
            "Comment votre organisation peut-elle les aider à surmonter ces difficultés ?",
          ],
        },
        {
          type: "heading",
          text: "Conclusion",
        },
        {
          type: "paragraph",
          text: `La zone Afrique et Moyen-Orient est une région complexe qui nécessite une approche flexible, transparente et adaptée au contexte.`,
        },
        {
          type: "paragraph",
          text: `Certaines pratiques commerciales occidentales peuvent fonctionner, mais elles ne produisent pas forcément les mêmes résultats dans chaque pays. Comprendre l’environnement et les cultures locales constitue donc un bon point de départ pour votre approche commerciale.`,
        },
        {
          type: "paragraph",
          text: `Cette connaissance vous aidera également à éviter certaines erreurs que nous avons nous-mêmes commises au début de notre travail de recherche sur ces marchés.`,
        },
        {
          type: "highlight",
          text: `Choisissez nos solutions de Business Development dès maintenant pour bénéficier d’une approche personnalisée et adaptée à votre situation.`,
        },
      ],
    },

    {
      label: "News / asbizdev",
      title:
        "Trois choses à éviter pour ne pas rater votre projet de Sales Enablement",
      preview:
        "Afin de renforcer leurs équipes de vente, les entreprises doivent utiliser les solutions technologiques dont elles disposent. Le Sales Enablement est une réponse clé.",
      number: "03",
      content: [
        {
          type: "paragraph",
          text: `Afin de renforcer leurs équipes de vente, les entreprises doivent utiliser les solutions technologiques dont elles disposent.`,
        },
        {
          type: "paragraph",
          text: `Le Sales Enablement est une réponse clé pour y parvenir.`,
        },
        {
          type: "heading",
          text: "Trois erreurs à éviter",
        },
        {
          type: "paragraph",
          text: `Pour ne pas échouer dans votre projet de Sales Enablement, il faut éviter trois erreurs principales :`,
        },
        {
          type: "list",
          items: [
            "Mal identifier les besoins de l’entreprise",
            "Ne pas suffisamment impliquer les équipes",
            "Ne pas établir de mesures ou de KPI",
          ],
        },
        {
          type: "heading",
          text: "Une solution adaptée à chaque entreprise",
        },
        {
          type: "paragraph",
          text: `Vous l’avez compris : en matière de Sales Enablement, il n’est pas possible de faire du copier-coller.`,
        },
        {
          type: "highlight",
          text: `Chaque solution doit être unique et adaptée à votre vision, tout en étant partagée avec vos équipes.`,
        },
      ],
    },

    {
      label: "News / asbizdev",
      title:
        "En 2023 « Surmontez les incertitudes et la complexité » ! Faites confiance à des apporteurs d’affaires experts en Afrique et au Moyen-Orient !",
      preview:
        "Le paysage commercial en Afrique et au Moyen-Orient connaît une transformation importante. Avec l’essor de la technologie, la région attire de nombreuses entreprises internationales.",
      number: "04",
      content: [
        {
          type: "paragraph",
          text: `Le paysage commercial en Afrique et au Moyen-Orient est en train de subir une transformation importante. Avec l’essor de la technologie, la région est devenue une destination attrayante pour les entreprises internationales qui cherchent à étendre leurs activités et à avoir un impact durable.`,
        },
        {
          type: "paragraph",
          text: `Cependant, naviguer dans l’environnement commercial complexe de l’Afrique et du Moyen-Orient peut être difficile et coûteux. Il est donc important de s’appuyer sur des apporteurs d’affaires expérimentés pour augmenter ses chances de réussite.`,
        },
        {
          type: "paragraph",
          text: `Dans cet article, nous allons explorer les avantages de travailler avec des apporteurs d’affaires experts, les défis du développement commercial dans la région et les stratégies permettant d’assurer la réussite des projets.`,
        },
        {
          type: "heading",
          text: "Introduction au développement des affaires en Afrique et au Moyen-Orient",
        },
        {
          type: "paragraph",
          text: `Le développement des affaires en Afrique et au Moyen-Orient est un processus complexe qui exige une connaissance approfondie des systèmes politiques, économiques et culturels de la région.`,
        },
        {
          type: "paragraph",
          text: `Il faut également savoir naviguer efficacement dans les réglementations locales et comprendre les différentes politiques fiscales. Les entreprises internationales qui souhaitent entrer sur ces marchés doivent tenir compte des défis propres à chaque pays et mettre en place une stratégie globale.`,
        },
        {
          type: "paragraph",
          text: `L’une des meilleures façons d’y parvenir consiste à établir des partenariats stratégiques avec des apporteurs d’affaires expérimentés.`,
        },
        {
          type: "paragraph",
          text: `Les apporteurs d’affaires sont des professionnels spécialisés dans l’élaboration et la mise en œuvre de stratégies commerciales. Ils peuvent analyser les marchés, identifier les opportunités, développer des campagnes marketing adaptées et mettre en place des processus de vente efficaces.`,
        },
        {
          type: "heading",
          text: "Les avantages de travailler avec des apporteurs d’affaires experts",
        },
        {
          type: "paragraph",
          text: `Travailler avec des apporteurs d’affaires compétents présente plusieurs avantages.`,
        },
        {
          type: "list",
          items: [
            "Bénéficier d’une connaissance approfondie des marchés et des clients locaux",
            "Identifier les meilleures pratiques pour développer de nouveaux produits et services",
            "Choisir des stratégies marketing adaptées au marché",
            "Mieux comprendre les réglementations et les politiques fiscales locales",
            "Identifier des partenaires et des investisseurs potentiels",
            "Élaborer une stratégie commerciale efficace et durable",
          ],
        },
        {
          type: "paragraph",
          text: `Grâce à leur expérience, les apporteurs d’affaires peuvent aider les entreprises à choisir les bonnes stratégies et les bonnes actions pour atteindre leurs objectifs à long terme.`,
        },
        {
          type: "heading",
          text: "Les défis du développement des affaires en Afrique et au Moyen-Orient",
        },
        {
          type: "paragraph",
          text: `Le développement commercial dans la région peut être difficile en raison de la complexité des systèmes politiques et économiques.`,
        },
        {
          type: "list",
          items: [
            "La complexité de l’environnement juridique et réglementaire",
            "Les différences entre les politiques fiscales de chaque pays",
            "Les barrières culturelles et linguistiques",
            "La nécessité de comprendre les coutumes et les pratiques locales",
            "La difficulté à identifier et recruter du personnel qualifié",
          ],
        },
        {
          type: "paragraph",
          text: `Il est donc essentiel de comprendre la culture, les habitudes commerciales et le fonctionnement de chaque marché avant de lancer un projet.`,
        },
        {
          type: "heading",
          text: "Quels sont les différents types de solutions de développement commercial ?",
        },
        {
          type: "paragraph",
          text: `Les solutions de développement commercial varient selon les besoins spécifiques de chaque entreprise.`,
        },
        {
          type: "list",
          items: [
            "Les études de marché",
            "Les analyses de marché",
            "Le développement de produits et de services",
            "Les campagnes marketing",
            "Les stratégies de vente",
            "Le service à la clientèle",
          ],
        },
        {
          type: "subheading",
          text: "Les études et analyses de marché",
        },
        {
          type: "paragraph",
          text: `L’étude de marché consiste à recueillir des informations sur le marché local afin de mieux comprendre les besoins, les tendances et les préférences des clients.`,
        },
        {
          type: "paragraph",
          text: `L’analyse de marché consiste ensuite à étudier ces données afin d’identifier les opportunités, les risques et les menaces potentielles.`,
        },
        {
          type: "subheading",
          text: "Le développement de produits",
        },
        {
          type: "paragraph",
          text: `Le développement de produits consiste à créer ou à adapter des produits et des services afin de répondre plus précisément aux besoins des clients.`,
        },
        {
          type: "subheading",
          text: "Le marketing et les ventes",
        },
        {
          type: "paragraph",
          text: `Les campagnes marketing permettent de créer et d’exécuter des stratégies adaptées pour atteindre les clients. Les stratégies de vente permettent, quant à elles, d’améliorer les performances commerciales et d’augmenter les ventes.`,
        },
        {
          type: "subheading",
          text: "Le service à la clientèle",
        },
        {
          type: "paragraph",
          text: `Le service à la clientèle consiste à accompagner les clients existants, à répondre à leurs besoins et à maintenir une relation durable avec eux.`,
        },
        {
          type: "heading",
          text: "Stratégies pour assurer la réussite des projets de développement commercial",
        },
        {
          type: "paragraph",
          text: `Pour garantir la réussite d’un projet de développement commercial, il est important de disposer d’une équipe expérimentée.`,
        },
        {
          type: "list",
          items: [
            "Définir clairement les objectifs du projet",
            "Établir un calendrier précis",
            "Créer un plan d’action détaillé",
            "Respecter le budget fixé",
            "Maintenir une communication régulière entre les différentes parties",
            "Définir clairement les rôles et les responsabilités de chacun",
          ],
        },
        {
          type: "paragraph",
          text: `Une bonne communication entre l’équipe de développement commercial, l’entreprise, les partenaires et les investisseurs potentiels contribue fortement à la réussite du projet.`,
        },
        {
          type: "heading",
          text: "Conclusion",
        },
        {
          type: "paragraph",
          text: `Le développement commercial en Afrique et au Moyen-Orient peut être un processus difficile et complexe. Pour réussir, il est essentiel de disposer d’une équipe expérimentée et de bien comprendre les réalités locales.`,
        },
        {
          type: "highlight",
          text: `Avec l’aide d’apporteurs d’affaires expérimentés, les entreprises peuvent mieux naviguer dans l’environnement commercial complexe de l’Afrique et du Moyen-Orient et atteindre leurs objectifs.`,
        },
      ],
    },

    {
      label: "News / asbizdev",
      title: "Le développement commercial vs entreprise durable et responsable",
      preview:
        "Le développement commercial est un élément clé dans la création d’une entreprise durable et socialement responsable.",
      number: "05",
      content: [
        {
          type: "paragraph",
          text: `Le développement commercial est un élément clé dans la création d’une entreprise durable et socialement responsable. En effet, il permet de promouvoir les produits ou services de l’entreprise tout en prenant en compte leur impact environnemental et social.`,
        },
        {
          type: "heading",
          text: "Les bénéfices d’un développement commercial responsable",
        },
        {
          type: "paragraph",
          text: `Un développement commercial efficace peut aider l’entreprise à :`,
        },
        {
          type: "list",
          items: [
            "Réduire son empreinte environnementale",
            "Établir des partenariats avec des organisations locales",
            "Augmenter ses revenus tout en proposant des produits ou services éthiques",
            "Impliquer les employés dans des initiatives sociales et environnementales",
          ],
        },
        {
          type: "heading",
          text: "L’importance de la transparence",
        },
        {
          type: "paragraph",
          text: `Pour réussir dans cette démarche, il est important que l’entreprise soit transparente et honnête sur ses pratiques commerciales.`,
        },
        {
          type: "paragraph",
          text: `Les clients et les partenaires doivent être informés des efforts réalisés par l’entreprise en matière de durabilité et de responsabilité sociale.`,
        },
      ],
    },

    {
      label: "News / asbizdev",
      title: "Pourquoi le futur du travail se déroule maintenant ?",
      preview:
        "Il y a quelques mois encore, tout le monde parlait de l’avenir du travail qui serait entièrement numérique. Aujourd’hui, le numérique est devenu la nouvelle norme.",
      number: "06",
      content: [
        {
          type: "paragraph",
          text: `Il y a quelques mois encore, tout le monde parlait de l’avenir du travail qui serait entièrement numérique. Aujourd’hui, le numérique est la nouvelle norme pour les organisations du monde entier, qui ont été contraintes de transformer et de numériser complètement leurs processus d’entreprise.`,
        },
        {
          type: "paragraph",
          text: `Certains experts estiment d’ailleurs que le monde du travail ne sera plus jamais le même. Le coronavirus a fondamentalement changé tous les aspects de l’activité professionnelle : de l’élimination des trajets pour se rendre au travail à la façon dont nous interagissons et collaborons avec nos collègues.`,
        },
        {
          type: "heading",
          text: "Les principales tendances émergentes",
        },
        {
          type: "paragraph",
          text: `Jetons maintenant un coup d’œil à certaines tendances émergentes qui transforment les conditions de travail :`,
        },
        {
          type: "list",
          items: [
            "Le travail à distance, nouveau mode de travail normal",
            "L’accélération des transformations numériques",
            "L’importance accrue de la communication interne",
            "L’évolution du rôle des dirigeants",
            "Des lieux de travail adaptés à la mobilité",
            "Le moral et le bien-être des salariés au premier plan",
          ],
        },
      ],
    },
  ];

  function openArticle(article) {
    setSelectedArticle(article);
  }

  function closeArticle() {
    setSelectedArticle(null);
  }

  function renderContentItem(item, index) {
    const key = `${selectedArticle.number}-${index}`;

    if (item.type === "heading") {
      return (
        <h3
          key={key}
          className="pt-5 font-display text-2xl font-semibold leading-tight text-navy sm:text-3xl"
        >
          {item.text}
        </h3>
      );
    }

    if (item.type === "subheading") {
      return (
        <h4
          key={key}
          className="pt-2 font-display text-xl font-semibold leading-tight text-navy"
        >
          {item.text}
        </h4>
      );
    }

    if (item.type === "list") {
      return (
        <ul key={key} className="space-y-3">
          {item.items.map((listItem, itemIndex) => (
            <li
              key={`${key}-${itemIndex}`}
              className="flex items-start gap-3 text-[1rem] leading-8 text-gray-700"
            >
              <span
                className="mt-[0.8rem] h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                aria-hidden="true"
              />
              <span>{listItem}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (item.type === "highlight") {
      return (
        <div
          key={key}
          className="border-l-4 border-orange bg-orange-50 px-5 py-4"
        >
          <p className="font-medium leading-8 text-navy">{item.text}</p>
        </div>
      );
    }

    return (
      <p key={key} className="text-[1rem] leading-8 text-gray-700">
        {item.text}
      </p>
    );
  }

  return (
    <main>
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          className="pointer-events-none absolute inset-0 grid-bg-dark opacity-40"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,106,0,0.3), transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative container-x py-24 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-orange" aria-hidden="true" />
              <p className="eyebrow text-orange">Le regard AS Biz Dev</p>
            </div>
            <h1 className="mt-6 font-display display-xl font-semibold text-white text-balance">
              Les idées, les marchés et les{" "}
              <span className="italic text-orange">conversations</span> qui
              comptent.
            </h1>
            <p className="mt-8 max-w-2xl text-[1.125rem] leading-[1.7] text-white/75">
              Une sélection de perspectives pour mieux comprendre les dynamiques
              de développement entre la France, l’Afrique et le Moyen-Orient.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between border-b border-gray-200 pb-6">
            <p className="eyebrow text-orange">
              Sélection — {articles.length.toString().padStart(2, "0")} articles
            </p>
            <p className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-gray-400">
              2026 / Q3
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {articles.map((article) => (
              <article
                key={article.number}
                className="group relative flex flex-col overflow-hidden rounded-card border border-gray-200 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                {/* Orange top accent line */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-1 w-0 bg-orange transition-all duration-500 group-hover:w-full"
                />
                <div className="p-8 lg:p-10">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="eyebrow text-orange">{article.label}</span>
                    <span className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-gray-400">
                      {article.number}
                    </span>
                  </div>

                  <h2 className="mt-12 font-display text-[1.5rem] font-semibold leading-tight tracking-tight text-navy lg:text-[1.625rem]">
                    {article.title}
                  </h2>

                  <p className="mt-5 line-clamp-6 text-[0.95rem] leading-relaxed text-gray-700">
                    {article.preview}
                  </p>

                  <button
                    type="button"
                    onClick={() => openArticle(article)}
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-8 font-display text-[0.95rem] font-semibold text-navy link-underline"
                  >
                    Lire la suite
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
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={selectedArticle !== null}
        onClose={closeArticle}
        titleId="selected-article-title"
      >
        {selectedArticle && (
          <article>
            <div className="pr-12 sm:pr-14">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-5">
                <span className="eyebrow text-orange">
                  {selectedArticle.label}
                </span>
                <span className="font-display text-xs font-medium uppercase tracking-widest text-gray-400">
                  {selectedArticle.number}
                </span>
              </div>

              <h2
                id="selected-article-title"
                className="mt-8 font-display text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl"
              >
                {selectedArticle.title}
              </h2>
            </div>

            <div className="mt-8 space-y-6">
              {selectedArticle.content.map(renderContentItem)}
            </div>
          </article>
        )}
      </Modal>
    </main>
  );
}