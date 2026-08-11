import AsBizDevEdge from "@/components/references/AsBizDevEdge";
import CtaBlock from "@/components/ui/CtaBlock";
import FeaturedReferences from "@/components/references/FeaturedReferences";
import NetworkEcosystem from "@/components/references/NetworkEcosystem";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SecondaryReferences from "@/components/references/SecondaryReferences";
import { getDictionary, interpolate } from "@/lib/i18n/dictionaries";
import { NETWORK_STATS, REFERENCES, SECTORS } from "./PartnersContent.data";

const published = (type) =>
  REFERENCES.filter((org) => org.type === type && org.isPublished).sort(
    (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0),
  );

const withLang = (org, lang) => ({
  ...org,
  ...org.content[lang],
  groupBrands: org.group?.brands,
});

const CONTACTS_PHRASE = {
  fr: (count) =>
    count
      ? `près de ${count} contacts professionnels`
      : "plusieurs milliers de contacts professionnels",
  en: (count) =>
    count
      ? `close to ${count} professional contacts`
      : "several thousand professional contacts",
};

export default function PartnersContent({ lang }) {
  const t = getDictionary(lang, "partners");

  const clients = published("client").map((org) => withLang(org, lang));
  const featuredClients = clients.filter((org) => org.featured);
  const secondaryClients = clients.filter((org) => !org.featured);
  const networkOrgs = published("network").map((org) => withLang(org, lang));
  const partnerOrgs = published("partner").map((org) => withLang(org, lang));

  const contactsPhrase = CONTACTS_PHRASE[lang](NETWORK_STATS.contactsCount);
  const edge = {
    ...t.edge,
    blocks: t.edge.blocks.map((block, i) =>
      i === 0 ? { ...block, body: interpolate(block.body, { contactsPhrase }) } : block,
    ),
  };

  return (
    <main>
      <PageHero layout="split" {...t.hero} />

      <Section tone="alt">
        <p className="max-w-2xl text-[1.05rem] leading-relaxed text-gray-700">
          {t.referencesSection.intro}
        </p>

        <div className="mt-10">
          <FeaturedReferences
            orgs={featuredClients}
            title={t.referencesSection.featuredLabel}
            typeLabel={t.labels.client}
            websiteLabel={t.websiteLabel}
            logoAlt={t.logoAlt}
            sectorLabels={t.sectorLabels}
            groupLabel={t.groupLabel}
            groupsLabel={t.groupsLabel}
          />

          <SecondaryReferences
            orgs={secondaryClients}
            sectors={SECTORS}
            sectorLabels={t.sectorLabels}
            title={t.referencesSection.moreLabel}
            typeLabel={t.labels.client}
            websiteLabel={t.websiteLabel}
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
        networkLabel={t.labels.network}
        partnerLabel={t.labels.partner}
        categoryLabel={t.categoryLabel}
        websiteLabel={t.websiteLabel}
        logoAlt={t.logoAlt}
      />

      <Section tone="white">
        <AsBizDevEdge {...edge} />
      </Section>

      <Section tone="alt">
        <CtaBlock {...t.finalCta} lang={lang} />
      </Section>
    </main>
  );
}
