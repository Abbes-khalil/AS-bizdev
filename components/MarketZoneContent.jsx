import { Suspense } from "react";

import ArrowIcon from "@/components/ArrowIcon";
import BulletList from "@/components/BulletList";
import CtaBlock from "@/components/CtaBlock";
import MarketExperience from "@/components/MarketExperience";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import RouteLink from "@/components/RouteLink";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { COUNTRIES } from "@/lib/data/countries";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { viewBoxFor } from "@/lib/utils/mapViewBox";

const AFRICA_SUBREGIONS = ["north", "west", "south"];

/**
 * One geographic zone (Africa or the Middle East) — the same map + modal
 * experience as /marches, scoped to that zone's markets and cropped to its
 * own portion of the shared map.
 *
 * @param continent "africa" | "middleEast"
 */
export default function MarketZoneContent({ lang, continent }) {
  const t = getDictionary(lang, "markets");
  const zone = t.zones[continent];

  const isAfrica = continent === "africa";
  const countries = COUNTRIES.filter((country) =>
    isAfrica ? AFRICA_SUBREGIONS.includes(country.subregion) : country.subregion === "middleEast",
  );
  const viewBox = viewBoxFor(countries.map((country) => country.key));

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
          groups={isAfrica ? t.groups : null}
          filterSectors={AFRICA_SUBREGIONS}
          showFilter={isAfrica}
          mapLabel={zone.mapLabel}
          filterLabels={t.filters}
          countryCta={t.countryCta}
          modalLabels={t.modal}
          viewBox={viewBox}
        />
      </Suspense>

      {isAfrica ? (
        <Section tone="alt">
          <SectionHeading
            eyebrow={t.capabilities.eyebrow}
            titleLead={t.capabilities.titleLead}
            titleAccent={t.capabilities.titleAccent}
            intro={t.capabilities.intro}
          />

          <BulletList items={t.capabilities.items} className="mt-[2.5rem] max-w-2xl" />
        </Section>
      ) : (
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
          </RevealOnScroll>
        </Section>
      )}

      <Section>
        <RevealOnScroll variant="up" className="flex flex-col items-center gap-8 text-center">
          <RouteLink routeKey="sectors" className="btn-ghost">
            {t.sectorsLink}
            <ArrowIcon />
          </RouteLink>
        </RevealOnScroll>

        <CtaBlock {...t.cta} className="mt-[3rem]" />
      </Section>
    </main>
  );
}
