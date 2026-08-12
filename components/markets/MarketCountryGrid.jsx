"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ASSET } from "@/lib/siteData";
import { useLang } from "@/lib/i18n/LanguageProvider";

/**
 * A country's chip in the market selection grid — flag and name only.
 * Deliberately minimal: no per-country description or CTA, so a subregion
 * reads as one compact, scannable group instead of a wall of repeated
 * cards. The single call-to-action for the group lives once, below the
 * grid, in `MarketExperience`. One component for every country, driven
 * entirely by `country` — no per-country components.
 */
const MarketCountryGrid = ({ countries }) => {
  const { lang } = useLang();

  return (
    <ul role="list" className="grid grid-cols-2 gap-[0.875rem] sm:grid-cols-3 lg:grid-cols-4">
      {countries.map((country, index) => {
        const name = country.name[lang] ?? country.name.fr;

        return (
          <li key={country.key}>
            <RevealOnScroll
              variant="up"
              index={index}
              className="flex h-full w-full items-center gap-3 rounded-card border border-gray-200 bg-white px-4 py-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-gray-200">
                <img
                  src={`${ASSET}flags/${country.flagCode}.svg`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </span>

              <span className="font-display text-[0.9375rem] font-semibold leading-tight text-navy">
                {name}
              </span>
            </RevealOnScroll>
          </li>
        );
      })}
    </ul>
  );
};

export default MarketCountryGrid;
