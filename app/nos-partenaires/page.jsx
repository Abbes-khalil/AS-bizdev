import AsBizDevEdge from "@/components/references/AsBizDevEdge";
import CtaBlock from "@/components/ui/CtaBlock";
import NetworkEcosystem from "@/components/references/NetworkEcosystem";
import PageHero from "@/components/ui/PageHero";
import ReferencesSection from "@/components/references/ReferencesSection";
import Section from "@/components/ui/Section";
import { interpolate } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";
import { NETWORK_STATS, REFERENCES, SECTORS } from "@/app/nos-partenaires/_components/PartnersContent.data";

export const generateMetadata = () => buildMetadata("partners", "fr");

/**
 * `edge.blocks[0].body` carries a `{contactsPhrase}` token, interpolated
 * below from `NETWORK_STATS.contactsCount` (PartnersContent.data.js) —
 * never hardcode a contact count back into that string.
 *
 * The references themselves (clients, network institutions, partners —
 * name, description, logo, sectors, all in one object per entry) stay in
 * `PartnersContent.data.js`, kept separate on purpose: it's a scalable
 * dataset (filterable, sortable, per-entry `isPublished`), not page copy.
 */
// ============================================
// CONTENU AFFICHÉ — modifier ici (titres, textes, labels)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "Références & écosystème",
    titleLead: "Ils nous ont fait",
    titleAccent: "confiance.",
    intro:
      "PME, ETI, groupes industriels et organisations nous sollicitent pour accélérer leur développement commercial, structurer leurs marchés et transformer leurs opportunités en résultats. AS Biz Dev intervient auprès d'entreprises de tailles et de secteurs différents, avec une forte spécialisation dans les environnements industriels, technologiques et B2B.",
  },
  sectorLabels: {
    ariaLabel: "Filtrer par secteur",
    all: "Tous",
    industrie: "Industrie",
    automobile: "Automobile",
    technologies: "Technologies",
    distribution: "Distribution",
    sante: "Santé",
    transport: "Transport",
    services: "Services",
  },
  referencesSection: {
    title: "Références clients",
    intro:
      "Entreprises avec lesquelles AS Biz Dev a directement travaillé, dans le cadre de missions d'accélération commerciale, de développement international, de recherche de partenaires ou de pilotage commercial externalisé.",
    featuredLabel: "Références principales",
    moreLabel: "Autres références",
  },
  groupLabel: "Marque",
  groupsLabel: "Marques associées",
  networkSection: {
    eyebrow: "Un écosystème de réseaux complémentaires",
    title: "Écosystèmes & réseaux",
    intro:
      "AS Biz Dev s'appuie également sur plusieurs réseaux professionnels, économiques et institutionnels qui complètent notre propre base de contacts et renforcent notre connaissance des marchés.",
    partnersIntro:
      "Un écosystème de partenaires pouvant apporter des expertises complémentaires selon les projets et les marchés.",
  },
  categoryLabel: "Catégorie",
  labels: {
    client: "Référence client",
    network: "Réseau & institution",
    partner: "Partenaire",
  },
  websiteLabel: "Site internet",
  logoAlt: "Logo {name}",
  categories: {
    industry: { title: "Industrie / Développement Commercial" },
    consulting: {
      title: "Conseils / Coaching en développement des organisations",
    },
  },
  edge: {
    eyebrow: "Au-delà des références",
    titleLead: "Des références, mais surtout",
    titleAccent: "une capacité à agir.",
    intro:
      "Notre réseau et nos références constituent un point de départ, pas une finalité. AS Biz Dev combine connaissance des marchés, accès aux décideurs, réseaux professionnels et institutionnels, et capacité d'exécution commerciale afin d'accélérer le développement de ses clients.",
    blocks: [
      {
        heading: "Un réseau propriétaire structuré",
        body: "AS Biz Dev dispose d'une base propriétaire de {contactsPhrase}, couvrant plusieurs milliers d'entreprises. Cette base est complétée par notre réseau personnel et par les différents écosystèmes auxquels nous participons.",
      },
      {
        heading: "Une forte présence de décideurs",
        body: "Notre réseau comprend de nombreux interlocuteurs occupant des fonctions de décision. La valeur d'AS Biz Dev ne repose donc pas uniquement sur le nombre de contacts, mais sur la capacité à identifier et atteindre les bons niveaux de décision.",
        list: [
          "Direction Générale",
          "Direction Commerciale",
          "Direction Export",
          "Business Development",
          "Achats",
          "Direction industrielle",
          "Direction de filiale",
        ],
      },
      {
        heading: "Une forte orientation industrielle et B2B",
        body: "Les références présentées illustrent notamment notre connaissance des environnements suivants.",
        list: [
          "Industrie",
          "Équipements techniques",
          "Automobile",
          "Aéronautique",
          "Électronique",
          "Distribution",
          "Transport et logistique",
          "Santé",
          "Technologies",
          "Services B2B",
        ],
      },
    ],
  },
  finalCta: {
    eyebrow: "Prochaine étape",
    heading: "Développons votre prochain marché",
    label: "Parlons de votre marché",
  },
};

const published = (type) =>
  REFERENCES.filter((org) => org.type === type && org.isPublished).sort(
    (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0),
  );

const withLang = (org, lang) => ({
  ...org,
  ...org.content[lang],
  groupBrands: org.group?.brands,
});

const CONTACTS_PHRASE = (count) =>
  count
    ? `près de ${count} contacts professionnels`
    : "plusieurs milliers de contacts professionnels";

// ============================================
// COMPOSANT — mise en page de /nos-partenaires, ne pas toucher sauf besoin technique
// ============================================
export default function PartnersFr() {
  const lang = "fr";
  const t = CONTENT;

  const clients = published("client").map((org) => withLang(org, lang));
  const networkOrgs = published("network").map((org) => withLang(org, lang));
  const partnerOrgs = published("partner").map((org) => withLang(org, lang));

  const contactsPhrase = CONTACTS_PHRASE(NETWORK_STATS.contactsCount);
  const edge = {
    ...t.edge,
    blocks: t.edge.blocks.map((block, i) =>
      i === 0
        ? { ...block, body: interpolate(block.body, { contactsPhrase }) }
        : block,
    ),
  };

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
          <p className="max-w-2xl text-[1.05rem] leading-relaxed text-gray-700">
            {t.referencesSection.intro}
          </p>

          <div className="mt-10">
            <ReferencesSection
              clients={clients}
              sectors={SECTORS}
              sectorLabels={t.sectorLabels}
              featuredLabel={t.referencesSection.featuredLabel}
              moreLabel={t.referencesSection.moreLabel}
              referencesLabel={t.referencesSection.title}
              logoAlt={t.logoAlt}
              groupLabel={t.groupLabel}
              groupsLabel={t.groupsLabel}
            />
          </div>
        </Section>

        <NetworkEcosystem
          networkOrgs={networkOrgs}
          partnerOrgs={partnerOrgs}
          partnerCategories={t.categories}
          eyebrow={t.networkSection.eyebrow}
          title={t.networkSection.title}
          intro={t.networkSection.intro}
          partnersIntro={t.networkSection.partnersIntro}
          categoryLabel={t.categoryLabel}
          logoAlt={t.logoAlt}
        />

        <Section tone="white">
          <AsBizDevEdge {...edge} />
        </Section>

        <Section tone="alt">
          <CtaBlock {...t.finalCta} lang={lang} />
        </Section>
      </main>
    </>
  );
}
