import { useLang } from "./LanguageProvider";

import about from "@/app/as-biz-dev/_components/AboutContent.content";
import acceleration from "@/app/nos-solutions/acceleration-commerciale/_components/AccelerationContent.content";
import common from "./content/common";
import contact from "@/app/contact/_components/ContactContent.content";
import home from "@/app/_components/HomeContent.content";
import legalNotice from "@/components/pages/LegalNoticeContent.content";
import markets from "@/app/marches/_components/MarketsContent.content";
import network from "@/app/notre-reseau/_components/NetworkContent.content";
import news from "./content/news";
import partnerProgram from "@/app/devenir-partenaire/_components/BecomePartnerContent.content";
import partners from "@/app/nos-partenaires/_components/PartnersContent.content";
import pilotage from "@/app/nos-solutions/pilotage-commercial-externalise/_components/PilotageContent.content";
import policy from "@/app/politiques-de-confidentialite/_components/PolicyContent.content";
import sectors from "@/app/nos-secteurs/_components/SectorsContent.content";
import solutions from "@/app/nos-solutions/_components/SolutionsContent.content";
import team from "@/app/as-biz-dev/_components/Team.content";

const DICTIONARIES = {
  about,
  acceleration,
  common,
  contact,
  home,
  legalNotice,
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
