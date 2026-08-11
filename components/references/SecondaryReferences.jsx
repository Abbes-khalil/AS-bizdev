"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import ReferenceCard from "@/components/references/ReferenceCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectorFilter from "@/components/ui/SectorFilter";

/**
 * Denser mosaic of the remaining client references, filterable by sector.
 * Owns the active-tab state; filtering itself stays a one-liner so it's
 * obvious a company never renders twice even when it lists two sectors.
 *
 * `AnimatePresence mode="popLayout"` + each card's `layout` prop turns a
 * filter change into a fade + reflow instead of the grid snapping to its new
 * shape instantly.
 */
const SecondaryReferences = ({
  orgs,
  sectors,
  sectorLabels,
  title,
  typeLabel,
  websiteLabel,
  logoAlt,
  groupLabel,
  groupsLabel,
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

      <ul role="list" className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((org, i) => (
            <li key={org.key}>
              <ReferenceCard
                org={org}
                index={i}
                typeLabel={typeLabel}
                websiteLabel={websiteLabel}
                logoAlt={logoAlt}
                sectorLabels={sectorLabels}
                groupLabel={groupLabel}
                groupsLabel={groupsLabel}
                layout
              />
            </li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default SecondaryReferences;
