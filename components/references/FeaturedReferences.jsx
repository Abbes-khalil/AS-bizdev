import ReferenceCard from "@/components/references/ReferenceCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const FeaturedReferences = ({
  orgs,
  title,
  typeLabel,
  websiteLabel,
  logoAlt,
  sectorLabels,
  groupLabel,
  groupsLabel,
}) => (
  <div>
    <RevealOnScroll variant="up" className="mb-8 max-w-2xl">
      <p className="eyebrow text-orange">{title}</p>
    </RevealOnScroll>

    <ul role="list" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {orgs.map((org, i) => (
        <li key={org.key}>
          <ReferenceCard
            org={org}
            index={i}
            featured
            typeLabel={typeLabel}
            websiteLabel={websiteLabel}
            logoAlt={logoAlt}
            sectorLabels={sectorLabels}
            groupLabel={groupLabel}
            groupsLabel={groupsLabel}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default FeaturedReferences;
