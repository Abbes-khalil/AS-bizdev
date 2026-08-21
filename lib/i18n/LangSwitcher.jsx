"use client";

import Link from "next/link";

import { useLang } from "./LanguageProvider";
import common from "./content/common";

const LABELS = { fr: "Français", en: "English", ar: "العربية" };

/**
 * FR / EN / AR switch. Real links to the twin URL rather than a state
 * toggle, so every language tree stays crawlable and a middle-click still
 * works. The visible pill shows the plain route code (`FR`/`EN`/`AR`); the
 * full language name is only used as the accessible name.
 */
const LangSwitcher = ({ className = "" }) => {
  const { lang, alternates } = useLang();

  return (
    <div
      role="group"
      aria-label={common[lang].nav.language}
      className={`inline-flex items-center rounded-full border border-gray-200 bg-white p-1 text-[0.78rem] font-semibold tracking-tight text-navy shadow-soft ${className}`}
    >
      {Object.entries(alternates).map(([code, href]) => {
        const active = code === lang;

        return (
          <Link
            key={code}
            href={href}
            hrefLang={code}
            aria-label={LABELS[code]}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-3 py-1.5 uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
              active ? "bg-navy text-white" : "text-gray-500 hover:text-navy"
            }`}
          >
            {code}
          </Link>
        );
      })}
    </div>
  );
};

export default LangSwitcher;
