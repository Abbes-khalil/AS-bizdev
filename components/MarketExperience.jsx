"use client";

import { useMemo, useState } from "react";

import MarketModal from "@/components/MarketModal";
import MarketsMap from "@/components/MarketsMap";
import RevealOnScroll from "@/components/RevealOnScroll";
import Section from "@/components/Section";
import SectorFilter from "@/components/SectorFilter";
import useMarketSelection from "@/hooks/useMarketSelection";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { viewBoxFor } from "@/lib/utils/mapViewBox";

/**
 * The interactive core shared by zone pages: filter chips, map and the
 * on-page modal share selection state, so they live together in one client
 * island. Everything around it (hero, closing quote, capabilities, CTA)
 * stays server-rendered.
 */
export default function MarketExperience({
  countries,
  filterSectors,
  showFilter,
  mapLabel,
  filterLabels,
  modalLabels,
  altListLabel,
  viewBox,
  maxWidthRem,
  maxHeightRem,
}) {
  const { lang } = useLang();
  const [activeRegion, setActiveRegion] = useState("all");
  const { selectedKey, selectedMarket, selectMarket, closeModal } =
    useMarketSelection();

  // Filtering to a single subregion (Africa's filter chips) re-crops the map
  // to just that cluster instead of leaving the full, widely-spread zone
  // framed — that's what keeps the "Tous" view from being the only option
  // when the full zone spans a lot of empty geography.
  const regionViewBox = useMemo(() => {
    if (!showFilter || activeRegion === "all") return viewBox ?? undefined;
    const keys = countries
      .filter((country) => country.subregion === activeRegion)
      .map((country) => country.key);
    return viewBoxFor(keys, 110) ?? viewBox ?? undefined;
  }, [showFilter, activeRegion, countries, viewBox]);

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
            viewBox={regionViewBox}
            maxWidthRem={maxWidthRem}
            maxHeightRem={maxHeightRem}
          />
        </RevealOnScroll>

        {/* Informational reference only — the map's flag markers are the
            interactive control. Plain text, not links, so it never reads as
            a second navigation surface. */}
        <div className="mt-[2rem]">
          <p className="font-display text-[0.8125rem] font-semibold uppercase tracking-widest text-navy">
            {altListLabel}
          </p>
          <ul role="list" className="mt-3 flex flex-wrap gap-x-2 gap-y-1.5 text-[0.9375rem] leading-[1.6] text-gray-700">
            {countries.map((country, index) => (
              <li key={country.key} className="flex items-center gap-2">
                {country.name[lang] ?? country.name.fr}
                {index < countries.length - 1 && (
                  <span aria-hidden="true" className="text-gray-300">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <MarketModal
        market={selectedMarket}
        regionLabel={
          selectedMarket ? filterLabels[selectedMarket.subregion] : ""
        }
        sectionLabels={modalLabels.sections}
        ctaLabel={modalLabels.cta}
        closeLabel={modalLabels.close}
        emptyLabel={modalLabels.empty}
        onClose={closeModal}
      />
    </>
  );
}
