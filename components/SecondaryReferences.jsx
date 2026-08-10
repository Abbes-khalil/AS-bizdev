"use client";

import { useState } from "react";

import ReferenceCard from "@/components/ReferenceCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectorFilter from "@/components/SectorFilter";

/**
 * Denser mosaic of the remaining client references, filterable by sector.
 * Owns the active-tab state; filtering itself stays a one-liner so it's
 * obvious a company never renders twice even when it lists two sectors.
 */
const SecondaryReferences = ({
  orgs,
  sectors,
  sectorLabels,
  title,
  typeLabel,
  websiteLabel,
  logoAlt,
}) => {
  const [active, setActive] = useState("all");

  const visible =
    active === "all" ? orgs : orgs.filter((org) => org.sectors?.includes(active));

  return (
    <div className="mt-16">
      <RevealOnScroll variant="up" className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="eyebrow text-orange">{title}</p>
        <SectorFilter sectors={sectors} labels={sectorLabels} active={active} onChange={setActive} />
      </RevealOnScroll>

      <ul role="list" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((org, i) => (
          <li key={org.key}>
            <ReferenceCard
              org={org}
              index={i}
              typeLabel={typeLabel}
              websiteLabel={websiteLabel}
              logoAlt={logoAlt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondaryReferences;
