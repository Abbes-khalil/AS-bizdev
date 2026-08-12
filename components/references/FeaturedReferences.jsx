import ReferenceCard from "@/components/references/ReferenceCard";

/**
 * The section eyebrow lives in the parent `ReferencesSection` (it switches
 * between "Références principales" and a sector heading), so this grid
 * renders cards only.
 */
const FeaturedReferences = ({ orgs, logoAlt, groupLabel, groupsLabel }) => (
  <div>
    <ul
      role="list"
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
    >
      {orgs.map((org, i) => (
        <li key={org.key}>
          <ReferenceCard
            org={org}
            index={i}
            featured
            logoAlt={logoAlt}
            groupLabel={groupLabel}
            groupsLabel={groupsLabel}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default FeaturedReferences;
