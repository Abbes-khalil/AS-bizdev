import { useLang } from "./LanguageProvider";
import common from "./content/common";

/**
 * LangSwitcher — small pill that toggles between FR and EN.
 * - aria-label announces the language that will be selected on activation.
 * - aria-pressed reflects the active language for assistive tech.
 */
const LangSwitcher = ({ className = "" }) => {
  const { lang, setLang } = useLang();
  const isFr = lang === "fr";

  return (
    <div
      role="group"
      aria-label={common[lang].nav.language}
      className={`inline-flex items-center rounded-full border border-gray-200 bg-white p-1 text-[0.78rem] font-semibold tracking-tight text-navy shadow-soft ${className}`}
    >
      <button
        type="button"
        onClick={() => setLang("fr")}
        aria-pressed={isFr}
        aria-label="Français"
        className={`rounded-full px-3 py-1.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
          isFr
            ? "bg-navy text-white"
            : "text-gray-500 hover:text-navy"
        }`}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={!isFr}
        aria-label="English"
        className={`rounded-full px-3 py-1.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
          !isFr
            ? "bg-navy text-white"
            : "text-gray-500 hover:text-navy"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LangSwitcher;
