import { useLang } from "./LanguageProvider";

import about from "./content/about";
import acceleration from "./content/acceleration";
import common from "./content/common";
import contact from "./content/contact";
import home from "./content/home";
import markets from "./content/markets";
import network from "./content/network";
import news from "./content/news";
import partnerProgram from "./content/partnerProgram";
import partners from "./content/partners";
import pilotage from "./content/pilotage";
import policy from "./content/policy";
import sectors from "./content/sectors";
import solutions from "./content/solutions";
import team from "./content/team";

const DICTIONARIES = {
  about,
  acceleration,
  common,
  contact,
  home,
  markets,
  network,
  news,
  partnerProgram,
  partners,
  pilotage,
  policy,
  sectors,
  solutions,
  team,
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
