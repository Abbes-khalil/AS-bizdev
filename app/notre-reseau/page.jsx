import BulletList from "@/components/ui/BulletList";
import CtaBlock from "@/components/ui/CtaBlock";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StepList from "@/components/ui/StepList";
import TextCard from "@/components/ui/TextCard";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("network", "fr");

/**
 * "Notre réseau" — contact base, decision-level access, the APM/GIZ/Business
 * France ecosystem, and the Connaître/Identifier/Connecter/Exécuter framework
 * (§5–§8). Distinct from Home's "Notre différence" (Comprendre → Mesurer),
 * which is about mission execution rather than the network/data engine.
 *
 * The APM/GIZ/Business France section deliberately uses "réseau,
 * collaboration, référencement" language, never "garantit / recommande /
 * certifie" — per the brief's own editorial caution against unverifiable
 * claims (§16).
 */
// ============================================
// CONTENU AFFICHÉ — modifier ici (titres, textes, boutons)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "Notre réseau",
    titleLead: "Nous ne partons pas d'une",
    titleAccent: "feuille blanche.",
    intro:
      "AS Biz Dev capitalise progressivement une connaissance des entreprises, des décideurs, des secteurs et des réseaux locaux afin d'accélérer le développement commercial de ses clients.",
  },

  base: {
    eyebrow: "Un réseau professionnel structuré",
    titleLead: "Une base propriétaire,",
    titleAccent: "et un environnement relationnel élargi.",
    intro:
      "AS Biz Dev dispose d'une base propriétaire structurée de près de 7 000 contacts professionnels, complétée par son réseau personnel, ses relations professionnelles et les différents écosystèmes auxquels l'entreprise participe. Cet environnement relationnel élargi représente plusieurs milliers de décideurs et contacts professionnels mobilisables ou identifiables selon les marchés et les projets. Il ne s'agit pas d'une simple mailing-list, mais d'un capital relationnel et informationnel structuré.",
    functionsTitle: "Fonctions représentées",
    functions: [
      "Direction Générale",
      "Direction Commerciale",
      "Direction Export",
      "Business Development",
      "Achats",
      "Direction industrielle",
      "Direction de filiale",
      "Management opérationnel",
    ],
  },

  pillars: {
    eyebrow: "Ce que cela change",
    titleLead: "La qualité du réseau, plus que",
    titleAccent: "le nombre de contacts.",
    items: [
      {
        title: "L'accès au bon niveau de décision",
        body: "La valeur d'une base commerciale ne réside pas uniquement dans le nombre de contacts. AS Biz Dev privilégie l'identification des personnes ayant une capacité réelle à décider, recommander, prescrire, acheter, distribuer, développer un partenariat ou ouvrir l'accès à un marché.",
      },
      {
        title: "Une connaissance qui croise marché, secteur et décideur",
        body: "Pays × Secteur × Entreprise × Fonction × Niveau de décision. Par exemple : identifier des décideurs industriels au Maroc, rechercher des distributeurs techniques en Côte d'Ivoire, identifier des acteurs agroalimentaires en Tunisie, rechercher des partenaires au Sénégal, ou identifier des interlocuteurs commerciaux aux Émirats arabes unis.",
      },
    ],
  },

  ecosystem: {
    eyebrow: "Un écosystème de réseaux complémentaires",
    titleLead: "Des réseaux qui complètent",
    titleAccent: "notre connaissance des marchés.",
    intro:
      "AS Biz Dev ne s'appuie pas uniquement sur sa propre base de contacts. Nous mobilisons également différents réseaux professionnels, économiques et institutionnels.",
    items: [
      {
        title: "APM — Association Progrès du Management",
        body: "Un réseau français de dirigeants d'entreprise, organisé autour de clubs permettant aux dirigeants de se former, partager leurs expériences et échanger entre pairs. Pour AS Biz Dev, cet environnement permet d'être en relation avec un écosystème de dirigeants de PME et d'ETI confrontés aux problématiques concrètes de croissance, d'organisation et de développement commercial.",
      },
      {
        title: "GIZ — Deutsche Gesellschaft für Internationale Zusammenarbeit",
        body: "L'agence allemande de coopération internationale, très présente dans de nombreux pays émergents et notamment en Afrique, sur des programmes de développement économique, de coopération, de formation et de structuration des écosystèmes locaux. AS Biz Dev s'appuie sur des réseaux et écosystèmes développés autour de la GIZ afin d'enrichir sa connaissance des acteurs locaux.",
      },
      {
        title: "Business France",
        body: "L'agence publique française chargée notamment d'accompagner les entreprises françaises dans leur développement international, avec des équipes et des réseaux dans de nombreux pays. AS Biz Dev collabore avec Business France et est référencé dans ses dispositifs et réseaux, ce qui complète notre capacité à accompagner les PME dans leurs démarches de développement international.",
      },
    ],
  },

  difference: {
    eyebrow: "Notre différence",
    titleLead: "Transformer le réseau",
    titleAccent: "en business.",
    intro:
      "Un fichier de contacts n'a de valeur que s'il permet de générer plus rapidement des actions commerciales pertinentes.",
    steps: [
      { title: "Connaître", body: "Comprendre le marché, ses acteurs, ses secteurs, ses circuits de distribution et ses spécificités locales." },
      { title: "Identifier", body: "Trouver les entreprises, les décideurs, les prospects, les distributeurs, les partenaires et les intégrateurs." },
      { title: "Connecter", body: "Mobiliser notre base de contacts, notre réseau professionnel, notre réseau de dirigeants, nos partenaires locaux, et les écosystèmes APM, GIZ, Business France et autres réseaux pertinents." },
      { title: "Exécuter", body: "Passer à l'action : prospection, prises de contact, rendez-vous, recherche de partenaires, développement de comptes, animation de distributeurs, suivi du pipeline, prévisions de ventes, pilotage commercial." },
    ],
  },

  closing: {
    quote: "Nous ne vendons pas un carnet d'adresses.",
    body: "Nous utilisons la connaissance des marchés, la donnée, les réseaux professionnels et notre capacité d'exécution pour accélérer le développement commercial de nos clients. Notre valeur ne réside pas uniquement dans notre capacité à identifier les bons interlocuteurs. Elle réside dans notre capacité à transformer ces connexions en actions commerciales, opportunités et développement de marché.",
  },

  cta: {
    eyebrow: "Aller plus loin",
    heading: "Parlons de votre marché",
    label: "Nous contacter",
  },
};

