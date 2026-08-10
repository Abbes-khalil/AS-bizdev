"use client";

import { useLang } from "@/lib/i18n/LanguageProvider";

const LABEL = { fr: "Chargement de la page", en: "Loading the page" };

/** Loading state shown while a lazily-loaded page chunk arrives. */
const PageLoader = () => {
  const { lang } = useLang();

  return (
    <div
      role="status"
      aria-live="polite"
      className="grid min-h-[60vh] place-items-center"
    >
      <span className="sr-only">{LABEL[lang] ?? LABEL.fr}</span>
      <span
        aria-hidden="true"
        className="h-10 w-10 animate-spin rounded-full border-2 border-gray-200 border-t-orange"
      />
    </div>
  );
};

export default PageLoader;
