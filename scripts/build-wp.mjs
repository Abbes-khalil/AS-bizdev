/**
 * Builds the SPA for WordPress and copies the output into the theme.
 *
 *   npm run build:wp
 *
 * Assets are built with `base` pointing at the theme's assets/ directory, so
 * every JS, CSS and image URL resolves inside /wp-content/themes/asbizdev/.
 */
import { execSync } from "node:child_process";
import { cpSync, existsSync, rmSync } from "node:fs";

const THEME = "asbizdev";
const BASE = `/wp-content/themes/${THEME}/assets/`;
const DEST = `wordpress-theme/${THEME}/assets`;

console.log(`Building with base: ${BASE}`);

execSync("npm run build", {
  stdio: "inherit",
  env: { ...process.env, VITE_BASE: BASE },
});

if (existsSync(DEST)) rmSync(DEST, { recursive: true });
cpSync("dist", DEST, { recursive: true });

// index.html and .htaccess belong to the standalone build, not the theme.
for (const f of [`${DEST}/index.html`, `${DEST}/.htaccess`]) {
  if (existsSync(f)) rmSync(f);
}

console.log(`\n✓ Theme ready: wordpress-theme/${THEME}/`);
console.log("  Zip that folder and upload it in WordPress → Appearance → Themes.");
