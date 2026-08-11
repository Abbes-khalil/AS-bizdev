import Link from "next/link";
import { Suspense } from "react";

import ArrowIcon from "@/components/ui/ArrowIcon";
import CtaBlock from "@/components/ui/CtaBlock";
import MarketExperience from "@/components/markets/MarketExperience";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { PUBLISHED_COUNTRIES } from "@/lib/data/countries";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { ROUTES } from "@/lib/routes";
import { viewBoxFor } from "@/lib/utils/mapViewBox";

const AFRICA_SUBREGIONS = ["north", "west", "south"];

/**
 * One geographic zone (Africa or the Middle East) — the same map + modal
 * experience as /marches, scoped to that zone's markets and cropped to its
 * own portion of the shared map.
 *
 * Everything after the map is the same five-block sequence for both zones
 * (what the knowledge enables → key message → sectors → solutions → CTA),
 * so a market page never reads as a geography lesson on its own — it always
 * leads to the sector/solutions conversation. Only the Middle East gets an
 * extra reassurance block right after its map, since it's an earlier-stage
 * zone than Africa's denser network.
 *
 * @param continent "africa" | "middleEast"
 */
export default function MarketZoneContent({ lang, continent }) {
  const t = getDictionary(lang, "markets");
  const zone = t.zones[continent];

  const isAfrica = continent === "africa";
  const countries = PUBLISHED_COUNTRIES.filter((country) =>
    isAfrica ? AFRICA_SUBREGIONS.includes(country.subregion) : country.subregion === "middleEast",
  );
  const viewBox = viewBoxFor(countries, isAfrica ? 110 : 130);

  return (
    <main>
      <PageHero
        layout="split"
        eyebrow={zone.eyebrow}
        titleLead={zone.titleLead}
        titleAccent={zone.titleAccent}
        intro={zone.intro}
      />

      <Suspense fallback={null}>
        <MarketExperience
          countries={countries}
          filterSectors={AFRICA_SUBREGIONS}
          showFilter={isAfrica}
          mapLabel={zone.mapLabel}
          filterLabels={t.filters}
          modalLabels={t.modal}
          altListLabel={t.altList.summary}
          viewBox={viewBox}
          maxWidthRem={isAfrica ? 42 : 44}
          maxHeightRem={isAfrica ? 60 : undefined}
        />
      </Suspense>

      {!isAfrica && (
        <Section tone="navy">
          <RevealOnScroll variant="up" className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-orange">{zone.developing.eyebrow}</p>
            <h2 className="mt-4 font-display display-md font-semibold tracking-tight text-white text-balance">
              {zone.developing.titleLead}{" "}
              <span className="italic text-orange">{zone.developing.titleAccent}</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-[1.0625rem] leading-[1.7] text-white/75">
              {zone.developing.body}
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-[0.875rem] leading-[1.6] text-white/50">
              {zone.developing.coverageNote}
            </p>
          </RevealOnScroll>
        </Section>
      )}

      {/* 1. What this market knowledge enables, grouped into four steps rather
          than one long bullet list. */}
      <Section tone="alt">
        <SectionHeading
          eyebrow={t.capabilities.eyebrow}
          titleLead={t.capabilities.titleLead}
          titleAccent={t.capabilities.titleAccent}
          intro={t.capabilities.intro}
        />

        <div className="mt-[2.5rem] grid gap-[1.5rem] sm:grid-cols-2 lg:grid-cols-4">
          {t.capabilityGroups.map((group, index) => (
            <RevealOnScroll
              key={group.title}
              variant="up"
              index={index}
              className="rounded-card border border-gray-200 bg-white p-[1.5rem]"
            >
              <h3 className="font-display text-[0.8125rem] font-semibold uppercase tracking-widest text-orange">
                {group.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-[1.6] text-gray-700">
                {group.body}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* 2. The key message, given its own strong visual moment rather than a
          plain paragraph — plus a quiet way through to Notre Réseau. */}
      <Section tone="navy">
        <RevealOnScroll variant="up" className="mx-auto max-w-3xl text-center">
          <p className="font-display text-[1.75rem] font-semibold italic leading-[1.3] tracking-[-0.02em] text-white lg:text-[2.25rem]">
            {t.closing.quote}
          </p>
          <p className="mt-[1.5rem] text-[1.0625rem] leading-[1.7] text-white/75">
            {t.closing.body}
          </p>
          <Link href={ROUTES.network[lang]} className="btn-primary mt-[2rem]">
            {t.networkLink}
            <ArrowIcon />
          </Link>
        </RevealOnScroll>
      </Section>

      {/* 3. Bridge to Nos Secteurs: market (where) → sector (in what economic
          environment), without duplicating the sectors page itself. */}
      <Section>
        <SectionHeading
          eyebrow={t.sectorsBridge.eyebrow}
          titleLead={t.sectorsBridge.titleLead}
          titleAccent={t.sectorsBridge.titleAccent}
          intro={t.sectorsBridge.intro}
          className="mx-auto max-w-2xl text-center"
        >
          <Link href={ROUTES.sectors[lang]} className="btn-ghost mt-[2rem]">
            {t.sectorsLink}
            <ArrowIcon />
          </Link>
        </SectionHeading>
      </Section>

      {/* 4. Bridge to the two solutions: a market is a starting point, not
          the whole offer — this keeps the page from reading as geography
          alone. */}
      <Section tone="alt">
        <SectionHeading
          eyebrow={t.zoneLinks.eyebrow}
          titleLead={t.zoneLinks.titleLead}
          titleAccent={t.zoneLinks.titleAccent}
          intro={t.zoneLinks.intro}
          className="mx-auto max-w-2xl text-center"
        />

        <div className="mx-auto mt-[2.5rem] grid max-w-3xl gap-[1.5rem] sm:grid-cols-2">
          {t.zoneLinks.items.map((item, index) => (
            <RevealOnScroll key={item.routeKey} variant="up" index={index}>
              <Link
                href={ROUTES[item.routeKey][lang]}
                className="group block h-full rounded-card border border-gray-200 bg-white p-[1.5rem] transition-colors duration-300 hover:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
              >
                <span className="block font-display text-[1rem] font-semibold text-navy">
                  {item.title}
                </span>
                <span className="mt-2 block text-[0.875rem] leading-[1.6] text-gray-600">
                  {item.body}
                </span>
                <ArrowIcon className="mt-3 text-orange transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* 5. Final, market-specific CTA. */}
      <Section>
        <CtaBlock {...t.zoneCta} lang={lang} />
      </Section>
    </main>
  );
}
