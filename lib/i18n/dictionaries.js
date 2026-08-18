import { useLang } from "./LanguageProvider";

import common from "./content/common";
import markets from "@/app/marches/_components/MarketsContent.content";
import news from "./content/news";

const DICTIONARIES = {
  common,
  markets,
  news,
};

/**
 * getDictionary — the server-safe equivalent of `useT`: no context, no
 * hooks, so Server Components can call it directly once `lang` is known
 * from the route (each language has its own literal `app/` folder).
 * Falls back to French so a missing translation never blanks the UI.
 */
export const getDictionary = (lang, namespace) => {
  const dict = DICTIONARIES[namespace];
  return dict[lang] || dict.fr;
};

/**
 * useT — client-context equivalent of `getDictionary`, for the client
 * components (Navbar, Footer, forms, …) that read `lang` from
 * `LanguageProvider` instead of receiving it as a prop.
 */
export const useT = (namespace) => {
  const { lang } = useLang();
  return getDictionary(lang, namespace);
};

/** Replaces {token} placeholders — `interpolate(t.copyright, { year: 2026 })`. */
export const interpolate = (template, values) =>
  Object.entries(values).reduce(
    (acc, [key, value]) => acc.replaceAll(`{${key}}`, value),
    template,
  );

export { useLang } from "./LanguageProvider";
export { LanguageProvider } from "./LanguageProvider";
export { default as LangSwitcher } from "./LangSwitcher";
