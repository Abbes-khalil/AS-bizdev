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
