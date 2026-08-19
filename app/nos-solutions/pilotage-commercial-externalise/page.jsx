import BulletList from "@/components/ui/BulletList";
import CtaBlock from "@/components/ui/CtaBlock";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, organisationJsonLd } from "@/lib/seo/headTags";
import { SITE_URL } from "@/lib/constants/site";

export const generateMetadata = () => buildMetadata("pilotage", "fr");

// ============================================
// CONTENU AFFICHÉ — modifier ici (titres, textes, boutons)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "Offre 02 — Pilotage commercial externalisé",
    titleLead: "Votre activité commerciale export pilotée comme une",
    titleAccent: "extension de votre équipe.",
    intro:
      "AS Biz Dev prend en charge, pour le compte d'une PME, tout ou partie du pilotage de son activité commerciale sur une zone géographique définie.",
  },

  situations: {
    eyebrow: "À qui cela s'adresse",
    titleLead: "Quatre situations que nous rencontrons",
    titleAccent: "régulièrement.",
    items: [
      "Vous disposez de distributeurs mais manquez de temps pour les animer.",
      "Vos prévisions commerciales manquent de visibilité.",
      "Les opportunités existent mais leur suivi est irrégulier.",
      "Vous souhaitez développer une zone sans recruter immédiatement une équipe commerciale dédiée.",
    ],
    outro:
      "Nous travaillons directement avec vos distributeurs, partenaires, prospects et équipes internes.",
  },

  functions: {
    eyebrow: "Périmètre",
    titleLead: "Cinq fonctions",
    titleAccent: "couvertes.",
    items: [
      {
        title: "Animer",
        lead: "le réseau de distributeurs.",
        bullets: [
          "Contacts réguliers avec les distributeurs",
          "Revues commerciales et suivi de leur activité",
          "Définition des priorités et plans d'action",
          "Suivi des objectifs et identification des difficultés",
        ],
      },
      {
        title: "Développer",
        lead: "les comptes, marchés et opportunités.",
        bullets: [
          "Prospection et développement de comptes",
          "Identification de nouveaux distributeurs et qualification",
          "Évaluation du potentiel et accompagnement de la négociation",
          "Intégration progressive dans le réseau",
        ],
      },
      {
        title: "Piloter",
        lead: "le pipeline et les plans d'action.",
        bullets: [
          "Identification et qualification des opportunités",
          "Suivi, priorisation, relance",
          "Mise à jour régulière du pipeline",
          "Coordination avec vos équipes",
        ],
      },
      {
        title: "Prévoir",
        lead: "les ventes et consolider le forecast.",
        bullets: [
          "Collecte des informations auprès des partenaires",
          "Analyse des opportunités et consolidation des prévisions",
          "Mise à jour du forecast",
          "Identification des écarts, remontée des risques et opportunités",
        ],
      },
      {
        title: "Reporter",
        lead: "l'activité, les résultats et les prochaines actions.",
        bullets: [
          "Activité commerciale, opportunités, pipeline",
          "Prévisions de ventes et actions engagées",
          "Résultats et risques",
          "Prochaines étapes",
        ],
      },
    ],
  },

  promise: {
    eyebrow: "Ce que cela change",
    titleLead: "Une capacité commerciale opérationnelle,",
    titleAccent: "sans structure locale immédiate.",
    body: "L'entreprise dispose d'une capacité commerciale opérationnelle sur ses marchés export sans devoir constituer immédiatement une équipe dédiée ou une structure locale complète.",
    note: "Le niveau d'externalisation reste modulable : AS Biz Dev peut prendre en charge une mission ciblée ou assurer un pilotage commercial récurrent sur une zone déterminée.",
  },

  cta: {
    eyebrow: "Aller plus loin",
    heading: "Quelle zone souhaitez-vous confier ?",
    label: "Parlons de votre zone",
  },
};

const FunctionCard = ({ item, index }) => (
  <RevealOnScroll
    as="article"
    variant="up"
    delay={0.05}
    index={index}
    className="flex h-full flex-col rounded-card border border-gray-200 bg-white p-[1.25rem] transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lift"
  >
    <h3 className="font-display text-[1.25rem] font-semibold uppercase leading-[1.2] tracking-[-0.02em] text-navy">
      {item.title}
    </h3>
    <p className="mt-[0.5rem] text-[0.9375rem] leading-[1.5] text-orange">
      {item.lead}
    </p>
    <BulletList items={item.bullets} marker="dash" className="mt-[1.25rem]" />
  </RevealOnScroll>
);

// ============================================
// COMPOSANT — Offre 2, Pilotage commercial export externalisé (§9), ne pas toucher sauf besoin technique
// ============================================
export default function PilotageFr() {
  const lang = "fr";
  const t = CONTENT;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Accueil", url: `${SITE_URL}${ROUTES.home.fr}` },
    { name: "Nos solutions", url: `${SITE_URL}${ROUTES.solutions.fr}` },
    { name: "Pilotage commercial externalisé", url: `${SITE_URL}${ROUTES.pilotage.fr}` },
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

          <RevealOnScroll variant="up" className="mt-[1.75rem]">
            <BulletList items={t.situations.items} columns={2} />
            <p className="mt-[1.75rem] max-w-2xl text-[1.0625rem] leading-[1.7] text-gray-700">
              {t.situations.outro}
            </p>
          </RevealOnScroll>
        </Section>

        <Section>
          <SectionHeading
            eyebrow={t.functions.eyebrow}
            titleLead={t.functions.titleLead}
            titleAccent={t.functions.titleAccent}
          />

          <div className="mt-[2.5rem] grid gap-[1.25rem] md:grid-cols-2 lg:grid-cols-3">
            {t.functions.items.map((item, index) => (
              <FunctionCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </Section>

        <Section tone="navy">
          <RevealOnScroll variant="up" className="max-w-3xl">
            <p className="eyebrow text-orange">{t.promise.eyebrow}</p>
            <h2 className="mt-4 font-display display-md font-semibold tracking-tight text-white text-balance">
              {t.promise.titleLead}{" "}
              <span className="italic text-orange">{t.promise.titleAccent}</span>
            </h2>
            <p className="mt-6 text-[1.0625rem] leading-[1.7] text-white/75">
              {t.promise.body}
            </p>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-white/75">
              {t.promise.note}
            </p>
          </RevealOnScroll>
        </Section>

        <Section tone="alt">
          <CtaBlock {...t.cta} lang={lang} />
        </Section>
      </main>
    </>
  );
}
