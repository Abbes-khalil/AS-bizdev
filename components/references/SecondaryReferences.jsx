"use client";

import { AnimatePresence } from "framer-motion";

import ReferenceCard from "@/components/references/ReferenceCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

/**
 * Denser mosaic of the remaining client references — the "Tous" view only.
 * Sector filtering is owned by the parent `ReferencesSection`, which swaps
 * this component out for a single unified grid once a sector is active.
 *
 * `AnimatePresence mode="popLayout"` + each card's `layout` prop turns list
 * changes into a fade + reflow instead of the grid snapping to shape instantly.
 */
const SecondaryReferences = ({ orgs, title, logoAlt, groupLabel, groupsLabel }) => (
  <div className="mt-16">
    <RevealOnScroll variant="up" className="mb-6">
      <p className="eyebrow text-orange">{title}</p>
    </RevealOnScroll>

    <ul role="list" className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <AnimatePresence mode="popLayout" initial={false}>
        {orgs.map((org, i) => (
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
  </div>
);

export default SecondaryReferences;
