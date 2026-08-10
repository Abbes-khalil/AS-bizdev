"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";

import ArrowIcon from "@/components/ArrowIcon";
import { ASSET } from "@/lib/siteData";
import { pathFor } from "@/lib/constants/routes";
import { useLang } from "@/lib/i18n/LanguageProvider";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const OPTIONAL_SECTIONS = [
  ["sectors", "sectors"],
  ["clientTypes", "clients"],
  ["distributionChannels", "channels"],
  ["marketChallenges", "stakes"],
  ["interventions", "intervention"],
  ["partnersSought", "partners"],
];

/**
 * On-page market detail — never a route change (§5 of the brief). Only
 * renders the optional sections that have validated content; a market with
 * none of them just shows its description, which is the common case today.
 */
const MarketModal = ({ market, regionLabel, sectionLabels, ctaLabel, closeLabel, onClose }) => {
  const { lang } = useLang();
  const reduceMotion = useReducedMotion();
  const dialogRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    if (!market) return undefined;

    previousFocus.current = document.activeElement;
    const dialog = dialogRef.current;
    dialog?.querySelector('[data-autofocus="true"]')?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== "Tab" || !dialog) return;

      const focusable = Array.from(dialog.querySelectorAll(FOCUSABLE));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previousFocus.current?.focus?.();
    };
  }, [market, onClose]);

  return (
    <AnimatePresence>
      {market && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6">
          <motion.div
            className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
            aria-hidden="true"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="market-modal-title"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
            className="relative flex max-h-[88vh] w-full flex-col overflow-y-auto rounded-t-[1.5rem] bg-white p-[1.75rem] shadow-lift sm:max-h-[85vh] sm:max-w-[38rem] sm:rounded-card sm:p-[2.5rem]"
          >
            <button
              type="button"
              data-autofocus="true"
              onClick={onClose}
              aria-label={closeLabel}
              className="absolute right-[1.25rem] top-[1.25rem] grid h-10 w-10 place-items-center rounded-full border border-gray-200 bg-white text-navy transition-colors hover:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M1 1L15 15M15 1L1 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <img
              src={`${ASSET}flags/${market.flagCode}.svg`}
              alt=""
              aria-hidden="true"
              className="h-[2.75rem] w-[3.75rem] rounded-[0.5rem] object-cover shadow-soft ring-1 ring-black/5"
            />

            <p className="mt-4 eyebrow text-orange">{regionLabel}</p>
            <h2
              id="market-modal-title"
              className="mt-2 font-display text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.02em] text-navy"
            >
              {market.name[lang] ?? market.name.fr}
            </h2>

            {market.intro?.[lang] && (
              <p className="mt-4 text-[0.9375rem] leading-[1.65] text-gray-700">
                {market.intro[lang]}
              </p>
            )}

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {OPTIONAL_SECTIONS.map(([field, labelKey]) => {
                const items = market[field];
                if (!items?.length) return null;

                return (
                  <div key={field}>
                    <h3 className="font-display text-[0.8125rem] font-semibold uppercase tracking-widest text-navy">
                      {sectionLabels[labelKey]}
                    </h3>
                    <ul role="list" className="mt-2 space-y-1">
                      {items.map((item) => (
                        <li key={item} className="text-[0.875rem] leading-[1.6] text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <Link
              href={`${pathFor("contact", lang)}?market=${market.key}`}
              className="btn-primary mt-8 self-start"
            >
              {ctaLabel}
              <ArrowIcon />
            </Link>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MarketModal;
