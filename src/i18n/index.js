import { useLang } from "./LanguageProvider";

import common from "./content/common";
import home from "./content/home";
import pages from "./content/pages";
import team from "./content/team";
import partners from "./content/partners";
import news from "./content/news";
import contact from "./content/contact";
import policy from "./content/policy";

const DICTIONARIES = {
  common,
  home,
  pages,
  team,
  partners,
  news,
  contact,
  policy,
};

/**
 * useT — returns the copy for one namespace in the active language.
 * Falls back to French so a missing translation never blanks the UI.
 */
export const useT = (namespace) => {
  const { lang } = useLang();
  const dict = DICTIONARIES[namespace];
  return dict[lang] || dict.fr;
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
