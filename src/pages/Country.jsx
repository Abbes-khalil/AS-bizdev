import { Navigate, useParams } from "react-router-dom";

import BulletList from "../components/BulletList";
import CtaBlock from "../components/CtaBlock";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/RevealOnScroll";
import RouteLink from "../components/RouteLink";
import Section from "../components/Section";
import { pathFor } from "../constants/routes";
import { findCountryBySlug } from "../data/countries";
import useSeo from "../hooks/useSeo";
import { countryMeta } from "../seo/metadata";
import { useLang } from "../i18n/LanguageProvider";
import { useT } from "../i18n";

const SECTION_ORDER = [
  "sectors",
  "clients",
  "channels",
  "stakes",
  "intervention",
  "partners",
];

const CountrySection = ({ title, items, toValidate, index }) => (
  <RevealOnScroll
    as="section"
    variant="up"
    delay={0.05}
    index={index}
    className="rounded-card border border-gray-200 bg-white p-[1.75rem]"
  >
    <h2 className="font-display text-[1.125rem] font-semibold leading-[1.25] tracking-[-0.02em] text-navy">
      {title}
    </h2>

    {items?.length ? (
      <BulletList items={items} marker="dash" className="mt-[1rem]" />
    ) : (
      <p className="mt-[1rem] text-[0.875rem] leading-[1.6] text-gray-400">
        {toValidate}
      </p>
    )}
  </RevealOnScroll>
);

/**
 * Country page (§10). Entirely data-driven: publishing a market means adding
 * an entry to `src/data/countries.js`. Sections with no validated content say
 * so rather than being filled in.
 */
export default function Country() {
  const { slug } = useParams();
  const { lang } = useLang();
  const t = useT("markets");

  const country = findCountryBySlug(slug);
  const meta = country ? countryMeta(country, lang) : undefined;

  useSeo("markets", meta);

  if (!country) return <Navigate to={pathFor("markets", lang)} replace />;

  // Each language has its own slug; keep one canonical URL per language.
  const canonicalSlug = country.slug[lang] ?? country.slug.fr;
  if (slug !== canonicalSlug) {
    return (
      <Navigate to={pathFor("country", lang, { slug: canonicalSlug })} replace />
    );
  }

  const content = country[lang] ?? country.fr ?? {};
  const name = country.name[lang] ?? country.name.fr;

  return (
    <main>
      <PageHero
        eyebrow={t.zones[country.zone].eyebrow}
        titleLead={name}
        titleAccent=""
        intro={content.intro}
      >
        <RouteLink routeKey={country.zone} className="btn-ghost mt-8">
          {t.country.backToZone}
        </RouteLink>
      </PageHero>

      <Section tone="alt">
        <div className="grid gap-[1.25rem] md:grid-cols-2 lg:grid-cols-3">
          {SECTION_ORDER.map((key, index) => (
            <CountrySection
              key={key}
              title={t.country.sections[key]}
              items={content[key]}
              toValidate={t.country.toValidate}
              index={index}
            />
          ))}
        </div>

        <CtaBlock {...t.country.cta} className="mt-[4rem]" />
      </Section>
    </main>
  );
}
