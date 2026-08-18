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

export const generateMetadata = () => buildMetadata("partners", "en");

/**
 * The references themselves (clients, network institutions, partners) stay
 * in `PartnersContent.data.js`, kept separate on purpose: it's a scalable
 * dataset (filterable, sortable, per-entry `isPublished`), not page copy.
 */
// ============================================
// PAGE CONTENT — edit here (headings, copy, labels)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "References & ecosystem",
    titleLead: "Companies that",
    titleAccent: "trust us.",
    intro:
      "SMEs, mid-caps, industrial groups and organisations turn to AS Biz Dev to accelerate their business development, structure their markets and turn opportunities into results. AS Biz Dev works with companies of different sizes and sectors, with a strong specialisation in industrial, technology and B2B environments.",
  },
  sectorLabels: {
    ariaLabel: "Filter by sector",
    all: "All",
    industrie: "Industry",
    automobile: "Automotive",
    technologies: "Technology",
    distribution: "Distribution",
    sante: "Healthcare",
    transport: "Transport",
    services: "Services",
  },
  referencesSection: {
    title: "Client references",
    intro:
      "Companies AS Biz Dev has directly worked with, on commercial acceleration, international development, partner sourcing or outsourced sales management missions.",
    featuredLabel: "Main references",
    moreLabel: "Other references",
  },
  groupLabel: "Brand",
  groupsLabel: "Associated brands",
  networkSection: {
    eyebrow: "A complementary network ecosystem",
    title: "Ecosystem & networks",
    intro:
      "AS Biz Dev also draws on several professional, economic and institutional networks that complement our own contact base and strengthen our market knowledge.",
    partnersIntro:
      "An ecosystem of partners able to bring complementary expertise depending on the project and the market.",
  },
  categoryLabel: "Category",
  labels: {
    client: "Client reference",
    network: "Network & institution",
    partner: "Partner",
  },
  websiteLabel: "Website",
  logoAlt: "{name} logo",
  categories: {
    industry: { title: "Industry / Business Development" },
    consulting: { title: "Consulting / Organisational development coaching" },
  },
  edge: {
    eyebrow: "Beyond references",
    titleLead: "References, but above all",
    titleAccent: "the ability to act.",
    intro:
      "Our network and our references are a starting point, not an end in themselves. AS Biz Dev combines market knowledge, access to decision-makers, professional and institutional networks, and commercial execution capability to accelerate its clients' development.",
    blocks: [
      {
        heading: "A structured proprietary network",
        body: "AS Biz Dev holds a proprietary base of {contactsPhrase}, covering several thousand companies. This base is complemented by our personal network and by the various ecosystems we take part in.",
      },
      {
        heading: "A strong presence of decision-makers",
        body: "Our network includes many contacts in decision-making roles. AS Biz Dev's value doesn't rest solely on the number of contacts, but on the ability to identify and reach the right decision-making levels.",
        list: [
          "General Management",
          "Sales Management",
          "Export Management",
          "Business Development",
          "Purchasing",
          "Industrial Management",
          "Subsidiary Management",
        ],
      },
      {
        heading: "A strong industrial and B2B orientation",
        body: "The references presented notably illustrate our knowledge of the following environments.",
        list: [
          "Industry",
          "Technical equipment",
          "Automotive",
          "Aerospace",
          "Electronics",
          "Distribution",
          "Transport & logistics",
          "Healthcare",
          "Technology",
          "B2B services",
        ],
      },
    ],
  },
  finalCta: {
    eyebrow: "Next step",
    heading: "Let's grow your next market",
    label: "Let's talk about your market",
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
    ? `close to ${count} professional contacts`
    : "several thousand professional contacts";

// ============================================
// COMPONENT — /en/our-partners layout, leave alone unless it's a technical change
// ============================================
export default function PartnersEn() {
  const lang = "en";
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
          __html: JSON.stringify(organisationJsonLd("en")),
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
