import BulletList from "@/components/ui/BulletList";
import CtaBlock from "@/components/ui/CtaBlock";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StepList from "@/components/ui/StepList";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, organisationJsonLd } from "@/lib/seo/headTags";
import { SITE_URL } from "@/lib/constants/site";

export const generateMetadata = () => buildMetadata("acceleration", "fr");

// ============================================
// CONTENU AFFICHÉ — modifier ici (titres, textes, boutons)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "Offre 01 — Accélération commerciale",
    titleLead: "Transformer un potentiel en",
    titleAccent: "activité commerciale réelle.",
    intro:
      "AS Biz Dev ne réalise pas une étude concluant qu'un marché est intéressant. L'objectif est d'aller jusqu'à l'action commerciale et à la création d'opportunités concrètes.",
  },

  situations: {
    eyebrow: "Situation de départ",
    titleLead: "Vous vous reconnaissez sans doute dans",
    titleAccent: "l'une de ces phrases.",
    items: [
      "« Nous souhaitons développer ce pays mais ne savons pas par où commencer. »",
      "« Nous avons identifié un potentiel mais n'avons pas les ressources commerciales disponibles. »",
      "« Nous recherchons des distributeurs. »",
      "« Notre présence sur ce marché reste insuffisante. »",
    ],
  },

  process: {
    eyebrow: "Réponse AS Biz Dev",
    titleLead: "Six étapes, de la qualification du marché",
    titleAccent: "aux premiers résultats.",
    steps: [
      { title: "Qualification du marché", body: "Potentiel commercial réel, concurrence en place, contraintes d'accès, circuits de décision." },
      { title: "Identification des cibles", body: "Cibles prioritaires, clients potentiels, distributeurs et agents à qualifier." },
      { title: "Construction du plan d'action", body: "Séquence d'approche par marché, moyens engagés, jalons et critères de réussite." },
      { title: "Prospection et recherche de partenaires", body: "Prise de contact, prospection, organisation de rendez-vous, qualification des distributeurs." },
      { title: "Développement des opportunités", body: "Développement de comptes, accompagnement des premières négociations, structuration du pipeline." },
      { title: "Suivi et mesure des résultats", body: "Avancement des opportunités, écarts par rapport au plan, décisions à prendre pour la suite." },
    ],
  },

  interventions: {
    eyebrow: "Types d'interventions",
    titleLead: "Ce que nous prenons",
    titleAccent: "en charge.",
    intro: "Selon le projet, l'intervention porte sur tout ou partie de ces éléments.",
    items: [
      "Analyse du potentiel commercial",
      "Qualification des marchés",
      "Définition des cibles prioritaires",
      "Identification de clients potentiels",
      "Identification et qualification de distributeurs",
      "Recherche d'agents ou de partenaires commerciaux",
      "Prise de contact et prospection",
      "Organisation de rendez-vous",
      "Développement de comptes",
      "Accompagnement des premières négociations",
      "Structuration du pipeline commercial",
      "Préparation d'un plan d'action par marché",
    ],
  },

  cta: {
    eyebrow: "Aller plus loin",
    heading: "Quel marché souhaitez-vous ouvrir ou relancer ?",
    label: "Parlons de votre marché",
  },
};

const SituationQuote = ({ quote, index }) => (
  <RevealOnScroll
    as="li"
    variant="up"
    delay={0.05}
    index={index}
    className="rounded-card border border-gray-200 bg-white p-[1.25rem]"
  >
    <blockquote className="font-display text-[1.0625rem] font-medium leading-[1.5] tracking-[-0.02em] text-navy">
      {quote}
    </blockquote>
  </RevealOnScroll>
);

// ============================================
// COMPOSANT — Offre 1, Accélération commerciale (§8), ne pas toucher sauf besoin technique
// ============================================
export default function AccelerationFr() {
  const lang = "fr";
  const t = CONTENT;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Accueil", url: `${SITE_URL}${ROUTES.home.fr}` },
    { name: "Nos solutions", url: `${SITE_URL}${ROUTES.solutions.fr}` },
    { name: "Accélération commerciale", url: `${SITE_URL}${ROUTES.acceleration.fr}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <main>
        <PageHero layout="split" {...t.hero} />

        <Section tone="alt">
          <SectionHeading
            eyebrow={t.situations.eyebrow}
            titleLead={t.situations.titleLead}
            titleAccent={t.situations.titleAccent}
          />

          <ul role="list" className="mt-[1.75rem] grid gap-[1.25rem] md:grid-cols-2">
            {t.situations.items.map((quote, index) => (
              <SituationQuote key={quote} quote={quote} index={index} />
            ))}
          </ul>
        </Section>

        <Section>
          <SectionHeading
            eyebrow={t.process.eyebrow}
            titleLead={t.process.titleLead}
            titleAccent={t.process.titleAccent}
          />

          <div className="mt-[2.5rem]">
            <StepList steps={t.process.steps} />
          </div>
        </Section>

        <Section tone="alt">
          <SectionHeading
            eyebrow={t.interventions.eyebrow}
            titleLead={t.interventions.titleLead}
            titleAccent={t.interventions.titleAccent}
            intro={t.interventions.intro}
          />

          <RevealOnScroll variant="up" className="mt-[1.75rem]">
            <BulletList items={t.interventions.items} columns={2} />
          </RevealOnScroll>

          <CtaBlock {...t.cta} lang={lang} className="mt-[3.25rem]" />
        </Section>
      </main>
    </>
  );
}
