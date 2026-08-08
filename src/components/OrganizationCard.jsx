import ExternalLink from "./ExternalLink";
import RevealOnScroll from "./RevealOnScroll";
import { ASSET } from "./siteData";
import { interpolate } from "../i18n";

/**
 * Displays one organisation on /nos-partenaires — a client reference or an
 * ecosystem partner. The `typeLabel` badge is what keeps the two apart
 * visually: orange for a client reference, neutral gray for a partner.
 */
const OrganizationCard = ({
  org,
  index,
  typeLabel,
  isClient,
  statusLabel,
  websiteLabel,
  logoAlt,
}) => (
  <RevealOnScroll
    as="article"
    variant="up"
    delay={0.05}
    index={index}
    className="flex h-full flex-col rounded-card border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lift"
  >
    <div className="grid h-32 place-items-center">
      <img
        src={ASSET + org.logo}
        alt={interpolate(logoAlt, { name: org.name })}
        loading="lazy"
        decoding="async"
        width="192"
        height="80"
        className="max-h-20 max-w-[12rem] object-contain opacity-90 transition-all duration-500 hover:opacity-100"
      />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <span aria-hidden="true" className="h-px flex-1 bg-gray-200" />
      <span
        className={`font-display text-[0.65rem] font-medium uppercase tracking-widest ${
          isClient ? "text-orange" : "text-gray-400"
        }`}
      >
        {typeLabel}
      </span>
      <span aria-hidden="true" className="h-px flex-1 bg-gray-200" />
    </div>

    <h3 className="mt-4 font-display text-[1.25rem] font-semibold leading-tight tracking-tight text-navy">
      {org.name}
    </h3>

    {(org.sector || statusLabel) && (
      <p className="mt-1 text-[0.8rem] text-gray-400">
        {[org.sector, statusLabel].filter(Boolean).join(" — ")}
      </p>
    )}

    {org.description && (
      <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-700">
        {org.description}
      </p>
    )}

    {org.website && (
      <ExternalLink href={org.website} className="mt-5 text-gray-500">
        {websiteLabel}
      </ExternalLink>
    )}
  </RevealOnScroll>
);

export default OrganizationCard;
