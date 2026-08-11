import Eyebrow from "@/components/Eyebrow";
import ReferenceCard from "@/components/ReferenceCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import Section from "@/components/Section";

/**
 * "Écosystèmes & réseaux" — kept in its own navy-toned section so it never
 * reads as part of the client references above it. Renders the named
 * institutional networks (APM, GIZ, Business France, TAA) and, below them,
 * the pre-existing partner sub-tier (admg, sysmic) grouped by category,
 * unchanged from before this rework.
 */
const NetworkEcosystem = ({
  networkOrgs,
  partnerOrgs,
  partnerCategories,
  copy,
  eyebrow,
  title,
  intro,
  partnersIntro,
  networkLabel,
  partnerLabel,
  categoryLabel,
  websiteLabel,
  logoAlt,
}) => {
  const partnersByCategory = Object.entries(partnerCategories).map(([key, category]) => ({
    key,
    title: category.title,
    orgs: partnerOrgs.filter((org) => org.category === key),
  }));

  return (
    <Section tone="navy">
      <RevealOnScroll variant="up" className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 font-display text-[2rem] font-semibold tracking-tight text-balance md:text-[2.5rem]">
          {title}
        </h2>
        <p className="mt-6 text-[1.0625rem] leading-[1.7] text-white/75">{intro}</p>
      </RevealOnScroll>

      <ul role="list" className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {networkOrgs.map((org, i) => (
          <li key={org.key}>
            <ReferenceCard
              org={org}
              index={i}
              featured
              typeLabel={networkLabel}
              websiteLabel={websiteLabel}
              logoAlt={logoAlt}
            />
          </li>
        ))}
      </ul>

      {partnersByCategory.some((category) => category.orgs.length > 0) && (
        <div className="mt-20 space-y-12">
          <RevealOnScroll variant="up" className="max-w-2xl">
            <p className="text-[1.0625rem] leading-[1.7] text-white/75">{partnersIntro}</p>
          </RevealOnScroll>

          {partnersByCategory.map(
            (category, catIdx) =>
              category.orgs.length > 0 && (
                <div key={category.key}>
                  <RevealOnScroll variant="up" className="mb-6">
                    <p className="eyebrow text-orange">
                      {categoryLabel} 0{catIdx + 1}
                    </p>
                    <h3 className="mt-3 font-display text-[1.375rem] font-semibold tracking-tight">
                      {category.title}
                    </h3>
                  </RevealOnScroll>
                  <ul role="list" className="grid gap-6 sm:grid-cols-2">
                    {category.orgs.map((org, i) => (
                      <li key={org.key}>
                        <ReferenceCard
                          org={org}
                          index={i}
                          typeLabel={partnerLabel}
                          websiteLabel={websiteLabel}
                          logoAlt={logoAlt}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ),
          )}
        </div>
      )}
    </Section>
  );
};

export default NetworkEcosystem;
