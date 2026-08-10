import ReferenceCard from "./ReferenceCard";
import RevealOnScroll from "./RevealOnScroll";

/**
 * Hero tier of client references — 8 to 12 strong logos shown larger than
 * the secondary mosaic, unfiltered (the brief calls for these to always be
 * visible together, without the sector tabs applying to them).
 */
const FeaturedReferences = ({ orgs, title, typeLabel, websiteLabel, logoAlt }) => (
  <div>
    <RevealOnScroll variant="up" className="mb-8 max-w-2xl">
      <p className="eyebrow text-orange">{title}</p>
    </RevealOnScroll>

    <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {orgs.map((org, i) => (
        <li key={org.key}>
          <ReferenceCard
            org={org}
            index={i}
            featured
            typeLabel={typeLabel}
            websiteLabel={websiteLabel}
            logoAlt={logoAlt}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default FeaturedReferences;
