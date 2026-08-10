import { motion, useReducedMotion } from "framer-motion";

import { ASSET } from "./siteData";
import { MAP_COUNTRIES, MAP_VIEWBOX, MARKET_POSITIONS } from "../data/marketsMapData";
import { useLang } from "../i18n/LanguageProvider";

/**
 * Editorial Africa + Middle East map. Country shapes are plain SVG (no
 * mapping library ships to the client — see scripts/build-markets-map.mjs).
 * Flag markers are real HTML buttons positioned by percentage over the map,
 * so they stay a fixed, tappable size at any viewport instead of scaling
 * down with the SVG on small screens.
 *
 * `viewBox` lets a zone page crop to its own markets (see utils/mapViewBox)
 * while reusing the exact same shapes and coordinate space — marker percent
 * positions are computed against whichever box is active.
 */
const MarketsMap = ({
  countries,
  activeRegion,
  selectedKey,
  onSelect,
  mapLabel,
  viewBox = MAP_VIEWBOX,
}) => {
  const reduceMotion = useReducedMotion();
  const { lang } = useLang();
  const byKey = Object.fromEntries(countries.map((c) => [c.key, c]));
  const [vbMinX, vbMinY, vbWidth, vbHeight] = viewBox.split(" ").map(Number);

  const isDimmed = (key) => {
    if (activeRegion === "all") return false;
    return byKey[key]?.subregion !== activeRegion;
  };

  return (
    <div className="relative mx-auto w-full max-w-[52rem]">
      <svg
        viewBox={viewBox}
        role="img"
        aria-label={mapLabel}
        className="w-full"
      >
        {MAP_COUNTRIES.map((country) =>
          country.key ? (
            <path
              key={country.id}
              d={country.d}
              className={`transition-[opacity,fill] duration-300 ease-out ${
                isDimmed(country.key) ? "fill-navy/25" : "fill-navy/70"
              }`}
              stroke="#FFFFFF"
              strokeWidth={1}
              aria-hidden="true"
            />
          ) : (
            <path
              key={country.id}
              d={country.d}
              className="fill-gray-200"
              stroke="#FFFFFF"
              strokeWidth={1}
              aria-hidden="true"
            />
          ),
        )}
      </svg>

      {countries.map((country, index) => {
        const pos = MARKET_POSITIONS[country.key];
        if (!pos) return null;

        const dimmed = isDimmed(country.key);
        const selected = selectedKey === country.key;
        const name = country.name[lang] ?? country.name.fr;

        return (
          <motion.button
            key={country.key}
            type="button"
            onClick={() => onSelect(country.key)}
            aria-label={name}
            aria-haspopup="dialog"
            style={{
              left: `${((pos.cx - vbMinX) / vbWidth) * 100}%`,
              top: `${((pos.cy - vbMinY) / vbHeight) * 100}%`,
            }}
            initial={false}
            animate={{
              opacity: dimmed ? 0.35 : 1,
              scale: selected ? 1.15 : 1,
            }}
            whileHover={reduceMotion ? undefined : { scale: 1.18 }}
            whileFocus={reduceMotion ? undefined : { scale: 1.18 }}
            transition={{ duration: 0.25, ease: [0.2, 0, 0, 1], delay: reduceMotion ? 0 : index * 0.02 }}
            className={`group absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-[0.1875rem] shadow-soft ring-2 transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange/40 ${
              selected ? "ring-orange" : "ring-navy/20 hover:ring-navy"
            }`}
          >
            <span className="block h-[1.625rem] w-[1.625rem] overflow-hidden rounded-full sm:h-[1.875rem] sm:w-[1.875rem]">
              <img
                src={`${ASSET}flags/${country.flagCode}.svg`}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </span>

            <span
              role="tooltip"
              className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-btn bg-navy px-2.5 py-1 font-display text-[0.75rem] font-medium text-white opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              {name}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default MarketsMap;
