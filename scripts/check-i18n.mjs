/**
 * Checks that every dictionary has the same shape in French and English.
 *
 *   npm run check:i18n
 *
 * A key present in one language but not the other means that language renders
 * `undefined` — this catches it before it reaches the site. Exits non-zero on
 * failure, so it works as a CI step or a pre-commit hook.
 */
const MODULES = ["common", "markets", "news"];

const BASE = new URL("../lib/i18n/content/", import.meta.url);

// `markets` content actually lives alongside the /marches page rather than
// under lib/i18n/content/ (see lib/i18n/dictionaries.js) — everything else
// resolves under BASE.
const MODULE_URLS = {
  markets: new URL(
    "../app/marches/_components/MarketsContent.content.js",
    import.meta.url,
  ),
};

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
  if (MODULE_URLS[name]) return (await import(MODULE_URLS[name])).default;

  try {
    return (await import(new URL(`${name}.js`, BASE))).default;
  } catch {
    return (await import(new URL(`${name}/index.js`, BASE))).default;
  }
};

const LANGS = ["fr", "en", "ar"];

let failed = 0;

for (const name of MODULES) {
  const dict = await load(name);
  const shapes = Object.fromEntries(LANGS.map((l) => [l, new Set(shape(dict[l]))]));
  const fr = shapes.fr;

  let moduleFailed = false;

  for (const lang of LANGS.filter((l) => l !== "fr")) {
    const other = shapes[lang];
    const missingInOther = [...fr].filter((k) => !other.has(k));
    const missingInFr = [...other].filter((k) => !fr.has(k));

    if (missingInOther.length || missingInFr.length) {
      moduleFailed = true;
      console.error(`✗ ${name} (fr ↔ ${lang})`);
      missingInOther
        .slice(0, 5)
        .forEach((k) => console.error(`    missing in ${lang.toUpperCase()}: ${k}`));
      missingInFr
        .slice(0, 5)
        .forEach((k) => console.error(`    missing in FR: ${k}`));
    }
  }

  if (moduleFailed) {
    failed++;
  } else {
    console.log(`✓ ${name}`);
  }
}

if (failed) {
  console.error(`\n${failed} dictionar${failed === 1 ? "y" : "ies"} out of sync.`);
  process.exit(1);
}

console.log("\nAll dictionaries match across FR, EN and AR.");
