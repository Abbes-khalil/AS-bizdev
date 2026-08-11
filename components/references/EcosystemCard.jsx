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
      className={`flex h-full flex-col rounded-card border border-gray-200 bg-white transition-all duration-200 ease-out hover:-translate-y-1 hover:border-navy hover:shadow-lift focus-visible:-translate-y-1 focus-visible:border-navy focus-visible:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 ${
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
            className="max-h-[70%] max-w-[75%] object-contain"
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

      {description && (
        <p className="mt-3 line-clamp-3 text-[0.875rem] leading-relaxed text-gray-700">
          {description}
        </p>
      )}
    </RevealOnScroll>
  );
};

export default EcosystemCard;
