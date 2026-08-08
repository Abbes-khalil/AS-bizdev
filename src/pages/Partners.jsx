import CtaBlock from "../components/CtaBlock";
import OrganizationCard from "../components/OrganizationCard";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/RevealOnScroll";
import useSeo from "../hooks/useSeo";
import { useT } from "../i18n";
import { ORGANIZATIONS } from "../i18n/content/partners";

const published = (type) =>
  ORGANIZATIONS.filter((org) => org.type === type && org.isPublished).sort(
    (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0),
  );

const CLIENTS = published("client");
const PARTNERS = published("partner");

export default function Partners() {
  const t = useT("partners");
  useSeo("partners");

  const partnersByCategory = Object.entries(t.categories).map(([key, category]) => ({
    key,
    title: category.title,
    orgs: PARTNERS.filter((org) => org.category === key),
  }));

  return (
    <main>
      <PageHero layout="split" {...t.hero} />

      <section className="bg-surface-alt py-24 lg:py-32">
        <div className="container-x space-y-20">
          <div>
            <RevealOnScroll variant="up" className="mb-10 max-w-2xl">
              <p className="eyebrow text-orange">{t.clientsSection.title}</p>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-gray-700">
                {t.clientsSection.intro}
              </p>
            </RevealOnScroll>

            {CLIENTS.length > 0 ? (
              <ul role="list" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {CLIENTS.map((org, i) => (
                  <li key={org.key}>
                    <OrganizationCard
                      org={{ ...org, ...t.copy[org.key] }}
                      index={i}
                      typeLabel={t.labels.client}
                      isClient
                      statusLabel={org.status ? t.statusLabels[org.status] : undefined}
                      websiteLabel={t.websiteLabel}
                      logoAlt={t.logoAlt}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[0.95rem] text-gray-500">{t.clientsSection.empty}</p>
            )}
          </div>

          <div className="space-y-14">
            <RevealOnScroll variant="up" className="max-w-2xl">
              <p className="eyebrow text-orange">{t.partnersSection.title}</p>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-gray-700">
                {t.partnersSection.intro}
              </p>
            </RevealOnScroll>

            {partnersByCategory.map(
              (category, catIdx) =>
                category.orgs.length > 0 && (
                  <div key={category.key}>
                    <RevealOnScroll variant="up" className="mb-8">
                      <p className="eyebrow text-orange">
                        {t.categoryLabel} 0{catIdx + 1}
                      </p>
                      <h2 className="mt-3 font-display text-[1.5rem] font-semibold tracking-tight text-navy lg:text-[1.75rem]">
                        {category.title}
                      </h2>
                    </RevealOnScroll>
                    <ul role="list" className="grid gap-6 md:grid-cols-2 lg:gap-8">
                      {category.orgs.map((org, i) => (
                        <li key={org.key}>
                          <OrganizationCard
                            org={{ ...org, ...t.copy[org.key] }}
                            index={i}
                            typeLabel={t.labels.partner}
                            isClient={false}
                            websiteLabel={t.websiteLabel}
                            logoAlt={t.logoAlt}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
            )}
          </div>

          <CtaBlock {...t.cta} routeKey="becomePartner" className="mt-16" />
        </div>
      </section>
    </main>
  );
}
