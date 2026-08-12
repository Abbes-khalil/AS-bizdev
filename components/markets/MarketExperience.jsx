"use client";

import { useMemo } from "react";
import Link from "next/link";

import ArrowIcon from "@/components/ui/ArrowIcon";
import MarketCountryGrid from "@/components/markets/MarketCountryGrid";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import { ROUTES } from "@/lib/routes";
import { useLang } from "@/lib/i18n/LanguageProvider";

/**
 * The interactive core shared by zone pages: a country-chip grid (grouped by
 * subregion for Africa, flat for the Middle East), each group closed by one
 * shared call-to-action rather than a CTA on every country — a subregion is
 * one decluttered block: heading, grid, single CTA.
 */
export default function MarketExperience({
  countries,
  groupBySubregion,
  filterLabels,
  selectInstruction,
  talkLabel,
}) {
  const { lang } = useLang();
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

            <MarketCountryGrid countries={group.countries} />

            <RevealOnScroll variant="up" className="mt-[1.25rem]">
              <Link
                href={`${ROUTES.contact[lang]}?zone=${group.subregion ?? "all"}`}
                className="group inline-flex items-center gap-1.5 rounded-full border border-orange/40 px-[1.25rem] py-[0.5rem] font-display text-[0.8125rem] font-medium text-orange transition-colors duration-200 ease-out hover:border-orange hover:bg-orange/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
              >
                {talkLabel}
                <ArrowIcon className="transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>
            </RevealOnScroll>
          </div>
        ))}
      </div>
    </Section>
  );
}
