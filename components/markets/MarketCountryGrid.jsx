"use client";

import Link from "next/link";

import ArrowIcon from "@/components/ui/ArrowIcon";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ASSET } from "@/lib/siteData";
import { ROUTES } from "@/lib/routes";
import { useLang } from "@/lib/i18n/LanguageProvider";

/**
 * A country's card in the market selection grid — flag, name, its validated
 * `intro` if one exists, and a "talk about this market" link straight to
 * Contact (with the market pre-filled). The card itself is not clickable and
 * never navigates on its own. One component for every country, driven
 * entirely by `country` — no per-country components.
 */
const MarketCountryGrid = ({ countries, talkLabel }) => {
  const { lang } = useLang();

  return (
    <ul role="list" className="grid grid-cols-1 gap-[1.25rem] sm:grid-cols-2 lg:grid-cols-3">
      {countries.map((country, index) => {
        const name = country.name[lang] ?? country.name.fr;
        const intro = country.intro?.[lang] ?? country.intro?.fr;

        return (
          <li key={country.key}>
            <RevealOnScroll
              variant="up"
              index={index}
              className="flex h-full w-full flex-col items-center rounded-card border border-gray-200 bg-white p-[1.25rem] text-center"
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

              <Link
                href={`${ROUTES.contact[lang]}?market=${country.key}`}
                className="group mt-4 inline-flex items-center gap-1.5 rounded-full border border-orange/40 px-[1.25rem] py-[0.5rem] font-display text-[0.8125rem] font-medium text-orange transition-colors duration-200 ease-out hover:border-orange hover:bg-orange/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
              >
                {talkLabel}
                <ArrowIcon className="transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>
            </RevealOnScroll>
          </li>
        );
      })}
    </ul>
  );
};

export default MarketCountryGrid;
