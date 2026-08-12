"use client";

import { useState } from "react";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ASSET } from "@/lib/siteData";
import { interpolate } from "@/lib/i18n/dictionaries";

/**
 * A logo that 404s (moved/renamed asset) must never surface the browser's
 * broken-image icon — `logoFailed` demotes the card to the same typographic
 * placeholder used when `org.logo` is unset, so both paths share one
 * `showLogo` check instead of drifting into two different fallback UIs.
 *
 * The logo zone is a fixed-height flex box regardless of the source file's
 * own aspect ratio (square, very wide, tall, heavily padded) — `object-fit:
 * contain` inside a `max-width`/`max-height` box keeps every logo's true
 * proportions while giving the grid one consistent silhouette. `logoScale`
 * is an escape hatch (default 1) for the rare logo that's technically
 * correctly sized but visually reads smaller/larger than its neighbours —
 * it only nudges the render size, never the layout box.
 *
 * `logoBackground: "light"` flags a source file with an opaque (usually
 * white) background baked in — most often a .jpg or a .webp export with no
 * alpha channel — so it gets a white backing plate instead of floating as a
 * bare rectangle on the now-transparent card.
 *
 * Client references only — logo alone, no name/description; `org.name` still
 * feeds the image `alt` text and the missing-logo placeholder. Network/partner
 * entries (the Écosystèmes & réseaux section) render through `EcosystemCard`
 * instead, which always shows the relationship text.
 */
const ReferenceCard = ({
  org,
  index,
  featured = false,
  logoAlt,
  groupLabel,
  groupsLabel,
  layout = false,
}) => {
  const [logoFailed, setLogoFailed] = useState(false);
  const showLogo = Boolean(org.logo) && !logoFailed;

  return (
    <RevealOnScroll
      as="article"
      variant="up"
      delay={0.05}
      index={Math.min(index, 5)}
      layout={layout || undefined}
      exit={layout ? { opacity: 0, scale: 0.97 } : undefined}
      className={`group/card flex h-full flex-col rounded-card bg-transparent transition-all duration-200 ease-out hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 ${
        featured ? "p-6" : "p-5"
      }`}
    >
      <div
        className={`flex shrink-0 items-center justify-center px-2 ${featured ? "h-28" : "h-24"} ${
          showLogo && org.logoBackground === "dark"
            ? "rounded-[0.75rem] bg-navy"
            : showLogo && org.logoBackground === "light"
              ? "rounded-[0.75rem] border border-gray-100 bg-white shadow-soft"
              : ""
        }`}
      >
        {showLogo ? (
          <img
            src={ASSET + org.logo}
            alt={interpolate(logoAlt, { name: org.name })}
            loading="lazy"
            decoding="async"
            width="192"
            height="80"
            onError={() => setLogoFailed(true)}
            style={
              org.logoScale && org.logoScale !== 1
                ? { transform: `scale(${org.logoScale})` }
                : undefined
            }
            className="max-h-[70%] max-w-[75%] object-contain transition-transform duration-200 ease-out group-hover/card:scale-[1.02]"
          />
        ) : (
          <p
            className={`text-balance text-center font-display font-semibold tracking-tight text-navy ${
              featured ? "text-[1.25rem]" : "text-[1.05rem]"
            }`}
          >
            {org.name}
          </p>
        )}
      </div>
    </RevealOnScroll>
  );
};

export default ReferenceCard;
