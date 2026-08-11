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
 * Client references only — logo, name and group/brand line, no description.
 * Network/partner entries (the Écosystèmes & réseaux section) render through
 * `EcosystemCard` instead, which always shows the relationship text.
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
      className={`group/card flex h-full flex-col rounded-card border border-gray-200 bg-white transition-all duration-200 ease-out hover:-translate-y-1 hover:border-navy hover:shadow-lift focus-visible:-translate-y-1 focus-visible:border-navy focus-visible:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 ${
        featured ? "p-6" : "p-5"
      }`}
    >
      <div
        className={`flex shrink-0 items-center justify-center px-2 ${featured ? "h-28" : "h-24"}`}
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

      {showLogo && (
        <h3
          className={`mt-4 line-clamp-2 font-display font-semibold leading-tight tracking-tight text-navy ${
            featured ? "text-[1.125rem]" : "text-[1rem]"
          }`}
        >
          {org.name}
        </h3>
      )}

      {org.groupBrands && (
        <p className="mt-2 text-[0.8125rem] text-gray-500">
          <span className="text-gray-400">
            {org.groupBrands.length > 1 ? groupsLabel : groupLabel}
          </span>{" "}
          {org.groupBrands.join(" · ")}
        </p>
      )}

    </RevealOnScroll>
  );
};

export default ReferenceCard;
