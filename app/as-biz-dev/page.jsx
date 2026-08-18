import Link from "next/link";

import BulletList from "@/components/ui/BulletList";
import CtaBlock from "@/components/ui/CtaBlock";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Team from "@/app/as-biz-dev/_components/Team";
import TextCard from "@/components/ui/TextCard";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";
import { ROUTES } from "@/lib/routes";

export const generateMetadata = () => buildMetadata("about", "fr");

/**
 * Absorbs the former "Nos valeurs" and "Notre savoir-faire" pages, rewritten
 * sober and factual: the unverifiable claims they carried ("expertise unique",
 * "partenaire de confiance idéal", coverage figures) are gone rather than
 * reworded, per §16.
 */
// ============================================
// CONTENU AFFICHÉ — modifier ici (titres, textes, équipe)
// ============================================
const PHOTOS = {
  stephane: "employe/stephane.webp",
  wafa: "employe/wafa.webp",
  khalil: "employe/khalil.webp",
  kaouther: "employe/kaouther.webp",
  taher: "employe/taher.webp",
  Achwek: "employe/Achwek.jpeg",
};

const CONTENT = {
  hero: {
    eyebrow: "AS Biz Dev",
    titleLead: "Accélérer. Développer.",
    titleAccent: "Piloter.",
    intro:
      "AS Biz Dev accompagne les PME et les entreprises B2B, notamment industrielles, qui souhaitent développer, structurer ou renforcer leur activité commerciale sur des marchés ciblés en Afrique et au Moyen-Orient.",
  },

  positioning: {
    eyebrow: "Notre positionnement",
    titleLead: "Nous n'arrêtons pas notre travail",
    titleAccent: "à la recommandation.",
    intro:
      "Notre particularité est d'intervenir aussi bien dans la phase d'accélération commerciale que dans la prise en charge opérationnelle et durable d'une partie de l'activité commerciale export.",
    doTitle: "Ce que nous faisons",
    doItems: [
      "Identifier les opportunités sur un marché ciblé",
      "Rechercher et qualifier les partenaires locaux",
      "Prospecter, développer les comptes et les opportunités",
      "Animer un réseau de distributeurs dans la durée",
      "Piloter le pipeline et consolider les prévisions de ventes",
      "Rendre compte de l'activité, des résultats et des risques",
    ],
    dontTitle: "Ce que nous ne faisons pas",
    dontItems: [
      "Vendre du conseil généraliste sans exécution derrière",
      "Annoncer une présence mondiale que nous n'avons pas",
      "Livrer une étude concluant qu'un marché est intéressant, et s'arrêter là",
    ],
  },

  method: {
    eyebrow: "Notre méthode",
    titleLead: "Comprendre, prioriser, agir,",
    titleAccent: "piloter, mesurer.",
    intro:
      "Nous travaillons avec vos équipes et vos partenaires locaux, sur la durée. Le vocabulaire est celui du terrain : distributeurs, agents, pipeline, forecast, commandes, plans d'action, taux de conversion.",
  },

  principles: {
    eyebrow: "Notre façon de travailler",
    titleLead: "Trois engagements",
    titleAccent: "tenus.",
    items: [
      {
        title: "La parole donnée",
        body: "Pas de promesse hasardeuse ni de dérapage budgétaire : le client sait en permanence où il en est. Nous faisons ce que nous disons, et nous le disons quand une action n'a pas produit le résultat attendu.",
      },
      {
        title: "L'engagement dans la durée",
        body: "Notre temporalité est celle du terrain, de l'objectif et des délais. Nous ne présentons pas un fait accompli : une fois le problème posé, nous proposons la solution la plus fiable et nous l'exécutons.",
      },
      {
        title: "La responsabilité",
        body: "Tarification équitable, fournisseurs locaux payés en temps et en heure, déplacements limités à ce qui est nécessaire. Ce sont des engagements de fonctionnement, pas une posture.",
      },
    ],
  },

  expertise: {
    eyebrow: "Notre savoir-faire",
    titleLead: "Ce que nous savons faire",
    titleAccent: "sur le terrain.",
    items: [
      {
        title: "Organiser en amont",
        body: "Sourcing, planification, commandes, gestion de stock : nous évaluons les impacts économiques d'une décision commerciale sur la chaîne produit, de l'usine au client.",
      },
      {
        title: "Rendre l'offre visible",
        body: "Étude de la concurrence et du marché à toucher, positionnement produit, plan de communication : nous ciblons les supports utiles pour capter les clients potentiels sur la zone.",
      },
      {
        title: "Accompagner le management",
        body: "Un développement export change l'organisation interne. Nous accompagnons les équipes concernées, et nous formons quand c'est nécessaire.",
      },
    ],
    sectorsCta: "Voir nos secteurs",
  },

  team: {
    sectionTitle: "L'équipe AS Biz Dev",
    sectionDescription:
      "Des profils opérationnels au service de votre développement commercial en Afrique et au Moyen-Orient.",
    portraitAlt: "Portrait de {name}, {role}",
    members: [
      {
        photo: PHOTOS.stephane,
        name: "Stéphane Allain",
        role: "Fondateur",
        bio: "20 ans d'expérience dans l'analyse et le développement des marchés internationaux pour le compte de grands groupes.",
      },
      {
        photo: PHOTOS.wafa,
        name: "Wafa Zouaoui",
        role: "Responsable des Opérations",
        bio: "19 ans d'expérience dans le management opérationnel et fonctionnel dans le secteur B2B (Tourisme).",
      },
      {
        name: "Achwek Kefifi",
        photo: PHOTOS.Achwek,
        bio: "10 ans d’expérience dans le commerce B2B notamment sur le grand Maghreb.",
      },
      {
        photo: PHOTOS.khalil,
        name: "Khalil Abbes",
        role: "Chargé junior d'efficacité commerciale et IA",
      },
      {
        photo: PHOTOS.kaouther,
        name: "Kaouther Bousaidi",
        role: "Assistante Administrative",
      },
      {
        photo: PHOTOS.taher,
        name: "Taher Kassem",
        role: "Comptabilité & Finance",
      },
    ],
  },

  cta: {
    eyebrow: "Aller plus loin",
    heading: "Sur quel marché voulez-vous avancer ?",
    label: "Parlons de votre marché",
  },
};

