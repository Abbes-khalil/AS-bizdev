"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

/** Shared body — same markup desktop (right panel) and mobile (accordion). */
const SectorPanelBody = ({ item, copy }) => (
  <>
    {item.intro && (
      <p className="text-[0.9375rem] leading-[1.7] text-gray-700">{item.intro}</p>
    )}

    {item.areas?.length > 0 && (
      <div className={item.intro ? "mt-[1.5rem]" : ""}>
        <h3 className="font-display text-[0.75rem] font-semibold uppercase tracking-widest text-navy">
          {copy.areasLabel}
        </h3>
        <ul role="list" className="mt-3 flex flex-wrap gap-2">
          {item.areas.map((area) => (
            <li
              key={area}
              className="rounded-btn bg-surface-alt px-3 py-1.5 text-[0.8125rem] font-medium text-gray-700"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    )}

    {item.actors?.length > 0 && (
      <div className="mt-[1.5rem]">
        <h3 className="font-display text-[0.75rem] font-semibold uppercase tracking-widest text-navy">
          {copy.actorsLabel}
        </h3>
        <ul role="list" className="mt-3 flex flex-wrap gap-2">
          {item.actors.map((actor) => (
            <li
              key={actor}
              className="rounded-btn border border-navy/15 px-3 py-1.5 text-[0.8125rem] font-medium text-navy"
            >
              {actor}
            </li>
          ))}
        </ul>
      </div>
    )}
  </>
);

const SectorTag = ({ item, copy }) => {
  if (item.highlight) {
    return (
      <span className="rounded-badge bg-orange/10 px-2.5 py-1 text-[0.6875rem] font-medium uppercase tracking-wide text-orange">
        {copy.highlightLabel}
      </span>
    );
  }
  if (item.status === "developing") {
    return (
      <span className="rounded-badge bg-gray-100 px-2.5 py-1 text-[0.6875rem] font-medium uppercase tracking-wide text-gray-500">
        {copy.developingLabel}
      </span>
    );
  }
  return null;
};

/**
 * Sectors explorer — a vertical tab list + content panel on desktop
 * (`items` never changes page, just the panel), an accordion on mobile.
 * Same `items` data and `SectorPanelBody` markup power both.
 */
const SectorExplorer = ({ items, copy, ariaLabel }) => {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(items[0].id);
  const [openId, setOpenId] = useState(items[0].id);
  const active = items.find((item) => item.id === activeId) ?? items[0];

  return (
    <div>
      {/* Desktop: vertical nav + panel */}
      <div className="hidden lg:grid lg:grid-cols-[19rem_1fr] lg:gap-[1.25rem]">
        <div role="tablist" aria-label={ariaLabel} aria-orientation="vertical" className="flex flex-col gap-1">
          {items.map((item, index) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`sector-tab-${item.id}`}
                aria-selected={isActive}
                aria-controls={`sector-panel-${item.id}`}
                onClick={() => setActiveId(item.id)}
                className={`flex items-start gap-3 rounded-btn px-4 py-3 text-start transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange ${
                  isActive ? "bg-navy text-white" : "text-gray-700 hover:bg-surface-alt"
                }`}
              >
                <span
                  className={`mt-[0.15rem] font-display text-[0.75rem] font-medium ${
                    isActive ? "text-orange" : "text-gray-400"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[0.9375rem] font-medium leading-[1.35]">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`sector-panel-${active.id}`}
          aria-labelledby={`sector-tab-${active.id}`}
          className="relative overflow-hidden rounded-card border border-gray-200 bg-white p-[2.5rem]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-display text-[1.5rem] font-semibold tracking-[-0.02em] text-navy">
                  {active.title}
                </h2>
                <SectorTag item={active} copy={copy} />
              </div>

              <div className="mt-[1.25rem]">
                <SectorPanelBody item={active} copy={copy} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile: accordion, one section open at a time */}
      <div className="space-y-[0.75rem] lg:hidden">
        {items.map((item, index) => {
          const isOpen = item.id === openId;
          return (
            <div key={item.id} className="overflow-hidden rounded-card border border-gray-200 bg-white">
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`sector-accordion-${item.id}`}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-3 px-[1.5rem] py-[1.25rem] text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-display text-[0.75rem] font-medium text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[1rem] font-semibold text-navy">
                      {item.title}
                    </span>
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className={`shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M1 4L7 10L13 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`sector-accordion-${item.id}`}
                    initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                    exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-[1.5rem] pb-[1.5rem]">
                      <SectorTag item={item} copy={copy} />
                      <div className={item.highlight || item.status === "developing" ? "mt-[0.75rem]" : ""}>
                        <SectorPanelBody item={item} copy={copy} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectorExplorer;
