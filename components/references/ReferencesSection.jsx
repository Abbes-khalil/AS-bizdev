"use client";

import { AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

import FeaturedReferences from "@/components/references/FeaturedReferences";
import ReferenceCard from "@/components/references/ReferenceCard";
import SecondaryReferences from "@/components/references/SecondaryReferences";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectorFilter from "@/components/ui/SectorFilter";

/**
 * Owns the single `activeSector` state for the whole references block.
 *
 * "all" keeps the commercial hierarchy (featured clients, then the rest).
 * A chosen sector replaces both with one grid of every published client
 * matching that sector — featured or not, never duplicated — since sector
 * filtering and featured/secondary status are two independent axes, not
 * the same thing.
 */
const ReferencesSection = ({
  clients,
  sectors,
  sectorLabels,
  featuredLabel,
  moreLabel,
  referencesLabel,
  logoAlt,
  groupLabel,
  groupsLabel,
}) => {
  const [active, setActive] = useState("all");

  const featuredClients = useMemo(() => clients.filter((org) => org.featured), [clients]);
  const secondaryClients = useMemo(() => clients.filter((org) => !org.featured), [clients]);
  const filteredClients = useMemo(
    () =>
      active === "all" ? [] : clients.filter((org) => org.sectors?.includes(active)),
    [clients, active],
  );

  return (
    <div>
      <RevealOnScroll
        variant="up"
        className="mb-8 flex flex-wrap items-center justify-between gap-4"
      >
        <p className="eyebrow text-orange">
          {active === "all" ? featuredLabel : `${referencesLabel} — ${sectorLabels[active]}`}
        </p>
        <SectorFilter sectors={sectors} labels={sectorLabels} active={active} onChange={setActive} />
      </RevealOnScroll>

      {active === "all" ? (
        <>
          <FeaturedReferences
            orgs={featuredClients}
            logoAlt={logoAlt}
            groupLabel={groupLabel}
            groupsLabel={groupsLabel}
          />
          <SecondaryReferences
            orgs={secondaryClients}
            title={moreLabel}
            logoAlt={logoAlt}
            groupLabel={groupLabel}
            groupsLabel={groupsLabel}
          />
        </>
      ) : (
        // `key={active}` forces a clean remount per sector: without it, jumping
        // directly between two sectors (e.g. Automobile -> Transport, never
        // passing through "all") left stale cards from the previous sector
        // mixed into the new grid — a key-reconciliation glitch in the shared
        // AnimatePresence list across unrelated filtered arrays.
        <ul
          key={active}
          role="list"
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredClients.map((org, i) => (
              <li key={org.key}>
                <ReferenceCard
                  org={org}
                  index={i}
                  logoAlt={logoAlt}
                  groupLabel={groupLabel}
                  groupsLabel={groupsLabel}
                  layout
                />
              </li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
};

export default ReferencesSection;