// ============================================
// COMPOSANT — AS Biz Dev : positionnement, méthode, savoir-faire, équipe (§2, §5), ne pas toucher sauf besoin technique
// ============================================
export default function AboutFr() {
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
          <SectionHeading
            eyebrow={t.positioning.eyebrow}
            titleLead={t.positioning.titleLead}
            titleAccent={t.positioning.titleAccent}
            intro={t.positioning.intro}
          />

          <div className="mt-[2.5rem] grid gap-[1.25rem] lg:grid-cols-2 lg:gap-[1.25rem]">
            <RevealOnScroll
              variant="left"
              className="rounded-card border border-gray-200 bg-white p-[2rem]"
            >
              <h3 className="font-display text-[1.125rem] font-semibold tracking-[-0.02em] text-navy">
                {t.positioning.doTitle}
              </h3>
              <BulletList items={t.positioning.doItems} className="mt-[1.25rem]" />
            </RevealOnScroll>

            <RevealOnScroll
              variant="right"
              delay={0.1}
              className="rounded-card border border-dashed border-gray-200 p-[2rem]"
            >
              <h3 className="font-display text-[1.125rem] font-semibold tracking-[-0.02em] text-navy">
                {t.positioning.dontTitle}
              </h3>
              <BulletList
                items={t.positioning.dontItems}
                marker="cross"
                className="mt-[1.25rem]"
              />
            </RevealOnScroll>
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow={t.method.eyebrow}
            titleLead={t.method.titleLead}
            titleAccent={t.method.titleAccent}
            intro={t.method.intro}
          />

          <SectionHeading
            eyebrow={t.principles.eyebrow}
            titleLead={t.principles.titleLead}
            titleAccent={t.principles.titleAccent}
            className="mt-[3.25rem] max-w-3xl"
          />

          <div className="mt-[1.75rem] grid gap-[1.25rem] md:grid-cols-3">
            {t.principles.items.map((item, index) => (
              <TextCard
                key={item.title}
                item={item}
                index={index}
                variant={index % 2 === 0 ? "up" : "scale"}
              />
            ))}
          </div>
        </Section>

        <Section tone="alt">
          <SectionHeading
            eyebrow={t.expertise.eyebrow}
            titleLead={t.expertise.titleLead}
            titleAccent={t.expertise.titleAccent}
          />

          <div className="mt-[2.5rem] grid gap-[1.25rem] md:grid-cols-3">
            {t.expertise.items.map((item, index) => (
              <TextCard
                key={item.title}
                item={item}
                index={index}
                variant={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>

          <RevealOnScroll variant="up" className="mt-[1.75rem]">
            <Link href={ROUTES.sectors[lang]} className="btn-ghost">
              {t.expertise.sectorsCta}
            </Link>
          </RevealOnScroll>
        </Section>

        <Team copy={t.team} />

        <Section>
          <CtaBlock {...t.cta} lang={lang} />
        </Section>
      </main>
    </>
  );
}
