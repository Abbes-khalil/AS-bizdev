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

/** Matches a `PATHS`-style pattern (`/news/:slug`) against a path, no deps. */
const matchPattern = (pattern, path) => {
  const patternParts = pattern.split("/").filter(Boolean);
  const pathParts = path.split("/").filter(Boolean);
  if (patternParts.length !== pathParts.length) return null;

  const params = {};
  for (let i = 0; i < patternParts.length; i += 1) {
    const part = patternParts[i];
    if (part.startsWith(":")) {
      params[part.slice(1)] = pathParts[i];
    } else if (part !== pathParts[i]) {
      return null;
    }
  }
  return params;
};

/**
 * Reverse lookup: which page is this URL, in which language?
 * Returns `{ key, lang, params }`, or null for an unknown path.
 */
export const matchRoute = (pathname) => {
  const path = normalise(pathname);

  for (const [key, byLang] of Object.entries(PATHS)) {
    for (const lang of LANGS) {
      const params = matchPattern(byLang[lang], path);
      if (params) return { key, lang, params };
    }
  }

  return null;
};
