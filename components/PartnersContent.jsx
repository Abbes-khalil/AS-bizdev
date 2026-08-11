import AsBizDevEdge from "@/components/AsBizDevEdge";
import CtaBlock from "@/components/CtaBlock";
import FeaturedReferences from "@/components/FeaturedReferences";
import NetworkEcosystem from "@/components/NetworkEcosystem";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SecondaryReferences from "@/components/SecondaryReferences";
import { getDictionary, interpolate } from "@/lib/i18n/dictionaries";
import { NETWORK_STATS, REFERENCES, SECTORS } from "@/lib/data/references";

const published = (type) =>
  REFERENCES.filter((org) => org.type === type && org.isPublished).sort(
    (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0),
  );

const withCopy = (org, copy) => ({
  ...org,
  ...copy[org.key],
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

  const clients = published("client").map((org) => withCopy(org, t.copy));
  const featuredClients = clients.filter((org) => org.featured);
  const secondaryClients = clients.filter((org) => !org.featured);
  const networkOrgs = published("network").map((org) => withCopy(org, t.copy));
  const partnerOrgs = published("partner").map((org) => withCopy(org, t.copy));

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
