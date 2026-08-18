import CtaBlock from "@/components/ui/CtaBlock";
import OfferCard from "@/components/ui/OfferCard";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("solutions", "fr");

// ============================================
// CONTENU AFFICHÉ — modifier ici (titres, textes, boutons)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "Nos solutions",
    titleLead: "Deux offres,",
    titleAccent: "un même terrain.",
    intro:
      "AS Biz Dev intervient à deux moments de la vie commerciale d'une zone : quand il faut la développer, et quand il faut la piloter. Rien d'autre.",
  },
  items: [
    {
      routeKey: "acceleration",
      eyebrow: "Offre 01",
      title: "Accélération commerciale",
      body: "Ouvrir un nouveau marché, identifier des clients, rechercher des distributeurs ou des agents, relancer une zone insuffisamment développée, lancer une nouvelle offre. Nous allons jusqu'à l'action commerciale et à la création d'opportunités concrètes.",
      bullets: [
        "Qualification du marché et du potentiel réel",
        "Identification de clients, distributeurs et partenaires",
        "Prospection, prise de contact, rendez-vous",
        "Structuration du pipeline et plan d'action par marché",
      ],
    },
    {
      routeKey: "pilotage",
      eyebrow: "Offre 02",
      title: "Pilotage commercial export externalisé",
      body: "Vous disposez de distributeurs, d'agents, de clients locaux ou d'un potentiel identifié, mais de ressources internes limitées. Nous prenons en charge tout ou partie du pilotage commercial de la zone confiée.",
      bullets: [
        "Animation et développement du réseau de distribution",
        "Gestion du pipeline et des opportunités",
        "Consolidation des prévisions de ventes",
        "Reporting sur l'activité, les résultats et les risques",
      ],
    },
  ],
  more: "Voir l'offre",
  cta: {
    eyebrow: "Aller plus loin",
    heading: "Sur quel marché voulez-vous avancer ?",
    label: "Parlons de votre marché",
  },
};

// ============================================
// COMPOSANT — solutions hub : le fork entre les deux offres, ne pas toucher sauf besoin technique
// ============================================
export default function SolutionsFr() {
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
          <div className="grid gap-[1.25rem] lg:grid-cols-2 lg:gap-[1.25rem]">
            {t.items.map((offer, index) => (
              <OfferCard
                key={offer.routeKey}
                offer={offer}
                index={index}
                lang={lang}
                moreLabel={t.more}
                variant={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>

          <CtaBlock {...t.cta} lang={lang} className="mt-[3.25rem]" />
        </Section>
      </main>
    </>
  );
}
