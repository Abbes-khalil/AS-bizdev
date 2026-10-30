/**
 * Articles written for the site itself (not ingested from LinkedIn), in
 * French, English and Arabic. They are merged with the Supabase rows by
 * lib/data/articles.js and follow the same Article shape. Kept in the
 * repository because the Supabase `articles` table has no Arabic column.
 * @type {import("@/lib/data/articles").Article[]}
 */
export const EDITORIAL_ARTICLES = [
  {
    "key": "commercial-export-recruter-ou-externaliser",
    "slug": {
      "fr": "commercial-export-recruter-ou-externaliser",
      "en": "in-house-or-outsourced-export-sales",
      "ar": "commercial-export-recruter-ou-externaliser"
    },
    "status": "published",
    "publishedAt": "2026-10-30",
    "author": "Stéphane Allain",
    "image": null,
    "source": {
      "type": "manual",
      "url": null
    },
    "themes": [
      "export"
    ],
    "zones": [
      "africa"
    ],
    "countries": [],
    "fr": {
      "title": "Commercial export : le recruter ou l'externaliser, comment trancher ?",
      "preview": "Recruter un commercial export ou externaliser la fonction : les cas où chaque option tient, et les outils de contrôle à exiger dans les deux situations.",
      "content": [
        {
          "type": "highlight",
          "text": "**Ce n'est pas une question de statut. C'est une question de marché, de chiffre et de contrôle.**"
        },
        {
          "type": "paragraph",
          "text": "**Recruter un commercial export** se justifie quand le chiffre d'affaires de la zone paie déjà un poste à temps plein et que quelqu'un chez vous sait le piloter. **Externaliser** devient le bon choix quand ce chiffre reste à construire, ou quand le marché demande un réseau que vous n'avez pas encore. Dans les 2 cas, **le même contrôle s'impose**."
        },
        {
          "type": "heading",
          "text": "En bref"
        },
        {
          "type": "list",
          "items": [
            "**Le recrutement tient** quand la zone amortit le poste, qu'un manager export l'encadre et que vous pouvez attendre les premiers résultats.",
            "**L'externalisation tient** quand il faut d'abord trouver du marché, des décideurs et des distributeurs, avant de financer une structure.",
            "**La proximité ne garantit pas le contrôle.** Un pipeline, des prévisions et des comptes rendus, si.",
            "**Sur l'Afrique francophone**, chaque marché se travaille séparément : Tunisie, Maroc, Côte d'Ivoire ou Sénégal n'ont ni les mêmes décideurs, ni les mêmes circuits."
          ]
        },
        {
          "type": "heading",
          "text": "Recruter : ce que vous gagnez, et ce qu'il faut déjà avoir"
        },
        {
          "type": "paragraph",
          "text": "Un commercial salarié dédié à une zone **travaille entièrement pour vous**. Il connaît vos produits en profondeur, porte votre culture auprès des distributeurs, et ce qu'il construit reste chez vous."
        },
        {
          "type": "paragraph",
          "text": "Encore faut-il que le poste soit tenable. Un commercial export expérimenté représente **un investissement important**, déplacements compris. Il lui faut aussi du temps pour signer ses premières commandes sur un marché qu'il découvre. En Afrique et au Moyen-Orient, **le réseau local pèse lourd dans ce délai** : celui qui doit d'abord trouver les bons distributeurs part de plus loin que celui qui les connaît déjà."
        },
        {
          "type": "paragraph",
          "text": "Autrement dit : **le recrutement est une bonne décision quand 3 conditions sont réunies.**"
        },
        {
          "type": "list",
          "items": [
            "**Le chiffre d'affaires de la zone amortit le poste.**",
            "**Quelqu'un en interne sait piloter une activité export.**",
            "**Vous avez le temps d'attendre les premiers résultats.**"
          ]
        },
        {
          "type": "heading",
          "text": "Externaliser : quand il faut d'abord trouver du marché"
        },
        {
          "type": "paragraph",
          "text": "Notre métier n'est pas de trouver de la sous-traitance. **Il est de trouver du marché** : les décideurs, les donneurs d'ordre et les distributeurs qui achèteront vos produits."
        },
        {
          "type": "paragraph",
          "text": "Team France Export, le dispositif public d'accompagnement à l'international, décrit les situations où l'externalisation des forces commerciales export a du sens ([source](https://www.teamfrance-export.fr/services/externalisation-de-la-prospection1?codeProgramme=PE002_PROGRAMME_REGION&region=entreprisespaysdelaloire&issmap=true)). Entre autres, les entreprises qui :"
        },
        {
          "type": "list",
          "items": [
            "**n'ont pas encore le chiffre d'affaires export** pour amortir un directeur export à plein temps ;",
            "**veulent dédier une ressource à un pays ou une région** sans y avoir encore le chiffre qui la paierait ;",
            "**veulent des forces de vente opérationnelles rapidement**, sans un long recrutement ;",
            "**préfèrent se concentrer sur leur production** et sur les marchés qu'elles maîtrisent déjà."
          ]
        },
        {
          "type": "paragraph",
          "text": "La même page rappelle ce qu'un contrat d'externalisation doit fixer : **les rôles de chacun, le temps partiel ou complet, la durée**, la rémunération avec un fixe et une part variable sur objectifs, et le soutien apporté au prestataire."
        },
        {
          "type": "paragraph",
          "text": "Nous vendons de l'externalisation, et nous le disons franchement : **ce n'est pas la bonne réponse pour tout le monde.** Une entreprise qui réalise déjà un chiffre solide sur une zone, avec une direction commerciale capable d'encadrer l'export, a souvent intérêt à recruter."
        },
        {
          "type": "heading",
          "text": "Le contrôle ne vient pas de la proximité"
        },
        {
          "type": "paragraph",
          "text": "C'est l'objection que nous entendons le plus souvent. Un commercial salarié, installé dans vos locaux, donne l'impression qu'on sait ce qu'il fait de ses journées. Un partenaire qui travaille depuis Casablanca, Tunis ou Abidjan paraît plus difficile à suivre."
        },
        {
          "type": "paragraph",
          "text": "**La proximité rassure. Elle ne renseigne pas.** Un commercial que vous croisez chaque matin vous paraît sous contrôle, parce que vous le voyez. Sa présence au bureau ne dit pourtant rien du nombre de distributeurs qu'il a relancés, ni des devis qui attendent une réponse. Bien des dirigeants l'ont appris à leurs dépens : un salarié installé dans le bureau voisin peut laisser filer des mois de prospection sans que personne s'en aperçoive, tant que personne ne regarde ses résultats."
        },
        {
          "type": "paragraph",
          "text": "Autrement dit : **une activité commerciale se suit dans ses traces écrites**, quelle que soit la distance."
        },
        {
          "type": "heading",
          "text": "Les 5 outils de contrôle à exiger, salarié ou partenaire"
        },
        {
          "type": "paragraph",
          "text": "Ces outils valent pour les 2 options, et c'est ce qui simplifie la décision. **Vous ne choisissez plus entre contrôler et déléguer. Vous choisissez qui exécute, sous le même contrôle.**"
        },
        {
          "type": "list",
          "items": [
            "**Un pipeline à jour.** Chaque opportunité y figure avec son interlocuteur, son étape, son montant estimé et sa prochaine action datée.",
            "**Des prévisions de ventes consolidées.** Ce qui peut raisonnablement tomber dans les 3 prochains mois, avec les écarts par rapport à la prévision précédente et leur explication.",
            "**Un compte rendu après chaque rendez-vous important.** Qui était présent, ce qui a été dit et promis de part et d'autre, et la suite prévue.",
            "**Une revue régulière des distributeurs.** Leur activité, leurs difficultés, leurs priorités et le plan d'action convenu avec chacun.",
            "**Un point de pilotage à date fixe.** Toujours au même moment, on regarde les chiffres ensemble et on décide de la suite."
          ]
        },
        {
          "type": "paragraph",
          "text": "Si votre commercial, interne ou externe, ne vous fournit pas ces éléments, **commencez par les lui demander.** La plupart des difficultés de suivi se règlent par la méthode, avant de remettre en cause le statut de la personne."
        },
        {
          "type": "heading",
          "text": "3 questions pour trancher"
        },
        {
          "type": "list",
          "items": [
            "**Le chiffre d'affaires de la zone paie-t-il déjà un poste à temps plein ?** Oui : le recrutement mérite d'être étudié. Non : externaliser, pas de structure à financer avant d'en avoir les revenus.",
            "**Avez-vous en interne quelqu'un qui sait piloter une activité export ?** Oui : cette personne encadrera le commercial et suivra son activité. Non : un commercial isolé, que personne ne relit, rend le recrutement plus risqué.",
            "**Le marché demande-t-il un réseau local que vous n'avez pas ?** Oui : un partenaire qui connaît déjà le terrain vous fait gagner du temps. Non : vos contacts existent déjà, un salarié peut les faire fructifier."
          ]
        },
        {
          "type": "heading",
          "text": "Ce que nous voyons sur le terrain"
        },
        {
          "type": "paragraph",
          "text": "Sur l'Afrique francophone, nous travaillons **marché par marché**. Notre base compte **plus de 7 000 décideurs qualifiés sur plus de 20 marchés** en Afrique et au Moyen-Orient. **Plus de 30 entreprises** européennes, américaines, africaines et chinoises nous ont déjà confié leur développement commercial."
        },
        {
          "type": "paragraph",
          "text": "Pour un acteur européen du B2B, nous avons démarré **un accompagnement prévu pour 6 mois**. Il est **renouvelé depuis plus d'un an** et a permis d'ouvrir plusieurs marchés en Afrique francophone : des marchés mieux compris, des partenaires identifiés, un pipeline structuré, et déjà **plus de 100 K€ de commandes confirmées**."
        },
        {
          "type": "paragraph",
          "text": "Parce qu'un commercial export n'est pas un simple poste à pourvoir.\nC'est un accès au marché."
        },
        {
          "type": "heading",
          "text": "Questions fréquentes"
        },
        {
          "type": "subheading",
          "text": "Combien de temps faut-il à un commercial export pour signer ses premières commandes ?"
        },
        {
          "type": "paragraph",
          "text": "Cela dépend surtout du réseau dont il dispose sur la zone. Un commercial qui découvre un marché doit d'abord identifier les décideurs, les distributeurs et les circuits d'achat avant de signer. En Afrique et au Moyen-Orient, ce réseau pèse lourd dans le délai : celui qui connaît déjà les bons interlocuteurs part de plus près que celui qui doit les trouver. C'est pourquoi une entreprise sans chiffre sur une zone commence souvent par un partenaire déjà implanté. Elle recrute ensuite, quand le marché a prouvé qu'il pouvait payer un poste à temps plein."
        },
        {
          "type": "subheading",
          "text": "Peut-on contrôler un commercial externalisé aussi bien qu'un salarié ?"
        },
        {
          "type": "paragraph",
          "text": "Oui, à condition d'exiger les mêmes outils que pour un salarié : un pipeline à jour, des prévisions de ventes consolidées, un compte rendu après chaque rendez-vous important, une revue régulière des distributeurs et un point de pilotage à date fixe. Le contrôle ne vient pas de la proximité physique mais des traces écrites de l'activité commerciale. Un salarié présent dans vos locaux qui n'en fournit aucun est moins suivi qu'un partenaire à l'étranger qui les tient à jour chaque semaine. La bonne question n'est donc pas de savoir où il travaille, mais ce qu'il vous montre."
        },
        {
          "type": "subheading",
          "text": "Qu'est-ce qu'un contrat d'externalisation commerciale export doit prévoir ?"
        },
        {
          "type": "paragraph",
          "text": "Team France Export, le dispositif public d'accompagnement à l'international, liste plusieurs points à fixer dans ce type de contrat. D'abord les rôles de chacun, le temps partiel ou complet consacré à votre activité et la durée de la prestation. Ensuite la rémunération, avec une part fixe et une part variable sur objectifs. Enfin le soutien apporté par l'entreprise à son prestataire. S'y ajoutent, en pratique, les outils de suivi attendus : pipeline, prévisions de ventes et comptes rendus. Les écrire dans le contrat dès le départ évite de les négocier plus tard, quand la relation est déjà engagée."
        },
        {
          "type": "subheading",
          "text": "Faut-il viser toute l'Afrique francophone ou un seul pays ?"
        },
        {
          "type": "paragraph",
          "text": "Il vaut mieux viser l'Afrique francophone, mais la travailler marché par marché. Un seul pays peut être trop étroit pour justifier un effort commercial durable. Et chaque marché a ses propres décideurs, ses distributeurs et ses circuits d'achat : la Tunisie, le Maroc, la Côte d'Ivoire ou le Sénégal ne s'abordent pas de la même façon. L'approche qui fonctionne consiste à prioriser quelques marchés selon votre offre et à y identifier les bons interlocuteurs. La démarche s'étend ensuite aux suivants, avec ce que les premiers vous ont appris."
        },
        {
          "type": "heading",
          "text": "Échangeons"
        },
        {
          "type": "paragraph",
          "text": "Vous hésitez entre recruter et externaliser sur une zone précise ? Décrivez-nous votre marché et votre situation. **Nous vous dirons franchement quelle option nous paraît la plus adaptée.**"
        },
        {
          "type": "paragraph",
          "text": "[Parlons de votre marché](/contact) · [Découvrir le pilotage commercial externalisé](/nos-solutions/pilotage-commercial-externalise)"
        }
      ]
    },
    "en": {
      "title": "In-house or outsourced export sales: how to decide",
      "preview": "Hiring an export sales rep or outsourcing the role: when each option works, and the control tools to require in both cases.",
      "content": [
        {
          "type": "highlight",
          "text": "**It is not a question of status. It is a question of market, revenue and control.**"
        },
        {
          "type": "paragraph",
          "text": "**Hiring an export sales rep** makes sense when the region's revenue already pays for a full-time role and someone in your company knows how to manage it. **Outsourcing** is the right choice when that revenue still has to be built, or when the market calls for a network you do not have yet. Either way, **the same level of control applies**."
        },
        {
          "type": "heading",
          "text": "In short"
        },
        {
          "type": "list",
          "items": [
            "**Hiring works** when the region pays for the role, an export manager oversees it and you can wait for the first results.",
            "**Outsourcing works** when you first need to find a market, decision-makers and distributors, before funding a structure.",
            "**Being close does not mean being in control.** A pipeline, forecasts and meeting reports do.",
            "**In French-speaking Africa**, each market is worked on its own: Tunisia, Morocco, Côte d'Ivoire and Senegal have different decision-makers and different buying channels."
          ]
        },
        {
          "type": "heading",
          "text": "Hiring: what you gain, and what you need to have already"
        },
        {
          "type": "paragraph",
          "text": "A salaried rep dedicated to one region **works entirely for you**. They know your products in depth, carry your culture to your distributors, and whatever they build stays in your company."
        },
        {
          "type": "paragraph",
          "text": "The role still has to be sustainable. An experienced export rep is **a significant investment**, travel included. They also need time to sign their first orders in a market they are discovering. In Africa and the Middle East, **the local network weighs heavily on that timeline**: someone who first has to find the right distributors starts further back than someone who already knows them."
        },
        {
          "type": "paragraph",
          "text": "In other words: **hiring is a good decision when 3 conditions are met.**"
        },
        {
          "type": "list",
          "items": [
            "**The region's revenue pays for the role.**",
            "**Someone in-house knows how to manage an export business.**",
            "**You can afford to wait for the first results.**"
          ]
        },
        {
          "type": "heading",
          "text": "Outsourcing: when you first need to find a market"
        },
        {
          "type": "paragraph",
          "text": "Our job is not to find subcontracting work. **It is to find a market**: the decision-makers, buyers and distributors who will purchase your products."
        },
        {
          "type": "paragraph",
          "text": "Team France Export, the French public body that supports companies abroad, describes the situations in which outsourcing export sales makes sense ([source, in French](https://www.teamfrance-export.fr/services/externalisation-de-la-prospection1?codeProgramme=PE002_PROGRAMME_REGION&region=entreprisespaysdelaloire&issmap=true)). Among them, companies that:"
        },
        {
          "type": "list",
          "items": [
            "**do not yet have the export revenue** to pay for a full-time export director;",
            "**want to dedicate a resource to a country or region** without the revenue there to pay for it yet;",
            "**want sales capacity up and running quickly**, without a long recruitment process;",
            "**prefer to focus on their production** and on the markets they already know."
          ]
        },
        {
          "type": "paragraph",
          "text": "The same page lists what an outsourcing contract should set out: **each party's role, part-time or full-time involvement, and duration**, a fee with a fixed part and a variable part tied to targets, and the support the company gives its provider."
        },
        {
          "type": "paragraph",
          "text": "We sell outsourcing, and we say it plainly: **it is not the right answer for everyone.** A company that already earns solid revenue in a region, with a sales management team able to oversee export, is often better off hiring."
        },
        {
          "type": "heading",
          "text": "Control does not come from proximity"
        },
        {
          "type": "paragraph",
          "text": "This is the objection we hear most often. A salaried rep working in your offices gives the impression that you know how they spend their days. A partner working from Casablanca, Tunis or Abidjan seems harder to follow."
        },
        {
          "type": "paragraph",
          "text": "**Proximity reassures. It does not inform.** A rep you see every morning feels under control, because you see them. Yet their presence in the office says nothing about how many distributors they followed up with, or which quotes are still waiting for an answer. Plenty of business owners have learned this the hard way: an employee in the next office can let months of prospecting slip by without anyone noticing, as long as nobody looks at the results."
        },
        {
          "type": "paragraph",
          "text": "In other words: **sales activity is tracked through its written record**, whatever the distance."
        },
        {
          "type": "heading",
          "text": "The 5 control tools to require, employee or partner"
        },
        {
          "type": "paragraph",
          "text": "These tools apply to both options, which is what makes the decision simpler. **You are no longer choosing between control and delegation. You are choosing who does the work, under the same control.**"
        },
        {
          "type": "list",
          "items": [
            "**An up-to-date pipeline.** Every opportunity is listed with its contact, its stage, its estimated value and its next dated action.",
            "**Consolidated sales forecasts.** What can reasonably close in the next 3 months, with the gaps against the previous forecast and why.",
            "**A report after every important meeting.** Who attended, what was said and promised on each side, and the agreed next step.",
            "**A regular distributor review.** Their activity, their difficulties, their priorities and the action plan agreed with each of them.",
            "**A management review on a fixed date.** Always at the same time, you look at the numbers together and decide what comes next."
          ]
        },
        {
          "type": "paragraph",
          "text": "If your rep, in-house or outsourced, does not give you these, **start by asking for them.** Most tracking problems are solved by method, before questioning the person's status."
        },
        {
          "type": "heading",
          "text": "3 questions to decide"
        },
        {
          "type": "list",
          "items": [
            "**Does the region's revenue already pay for a full-time role?** Yes: hiring is worth considering. No: outsource, with no structure to fund before the revenue is there.",
            "**Do you have someone in-house who knows how to manage an export business?** Yes: that person will oversee the rep and follow their activity. No: an isolated rep whose work nobody reviews makes hiring riskier.",
            "**Does the market call for a local network you do not have?** Yes: a partner who already knows the ground saves you time. No: your contacts already exist, and an employee can build on them."
          ]
        },
        {
          "type": "heading",
          "text": "What we see on the ground"
        },
        {
          "type": "paragraph",
          "text": "In French-speaking Africa, we work **market by market**. Our database holds **more than 7,000 qualified decision-makers across more than 20 markets** in Africa and the Middle East. **More than 30 companies** from Europe, the Americas, Africa and China have already trusted us with their business development."
        },
        {
          "type": "paragraph",
          "text": "For a European B2B company, we started **a mission planned for 6 months**. It has been **renewed for more than a year** and has opened several markets in French-speaking Africa: markets that are better understood, partners identified, a structured pipeline, and already **more than €100K in confirmed orders**."
        },
        {
          "type": "paragraph",
          "text": "Because an export sales rep is not just a position to fill.\nIt is access to a market."
        },
        {
          "type": "heading",
          "text": "Frequently asked questions"
        },
        {
          "type": "subheading",
          "text": "How long does it take an export sales rep to sign their first orders?"
        },
        {
          "type": "paragraph",
          "text": "It depends mostly on the network they have in the region. A rep who is new to a market first has to identify the decision-makers, the distributors and the buying channels before signing anything. In Africa and the Middle East, that network weighs heavily on the timeline: someone who already knows the right contacts starts much closer than someone who has to find them. That is why a company with no revenue in a region often starts with a partner already established there. It hires later, once the market has proven it can pay for a full-time role."
        },
        {
          "type": "subheading",
          "text": "Can you control an outsourced rep as well as an employee?"
        },
        {
          "type": "paragraph",
          "text": "Yes, provided you require the same tools as for an employee: an up-to-date pipeline, consolidated sales forecasts, a report after every important meeting, a regular distributor review and a management review on a fixed date. Control does not come from physical proximity but from the written record of sales activity. An employee in your offices who provides none of it is less closely followed than a partner abroad who updates it every week. So the right question is not where they work, but what they show you."
        },
        {
          "type": "subheading",
          "text": "What should an outsourced export sales contract include?"
        },
        {
          "type": "paragraph",
          "text": "Team France Export, the French public body that supports companies abroad, lists several points to settle in this kind of contract. First, each party's role, the part-time or full-time involvement in your business and the length of the engagement. Then the fee, with a fixed part and a variable part tied to targets. Finally, the support the company gives its provider. In practice, add the tracking tools you expect: pipeline, sales forecasts and meeting reports. Writing them into the contract from the start saves negotiating them later, once the relationship is already under way."
        },
        {
          "type": "subheading",
          "text": "Should you target all of French-speaking Africa or a single country?"
        },
        {
          "type": "paragraph",
          "text": "It is better to target French-speaking Africa, but to work it market by market. A single country can be too narrow to justify a lasting sales effort. And each market has its own decision-makers, distributors and buying channels: Tunisia, Morocco, Côte d'Ivoire and Senegal are not approached the same way. The approach that works is to prioritise a few markets based on your offer and identify the right contacts there. You then extend to the next ones, using what the first ones taught you."
        },
        {
          "type": "heading",
          "text": "Let's talk"
        },
        {
          "type": "paragraph",
          "text": "Not sure whether to hire or outsource for a specific region? Tell us about your market and your situation. **We will tell you plainly which option looks best suited to you.**"
        },
        {
          "type": "paragraph",
          "text": "[Talk to us about your market](/en/contact) · [Discover outsourced export sales management](/en/solutions/outsourced-export-sales-management)"
        }
      ]
    },
    "ar": {
      "title": "مندوب مبيعات للتصدير: توظيفه أم الاستعانة بجهة خارجية؟ كيف تحسمون القرار",
      "preview": "توظيف مندوب مبيعات للتصدير أو إسناد هذه المهمة إلى جهة خارجية: متى يصلح كل خيار، وما أدوات المتابعة التي يجب اشتراطها في الحالتين.",
      "content": [
        {
          "type": "highlight",
          "text": "**المسألة ليست مسألة صفة وظيفية، بل مسألة سوق ورقم أعمال ومتابعة.**"
        },
        {
          "type": "paragraph",
          "text": "**توظيف مندوب مبيعات للتصدير** يكون مبرراً عندما يغطي رقم أعمال المنطقة تكلفة وظيفة بدوام كامل، ويوجد في شركتكم من يعرف كيف يديرها. أما **الاستعانة بجهة خارجية** فتصبح الخيار الصحيح عندما لا يزال هذا الرقم في طور البناء، أو عندما يتطلب السوق شبكة علاقات لا تملكونها بعد. وفي الحالتين، **تبقى المتابعة نفسها ضرورية**."
        },
        {
          "type": "heading",
          "text": "باختصار"
        },
        {
          "type": "list",
          "items": [
            "**التوظيف ينجح** عندما تغطي المنطقة تكلفة الوظيفة، ويشرف عليها مدير تصدير، ويمكنكم انتظار النتائج الأولى.",
            "**الاستعانة بجهة خارجية تنجح** عندما يجب أولاً إيجاد السوق وصناع القرار والموزعين، قبل تمويل هيكل كامل.",
            "**القرب لا يضمن المتابعة.** أما خط الصفقات والتوقعات وتقارير الاجتماعات فتضمنها.",
            "**في أفريقيا الناطقة بالفرنسية** يُعامل كل سوق على حدة: تونس والمغرب وكوت ديفوار والسنغال لا تتشابه في صناع القرار ولا في قنوات الشراء."
          ]
        },
        {
          "type": "heading",
          "text": "التوظيف: ما تكسبونه، وما يجب أن يتوفر لديكم مسبقاً"
        },
        {
          "type": "paragraph",
          "text": "مندوب المبيعات الموظف والمخصص لمنطقة واحدة **يعمل لصالحكم بالكامل**. يعرف منتجاتكم معرفة عميقة، وينقل ثقافة شركتكم إلى الموزعين، وما يبنيه يبقى لديكم."
        },
        {
          "type": "paragraph",
          "text": "لكن يجب أن تكون الوظيفة قابلة للاستمرار. فمندوب التصدير المتمرس يمثل **استثماراً كبيراً**، بما في ذلك تكاليف السفر. ويحتاج أيضاً إلى وقت لتوقيع طلبياته الأولى في سوق يكتشفه للمرة الأولى. وفي أفريقيا والشرق الأوسط **تؤثر الشبكة المحلية كثيراً في هذه المدة**: فمن عليه أن يبحث أولاً عن الموزعين المناسبين ينطلق من نقطة أبعد ممن يعرفهم مسبقاً."
        },
        {
          "type": "paragraph",
          "text": "بعبارة أخرى: **التوظيف قرار صائب عندما تجتمع 3 شروط.**"
        },
        {
          "type": "list",
          "items": [
            "**رقم أعمال المنطقة يغطي تكلفة الوظيفة.**",
            "**يوجد في الشركة من يعرف كيف يدير نشاط التصدير.**",
            "**لديكم الوقت لانتظار النتائج الأولى.**"
          ]
        },
        {
          "type": "heading",
          "text": "الاستعانة بجهة خارجية: عندما يجب أولاً إيجاد السوق"
        },
        {
          "type": "paragraph",
          "text": "مهمتنا ليست البحث عن عقود مناولة. **مهمتنا إيجاد السوق**: صناع القرار والمشترون والموزعون الذين سيشترون منتجاتكم."
        },
        {
          "type": "paragraph",
          "text": "تصف هيئة Team France Export، وهي الجهاز العام الفرنسي لمرافقة الشركات في الخارج، الحالات التي يكون فيها إسناد قوى البيع التصديرية إلى جهة خارجية منطقياً ([المصدر، بالفرنسية](https://www.teamfrance-export.fr/services/externalisation-de-la-prospection1?codeProgramme=PE002_PROGRAMME_REGION&region=entreprisespaysdelaloire&issmap=true)). ومن بينها الشركات التي:"
        },
        {
          "type": "list",
          "items": [
            "**لا تملك بعد رقم أعمال تصديري** يغطي تكلفة مدير تصدير بدوام كامل؛",
            "**تريد تخصيص مورد لبلد أو منطقة** دون أن يتوفر فيها بعد الرقم الذي يغطي تكلفته؛",
            "**تريد قوى بيع جاهزة للعمل بسرعة**، دون عملية توظيف طويلة؛",
            "**تفضل التركيز على إنتاجها** وعلى الأسواق التي تعرفها جيداً."
          ]
        },
        {
          "type": "paragraph",
          "text": "وتذكّر الصفحة نفسها بما يجب أن يحدده عقد الاستعانة بجهة خارجية: **دور كل طرف، والعمل بدوام جزئي أو كامل، والمدة**، والأجر بجزء ثابت وجزء متغير مرتبط بالأهداف، والدعم الذي تقدمه الشركة لمقدم الخدمة."
        },
        {
          "type": "paragraph",
          "text": "نحن نبيع خدمة الاستعانة بجهة خارجية، ونقولها بصراحة: **إنها ليست الحل المناسب للجميع.** فالشركة التي تحقق رقم أعمال متيناً في منطقة ما، ولديها إدارة تجارية قادرة على الإشراف على التصدير، غالباً ما يكون من مصلحتها أن توظف."
        },
        {
          "type": "heading",
          "text": "المتابعة لا تأتي من القرب"
        },
        {
          "type": "paragraph",
          "text": "هذا هو الاعتراض الذي نسمعه أكثر من غيره. فالمندوب الموظف الذي يعمل في مكاتبكم يعطي انطباعاً بأنكم تعرفون كيف يقضي يومه. أما الشريك الذي يعمل من الدار البيضاء أو تونس أو أبيدجان فيبدو أصعب في المتابعة."
        },
        {
          "type": "paragraph",
          "text": "**القرب يطمئن، لكنه لا يُعلِم.** المندوب الذي تلتقونه كل صباح يبدو تحت السيطرة لأنكم ترونه. غير أن حضوره في المكتب لا يقول شيئاً عن عدد الموزعين الذين تابعهم، ولا عن عروض الأسعار التي تنتظر رداً. وقد تعلّم كثير من المسيّرين ذلك على حسابهم: فالموظف الجالس في المكتب المجاور قد يضيّع أشهراً من التنقيب التجاري دون أن ينتبه أحد، ما دام لا أحد ينظر إلى نتائجه."
        },
        {
          "type": "paragraph",
          "text": "بعبارة أخرى: **يُتابَع النشاط التجاري من خلال آثاره المكتوبة**، مهما كانت المسافة."
        },
        {
          "type": "heading",
          "text": "أدوات المتابعة الخمس التي يجب اشتراطها، موظفاً كان أم شريكاً"
        },
        {
          "type": "paragraph",
          "text": "تصلح هذه الأدوات للخيارين، وهذا ما يبسّط القرار. **لم تعودوا تختارون بين المتابعة والتفويض، بل تختارون من ينفّذ، تحت المتابعة نفسها.**"
        },
        {
          "type": "list",
          "items": [
            "**خط صفقات محدّث.** تظهر فيه كل فرصة مع جهة الاتصال ومرحلتها وقيمتها التقديرية والإجراء التالي بتاريخه.",
            "**توقعات مبيعات موحّدة.** ما يمكن أن يتحقق بشكل معقول خلال الأشهر الـ3 المقبلة، مع الفروق عن التوقع السابق وتفسيرها.",
            "**تقرير بعد كل اجتماع مهم.** من حضر، وما قيل ووُعد به من الطرفين، والخطوة التالية المتفق عليها.",
            "**مراجعة منتظمة للموزعين.** نشاطهم وصعوباتهم وأولوياتهم وخطة العمل المتفق عليها مع كل منهم.",
            "**اجتماع متابعة في موعد ثابت.** في الموعد نفسه دائماً، تُراجَع الأرقام معاً ويُتخذ القرار بشأن الخطوة التالية."
          ]
        },
        {
          "type": "paragraph",
          "text": "إذا لم يقدّم لكم مندوبكم، داخلياً كان أم خارجياً، هذه العناصر، **فابدؤوا بطلبها منه.** فمعظم صعوبات المتابعة تُحل بالمنهجية، قبل إعادة النظر في صفة الشخص."
        },
        {
          "type": "heading",
          "text": "3 أسئلة لحسم القرار"
        },
        {
          "type": "list",
          "items": [
            "**هل يغطي رقم أعمال المنطقة تكلفة وظيفة بدوام كامل؟** نعم: التوظيف يستحق الدراسة. لا: استعينوا بجهة خارجية، فلا هيكل تموّلونه قبل أن تتوفر الإيرادات.",
            "**هل يوجد في شركتكم من يعرف كيف يدير نشاط التصدير؟** نعم: هذا الشخص سيشرف على المندوب ويتابع نشاطه. لا: المندوب المعزول الذي لا يراجع أحد عمله يجعل التوظيف أكثر خطورة.",
            "**هل يتطلب السوق شبكة محلية لا تملكونها؟** نعم: الشريك الذي يعرف الميدان يوفّر عليكم الوقت. لا: علاقاتكم موجودة أصلاً، ويمكن لموظف أن يستثمرها."
          ]
        },
        {
          "type": "heading",
          "text": "ما نراه في الميدان"
        },
        {
          "type": "paragraph",
          "text": "في أفريقيا الناطقة بالفرنسية نعمل **سوقاً بسوق**. تضم قاعدة بياناتنا **أكثر من 7000 صانع قرار مؤهل في أكثر من 20 سوقاً** في أفريقيا والشرق الأوسط. وقد أوكلت إلينا **أكثر من 30 شركة** أوروبية وأمريكية وأفريقية وصينية تطويرها التجاري."
        },
        {
          "type": "paragraph",
          "text": "لصالح شركة أوروبية تعمل في مجال التعامل بين الشركات، بدأنا **مهمة مرافقة مقررة لمدة 6 أشهر**. وقد **جُدّدت منذ أكثر من عام**، وأتاحت فتح عدة أسواق في أفريقيا الناطقة بالفرنسية: أسواق أصبحت مفهومة بشكل أفضل، وشركاء تم تحديدهم، وخط صفقات منظم، و**أكثر من 100 ألف يورو من الطلبيات المؤكدة** حتى الآن."
        },
        {
          "type": "paragraph",
          "text": "لأن مندوب التصدير ليس مجرد وظيفة يجب شغلها.\nإنه بوابة إلى السوق."
        },
        {
          "type": "heading",
          "text": "أسئلة شائعة"
        },
        {
          "type": "subheading",
          "text": "كم يحتاج مندوب التصدير من الوقت لتوقيع طلبياته الأولى؟"
        },
        {
          "type": "paragraph",
          "text": "يتوقف ذلك أساساً على شبكة العلاقات التي يملكها في المنطقة. فالمندوب الذي يكتشف سوقاً جديدة عليه أولاً أن يحدد صناع القرار والموزعين وقنوات الشراء قبل أن يوقّع أي طلبية. وفي أفريقيا والشرق الأوسط تؤثر هذه الشبكة كثيراً في المدة: فمن يعرف المحاورين المناسبين ينطلق من نقطة أقرب بكثير ممن عليه أن يجدهم. ولهذا تبدأ الشركة التي لا تحقق رقم أعمال في منطقة ما غالباً بشريك موجود فيها، ثم توظف لاحقاً عندما يثبت السوق قدرته على تغطية وظيفة بدوام كامل."
        },
        {
          "type": "subheading",
          "text": "هل يمكن متابعة مندوب خارجي بالقدر نفسه الذي يُتابَع به الموظف؟"
        },
        {
          "type": "paragraph",
          "text": "نعم، بشرط اشتراط الأدوات نفسها التي تُطلب من الموظف: خط صفقات محدّث، وتوقعات مبيعات موحّدة، وتقرير بعد كل اجتماع مهم، ومراجعة منتظمة للموزعين، واجتماع متابعة في موعد ثابت. فالمتابعة لا تأتي من القرب الجسدي، بل من الآثار المكتوبة للنشاط التجاري. والموظف الحاضر في مكاتبكم الذي لا يقدّم أياً منها أقل خضوعاً للمتابعة من شريك في الخارج يحدّثها كل أسبوع. فالسؤال الصحيح إذن ليس أين يعمل، بل ماذا يُريكم."
        },
        {
          "type": "subheading",
          "text": "ماذا يجب أن يتضمن عقد الاستعانة بجهة خارجية للمبيعات التصديرية؟"
        },
        {
          "type": "paragraph",
          "text": "تسرد هيئة Team France Export، وهي الجهاز العام الفرنسي لمرافقة الشركات في الخارج، عدة نقاط يجب تحديدها في هذا النوع من العقود. أولاً دور كل طرف، والعمل بدوام جزئي أو كامل في نشاطكم، ومدة الخدمة. ثم الأجر، بجزء ثابت وجزء متغير مرتبط بالأهداف. وأخيراً الدعم الذي تقدمه الشركة لمقدم الخدمة. وتضاف إليها عملياً أدوات المتابعة المنتظرة: خط الصفقات وتوقعات المبيعات والتقارير. وكتابتها في العقد منذ البداية يغني عن التفاوض بشأنها لاحقاً، عندما تكون العلاقة قد بدأت."
        },
        {
          "type": "subheading",
          "text": "هل يجب استهداف أفريقيا الناطقة بالفرنسية بأكملها أم بلد واحد؟"
        },
        {
          "type": "paragraph",
          "text": "من الأفضل استهداف أفريقيا الناطقة بالفرنسية، مع العمل عليها سوقاً بسوق. فبلد واحد قد يكون ضيقاً جداً لتبرير جهد تجاري مستدام. ولكل سوق صناع قراره وموزعوه وقنوات شرائه: فتونس والمغرب وكوت ديفوار والسنغال لا تُقارَب بالطريقة نفسها. والنهج الناجح هو ترتيب أولويات بضعة أسواق وفق عرضكم، وتحديد المحاورين المناسبين فيها، ثم التوسع إلى الأسواق التالية مستفيدين مما تعلمتموه من الأولى."
        },
        {
          "type": "heading",
          "text": "لنتحدث"
        },
        {
          "type": "paragraph",
          "text": "هل تترددون بين التوظيف والاستعانة بجهة خارجية في منطقة محددة؟ صفوا لنا سوقكم ووضعكم. **سنقول لكم بصراحة أي خيار نراه الأنسب لكم.**"
        },
        {
          "type": "paragraph",
          "text": "[لنتحدث عن سوقكم](/ar/contact) · [اكتشفوا الإدارة التجارية الخارجية](/ar/solutions/pilotage-commercial-externalise)"
        }
      ]
    }
  }
];
