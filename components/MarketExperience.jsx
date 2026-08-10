"use client";

import { useState } from "react";

import MarketList from "@/components/MarketList";
import MarketModal from "@/components/MarketModal";
import MarketsMap from "@/components/MarketsMap";
import RevealOnScroll from "@/components/RevealOnScroll";
import Section from "@/components/Section";
import SectorFilter from "@/components/SectorFilter";
import useMarketSelection from "@/hooks/useMarketSelection";

/**
 * The interactive core shared by /marches and its zone pages: filter chips,
 * map, accessible list gallery and the on-page modal all share selection
 * state, so they live together in one client island. Everything around it
 * (hero, closing quote, capabilities, CTA) stays server-rendered.
 */
export default function MarketExperience({
  countries,
  groups,
  filterSectors,
  showFilter,
  mapLabel,
  filterLabels,
  countryCta,
  modalLabels,
  viewBox,
}) {
  const [activeRegion, setActiveRegion] = useState("all");
  const { selectedKey, selectedMarket, selectMarket, closeModal } = useMarketSelection();

  return (
    <>
      <Section tone="alt">
        {showFilter && (
          <RevealOnScroll
            variant="up"
            className="mb-[2rem] flex flex-wrap items-center justify-between gap-4"
          >
            <p className="eyebrow text-orange">{filterLabels.ariaLabel}</p>
            <SectorFilter
              sectors={filterSectors}
              labels={filterLabels}
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
            mapLabel={mapLabel}
            viewBox={viewBox ?? undefined}
          />
        </RevealOnScroll>
      </Section>

      <Section>
        <MarketList
          countries={countries}
          groups={groups}
          activeRegion={activeRegion}
          onSelect={selectMarket}
          moreLabel={countryCta}
        />
      </Section>

      <MarketModal
        market={selectedMarket}
        regionLabel={selectedMarket ? filterLabels[selectedMarket.subregion] : ""}
        sectionLabels={modalLabels.sections}
        ctaLabel={modalLabels.cta}
        closeLabel={modalLabels.close}
        onClose={closeModal}
      />
    </>
  );
}
