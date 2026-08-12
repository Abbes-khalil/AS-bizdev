"use client";

import { useId, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { PUBLISHED_COUNTRIES } from "@/lib/data/countries";
import { MAP_COUNTRIES, MAP_VIEWBOX, MARKET_POSITIONS } from "@/lib/data/marketsMapData";
import { ROUTES } from "@/lib/routes";

const [, , VIEW_W, VIEW_H] = MAP_VIEWBOX.split(" ").map(Number);

const zoneRouteFor = (country, lang) =>
  country.subregion === "middleEast" ? ROUTES.middleEast[lang] : ROUTES.africa[lang];

/**
 * Hero replacement for the static maps.webp image: the same Africa + Middle
 * East silhouette (pre-computed at build time by scripts/build-markets-map.mjs
 * — no mapping library ships to the client), but only the markets confirmed
 * in lib/data/countries.js are interactive. Every other country renders as
 * an inert background shape — this never implies a market AS Biz Dev hasn't
 * confirmed (see countries.js's own note on that constraint).
 */
export default function HeroMarketsMap({ lang, ariaLabel }) {
  const [activeKey, setActiveKey] = useState(null);
  const reduceMotion = useReducedMotion();
  const titleId = useId();

  const activeByKey = new Map(PUBLISHED_COUNTRIES.map((country) => [country.key, country]));
  const hovered = activeKey ? activeByKey.get(activeKey) : null;
  const hoveredPosition = activeKey ? MARKET_POSITIONS[activeKey] : null;

  return (
    <div className="relative h-full w-full">
      <svg
        viewBox={MAP_VIEWBOX}
        role="img"
        aria-labelledby={titleId}
        className="h-full w-full"
      >
        <title id={titleId}>{ariaLabel}</title>

        {MAP_COUNTRIES.map((country) => {
          const market = country.key ? activeByKey.get(country.key) : null;

          if (!market) {
            return (
              <path
                key={country.id}
                d={country.d}
                className="fill-gray-300/70"
                aria-hidden="true"
              />
            );
          }

          const name = market.name[lang] ?? market.name.fr;
          const isActive = activeKey === market.key;

          return (
            <a
              key={country.id}
              href={zoneRouteFor(market, lang)}
              aria-label={name}
              onMouseEnter={() => setActiveKey(market.key)}
              onMouseLeave={() => setActiveKey((current) => (current === market.key ? null : current))}
              onFocus={() => setActiveKey(market.key)}
              onBlur={() => setActiveKey((current) => (current === market.key ? null : current))}
            >
              <path
                d={country.d}
                className={`cursor-pointer fill-orange stroke-white stroke-[1.5] transition-[opacity,transform] duration-200 ease-out focus:outline-none ${
                  isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
                } ${!reduceMotion && isActive ? "scale-[1.03]" : ""}`}
                style={{ transformOrigin: `${MARKET_POSITIONS[market.key].cx}px ${MARKET_POSITIONS[market.key].cy}px` }}
              />
            </a>
          );
        })}
      </svg>

      {hovered && hoveredPosition && (
        <div
          role="tooltip"
          className={`pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-full bg-navy px-3 py-1.5 text-xs font-semibold text-white shadow-lift ${
            reduceMotion ? "" : "transition-opacity duration-200 ease-out"
          }`}
          style={{
            left: `${(hoveredPosition.cx / VIEW_W) * 100}%`,
            top: `${(hoveredPosition.cy / VIEW_H) * 100 - 2}%`,
          }}
        >
          {hovered.name[lang] ?? hovered.name.fr}
        </div>
      )}
    </div>
  );
}
