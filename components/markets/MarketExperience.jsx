"use client";

import { useMemo } from "react";

import MarketCountryGrid from "@/components/markets/MarketCountryGrid";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";

/**
 * The interactive core shared by zone pages: a country-card grid (grouped by
 * subregion for Africa, flat for the Middle East). Each card links straight
 * to Contact with its market pre-filled — no modal, no on-page detail panel.
 */
export default function MarketExperience({
  countries,
  groupBySubregion,
  filterLabels,
  selectInstruction,
  talkLabel,
}) {
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
    <Section tone="alt">
      <RevealOnScroll variant="up" className="max-w-2xl">
        <p className="text-[1.0625rem] leading-[1.7] text-gray-700">{selectInstruction}</p>
      </RevealOnScroll>

      <div className="mt-[2rem] space-y-[2rem]">
        {groups.map((group) => (
          <div key={group.subregion ?? "all"}>
            {group.subregion && (
              <RevealOnScroll variant="up" className="mb-[1.5rem]">
                <h3 className="font-display text-[1.125rem] font-semibold text-navy">
                  {filterLabels[group.subregion]}
                </h3>
              </RevealOnScroll>
            )}

            <MarketCountryGrid countries={group.countries} talkLabel={talkLabel} />
          </div>
        ))}
      </div>
    </Section>
  );
}
