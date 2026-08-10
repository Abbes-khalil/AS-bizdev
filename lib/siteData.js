/** Base path for images, served from `public/brand_assets/`. */
export const ASSET = "/brand_assets/";

/**
 * Routes moved to `src/constants/routes.js` when the site became bilingual by
 * URL: a page now has one path per language, so a flat map of hrefs no longer
 * describes it. Contact details moved to `src/constants/site.js` alongside the
 * other site-wide facts. Both are re-exported here so existing imports keep
 * working.
 */
export { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants/site";
