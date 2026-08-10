import ExternalLink from "./ExternalLink";
import RevealOnScroll from "./RevealOnScroll";
import { ASSET } from "./siteData";
import { interpolate } from "../i18n";

/**
 * Displays one organisation on /nos-partenaires — a client reference, a
 * network/institution, or a legacy partner. Renders its logo when one is on
 * file; otherwise falls back to a typographic name treatment so a missing
 * asset never shows as a broken image. `featured` enlarges the tile for the
 * hero-tier client grid.
 */
const ReferenceCard = ({
  org,
  index,
  typeLabel,
  featured = false,
  websiteLabel,
  logoAlt,
}) => (
  <RevealOnScroll
    as="article"
    variant="up"
    delay={0.05}
    index={index}
    className={`flex h-full flex-col rounded-card border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lift ${
      featured ? "p-8" : "p-6"
    }`}
  >
    <div className={`grid place-items-center ${featured ? "h-28" : "h-20"}`}>
      {org.logo ? (
        <img
          src={ASSET + org.logo}
          alt={interpolate(logoAlt, { name: org.name })}
          loading="lazy"
          decoding="async"
          width="192"
          height="80"
          className="max-h-20 max-w-[12rem] object-contain opacity-90 transition-all duration-500 hover:opacity-100"
        />
      ) : (
        <p
          className={`font-display font-semibold tracking-tight text-navy text-balance text-center ${
            featured ? "text-[1.375rem]" : "text-[1.05rem]"
          }`}
        >
          {org.name}
        </p>
      )}
    </div>

    <div className="mt-6 flex items-center gap-3">
      <span aria-hidden="true" className="h-px flex-1 bg-gray-200" />
      <span className="font-display text-[0.65rem] font-medium uppercase tracking-widest text-gray-400">
        {typeLabel}
      </span>
      <span aria-hidden="true" className="h-px flex-1 bg-gray-200" />
    </div>

    {org.logo && (
      <h3
        className={`mt-4 font-display font-semibold leading-tight tracking-tight text-navy ${
          featured ? "text-[1.375rem]" : "text-[1.05rem]"
        }`}
      >
        {org.name}
      </h3>
    )}

    {org.groupBrands && (
      <p className="mt-1 text-[0.85rem] text-gray-500">{org.groupBrands.join(" · ")}</p>
    )}

    {org.description && (
      <p className="mt-3 text-[0.9rem] leading-relaxed text-gray-700">{org.description}</p>
    )}

    {org.contribution && (
      <p className="mt-3 border-t border-gray-100 pt-3 text-[0.85rem] leading-relaxed text-navy">
        {org.contribution}
      </p>
    )}

    {org.website && (
      <ExternalLink href={org.website} className="mt-5 text-gray-500">
        {websiteLabel}
      </ExternalLink>
    )}
  </RevealOnScroll>
);

export default ReferenceCard;
