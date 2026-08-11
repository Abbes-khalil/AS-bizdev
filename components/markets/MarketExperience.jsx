"use client";

import { useMemo } from "react";

import MarketCountryGrid from "@/components/markets/MarketCountryGrid";
import MarketModal from "@/components/markets/MarketModal";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import useMarketSelection from "@/hooks/useMarketSelection";

/**
 * The interactive core shared by zone pages: a country-card grid (grouped by
 * subregion for Africa, flat for the Middle East) and the on-page modal
 * share selection state, so they live together in one client island.
 * Everything around it (hero, closing quote, capabilities, CTA) stays
 * server-rendered.
 */
export default function MarketExperience({
  countries,
  groupBySubregion,
  filterLabels,
  modalLabels,
  selectInstruction,
  exploreLabel,
  openMarketLabel,
}) {
  const { selectedMarket, selectMarket, closeModal } = useMarketSelection();

  // Africa groups its countries under a subregion heading each; the Middle
  // East has no subregions of its own, so it's a single flat grid.
  const groups = useMemo(() => {
    if (!groupBySubregion) return [{ subregion: null, countries }];

    const order = [];
    const bySubregion = {};
    countries.forEach((country) => {
      if (!bySubregion[country.subregion]) {
        bySubregion[country.subregion] = [];
        order.push(country.subregion);
      }
      bySubregion[country.subregion].push(country);
    });
    return order.map((subregion) => ({ subregion, countries: bySubregion[subregion] }));
  }, [groupBySubregion, countries]);

  return (
    <>
      <Section tone="alt">
        <RevealOnScroll variant="up" className="max-w-2xl">
          <p className="text-[1.0625rem] leading-[1.7] text-gray-700">{selectInstruction}</p>
        </RevealOnScroll>

        <div className="mt-[2.5rem] space-y-[3rem]">
          {groups.map((group) => (
            <div key={group.subregion ?? "all"}>
              {group.subregion && (
                <RevealOnScroll variant="up" className="mb-[1.5rem]">
                  <h3 className="font-display text-[1.125rem] font-semibold text-navy">
                    {filterLabels[group.subregion]}
                  </h3>
                </RevealOnScroll>
              )}

              <MarketCountryGrid
                countries={group.countries}
                onSelect={selectMarket}
                exploreLabel={exploreLabel}
                openMarketLabel={openMarketLabel}
              />
            </div>
          ))}
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
