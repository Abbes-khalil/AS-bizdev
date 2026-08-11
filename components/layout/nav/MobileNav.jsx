import Link from "next/link";
import { useState } from "react";

import LangSwitcher from "@/lib/i18n/LangSwitcher";
import { ROUTES } from "@/lib/routes";
import { interpolate } from "@/lib/i18n/dictionaries";
import { isEntryActive } from "../../../hooks/useActiveRoute";

const ArrowUpRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M5 15L15 5M15 5H7M15 5V13"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Plus = ({ open }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path
      d="M10 4V16"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className={`origin-center transition-transform duration-300 ${open ? "rotate-90" : ""}`}
    />
  </svg>
);

const ENTRY_CLASS =
  "flex items-baseline justify-between gap-4 py-5 font-display text-2xl font-semibold tracking-tight text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-md";

/**
 * Full-screen navigation sheet on small screens. Entries with children expand
 * in place through a disclosure button, so the hub page stays reachable as its
 * own link rather than being replaced by a toggle.
 *
 * Closed, the sheet is `invisible`, which keeps its links out of the tab order
 * and out of the accessibility tree — `aria-hidden` alone would not.
 */
const MobileNav = ({ open, items, activeKey, copy, onNavigate, lang }) => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-40 overflow-y-auto bg-white pt-[80px] transition-[transform,visibility] duration-500 ease-emphasized xl:hidden ${
        open ? "visible translate-y-0" : "invisible translate-y-full"
      }`}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label={copy.mobileAria}
    >
      <div className="container-x flex min-h-full flex-col justify-between pb-10 pt-6">
        <nav aria-label={copy.mobileAria}>
          <ul role="list" className="space-y-1">
            {items.map((entry, index) => {
              const isOpen = expanded === entry.key;

              return (
                <li key={entry.key} className="border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <Link
                      href={ROUTES[entry.key][lang]}
                      onClick={onNavigate}
                      aria-current={
                        isEntryActive(entry, activeKey) ? "page" : undefined
                      }
                      className={`${ENTRY_CLASS} flex-1`}
                    >
                      <span>
                        <span className="mr-3 font-display text-[0.75rem] font-medium uppercase tracking-widest text-gray-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {entry.label}
                      </span>
                      {!entry.children && <ArrowUpRight />}
                    </Link>

                    {entry.children && (
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : entry.key)}
                        aria-expanded={isOpen}
                        aria-controls={`submenu-${entry.key}`}
                        aria-label={interpolate(copy.submenu, {
                          label: entry.label,
                        })}
                        className="ml-2 grid h-11 w-11 shrink-0 place-items-center rounded-btn border border-gray-200 text-navy transition-colors hover:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                      >
                        <Plus open={isOpen} />
                      </button>
                    )}
                  </div>

                  {entry.children && (
                    <ul
                      role="list"
                      id={`submenu-${entry.key}`}
                      hidden={!isOpen}
                      className="pb-4 pl-[2.5rem]"
                    >
                      {entry.children.map((child) => (
                        <li key={child.key}>
                          <Link
                            href={ROUTES[child.key][lang]}
                            onClick={onNavigate}
                            aria-current={
                              child.key === activeKey ? "page" : undefined
                            }
                            className="flex items-center justify-between gap-4 py-3 font-display text-[1rem] font-medium leading-[1.4] tracking-tight text-gray-700 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded-md"
                          >
                            {child.label}
                            <ArrowUpRight />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-10 space-y-4">
          <LangSwitcher />
          <Link
            href={ROUTES.contact[lang]}
            onClick={onNavigate}
            className="btn-primary w-full"
          >
            {copy.mobileCta}
          </Link>
          <p className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-gray-400">
            {copy.mobileCaption}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
