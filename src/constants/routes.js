import { matchPath } from "react-router-dom";

import { LANGS, PATHS, normalise } from "./paths";

/**
 * Router-aware helpers on top of the plain route table in `paths.js`.
 * The table itself stays free of imports so build scripts can read it.
 */
export {
  DEFAULT_LANG,
  DYNAMIC_KEYS,
  LANGS,
  PATHS,
  langFromPath,
  normalise,
  pathFor,
} from "./paths";

/**
 * Reverse lookup: which page is this URL, in which language?
 * Returns `{ key, lang, params }`, or null for an unknown path.
 */
export const matchRoute = (pathname) => {
  const path = normalise(pathname);

  for (const [key, byLang] of Object.entries(PATHS)) {
    for (const lang of LANGS) {
      const match = matchPath(byLang[lang], path);
      if (match) return { key, lang, params: match.params };
    }
  }

  return null;
};
