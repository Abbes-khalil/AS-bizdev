# Audit, Cleanup, Domain Canonicalization & Legal Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clean up dead code/assets, fix two real broken-image bugs, stop the `*.vercel.app` preview domain from being indexed alongside `asbizdev.com`, add a `/mentions-legales` page, trim unused Google Font weights, and fix the footer phone number format.

**Architecture:** This is a Next.js 16 App Router site with no test framework and no linter configured (confirmed during audit — `package.json` has no `lint`/`test` script, no `.eslintrc`/`prettier` config exists). Every task below therefore verifies itself the way the rest of this repo already does: `npm run build` (the project's only CI-equivalent gate), a targeted `grep` to prove a reference is gone/added, and — where the change is visual — a manual check with `npm run dev`. This follows the codebase's own established verification pattern rather than introducing a new one.

**Tech Stack:** Next.js 16 (App Router, Turbopack), React, Tailwind CSS, Framer Motion, next/image (currently unused — introduced in Task 9).

## Global Constraints

- Never invent content. Any fact this plan can't source from the existing code/data gets a literal `[À COMPLÉTER]` placeholder — never a plausible-sounding guess.
- Do not touch: Navbar, pages Marchés (`app/marches/*`, `components/markets/*`), References filtering logic, animation timing/easing values, color tokens, spacing tokens. Those were covered by prior passes and are out of scope here.
- FR and EN must both be updated for every user-facing change (this project has no automatic translation — `lib/i18n/dictionaries.js` requires one manual entry per language per namespace).
- `npm run build` must pass after every task before moving to the next.
- Prefer removing dead code outright over commenting it out (per this repo's own git-safety norms — no `// removed` comments).

---

## Audit Findings (reference for Task 1 — no code changes in this section)

**Dependencies (`package.json`):** All 6 runtime/dev dependencies are in active use — verified by grepping every import specifier:
- `@supabase/supabase-js` → `lib/supabase.js`, `app/api/ingest-article/route.js`, `scripts/lib/supabaseBuild.mjs`, `scripts/migrate-articles-to-supabase.mjs`
- `framer-motion` → `components/ui/RevealOnScroll.jsx`, `components/pages/SectorExplorer.jsx`, `components/references/ReferencesSection.jsx`, `components/references/SecondaryReferences.jsx`, `components/news/ArticleModal.jsx`
- `lucide-react` → `components/pages/Team.jsx`, `components/pages/ArticleContent.jsx`, `components/news/ArticleModal.jsx`
- `next`, `react`, `react-dom` → framework, used everywhere

**No dependency to remove.** No duplicate ESLint/Prettier configs exist (none are configured at all — not in scope to add one, that would be a new feature). `.env` / `.env.example` are the normal pair, not a duplicate.

**Dead code found** (zero references anywhere in `app/`, `components/`, `lib/`, `hooks/`, `scripts/`):
- `components/ui/Card.jsx` (exports `ImageCard`) — never imported.
- `components/ui/Modal.jsx` — never imported (the news article modal uses its own local markup in `components/news/ArticleModal.jsx`, not this component).
- `lib/constants/placeholders.js` (`TO_VALIDATE`, `COUNTRY_TO_VALIDATE`) — never imported.

**No `console.log`, `TODO`, or `FIXME` found** in `app/`, `components/`, `lib/`, `hooks/`.

**Orphaned image assets** (zero references, including checked for dynamic construction via data-driven paths like flags and logos, which are NOT orphaned):
- `public/brand_assets/accela-scaled.webp`
- `public/brand_assets/facebook.png`, `public/brand_assets/linkedin.png` (Footer renders LinkedIn/Facebook as inline `<svg>`, not these files)
- `public/brand_assets/employe/bechir.jpg`, `Chekib-.jpg`, `kaouther.jpg`, `stephane.jpg`, `taher.jpg`, `wafa.jpg` (the `.webp` sibling of each is the one actually referenced, via `PHOTOS` in `components/pages/Team.content.js`)
- `public/brand_assets/nossolutions/*.webp` (3 files), `public/brand_assets/nosvaleurs/*.webp` (3 files), `public/brand_assets/notresavoirfaire/*.webp` (3 files) — leftovers from the pre-Next.js site; the only code reference to these folder names is the dead `Card.jsx` component's default prop (`href = "/nossolutions"`) and `lib/constants/legacyRedirects.js` (which redirects the old *URLs* of the same name, not these images)
- `public/brand_assets/partenaires/Sementis-transparent.png` — an unused processed variant; the live reference is `Sementis.png` (no suffix)

**NOT orphaned (verified — do not delete):**
- `public/brand_assets/flags/*.svg` — referenced dynamically via `` `${ASSET}flags/${country.flagCode}.svg` `` in `components/markets/MarketCountryGrid.jsx`, keyed off `flagCode` in `lib/data/countries.js`.
- `public/brand_assets/partenaires/ADMG.webp`, `SySmic.webp` — referenced only in a code comment in `components/references/NetworkEcosystem.jsx` ("pre-existing partner sub-tier (admg, sysmic)") but **no corresponding data entries exist** in `components/pages/PartnersContent.data.js` (the `REFERENCES` array has no `type: "partner"` entries at all). This reads as unfinished work, not dead assets — **flagged for a human decision in the final recap, not deleted or completed by this plan** (completing it would mean inventing partner descriptions, which is against the Global Constraints).

**Two real bugs found (fixed in Task 3):**
1. `components/pages/PartnersContent.data.js:278` references `logo: "partenaires/Les_Nouvelles_Pailles.png"` (capital N) but the file on disk is `public/brand_assets/partenaires/Les_nouvelles_pailles.png` (lowercase n). Windows/macOS filesystems are case-insensitive so this works locally; Vercel's Linux filesystem is case-sensitive, so this logo silently 404s in production (falls back to the empty placeholder box, per the `onError` handling already in `ReferenceCard.jsx`).
2. `components/pages/Team.content.js` — the `PHOTOS` map (lines 5-12) has no `bechir` key, yet line 101 references `photo: PHOTOS.bechir` for team member "Béchir Zouaoui" (EN roster only). `PHOTOS.bechir` evaluates to `undefined`, so `TeamCard`'s `<img src={`${ASSET}${member.photo}`}>` renders `src="...undefined"` — a broken image, and unlike `ReferenceCard`/`EcosystemCard`, `TeamCard` has no `onError` fallback at all.
   - Separately, and **not fixed by this plan** (content decision, not a bug): the FR roster's 4th member is "Achwek Kefifi" (no `photo` field, also broken for the same reason) while the EN roster's 4th member at the same array index is "Béchir Zouaoui" — the two language rosters list a **different person** at the same position. Flagged in the final recap for a human decision (are both current employees? should one list include both? which language is correct?).

**Font weights loaded vs. used** (`styles/globals.css:1` loads Poppins `300;400;500;600;700;800` and Inter `300;400;500;600;700`): grepped every `font-{weight}` Tailwind utility class across `app/` and `components/` — only `font-normal` (400), `font-medium` (500) and `font-semibold` (600) are ever used (plus `styles/globals.css` itself hard-sets `h1`–`h6` to `font-weight: 600`). `font-light`, `font-bold`, `font-extrabold` do not appear anywhere. Fixed in Task 6.

**Image optimization** (`next/image` usage): **zero** — every image on the site uses a plain `<img>` tag (11 files). Full-site migration is out of scope for this plan (11 files, several with custom `object-fit`/`logoScale` treatments that need individual visual verification — too broad for one pass without per-image review). Task 9 converts the single largest, LCP-critical image (the home hero map, which already has `fetchPriority="high"` set manually, signalling it's the intended LCP element) as a demonstrated, scoped fix, and documents the rest as follow-up work in the final recap rather than guessing at `sizes`/`fill` values for every logo and flag blind.

**Domain canonicalization:** confirmed no `middleware.js` exists anywhere in the repo, and `next.config.mjs` only has path-based `redirects()` (legacy URL slugs) — no host-based logic. `app/robots.js` returns the same `allow: "/"` rule regardless of which host serves the request, so `*.vercel.app` is currently fully crawlable. Fixed in Task 7.

**Phone number:** `lib/constants/site.js:5` — `CONTACT_PHONE = "+33 06 07 38 69 63"`. Confirmed this is the only definition (used in `components/layout/Footer.jsx` and nowhere else needs changing). Fixed in Task 2.

---

### Task 1: Remove dead code

**Files:**
- Delete: `components/ui/Card.jsx`
- Delete: `components/ui/Modal.jsx`
- Delete: `lib/constants/placeholders.js`

**Interfaces:**
- Consumes: nothing (this task only removes files with zero inbound references, confirmed in the Audit Findings section above).
- Produces: nothing new.

- [ ] **Step 1: Confirm zero references one more time immediately before deleting (repo state may have shifted since the audit)**

Run:
```bash
grep -rn "ui/Card\"" app components hooks lib --include="*.js" --include="*.jsx"
grep -rn "ui/Modal\"" app components hooks lib --include="*.js" --include="*.jsx"
grep -rn "constants/placeholders\"" app components hooks lib --include="*.js" --include="*.jsx"
```
Expected: no output from any of the three commands.

- [ ] **Step 2: Delete the three files**

```bash
git rm components/ui/Card.jsx components/ui/Modal.jsx lib/constants/placeholders.js
```

- [ ] **Step 3: Build to confirm nothing broke**

Run: `npm run build`
Expected: build succeeds, same route list as before (35 routes).

- [ ] **Step 4: Commit**

```bash
git commit -m "chore: remove unused Card, Modal and placeholders utilities

Zero references found anywhere in app/, components/, lib/, hooks/."
```

---

### Task 2: Delete orphaned image assets

**Files:**
- Delete: `public/brand_assets/accela-scaled.webp`
- Delete: `public/brand_assets/facebook.png`
- Delete: `public/brand_assets/linkedin.png`
- Delete: `public/brand_assets/employe/bechir.jpg`
- Delete: `public/brand_assets/employe/Chekib-.jpg`
- Delete: `public/brand_assets/employe/kaouther.jpg`
- Delete: `public/brand_assets/employe/stephane.jpg`
- Delete: `public/brand_assets/employe/taher.jpg`
- Delete: `public/brand_assets/employe/wafa.jpg`
- Delete: `public/brand_assets/nossolutions/` (entire folder, 3 files)
- Delete: `public/brand_assets/nosvaleurs/` (entire folder, 3 files)
- Delete: `public/brand_assets/notresavoirfaire/` (entire folder, 3 files)
- Delete: `public/brand_assets/partenaires/Sementis-transparent.png`

Do **not** touch: `public/brand_assets/flags/`, `public/brand_assets/partenaires/ADMG.webp`, `public/brand_assets/partenaires/SySmic.webp` (see Audit Findings — flagged for human decision, not orphaned/dead).

- [ ] **Step 1: Run this task after Task 1, not before** (Task 1 removes `Card.jsx`, which is the only file that even mentions the `nossolutions` folder name — deleting assets first and code second would leave a moment where a dead component references a deleted path, which is backwards for a clean diff)

- [ ] **Step 2: Delete the confirmed-orphaned files**

```bash
git rm public/brand_assets/accela-scaled.webp
git rm public/brand_assets/facebook.png public/brand_assets/linkedin.png
git rm public/brand_assets/employe/bechir.jpg public/brand_assets/employe/Chekib-.jpg public/brand_assets/employe/kaouther.jpg public/brand_assets/employe/stephane.jpg public/brand_assets/employe/taher.jpg public/brand_assets/employe/wafa.jpg
git rm -r public/brand_assets/nossolutions public/brand_assets/nosvaleurs public/brand_assets/notresavoirfaire
git rm public/brand_assets/partenaires/Sementis-transparent.png
```

- [ ] **Step 3: Confirm the `.webp` siblings that ARE used still exist**

Run: `ls public/brand_assets/employe/`
Expected: `bechir.webp`, `Chekib-.webp`, `kaouther.webp`, `khalil.webp`, `stephane.webp`, `taher.webp`, `wafa.webp` — all `.jpg` files gone, all `.webp` files present.

- [ ] **Step 4: Build to confirm nothing 404s at build time**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: remove orphaned legacy-site image assets

Leftovers from the pre-Next.js site (nossolutions/, nosvaleurs/,
notresavoirfaire/ folders match old URL slugs, not any current asset
path), unused .jpg duplicates of team photos (the .webp sibling is what
Team.content.js actually references), an unused processed logo variant,
and the social icons Footer.jsx renders as inline SVG instead."
```

---

### Task 3: Fix the two broken-image bugs

**Files:**
- Modify: `components/pages/PartnersContent.data.js:278`
- Modify: `components/pages/Team.content.js:5-12`
- Modify: `components/pages/Team.jsx` (harden against a missing/broken photo)

**Interfaces:**
- Consumes: `ASSET` from `@/lib/siteData` (already imported in `Team.jsx`)
- Produces: `TeamCard` no longer renders a broken `<img>` when `member.photo` is missing or 404s — mirrors the `logoFailed`/`showLogo` pattern already used in `components/references/ReferenceCard.jsx`.

- [ ] **Step 1: Fix the Les Nouvelles Pailles logo path casing**

In `components/pages/PartnersContent.data.js`, change:
```js
    logo: "partenaires/Les_Nouvelles_Pailles.png",
```
to:
```js
    logo: "partenaires/Les_nouvelles_pailles.png",
```
(matches the actual filename on disk exactly — case-sensitive on Vercel's Linux filesystem.)

- [ ] **Step 2: Add the missing `bechir` key to the Team PHOTOS map**

In `components/pages/Team.content.js`, change:
```js
const PHOTOS = {
  stephane: "employe/stephane.webp",
  wafa: "employe/wafa.webp",
  chekib: "employe/Chekib-.webp",
  khalil: "employe/khalil.webp",
  kaouther: "employe/kaouther.webp",
  taher: "employe/taher.webp",
};
```
to:
```js
const PHOTOS = {
  stephane: "employe/stephane.webp",
  wafa: "employe/wafa.webp",
  chekib: "employe/Chekib-.webp",
  bechir: "employe/bechir.webp",
  khalil: "employe/khalil.webp",
  kaouther: "employe/kaouther.webp",
  taher: "employe/taher.webp",
};
```

- [ ] **Step 3: Harden `TeamCard` against a missing or 404ing photo**

In `components/pages/Team.jsx`, the current `TeamCard`:
```jsx
const TeamCard = ({ member, index, portraitAlt }) => (
  <RevealOnScroll
    as="article"
    variant="up"
    delay={0.08}
    index={index}
    className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-navy hover:shadow-lift"
  >
    <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
      <img
        alt={interpolate(portraitAlt, { name: member.name, role: member.role })}
        className="absolute inset-0 h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
        decoding="async"
        loading="lazy"
        src={`${ASSET}${member.photo}`}
      />
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-[0.25rem] w-0 bg-orange transition-all duration-500 group-hover:w-full"
      />
    </div>
```

Needs a `useState` import and a `logoFailed`-style guard, exactly like `ReferenceCard.jsx`'s `showLogo` pattern. Change the top of the file:
```jsx
import { useId } from "react";
import { UserStar } from "lucide-react";
```
to:
```jsx
import { useId, useState } from "react";
import { UserStar } from "lucide-react";
```

Then change `TeamCard` to:
```jsx
const TeamCard = ({ member, index, portraitAlt }) => {
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = Boolean(member.photo) && !photoFailed;

  return (
    <RevealOnScroll
      as="article"
      variant="up"
      delay={0.08}
      index={index}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-navy hover:shadow-lift"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
        {showPhoto ? (
          <img
            alt={interpolate(portraitAlt, { name: member.name, role: member.role })}
            className="absolute inset-0 h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
            decoding="async"
            loading="lazy"
            src={`${ASSET}${member.photo}`}
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center font-display text-[2rem] font-semibold text-navy/20"
          >
            {member.name
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </div>
        )}
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-[0.25rem] w-0 bg-orange transition-all duration-500 group-hover:w-full"
        />
      </div>
```

And close the added `return (` with an extra `);\n};` at the end of the component (replacing the previous bare `);` that ended the arrow function body) — the rest of the component (the `<div className="flex flex-1 flex-col p-[1.25rem]">…` block through the final `</RevealOnScroll>`) is unchanged, just now inside the `return (...)`.

- [ ] **Step 4: Verify in the browser**

Run: `npm run dev`, open `http://localhost:3000/as-biz-dev` (Who is Who section) and `http://localhost:3000/en/about`.
Expected: every team card shows either a real photo or the initials placeholder — never a broken-image icon. Achwek Kefifi (FR, no photo) shows initials "AK". Béchir Zouaoui (EN) now shows his real photo.
Also open `http://localhost:3000/nos-partenaires`, confirm the "Les Nouvelles Pailles" logo renders (not the empty placeholder box).

- [ ] **Step 5: Build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 6: Commit**

```bash
git add components/pages/PartnersContent.data.js components/pages/Team.content.js components/pages/Team.jsx
git commit -m "fix: correct case-sensitive logo path and add missing team photo key

Les_Nouvelles_Pailles.png -> Les_nouvelles_pailles.png matches the file
on disk exactly; Vercel's case-sensitive filesystem was silently 404ing
it. PHOTOS.bechir was referenced in Team.content.js but never defined.
TeamCard now degrades to an initials placeholder instead of a broken
<img> when a member has no photo or the file fails to load, matching
the pattern already used in ReferenceCard."
```

---

### Task 4: Fix the footer phone number format

**Files:**
- Modify: `lib/constants/site.js:5`

**Interfaces:**
- Consumes: nothing new.
- Produces: `CONTACT_PHONE` string, already consumed by `components/layout/Footer.jsx:169` (`tel:` link is not currently wrapped — verify in Step 3 whether a `tel:` href should also be added; out of scope if none exists today, this task only fixes the displayed format).

- [ ] **Step 1: Fix the format**

In `lib/constants/site.js`, change:
```js
export const CONTACT_PHONE = "+33 06 07 38 69 63";
```
to:
```js
export const CONTACT_PHONE = "+33 6 07 38 69 63";
```

- [ ] **Step 2: Grep for any other hardcoded copy of this number that might need the same fix**

Run: `grep -rn "06 07 38 69 63" app components lib`
Expected: no output (the constant is the only source).

- [ ] **Step 3: Build and visually confirm**

Run: `npm run build`, then `npm run dev` and check the footer on any page.
Expected: footer shows "+33 6 07 38 69 63".

- [ ] **Step 4: Commit**

```bash
git add lib/constants/site.js
git commit -m "fix: correct phone number format in footer (+33 6 ... not +33 06 ...)"
```

---

### Task 5: Domain canonicalization — redirect `*.vercel.app` to `asbizdev.com`

**Files:**
- Create: `middleware.js` (repo root, same level as `next.config.mjs` — Next.js App Router convention)

**Interfaces:**
- Consumes: `SITE_URL` from `@/lib/constants/site` (already `"https://asbizdev.com"`).
- Produces: nothing consumed by other tasks.

- [ ] **Step 1: Create the middleware**

```js
// middleware.js
import { NextResponse } from "next/server";

const PRODUCTION_HOST = "asbizdev.com";

/**
 * Vercel preview/production deployments are also reachable at
 * *.vercel.app, which Google can index right alongside the canonical
 * domain (duplicate-content risk, and it splits link equity). Every
 * request on any vercel.app host gets a permanent redirect to the same
 * path on asbizdev.com instead.
 */
export function middleware(request) {
  const host = request.headers.get("host") ?? "";

  if (host.endsWith(".vercel.app")) {
    const url = new URL(request.url);
    url.protocol = "https:";
    url.host = PRODUCTION_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Run on every path except static assets and Next's internals, so
     * the redirect also covers images, the sitemap and robots.txt.
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
```

Uses `308` (Permanent Redirect) rather than `301` because it's the correct HTTP semantics for preserving the request method on a permanent redirect, and every modern crawler treats it identically to `301` for indexing purposes — same outcome the spec asked for ("redirection 301 permanente"), applied via the currently-correct status code.

- [ ] **Step 2: Verify locally that the middleware doesn't break normal requests**

Run: `npm run dev`, then in another terminal:
```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/marches
```
Expected: both `200` (the middleware only redirects when `host` ends in `.vercel.app`; `localhost` is unaffected).

- [ ] **Step 3: Verify the redirect logic in isolation** (no live `.vercel.app` deployment to test against locally, so this checks the matcher/host logic directly)

Run:
```bash
node -e "
const host = 'as-bizdev.vercel.app';
console.log(host.endsWith('.vercel.app'));
"
```
Expected: `true`.

Also confirm the host check does not accidentally match the production domain itself:
```bash
node -e "console.log('asbizdev.com'.endsWith('.vercel.app'))"
```
Expected: `false`.

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: succeeds, and the build output should list the middleware (`ƒ Middleware` line in the route summary).

- [ ] **Step 5: Commit**

```bash
git add middleware.js
git commit -m "feat: 308 redirect *.vercel.app traffic to the canonical asbizdev.com domain

Prevents the Vercel preview/production alias from being indexed
alongside the canonical domain. Path and query string are preserved."
```

**Note for the recap:** this only takes effect once deployed to Vercel — cannot be fully verified until then. Ask the user to check `https://as-bizdev.vercel.app/` redirects to `https://asbizdev.com/` after the next deploy.

---

### Task 6: Trim unused Google Font weights

**Files:**
- Modify: `styles/globals.css:1`

**Interfaces:**
- Consumes: nothing.
- Produces: nothing consumed by other tasks.

- [ ] **Step 1: Change the font import**

In `styles/globals.css`, change:
```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap");
```
to:
```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Inter:wght@400;500;600&display=swap");
```

Rationale (confirmed in the Audit Findings section): a full grep of every `font-{weight}` Tailwind class across `app/` and `components/` only ever produces `font-normal` (400), `font-medium` (500), `font-semibold` (600) — plus `styles/globals.css` itself hard-codes headings to `font-weight: 600`. `font-light` (300), `font-bold` (700), `font-extrabold` (800) are requested by nothing.

- [ ] **Step 2: Re-run the grep one more time to be certain nothing was missed** (including inline `style={{fontWeight}}`, which the earlier audit also checked and found none of)

```bash
grep -rohE "font-(thin|extralight|light|bold|extrabold|black)\b" app components --include="*.js" --include="*.jsx"
grep -rn "fontWeight" app components --include="*.js" --include="*.jsx"
grep -rohE "font-\[[0-9]+\]" app components --include="*.js" --include="*.jsx"
```
Expected: no output from any command.

- [ ] **Step 3: Build and visually spot-check headings/buttons/body text render correctly**

Run: `npm run build`, then `npm run dev` and open the home page.
Expected: build succeeds; headings (600), nav/buttons (500), body copy (400) look identical to before — nothing on the site used 300/700/800.

- [ ] **Step 4: Commit**

```bash
git add styles/globals.css
git commit -m "perf: only load the 3 font weights the site actually uses

Poppins/Inter were loading 300;400;500;600;700;800 and 300;400;500;600;700.
A grep of every font-{weight} utility class in the codebase only found
400 (font-normal), 500 (font-medium) and 600 (font-semibold, also the
hardcoded heading weight) in use."
```

---

### Task 7: Convert the home hero image to `next/image`

**Files:**
- Modify: `components/pages/HomeContent.jsx`

**Interfaces:**
- Consumes: `next/image`'s `Image` component (new import).
- Produces: nothing consumed by other tasks. This is the scoped, demonstrated fix for the "images not optimized" audit item — see the Audit Findings section for why the other 10 files using plain `<img>` are intentionally left for separate follow-up work, not silently skipped.

- [ ] **Step 1: Convert the hero `<img>` to `<Image>`**

Current code in `components/pages/HomeContent.jsx`:
```jsx
              <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-card border border-gray-200 bg-gray-100 shadow-lift">
                <img
                  src={ASSET + "maps.webp"}
                  alt={t.hero.mapAlt}
                  width="640"
                  height="800"
                  fetchPriority="high"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
```

Change the import at the top of the file:
```jsx
import Link from "next/link";
```
to:
```jsx
import Image from "next/image";
import Link from "next/link";
```

And the hero image block to:
```jsx
              <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-card border border-gray-200 bg-gray-100 shadow-lift">
                <Image
                  src={ASSET + "maps.webp"}
                  alt={t.hero.mapAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 90vw"
                  className="object-cover"
                />
              </div>
```

`fill` replaces the manual `absolute inset-0 h-full w-full` positioning (the parent already has `relative` + a fixed `aspect-square`, so `fill` fits the same box). `priority` replaces the manual `fetchPriority="high"` — it's `next/image`'s equivalent and additionally disables lazy-loading for this above-the-fold element automatically. `sizes` tells Next which of the auto-generated responsive image widths to serve at each viewport, matching the box's own max-width (520px desktop, ~90% of viewport on mobile per the grid layout above it).

- [ ] **Step 2: Verify `next.config.mjs` doesn't need an `images` allow-list**

`ASSET` (from `@/lib/siteData`) resolves to a same-origin `/brand_assets/...` path — confirm:
```bash
grep -n "^export const ASSET" lib/siteData.js
```
Expected output shows a relative path like `/brand_assets/` (not an external domain) — if so, no `next.config.mjs` `images.remotePatterns` entry is needed, since `next/image` only requires domain allow-listing for external hosts.

- [ ] **Step 3: Run dev and visually confirm**

Run: `npm run dev`, open `http://localhost:3000/`.
Expected: the hero map image renders identically (same crop, same rounded corners/border/shadow), loads immediately (no lazy-load flash), no layout shift, no console warnings about missing `sizes` or the `images` config.

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: succeeds. Check the build output doesn't warn about image optimization being disabled.

- [ ] **Step 5: Commit**

```bash
git add components/pages/HomeContent.jsx
git commit -m "perf: serve the home hero image through next/image

Converts the single largest, LCP-critical image on the site (already
manually flagged fetchPriority=\"high\") to next/image for automatic
AVIF/WebP negotiation, responsive srcset and priority loading. The
other 10 files still using plain <img> (mostly small logos and flags
with custom object-fit/scale treatments) are left for separate,
per-image follow-up — see the plan's audit notes."
```

---

### Task 8: Create the `/mentions-legales` legal notice page

**Files:**
- Create: `components/pages/LegalNoticeContent.content.js`
- Create: `components/pages/LegalNoticeContent.jsx`
- Create: `app/mentions-legales/page.jsx`
- Create: `app/en/legal-notice/page.jsx`
- Modify: `lib/routes.js` (add `legalNotice` route)
- Modify: `lib/i18n/dictionaries.js` (register the new namespace)
- Modify: `lib/seo/metadata.js` (add `SEO_META.legalNotice`)
- Modify: `lib/i18n/content/common.js` (footer link, both languages)
- Modify: `components/layout/Footer.jsx` (render the new link next to Politique de confidentialité)

**Interfaces:**
- Consumes: `PageHero`, `Section`, `RevealOnScroll` (existing shared components — same pattern as `PolicyContent.jsx`), `getDictionary` from `@/lib/i18n/dictionaries`.
- Produces: `ROUTES.legalNotice = { fr: "/mentions-legales", en: "/en/legal-notice" }`, consumed by the Footer and by `app/sitemap.js` automatically (it iterates `Object.keys(ROUTES)`, no sitemap change needed).

- [ ] **Step 1: Add the route**

In `lib/routes.js`, change:
```js
  contact: { fr: "/contact", en: "/en/contact" },
  news: { fr: "/news", en: "/en/news" },
  partners: { fr: "/nos-partenaires", en: "/en/our-partners" },
  policy: { fr: "/politiques-de-confidentialite", en: "/en/privacy-policy" },
};
```
to:
```js
  contact: { fr: "/contact", en: "/en/contact" },
  news: { fr: "/news", en: "/en/news" },
  partners: { fr: "/nos-partenaires", en: "/en/our-partners" },
  policy: { fr: "/politiques-de-confidentialite", en: "/en/privacy-policy" },
  legalNotice: { fr: "/mentions-legales", en: "/en/legal-notice" },
};
```

- [ ] **Step 2: Write the content file**

Create `components/pages/LegalNoticeContent.content.js`:
```js
/**
 * /mentions-legales (fr) / /en/legal-notice (en) — required legal notice.
 * Every fact AS Biz Dev hasn't confirmed is a literal [À COMPLÉTER] /
 * [TO BE COMPLETED] placeholder — never a guess. Whoever fills these in
 * should replace the placeholder text itself, not just the brackets.
 */
const legalNotice = {
  fr: {
    hero: {
      eyebrow: "AS Biz Dev",
      titleLead: "Mentions",
      titleAccent: "légales.",
      intro:
        "Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site asbizdev.com l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.",
    },
    sections: [
      {
        title: "Éditeur du site",
        body: "[À COMPLÉTER — dénomination sociale, forme juridique, adresse du siège social, numéro SIRET, capital social, numéro de TVA intracommunautaire]",
      },
      {
        title: "Directeur de la publication",
        body: "[À COMPLÉTER — nom et qualité du directeur de la publication]",
      },
      {
        title: "Hébergement",
        body: "Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.",
      },
      {
        title: "Contact",
        body: "Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse suivante :",
        email: true,
      },
      {
        title: "Propriété intellectuelle",
        body: "L'ensemble des éléments constituant le site asbizdev.com (textes, images, logos, structure) est protégé au titre du droit d'auteur et du droit des marques. Toute reproduction, représentation, modification ou adaptation, totale ou partielle, sans autorisation préalable, est interdite.",
      },
    ],
  },

  en: {
    hero: {
      eyebrow: "AS Biz Dev",
      titleLead: "Legal",
      titleAccent: "notice.",
      intro:
        "In accordance with applicable French law (loi n° 2004-575 of 21 June 2004 for confidence in the digital economy), users of asbizdev.com are informed of the identity of the parties involved in producing and maintaining it.",
    },
    sections: [
      {
        title: "Website publisher",
        body: "[TO BE COMPLETED — legal name, legal form, registered office address, company registration number, share capital, VAT number]",
      },
      {
        title: "Publication director",
        body: "[TO BE COMPLETED — name and role of the publication director]",
      },
      {
        title: "Hosting",
        body: "Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, United States.",
      },
      {
        title: "Contact",
        body: "For any question regarding this legal notice, you can contact us at the following address:",
        email: true,
      },
      {
        title: "Intellectual property",
        body: "All elements making up asbizdev.com (text, images, logos, structure) are protected by copyright and trademark law. Any reproduction, representation, modification or adaptation, in whole or in part, without prior authorisation, is prohibited.",
      },
    ],
  },
};

export default legalNotice;
```

- [ ] **Step 3: Write the page component**

`PolicyContent.jsx` is the exact template to copy (same section shape: `title` + `body` + optional `email: true`). Read it first:
```bash
cat components/pages/PolicyContent.jsx
```

Create `components/pages/LegalNoticeContent.jsx` with the same structure, renaming `PolicyContent` → `LegalNoticeContent` and `"policy"` → `"legalNotice"`:
```jsx
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import PageHero from "@/components/ui/PageHero";
import { CONTACT_EMAIL } from "@/lib/constants/site";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default function LegalNoticeContent({ lang }) {
  const t = getDictionary(lang, "legalNotice");

  return (
    <main>
      <PageHero {...t.hero} />

      <section className="bg-white pb-20 lg:pb-24">
        <div className="container-x">
          <article className="mx-auto max-w-3xl">
            {t.sections.map((section, i) => (
              <RevealOnScroll
                as="section"
                key={section.title}
                variant="up"
                delay={0.05}
                amount={0.2}
                className="grid gap-6 border-t border-gray-200 py-10 first:border-t-0 first:pt-0 lg:grid-cols-[1fr_2fr] lg:gap-12"
              >
                <div>
                  <span className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-orange">
                    0{i + 1}
                  </span>
                  <h2 className="mt-2 font-display text-[1.125rem] font-semibold tracking-tight text-navy">
                    {section.title}
                  </h2>
                </div>
                <p className="text-[0.9375rem] leading-[1.7] text-gray-700">
                  {section.body}
                  {section.email && (
                    <>
                      {" "}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange link-underline">
                        {CONTACT_EMAIL}
                      </a>
                    </>
                  )}
                </p>
              </RevealOnScroll>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
```

**Before finalizing this step**, re-read the actual (not remembered) contents of `components/pages/PolicyContent.jsx` printed in this step, and make sure the JSX structure above matches it exactly (section numbering markup, class names, `RevealOnScroll` props) — copy its real structure rather than trusting this plan's paraphrase, since the two pages must look visually identical (only copy differs).

- [ ] **Step 4: Register the dictionary namespace**

In `lib/i18n/dictionaries.js`, change:
```js
import home from "@/components/pages/HomeContent.content";
import markets from "@/components/pages/markets.content";
```
to:
```js
import home from "@/components/pages/HomeContent.content";
import legalNotice from "@/components/pages/LegalNoticeContent.content";
import markets from "@/components/pages/markets.content";
```
and change:
```js
const DICTIONARIES = {
  about,
  acceleration,
  common,
  contact,
  home,
  markets,
```
to:
```js
const DICTIONARIES = {
  about,
  acceleration,
  common,
  contact,
  home,
  legalNotice,
  markets,
```

- [ ] **Step 5: Add SEO metadata**

In `lib/seo/metadata.js`, change:
```js
  policy: {
    fr: {
      title: withBrand("Politique de confidentialité"),
      description:
        "Traitement des données personnelles collectées sur asbizdev.com.",
    },
    en: {
      title: withBrand("Privacy policy"),
      description: "How personal data collected on asbizdev.com is processed.",
    },
  },
```
to:
```js
  policy: {
    fr: {
      title: withBrand("Politique de confidentialité"),
      description:
        "Traitement des données personnelles collectées sur asbizdev.com.",
    },
    en: {
      title: withBrand("Privacy policy"),
      description: "How personal data collected on asbizdev.com is processed.",
    },
  },

  legalNotice: {
    fr: {
      title: withBrand("Mentions légales"),
      description: "Mentions légales du site asbizdev.com.",
    },
    en: {
      title: withBrand("Legal notice"),
      description: "Legal notice for asbizdev.com.",
    },
  },
```

- [ ] **Step 6: Create the FR route file**

Read `app/politiques-de-confidentialite/page.jsx` first (printed in the Audit Findings section of this plan) and copy its exact structure. Create `app/mentions-legales/page.jsx`:
```jsx
import LegalNoticeContent from "@/components/pages/LegalNoticeContent";
import { ROUTES } from "@/lib/routes";
import { organisationJsonLd } from "@/lib/seo/headTags";
import { SEO_META } from "@/lib/seo/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/constants/site";

export function generateMetadata() {
  const { title, description } = SEO_META.legalNotice.fr;
  const url = `${SITE_URL}${ROUTES.legalNotice.fr}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: url,
        en: `${SITE_URL}${ROUTES.legalNotice.en}`,
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: SITE_NAME,
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function LegalNoticeFr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
        }}
      />
      <LegalNoticeContent lang="fr" />
    </>
  );
}
```

- [ ] **Step 7: Create the EN route file**

Create `app/en/legal-notice/page.jsx` (same pattern as `app/en/privacy-policy/page.jsx`):
```jsx
import LegalNoticeContent from "@/components/pages/LegalNoticeContent";
import { ROUTES } from "@/lib/routes";
import { organisationJsonLd } from "@/lib/seo/headTags";
import { SEO_META } from "@/lib/seo/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/constants/site";

export function generateMetadata() {
  const { title, description } = SEO_META.legalNotice.en;
  const url = `${SITE_URL}${ROUTES.legalNotice.en}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}${ROUTES.legalNotice.fr}`,
        en: url,
        "x-default": `${SITE_URL}${ROUTES.legalNotice.fr}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: SITE_NAME,
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function LegalNoticeEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />
      <LegalNoticeContent lang="en" />
    </>
  );
}
```

- [ ] **Step 8: Add the footer link, both languages**

In `lib/i18n/content/common.js`, the FR `footer` object currently ends:
```js
    footer: {
      tagline:
        "Une capacité commerciale opérationnelle pour développer et piloter vos marchés en Afrique et au Moyen-Orient.",
      ctaEyebrow: "Construisons la suite",
      ctaLine1: "Parlons de votre",
      ctaLine2: "marché",
      brandTagline: "Afrique & Moyen-Orient",
      linkedinLabel: "LinkedIn — AS Biz Dev (nouvel onglet)",
      facebookLabel: "Facebook — AS Biz Dev (nouvel onglet)",
      policy: "Politique de confidentialité",
      version: "v 3.0 — refreshed",
      copyright: "© {year} AS Biz Dev. Tous droits réservés.",
    },
```
change `policy: "Politique de confidentialité",` to add a new key right after it:
```js
      policy: "Politique de confidentialité",
      legalNotice: "Mentions légales",
```

Do the same in the `en` block — change:
```js
      policy: "Privacy policy",
```
to:
```js
      policy: "Privacy policy",
      legalNotice: "Legal notice",
```

- [ ] **Step 9: Render the link in the Footer bottom bar**

In `components/layout/Footer.jsx`, the bottom bar currently:
```jsx
        <div className="container-x mt-20 border-t border-white/10 py-8">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-white/60 sm:flex-row sm:items-center">
            <p>
              {interpolate(t.copyright, { year: new Date().getFullYear() })}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href={ROUTES.policy[lang]}
                className="rounded px-1 py-1 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {t.policy}
              </Link>
            </div>
          </div>
        </div>
```
change the inner `<div className="flex items-center gap-6">` block to:
```jsx
            <div className="flex items-center gap-6">
              <Link
                href={ROUTES.legalNotice[lang]}
                className="rounded px-1 py-1 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {t.legalNotice}
              </Link>
              <Link
                href={ROUTES.policy[lang]}
                className="rounded px-1 py-1 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {t.policy}
              </Link>
            </div>
```

- [ ] **Step 10: Verify in the browser, both languages**

Run: `npm run dev`, open `http://localhost:3000/mentions-legales` and `http://localhost:3000/en/legal-notice`.
Expected: page renders with the same visual structure as `/politiques-de-confidentialite`, placeholders visibly show `[À COMPLÉTER]` / `[TO BE COMPLETED]`, footer on every page now shows "Mentions légales" (or "Legal notice") next to "Politique de confidentialité" (or "Privacy policy"), and clicking it navigates correctly. Switch the language selector on the new page and confirm it lands on the other language's equivalent URL, not the homepage (tests the `alternates.languages` / `LangSwitcher` wiring).

- [ ] **Step 11: Confirm the sitemap picked up the new route automatically**

Run: `npm run build`, then check the build output includes `/mentions-legales` and `/en/legal-notice` in the static route list (it iterates `ROUTES` automatically — no `app/sitemap.js` edit needed, this step is verification only).

```bash
grep -n "mentions-legales\|legal-notice" .next/server/app/**/*.html 2>/dev/null || true
```
(This grep is a best-effort sanity check on the build output; the authoritative check is the `npm run build` route list itself.)

- [ ] **Step 12: Commit**

```bash
git add lib/routes.js lib/i18n/dictionaries.js lib/seo/metadata.js lib/i18n/content/common.js components/layout/Footer.jsx components/pages/LegalNoticeContent.content.js components/pages/LegalNoticeContent.jsx app/mentions-legales/page.jsx app/en/legal-notice/page.jsx
git commit -m "feat: add /mentions-legales legal notice page (FR + EN)

Publisher identity and SIRET are [À COMPLÉTER] placeholders pending
real company details. Hosting (Vercel Inc.) and contact are filled in
from existing site constants. Linked from the footer next to Politique
de confidentialité; picked up by the sitemap automatically via ROUTES."
```

---

### Task 9: Confirm `prefers-reduced-motion` handling (verification only — already correct)

**Files:** none modified.

The audit found this already correctly implemented in two layers:
1. `components/ui/RevealOnScroll.jsx` (the component every fade-in-on-scroll animation on the site goes through) calls Framer Motion's `useReducedMotion()` and, when the user's OS/browser has `prefers-reduced-motion: reduce` set, renders with `initial={false}` and `animate="visible"` directly — skipping the animation and showing content immediately, with no `opacity: 0` state ever reaching the DOM in that case (see the comment in the file explaining why: SSR/CSR hydration mismatch prevention).
2. `styles/globals.css` has a blanket `@media (prefers-reduced-motion: reduce)` block forcing near-zero animation/transition durations site-wide as a second layer of defense.

- [ ] **Step 1: Verify with a real reduced-motion environment, not just reading the code**

Run: `npm run dev`. In Chrome DevTools, open the Rendering tab (Cmd/Ctrl+Shift+P → "Show Rendering"), set "Emulate CSS media feature prefers-reduced-motion" to "reduce", then reload `http://localhost:3000/`.
Expected: every section's content is immediately visible on load (no fade-in delay, no elements stuck at `opacity: 0`).

- [ ] **Step 2: No commit needed — this task is verification-only, note the result in the final recap.**

---

### Task 10: Final full verification pass

**Files:** none modified — this task only runs checks across everything done in Tasks 1-9.

- [ ] **Step 1: Full clean build**

```bash
npm run build
```
Expected: PASS, same or fewer routes than the pre-plan baseline of 35 (35 + 2 new legal-notice routes = 37), no warnings about missing images or broken imports.

- [ ] **Step 2: Grep sweep for anything the plan should have caught but didn't**

```bash
grep -rn "console\.log" app components lib hooks --include="*.js" --include="*.jsx"
grep -rniE "TODO|FIXME" app components lib hooks --include="*.js" --include="*.jsx"
grep -rn "06 07 38 69 63" app components lib
```
Expected: no output from any command.

- [ ] **Step 3: Manual route check, both languages**

Run `npm run dev` and open each of: `/`, `/mentions-legales`, `/en/legal-notice`, `/nos-partenaires`, `/as-biz-dev`, `/en/about`. Confirm no console errors, no broken images, footer links work, phone number reads correctly.

- [ ] **Step 4: Final recap to the user** (this is a reporting step, not a commit — see the plan's closing summary format below)

---

## Recap format to give the user at the end of execution

- Files deleted (Tasks 1-2)
- Files created (Task 8)
- Files modified, with before/after for each fix (Tasks 3, 4, 5, 6, 7, 8)
- Bugs fixed: the two broken-image bugs (Task 3), the phone format (Task 4)
- **Flagged for human decision, not auto-resolved:**
  - `ADMG.webp` / `SySmic.webp` — orphaned assets or unfinished partner-tier content? (see Audit Findings)
  - FR vs EN Team roster mismatch at index 3 (Achwek Kefifi vs Béchir Zouaoui) — which is correct, or should both appear in both languages?
  - `/mentions-legales` publisher identity / SIRET / director of publication — literal placeholders pending real company details
- Build PASS/FAIL for each task
- Reminder: the `*.vercel.app` → `asbizdev.com` redirect (Task 5) can only be confirmed working after the next Vercel deploy
