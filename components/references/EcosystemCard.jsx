"use client";

import { useState } from "react";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ASSET } from "@/lib/siteData";
import { interpolate } from "@/lib/i18n/dictionaries";

/**
 * A network institution or partner (APM, GIZ, ADMG…) — unlike a plain client
 * reference, the relationship text (`contribution`/`description`) is always
 * shown, since explaining *why* the logo is there is the whole point of the
 * "Écosystèmes & réseaux" section, not an aside.
 *
 * Always rendered on the navy `Section` in `NetworkEcosystem` — text colors
 * are the light variants for that reason, not a general-purpose default.
 *
 * `logoBackground: "light"` flags a source file with an opaque (usually
 * white) background baked in — most often a .jpg or a .webp export with no
 * alpha channel — so it gets a white backing plate instead of floating as a
 * bare rectangle on the navy card.
 */
const EcosystemCard = ({ org, index, featured = false, logoAlt }) => {
  const [logoFailed, setLogoFailed] = useState(false);
  const showLogo = Boolean(org.logo) && !logoFailed;
  const description = org.contribution ?? org.description;

  return (
    <RevealOnScroll
      as="article"
      variant="up"
      delay={0.05}
      index={Math.min(index, 5)}
      className={`flex h-full flex-col rounded-card bg-transparent transition-all duration-200 ease-out hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 ${
        featured ? "p-6" : "p-5"
      }`}
    >
      <div
        className={`flex shrink-0 items-center justify-center px-2 ${featured ? "h-28" : "h-24"} ${
          showLogo && org.logoBackground === "dark"
            ? "rounded-[0.75rem] bg-navy-700"
            : showLogo && org.logoBackground === "light"
              ? "rounded-[0.75rem] bg-white shadow-soft"
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
            className="max-h-[70%] max-w-[75%] object-contain"
          />
        ) : (
          <p
            className={`text-balance text-center font-display font-semibold tracking-tight text-white ${
              featured ? "text-[1.25rem]" : "text-[1.05rem]"
            }`}
          >
            {org.name}
          </p>
        )}
      </div>

      {showLogo && (
        <h3
          className={`mt-4 line-clamp-2 font-display font-semibold leading-tight tracking-tight text-white ${
            featured ? "text-[1.125rem]" : "text-[1rem]"
          }`}
        >
          {org.name}
        </h3>
      )}

      {description && (
        <p className="mt-3 line-clamp-3 text-[0.875rem] leading-relaxed text-white/70">
          {description}
        </p>
      )}
    </RevealOnScroll>
  );
};

export default EcosystemCard;
