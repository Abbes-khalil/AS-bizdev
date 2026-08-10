"use client";

import { useState } from "react";

import ArrowIcon from "../components/ArrowIcon";
import BulletList from "../components/BulletList";
import CtaBlock from "../components/CtaBlock";
import MarketList from "../components/MarketList";
import MarketModal from "../components/MarketModal";
import MarketsMap from "../components/MarketsMap";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/RevealOnScroll";
import RouteLink from "../components/RouteLink";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import SectorFilter from "../components/SectorFilter";
import { COUNTRIES } from "../data/countries";
import useMarketSelection from "../hooks/useMarketSelection";
import { useT } from "../i18n";
import { viewBoxFor } from "../utils/mapViewBox";

const AFRICA_SUBREGIONS = ["north", "west", "south"];

/**
 * One geographic zone (Africa or the Middle East) — the same map + modal
 * experience as /marches, scoped to that zone's markets and cropped to its
 * own portion of the shared map. Also the route key, so the page needs no
 * per-zone component.
 *
 * @param continent "africa" | "middleEast"
 */
export default function MarketZone({ continent }) {
  const t = useT("markets");
  const zone = t.zones[continent];

  const isAfrica = continent === "africa";
  const countries = COUNTRIES.filter((country) =>
    isAfrica ? AFRICA_SUBREGIONS.includes(country.subregion) : country.subregion === "middleEast",
  );
  const viewBox = viewBoxFor(countries.map((country) => country.key));

  const [activeRegion, setActiveRegion] = useState("all");
  const { selectedKey, selectedMarket, selectMarket, closeModal } = useMarketSelection();

  return (
    <main>
      <PageHero
        layout="split"
        eyebrow={zone.eyebrow}
        titleLead={zone.titleLead}
        titleAccent={zone.titleAccent}
        intro={zone.intro}
      />

      <Section tone="alt">
        {isAfrica && (
          <RevealOnScroll
            variant="up"
            className="mb-[2rem] flex flex-wrap items-center justify-between gap-4"
          >
            <p className="eyebrow text-orange">{t.filters.ariaLabel}</p>
            <SectorFilter
              sectors={AFRICA_SUBREGIONS}
              labels={t.filters}
              active={activeRegion}
              onChange={setActiveRegion}
            />
          </RevealOnScroll>
        )}

        <RevealOnScroll variant="scale">
          <MarketsMap
            countries={countries}
            activeRegion={activeRegion}
            selectedKey={selectedKey}
            onSelect={selectMarket}
            mapLabel={zone.mapLabel}
            viewBox={viewBox ?? undefined}
          />
        </RevealOnScroll>
      </Section>

      <Section>
        <MarketList
          countries={countries}
          groups={isAfrica ? t.groups : null}
          activeRegion={activeRegion}
          onSelect={selectMarket}
          moreLabel={t.countryCta}
        />
      </Section>

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

      <MarketModal
        market={selectedMarket}
        regionLabel={selectedMarket ? t.filters[selectedMarket.subregion] : ""}
        sectionLabels={t.modal.sections}
        ctaLabel={t.modal.cta}
        closeLabel={t.modal.close}
        onClose={closeModal}
      />
    </main>
  );
}
