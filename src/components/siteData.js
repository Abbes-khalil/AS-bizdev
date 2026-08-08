/**
 * Base path for images. Derived from Vite's BASE_URL so the app keeps working
 * if it is ever served from a sub-path rather than the domain root.
 */
export const ASSET = `${import.meta.env?.BASE_URL ?? "/"}brand_assets/`;

/**
 * Routes moved to `src/constants/routes.js` when the site became bilingual by
 * URL: a page now has one path per language, so a flat map of hrefs no longer
 * describes it. Contact details moved to `src/constants/site.js` alongside the
 * other site-wide facts. Both are re-exported here so existing imports keep
 * working.
 */
export { CONTACT_EMAIL, CONTACT_PHONE } from "../constants/site";
