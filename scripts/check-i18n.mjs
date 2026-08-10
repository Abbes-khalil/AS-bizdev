/**
 * Checks that every dictionary has the same shape in French and English.
 *
 *   npm run check:i18n
 *
 * A key present in one language but not the other means that language renders
 * `undefined` — this catches it before it reaches the site. Exits non-zero on
 * failure, so it works as a CI step or a pre-commit hook.
 */
const MODULES = [
  "common",
  "home",
  "solutions",
  "acceleration",
  "pilotage",
  "markets",
  "about",
  "partnerProgram",
  "team",
  "partners",
  "news",
  "contact",
  "policy",
];

const BASE = new URL("../lib/i18n/content/", import.meta.url);

/** Flattens a dictionary into comparable "path:type" descriptors. */
const shape = (value, path = "") => {
  if (Array.isArray(value)) {
    return [
      `${path}[]:${value.length}`,
      ...value.flatMap((item, i) => shape(item, `${path}[${i}]`)),
    ];
  }
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, val]) =>
      shape(val, path ? `${path}.${key}` : key),
    );
  }
  return [`${path}:${typeof value}`];
};

const load = async (name) => {
  try {
    return (await import(new URL(`${name}.js`, BASE))).default;
  } catch {
    return (await import(new URL(`${name}/index.js`, BASE))).default;
  }
};

let failed = 0;

for (const name of MODULES) {
  const dict = await load(name);
  const fr = new Set(shape(dict.fr));
  const en = new Set(shape(dict.en));

  const missingInEn = [...fr].filter((k) => !en.has(k));
  const missingInFr = [...en].filter((k) => !fr.has(k));

  if (missingInEn.length || missingInFr.length) {
    failed++;
    console.error(`✗ ${name}`);
    missingInEn.slice(0, 5).forEach((k) => console.error(`    missing in EN: ${k}`));
    missingInFr.slice(0, 5).forEach((k) => console.error(`    missing in FR: ${k}`));
  } else {
    console.log(`✓ ${name}`);
  }
}

if (failed) {
  console.error(`\n${failed} dictionar${failed === 1 ? "y" : "ies"} out of sync.`);
  process.exit(1);
}

console.log("\nAll dictionaries match across FR and EN.");
