/**
 * Builds the SPA for WordPress and copies the output into the theme.
 *
 *   npm run build:wp    build only  → wordpress-theme/asbizdev/
 *   npm run wp:sync     build + copy into a live WordPress install
 *
 * Assets are built with `base` pointing at the theme's assets/ directory, so
 * every JS, CSS and image URL resolves inside /wp-content/themes/asbizdev/.
 *
 * For wp:sync, the destination is read from (in order):
 *   1. the WP_THEME_PATH environment variable
 *   2. a `.wp-target` file in the project root (gitignored, machine-local)
 */
import { execSync } from "node:child_process";
import { cpSync, existsSync, readFileSync, rmSync } from "node:fs";

const THEME = "asbizdev";
const BASE = `/wp-content/themes/${THEME}/assets/`;
const DEST = `wordpress-theme/${THEME}`;
const SYNC = process.argv.includes("--sync");

const readTarget = () => {
  if (process.env.WP_THEME_PATH) return process.env.WP_THEME_PATH.trim();
  if (existsSync(".wp-target")) {
    const line = readFileSync(".wp-target", "utf8")
      .split("\n")
      .map((l) => l.trim())
      .find((l) => l && !l.startsWith("#"));
    if (line) return line;
  }
  return null;
};

console.log(`Building with base: ${BASE}`);

execSync("npm run build", {
  stdio: "inherit",
  env: { ...process.env, VITE_BASE: BASE },
});

// Refresh the theme's built assets, leaving the PHP source untouched.
if (existsSync(`${DEST}/assets`)) rmSync(`${DEST}/assets`, { recursive: true });
cpSync("dist", `${DEST}/assets`, { recursive: true });

// index.html and .htaccess belong to the standalone build, not the theme.
for (const f of [`${DEST}/assets/index.html`, `${DEST}/assets/.htaccess`]) {
  if (existsSync(f)) rmSync(f);
}

console.log(`\n✓ Theme built: ${DEST}/`);

if (!SYNC) {
  console.log("  Run `npm run wp:sync` to copy it into your WordPress site.");
  process.exit(0);
}

const target = readTarget();

if (!target) {
  console.error(
    "\n✗ No destination configured.\n" +
      "  Create a `.wp-target` file containing the path to your theme folder,\n" +
      "  for example:\n" +
      `    C:/Users/you/Studio/my-site/wp-content/themes/${THEME}\n` +
      "  or set WP_THEME_PATH in the environment.",
  );
  process.exit(1);
}

const parent = target.replace(/[\\/][^\\/]+$/, "");
if (!existsSync(parent)) {
  console.error(
    `\n✗ WordPress themes folder not found:\n    ${parent}\n` +
      "  Check the path in `.wp-target`. Is the Studio site still there?",
  );
  process.exit(1);
}

if (existsSync(target)) rmSync(target, { recursive: true });
cpSync(DEST, target, { recursive: true });

console.log(`✓ Synced to: ${target}`);
console.log("  Reload the site in your browser — no WordPress restart needed.");
