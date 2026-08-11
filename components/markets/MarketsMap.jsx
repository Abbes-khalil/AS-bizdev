"use client";

import { animate, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { ASSET } from "@/lib/siteData";
import { MAP_COUNTRIES, MAP_VIEWBOX } from "@/lib/data/marketsMapData";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { getMarkerPosition } from "@/lib/utils/mapViewBox";

const parseViewBox = (viewBox) => viewBox.split(" ").map(Number);

/**
 * Display-only exception: every marker is placed at its real geographic
 * centroid (`country.position`, via `getMarkerPosition`) — no per-country
 * offsets, except this one documented case. Kuwait, Bahrain, Qatar and the
 * UAE sit on an almost perfectly straight line along the Gulf coast, only
 * ~8–38 SVG units apart in reality; measured on the rendered Middle East
 * map (44rem wide, 44px flag buttons), their true centres land as close as
 * ~32px apart — less than one button's width, so Qatar/UAE and
 * Bahrain/Kuwait would overlap outright. This re-spaces all four evenly
 * (30 SVG units apart, ≈48px — one button width plus a small gap) along
 * that same real-world line, centred on their true midpoint, so no marker
 * drifts toward a neighbouring country's territory. It moves only the
 * button anchor, never the country shape (`MAP_COUNTRIES` paths) or the
 * centroid used for viewBox cropping (`lib/utils/mapViewBox.js` still reads
 * the true position).
 */
const MARKER_OFFSETS = {
  kuwait: { dx: -7.1, dy: -1.9 },
  bahrain: { dx: -8.2, dy: -11.1 },
  qatar: { dx: 8.9, dy: 2.5 },
  uae: { dx: 6.5, dy: 10.5 },
};

/**
 * Tweens between viewBox targets (e.g. a zone page switching its region
 * filter) instead of snapping, without reaching for a layout/resize-observer
 * dependency — framer-motion's imperative `animate` drives four plain
 * numbers each frame. Skips the tween outright under reduced motion.
 */
const useAnimatedViewBox = (target, reduceMotion) => {
  const [box, setBox] = useState(() => parseViewBox(target));
  const boxRef = useRef(box);
  boxRef.current = box;

  useEffect(() => {
    const from = boxRef.current;
    const to = parseViewBox(target);

    if (reduceMotion) {
      setBox(to);
      return undefined;
    }

    const controls = animate(0, 1, {
      duration: 0.45,
      ease: [0.2, 0, 0, 1],
      onUpdate: (t) => setBox(from.map((value, i) => value + (to[i] - value) * t)),
    });

    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, reduceMotion]);

  return box;
};

/**
 * Editorial Africa + Middle East map. Country shapes are plain SVG (no
 * mapping library ships to the client — see scripts/build-markets-map.mjs).
 * Flag markers are real HTML buttons positioned by percentage over the map,
 * so they stay a fixed, tappable size at any viewport instead of scaling
 * down with the SVG on small screens.
 *
 * `viewBox` lets a zone page crop to its own markets (see utils/mapViewBox)
 * while reusing the exact same shapes and coordinate space — marker percent
 * positions are computed against whichever box is active. When the target
 * `viewBox` changes (e.g. a region filter), the crop animates instead of
 * jumping.
 *
 * `maxHeightRem`, when set, keeps the map from growing arbitrarily tall for
 * a viewBox that spans a wide geography (e.g. all of Africa, Tunis to Cape
 * Town): the wrapper's width is clamped so that, combined with its intrinsic
 * aspect ratio, height never exceeds the cap. That's a uniform shrink, not a
 * crop or a letterbox — the div's box always equals the rendered map exactly,
 * which is what keeps the marker percent-positions correct.
 */
const MarketsMap = ({
  countries,
  activeRegion,
  selectedKey,
  onSelect,
  mapLabel,
  viewBox = MAP_VIEWBOX,
  maxWidthRem = 52,
  maxHeightRem,
}) => {
  const reduceMotion = useReducedMotion();
  const { lang } = useLang();
  const byKey = Object.fromEntries(countries.map((c) => [c.key, c]));

  const [vbMinX, vbMinY, vbWidth, vbHeight] = useAnimatedViewBox(viewBox, reduceMotion);
  const viewBoxAttr = `${vbMinX} ${vbMinY} ${vbWidth} ${vbHeight}`;
  const ratio = vbWidth / vbHeight;

  const widthLimits = [`${maxWidthRem}rem`];
  if (maxHeightRem) widthLimits.push(`${(maxHeightRem * ratio).toFixed(2)}rem`);

  const isDimmed = (key) => {
    if (activeRegion === "all") return false;
    return byKey[key]?.subregion !== activeRegion;
  };

  return (
    <div
      className="mx-auto rounded-3xl border border-gray-200 bg-gray-50/60 p-[1.25rem] sm:p-[2rem]"
      style={{ width: `min(100%, ${widthLimits.join(", ")})` }}
    >
      <div className="relative" style={{ aspectRatio: `${vbWidth} / ${vbHeight}` }}>
        <svg
          viewBox={viewBoxAttr}
          role="img"
          aria-label={mapLabel}
          className="h-full w-full [filter:drop-shadow(0_18px_32px_rgba(15,23,42,0.12))]"
        >
          {MAP_COUNTRIES.map((country) => {
            const isMarket = country.key && byKey[country.key];

            return (
              <path
                key={country.id}
                d={country.d}
                vectorEffect="non-scaling-stroke"
                strokeLinejoin="round"
                className={`transition-[opacity,fill] duration-300 ease-out ${
                  isMarket
                    ? isDimmed(country.key)
                      ? "fill-navy/20"
                      : "fill-navy/80"
                    : "fill-gray-100"
                }`}
                stroke="#FFFFFF"
                strokeWidth={1}
                aria-hidden="true"
              />
            );
          })}
        </svg>

        {countries
          .filter((country) => activeRegion === "all" || country.subregion === activeRegion)
          .map((country, index) => {
            const pos = country.position;
            if (!pos) return null;

            const offset = MARKER_OFFSETS[country.key];
            const cx = pos.cx + (offset?.dx ?? 0);
            const cy = pos.cy + (offset?.dy ?? 0);

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
                style={getMarkerPosition({ x: cx, y: cy }, [vbMinX, vbMinY, vbWidth, vbHeight])}
                initial={false}
                animate={{
                  opacity: dimmed ? 0.35 : 1,
                  scale: selected ? 1.15 : 1,
                }}
                whileHover={reduceMotion ? undefined : { scale: 1.18 }}
                whileFocus={reduceMotion ? undefined : { scale: 1.18 }}
                transition={{ duration: 0.25, ease: [0.2, 0, 0, 1], delay: reduceMotion ? 0 : index * 0.02 }}
                className={`group absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-[0.375rem] shadow-soft ring-2 transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange/40 ${
                  selected ? "ring-orange" : "ring-navy/20 hover:ring-navy"
                }`}
              >
                <span className="block h-[1.625rem] w-[1.625rem] overflow-hidden rounded-full sm:h-[2rem] sm:w-[2rem]">
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
    </div>
  );
};

export default MarketsMap;
