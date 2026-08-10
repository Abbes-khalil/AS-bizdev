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
import { COUNTRIES, SUBREGIONS } from "../data/countries";
import useMarketSelection from "../hooks/useMarketSelection";
import { useT } from "../i18n";

/**
 * /marches — the main market experience: an interactive map plus an
 * accessible gallery list, both opening the same on-page modal.
 */
export default function Markets() {
  const t = useT("markets");

  const [activeRegion, setActiveRegion] = useState("all");
  const { selectedKey, selectedMarket, selectMarket, closeModal } = useMarketSelection();

  return (
    <main>
      <PageHero layout="split" {...t.hero} />

      <Section tone="navy">
        <RevealOnScroll variant="up" className="mx-auto max-w-3xl text-center">
          <p className="font-display text-[1.75rem] font-semibold italic leading-[1.3] tracking-[-0.02em] text-white lg:text-[2.25rem]">
            {t.closing.quote}
          </p>
          <p className="mt-[1.5rem] text-[1.0625rem] leading-[1.7] text-white/75">
            {t.closing.body}
          </p>
        </RevealOnScroll>
      </Section>

      <Section tone="alt">
        <RevealOnScroll
          variant="up"
          className="mb-[2rem] flex flex-wrap items-center justify-between gap-4"
        >
          <p className="eyebrow text-orange">{t.filters.ariaLabel}</p>
          <SectorFilter
            sectors={SUBREGIONS}
            labels={t.filters}
            active={activeRegion}
            onChange={setActiveRegion}
          />
        </RevealOnScroll>

        <RevealOnScroll variant="scale">
          <MarketsMap
            countries={COUNTRIES}
            activeRegion={activeRegion}
            selectedKey={selectedKey}
            onSelect={selectMarket}
            mapLabel={t.mapLabel}
          />
        </RevealOnScroll>
      </Section>

      <Section>
        <MarketList
          countries={COUNTRIES}
          groups={t.groups}
          activeRegion={activeRegion}
          onSelect={selectMarket}
          moreLabel={t.countryCta}
        />
      </Section>

      <Section tone="alt">
        <SectionHeading
          eyebrow={t.capabilities.eyebrow}
          titleLead={t.capabilities.titleLead}
          titleAccent={t.capabilities.titleAccent}
          intro={t.capabilities.intro}
        />

        <BulletList items={t.capabilities.items} className="mt-[2.5rem] max-w-2xl" />

        <RevealOnScroll variant="up" className="mt-[2.5rem]">
          <RouteLink routeKey="sectors" className="btn-ghost">
            {t.sectorsLink}
            <ArrowIcon />
          </RouteLink>
        </RevealOnScroll>
      </Section>

      <Section>
        <CtaBlock {...t.cta} />
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
