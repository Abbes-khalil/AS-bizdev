"use client";

import ArrowIcon from "@/components/ui/ArrowIcon";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ASSET } from "@/lib/siteData";
import { interpolate } from "@/lib/i18n/dictionaries";
import { useLang } from "@/lib/i18n/LanguageProvider";

/**
 * A country's card in the market selection grid — flag, name, its validated
 * `intro` if one exists, and an "explore" affordance. Clicking it opens
 * `MarketModal` in place (via `onSelect`, from `useMarketSelection`); it
 * never navigates. One component for every country, driven entirely by
 * `country` — no per-country components.
 */
const MarketCountryGrid = ({ countries, onSelect, exploreLabel, openMarketLabel }) => {
  const { lang } = useLang();

  return (
    <ul role="list" className="grid grid-cols-1 gap-[1.25rem] sm:grid-cols-2 lg:grid-cols-3">
      {countries.map((country, index) => {
        const name = country.name[lang] ?? country.name.fr;
        const intro = country.intro?.[lang] ?? country.intro?.fr;

        return (
          <li key={country.key}>
            <RevealOnScroll
              as="button"
              variant="up"
              index={index}
              type="button"
              onClick={() => onSelect(country.key)}
              aria-label={interpolate(openMarketLabel, { name })}
              aria-haspopup="dialog"
              className="group flex h-full w-full flex-col items-center rounded-card border border-gray-200 bg-white p-[1.75rem] text-center transition-all duration-200 ease-out hover:-translate-y-1 hover:border-navy hover:shadow-lift focus-visible:-translate-y-1 focus-visible:border-navy focus-visible:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-gray-200 sm:h-16 sm:w-16">
                <img
                  src={`${ASSET}flags/${country.flagCode}.svg`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </span>

              <span className="mt-4 font-display text-[1.0625rem] font-semibold text-navy">
                {name}
              </span>

              {intro && (
                <span className="mt-2 line-clamp-3 text-[0.875rem] leading-[1.55] text-gray-600">
                  {intro}
                </span>
              )}

              <span className="mt-4 inline-flex items-center gap-1.5 font-display text-[0.8125rem] font-medium text-orange">
                {exploreLabel}
                <ArrowIcon className="transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </span>
            </RevealOnScroll>
          </li>
        );
      })}
    </ul>
  );
};

export default MarketCountryGrid;
