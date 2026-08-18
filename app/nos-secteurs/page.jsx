import Link from "next/link";

import ArrowIcon from "@/components/ui/ArrowIcon";
import CrossFactorDiagram from "@/app/nos-secteurs/_components/CrossFactorDiagram";
import CtaBlock from "@/components/ui/CtaBlock";
import OfferCard from "@/components/ui/OfferCard";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SectorExplorer from "@/app/nos-secteurs/_components/SectorExplorer";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";
import { ROUTES } from "@/lib/routes";

export const generateMetadata = () => buildMetadata("sectors", "fr");

/**
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
// ============================================
// CONTENU AFFICHÉ — modifier ici (titres, textes, secteurs)
// ============================================
const CONTENT = {
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
};

// ============================================
// COMPOSANT — mise en page de /nos-secteurs, ne pas toucher sauf besoin technique
// ============================================
export default function SectorsFr() {
  const lang = "fr";
  const t = CONTENT;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
        }}
      />

      <main>
        <PageHero layout="split" {...t.hero} />

        <Section tone="alt">
          <RevealOnScroll variant="up" className="max-w-3xl">
            <p className="text-[0.9375rem] italic leading-[1.7] text-gray-500">
              {t.heroNote}
            </p>
          </RevealOnScroll>

          <SectionHeading
            eyebrow={t.explorer.eyebrow}
            titleLead={t.explorer.titleLead}
            titleAccent={t.explorer.titleAccent}
            className="mt-[1.75rem] max-w-3xl"
          />

          <div className="mt-[1.75rem]">
            <SectorExplorer items={t.items} copy={t.explorer} ariaLabel={t.explorer.eyebrow} />
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow={t.cross.eyebrow}
            titleLead={t.cross.titleLead}
            titleAccent={t.cross.titleAccent}
            intro={t.cross.intro}
            className="mx-auto max-w-2xl text-center"
          />

          <div className="mt-[2.5rem]">
            <CrossFactorDiagram
              factors={t.cross.factors}
              outcome={t.cross.outcome}
              examples={t.cross.examples}
            />
          </div>
        </Section>

        <Section tone="navy">
          <RevealOnScroll variant="up" className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <p className="eyebrow text-orange">{t.marketsLink.eyebrow}</p>
            <h2 className="font-display display-md font-semibold tracking-tight text-white text-balance">
              {t.marketsLink.titleLead}{" "}
              <span className="italic text-orange">{t.marketsLink.titleAccent}</span>
            </h2>
            <p className="max-w-2xl text-[1.0625rem] leading-[1.7] text-white/75">
              {t.marketsLink.body}
            </p>
            <Link href={ROUTES.markets[lang]} className="btn-primary mt-2">
              {t.marketsLink.cta}
              <ArrowIcon />
            </Link>
          </RevealOnScroll>
        </Section>

        <Section tone="alt">
          <SectionHeading
            eyebrow={t.offers.eyebrow}
            titleLead={t.offers.titleLead}
            titleAccent={t.offers.titleAccent}
          />

          <div className="mt-[2.5rem] grid gap-[1.25rem] lg:grid-cols-2 lg:gap-[1.25rem]">
            {t.offers.items.map((offer, index) => (
              <OfferCard key={offer.routeKey} offer={offer} index={index} lang={lang} moreLabel={t.offers.more} />
            ))}
          </div>
        </Section>

        <Section>
          <CtaBlock {...t.cta} lang={lang} />
        </Section>
      </main>
    </>
  );
}
