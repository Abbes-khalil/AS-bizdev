"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";

import { DEFAULT_LANG, langFromPath } from "@/lib/constants/routes";
import { alternatesOf } from "@/lib/utils/routing";

/**
 * The active language is derived from the URL prefix (`/en/…`), never from
 * client state: each language has its own indexable URLs, and a shared link
 * always opens in the language it was written in.
 */
const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  alternates: { fr: "/", en: "/en" },
});

export function LanguageProvider({ children }) {
  const pathname = usePathname();
  const lang = langFromPath(pathname);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, alternates: alternatesOf(pathname) }),
    [lang, pathname],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