// ============================================
// COMPOSANT — mise en page de /notre-reseau, ne pas toucher sauf besoin technique
// ============================================
export default function NetworkFr() {
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
            eyebrow={t.base.eyebrow}
            titleLead={t.base.titleLead}
            titleAccent={t.base.titleAccent}
            intro={t.base.intro}
          />

          <RevealOnScroll variant="up" className="mt-[1.75rem] max-w-2xl">
            <h3 className="font-display text-[1rem] font-semibold tracking-[-0.02em] text-navy">
              {t.base.functionsTitle}
            </h3>
            <BulletList items={t.base.functions} columns={2} className="mt-[1.25rem]" />
          </RevealOnScroll>
        </Section>

        <Section>
          <SectionHeading
            eyebrow={t.pillars.eyebrow}
            titleLead={t.pillars.titleLead}
            titleAccent={t.pillars.titleAccent}
          />

          <div className="mt-[2.5rem] grid gap-[1.25rem] md:grid-cols-2">
            {t.pillars.items.map((item, index) => (
              <TextCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </Section>

        <Section tone="alt">
          <SectionHeading
            eyebrow={t.ecosystem.eyebrow}
            titleLead={t.ecosystem.titleLead}
            titleAccent={t.ecosystem.titleAccent}
            intro={t.ecosystem.intro}
          />

          <div className="mt-[2.5rem] grid gap-[1.25rem] md:grid-cols-3">
            {t.ecosystem.items.map((item, index) => (
              <TextCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow={t.difference.eyebrow}
            titleLead={t.difference.titleLead}
            titleAccent={t.difference.titleAccent}
            intro={t.difference.intro}
          />

          <div className="mt-[2.5rem]">
            <StepList steps={t.difference.steps} />
          </div>
        </Section>

        <Section tone="navy">
          <RevealOnScroll variant="up" className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[1.75rem] font-semibold italic leading-[1.3] tracking-[-0.02em] text-white lg:text-[2.25rem]">
              {t.closing.quote}
            </p>
            <p className="mt-[1.5rem] text-[1.0625rem] leading-[1.7] text-white/75">
              {t.closing.body}
            </p>
          </RevealOnScroll>
        </Section>

        <Section>
          <CtaBlock {...t.cta} lang={lang} />
        </Section>
      </main>
    </>
  );
}
