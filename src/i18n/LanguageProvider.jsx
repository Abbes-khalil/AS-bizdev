import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "asbizdev.lang";
const SUPPORTED = ["fr", "en"];
const DEFAULT_LANG = "fr";

const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  setLang: () => {},
  toggle: () => {},
});

const readInitialLang = () => {
  if (typeof window === "undefined") return DEFAULT_LANG;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
  } catch {
    // ignore storage errors (private mode etc.)
  }
  return DEFAULT_LANG;
};

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readInitialLang);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const setLang = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLangState(next);
  }, []);

  const toggle = useCallback(() => {
    setLangState((prev) => (prev === "fr" ? "en" : "fr"));
  }, []);

  const value = useMemo(() => ({ lang, setLang, toggle }), [lang, setLang, toggle]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
