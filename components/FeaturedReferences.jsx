import ReferenceCard from "@/components/ReferenceCard";
import RevealOnScroll from "@/components/RevealOnScroll";

const FeaturedReferences = ({
  orgs,
  title,
  typeLabel,
  websiteLabel,
  logoAlt,
}) => (
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
