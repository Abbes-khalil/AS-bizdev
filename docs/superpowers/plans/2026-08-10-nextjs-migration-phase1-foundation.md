# Next.js Migration — Phase 1: Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stand up Next.js (App Router) in this repo, alongside the existing Vite app, with the Home page rendering correctly in both languages (`/` fr, `/en` en) via `next dev` and `next build` — proving the routing, i18n, layout, and metadata approach the rest of the migration builds on.

**Architecture:** Next.js App Router, JavaScript only (no TypeScript). Each language's URL is its own literal folder under `app/`. A client-side `LanguageProvider` (ported from react-router's `useLocation` to `next/navigation`'s `usePathname`) still derives the active language from the URL, exactly as today. Server Components own metadata (`generateMetadata`) instead of the old `useSeo` DOM-mutation hook. Existing Vite files (`vite.config.js`, `index.html`, `src/main.jsx`) are left untouched and unused — they're removed in a later cleanup phase, not this one.

**Tech Stack:** Next.js (latest, App Router), React 19, Tailwind CSS 3, Framer Motion — all already in the repo except `next` itself.

## Global Constraints

- Stay on JavaScript (`.jsx`) — no `.tsx` conversion (per design spec decision).
- No visual/design changes — this is a structural migration only.
- No new libraries beyond `next` itself.
- Every existing URL must keep working exactly as-is (`/` and `/en` for Home in this phase).
- Server Components by default; `"use client"` only on components that use hooks, context, or browser APIs.
- Don't touch `.env` or any Supabase/contact-form code — out of scope for this phase.

---

### Task 1: Install Next.js and scaffold base config

**Files:**
- Modify: `package.json`
- Create: `next.config.mjs`
- Create: `jsconfig.json`
- Delete: `tsconfig.json`
- Modify: `tailwind.config.js`
- Rename: `src/pages/` → `src/views/` (all 16 files)
- Modify: `src/App.jsx` (update its 16 page imports to `./views/...`)

**Interfaces:**
- Produces: a working `next dev` command on port 3000, a `@/*` → `./src/*` import alias usable by every later task, and a `src/views/` directory (renamed from `src/pages/`) that later tasks (starting with Task 4) import page bodies from.

**Note on the rename:** Next.js's App Router reserves `pages/` **and** `src/pages/` specifically as its own (legacy) Pages Router convention — it auto-detects `src/pages/` and refuses to boot with `Error: pages and app directories should be under the same folder`, because our new `app/` lives at the project root while `src/pages/` sits under `src/`. Renaming the existing Vite page-component directory to `src/views/` (a name Next.js has no special meaning for) removes the collision entirely, without touching Vite (Vite doesn't care what the folder is called, only that imports resolve) or any page's contents.

- [ ] **Step 1: Install the `next` package**

Run: `npm install next@latest`

Expected: `next` appears under `dependencies` in `package.json`, `package-lock.json` updates, no install errors.

- [ ] **Step 2: Delete the now-redundant `tsconfig.json`**

`tsconfig.json` currently exists with `strict: true` but the project has no `.ts`/`.tsx` files (`allowJs` was only letting `.jsx` through). Delete it — Next's own `jsconfig.json` (Step 3) takes over the `@/*` alias.

Run: `rm tsconfig.json`

- [ ] **Step 3: Rename `src/pages/` to `src/views/` and fix its consumer**

Rename the directory (keeps git history via a plain move — no file contents change):

Run: `git mv src/pages src/views`

`src/App.jsx` is the only file that imports from it (confirmed via `grep -r "pages/" src` — no other file references it). Modify `src/App.jsx`'s 16 lazy-import lines, changing `"./pages/Name"` to `"./views/Name"` for every one, e.g.:

```jsx
const Home = lazy(() => import("./views/Home"));
const Solutions = lazy(() => import("./views/Solutions"));
const Acceleration = lazy(() => import("./views/Acceleration"));
const Pilotage = lazy(() => import("./views/Pilotage"));
const Markets = lazy(() => import("./views/Markets"));
const MarketZone = lazy(() => import("./views/MarketZone"));
const Article = lazy(() => import("./views/Article"));
const About = lazy(() => import("./views/About"));
const Sectors = lazy(() => import("./views/Sectors"));
const Network = lazy(() => import("./views/Network"));
const BecomePartner = lazy(() => import("./views/BecomePartner"));
const Contact = lazy(() => import("./views/Contact"));
const News = lazy(() => import("./views/News"));
const Partners = lazy(() => import("./views/Partners"));
const Policy = lazy(() => import("./views/Policy"));
const NotFound = lazy(() => import("./views/NotFound"));
```

Nothing else in `src/App.jsx` changes — only these 16 import paths.

- [ ] **Step 4: Create `jsconfig.json` with the `@/*` path alias**

Create `jsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

- [ ] **Step 5: Create `next.config.mjs`**

`package.json` has `"type": "module"`, so the config file is named `.mjs` to be unambiguous about ESM.

Create `next.config.mjs`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

- [ ] **Step 6: Point `package.json` scripts at Next for local dev**

Modify `package.json` — replace the `"dev"` script only (leave `build`, `preview`, `check:i18n`, `build:client`, `prerender`, `seo:files` untouched; they still serve the old Vite app until the cleanup phase, and `next build` is verified separately in Task 5 without changing the `"build"` script yet):

```json
    "dev": "next dev -p 3000",
```

Also remove the `"typecheck"` script — it ran `tsc --noEmit` against the now-deleted `tsconfig.json` and would fail confusingly:

Remove this line entirely:
```json
    "typecheck": "tsc --noEmit",
```

- [ ] **Step 7: Add `app/` to the Tailwind content globs**

Modify `tailwind.config.js` — the `content` array currently only scans `index.html` and `src/**/*.{js,jsx,ts,tsx}`; classes used in new `app/` files need scanning too:

```js
export default {
  content: ['./index.html', './app/**/*.{js,jsx}', './src/**/*.{js,jsx,ts,tsx}'],
```

- [ ] **Step 8: Verify `next dev` boots**

Next.js requires at least one route to start cleanly. Create a throwaway placeholder so Step 7 can verify boot before Task 2 builds the real layout:

Create `app/page.jsx` (temporary, overwritten in Task 4):

```jsx
export default function TempHome() {
  return <div>ok</div>;
}
```

Run: `npm run dev` (then stop it once the log line appears — this is a boot check, not a long-running step)

Expected: terminal shows `Ready` and `Local: http://localhost:3000` with no errors. Confirm with a quick request in a second terminal:

Run: `curl -s http://localhost:3000 | grep -o "<div>ok</div>"`

Expected output: `<div>ok</div>`

- [ ] **Step 9: Commit**

```bash
git add package.json package-lock.json next.config.mjs jsconfig.json tailwind.config.js app/page.jsx src/App.jsx
git add src/views
git rm tsconfig.json
git commit -m "Add Next.js App Router scaffold alongside existing Vite app"
```

(`git add src/views` after `git mv` stages the rename as a rename, not a delete+add, as long as the file contents are unchanged — git detects this automatically.)

---

### Task 2: Root layout, global styles, and default metadata

**Files:**
- Create: `app/layout.jsx`
- Modify: `app/page.jsx` (placeholder from Task 1, replaced again in Task 4 — kept minimal here)

**Interfaces:**
- Consumes: `src/styles.css` (unchanged), `src/constants/site.js` (`SITE_NAME`, `OG_IMAGE` — unchanged).
- Produces: `RootLayout` default export rendering `<html lang="fr"><body>{children}</body></html>` with Tailwind loaded and favicon/theme-color set, ready for Task 3 to nest `LanguageProvider`/`Navbar`/`Footer` inside it.

- [ ] **Step 1: Create the root layout**

Create `app/layout.jsx`:

```jsx
import "../src/styles.css";

export const metadata = {
  icons: {
    icon: "/brand_assets/logo asbizdev.png",
  },
};

export const viewport = {
  themeColor: "#D9342B",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
```

This mirrors `index.html`'s `<link rel="icon">` and `<meta name="theme-color">` via Next's metadata API, and loads the same global stylesheet (Tailwind directives + the `@import` Google Fonts line) that `src/main.jsx` used to import.

- [ ] **Step 2: Verify the layout renders**

Run: `npm run dev`

Then in a second terminal:

Run: `curl -s http://localhost:3000 | grep -oE '<html lang="fr">|<div>ok</div>|logo asbizdev'`

Expected output (three lines):
```
<html lang="fr">
logo asbizdev
<div>ok</div>
```

Stop the dev server (it was only needed for this check).

- [ ] **Step 3: Commit**

```bash
git add app/layout.jsx
git commit -m "Add Next.js root layout with global styles and default metadata"
```

---

### Task 3: Port i18n and navigation primitives to Next

**Files:**
- Modify: `src/i18n/LanguageProvider.jsx`
- Modify: `src/components/RouteLink.jsx`
- Modify: `src/hooks/useActiveRoute.js`
- Modify: `src/i18n/LangSwitcher.jsx`
- Modify: `src/components/Navbar.jsx`
- Modify: `app/layout.jsx`

**Interfaces:**
- Consumes: `src/constants/routes.js` (`pathFor`, `matchRoute`, `langFromPath` — unchanged, `matchPath` import from `react-router-dom` stays as a standalone utility for now), `src/utils/routing.js` (`alternatesOf` — unchanged).
- Produces: `LanguageProvider`, `useLang()`, `RouteLink`, `useActiveRoute()`, `Navbar`, `LangSwitcher` all working under Next's App Router, with the exact same external API (`useLang()` still returns `{ lang, alternates }`, `RouteLink` still takes `routeKey`/`params`) so `Home.jsx` and every later page needs zero changes to *how* it calls them.

- [ ] **Step 1: Port `LanguageProvider` from react-router to `next/navigation`**

Modify `src/i18n/LanguageProvider.jsx` — replace the react-router import and hook call, and add the client directive (required by Next for any component using hooks):

```jsx
"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";

import { DEFAULT_LANG, langFromPath } from "../constants/routes";
import { alternatesOf } from "../utils/routing";

/**
 * The active language is derived from the URL prefix (`/en/…`), never from
 * client state: each language has its own indexable URLs, and a shared link
 * always opens in the language it was written in.
 */
const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  alternates: { fr: "/", en: "/en" },
});

export function LanguageProvider({ children }) {
  const pathname = usePathname();
  const lang = langFromPath(pathname);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, alternates: alternatesOf(pathname) }),
    [lang, pathname],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
```

Only two lines changed from the original: the import (`next/navigation` instead of `react-router-dom`, `usePathname` instead of `useLocation`) and reading `pathname` directly instead of destructuring `{ pathname }` from a location object — plus the added `"use client"` directive.

- [ ] **Step 2: Port `RouteLink` from react-router's `Link` to `next/link`**

Modify `src/components/RouteLink.jsx`:

```jsx
"use client";

import Link from "next/link";

import { pathFor } from "../constants/routes";
import { useLang } from "../i18n/LanguageProvider";

/**
 * Link to an internal page by route key rather than by URL.
 *
 *   <RouteLink routeKey="pilotage">Pilotage commercial</RouteLink>
 *
 * The path is resolved in the active language, so the visitor never falls out
 * of their language tree and no URL is ever hard-coded twice.
 */
const RouteLink = ({ routeKey, params, className = "", children, ...rest }) => {
  const { lang } = useLang();

  return (
    <Link href={pathFor(routeKey, lang, params)} className={className} {...rest}>
      {children}
    </Link>
  );
};

export default RouteLink;
```

Only the import and the `to` → `href` prop changed.

- [ ] **Step 3: Port `useActiveRoute` from react-router to `next/navigation`**

Modify `src/hooks/useActiveRoute.js`:

```js
"use client";

import { usePathname } from "next/navigation";

import { matchRoute } from "../constants/routes";

/**
 * Route key of the page currently displayed — "acceleration", "country", …
 * Used to mark the active navigation entry, including its parent.
 */
export default function useActiveRoute() {
  const pathname = usePathname();
  return matchRoute(pathname)?.key ?? null;
}

/** True when the entry itself, or one of its children, is the current page. */
export const isEntryActive = (entry, activeKey) =>
  entry.key === activeKey ||
  Boolean(entry.children?.some((child) => child.key === activeKey));
```

- [ ] **Step 4: Port `LangSwitcher`'s `Link` import**

Modify `src/i18n/LangSwitcher.jsx` — change only the import line and the `to` prop:

```jsx
"use client";

import Link from "next/link";

import { useLang } from "./LanguageProvider";
import common from "./content/common";

const LABELS = { fr: "Français", en: "English" };

/**
 * FR / EN switch. Real links to the twin URL rather than a state toggle, so
 * both language trees stay crawlable and a middle-click still works.
 */
const LangSwitcher = ({ className = "" }) => {
  const { lang, alternates } = useLang();

  return (
    <div
      role="group"
      aria-label={common[lang].nav.language}
      className={`inline-flex items-center rounded-full border border-gray-200 bg-white p-1 text-[0.78rem] font-semibold tracking-tight text-navy shadow-soft ${className}`}
    >
      {Object.entries(alternates).map(([code, href]) => {
        const active = code === lang;

        return (
          <Link
            key={code}
            href={href}
            hrefLang={code}
            aria-label={LABELS[code]}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-3 py-1.5 uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
              active ? "bg-navy text-white" : "text-gray-500 hover:text-navy"
            }`}
          >
            {code}
          </Link>
        );
      })}
    </div>
  );
};

export default LangSwitcher;
```

- [ ] **Step 5: Port `Navbar`'s `useLocation` call**

Modify `src/components/Navbar.jsx` — change the import line, the hook call, and add the client directive (it already uses `useState`/`useEffect`, so this was implicitly a client component; Next requires the directive to be explicit):

```jsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import DesktopNav from "./nav/DesktopNav";
import LangSwitcher from "../i18n/LangSwitcher";
import MobileNav from "./nav/MobileNav";
import RouteLink from "./RouteLink";
import useActiveRoute from "../hooks/useActiveRoute";
import { useT } from "../i18n";
```

(Only the import block changes — the second line goes from `import { useLocation } from "react-router-dom";` to `import { usePathname } from "next/navigation";`.)

Then further down, change:

```jsx
  const { pathname } = useLocation();
```

to:

```jsx
  const pathname = usePathname();
```

Everything else in the file (the `useEffect`s, the JSX) stays identical.

- [ ] **Step 6: Wire `LanguageProvider` and `Layout` into the root layout**

Modify `app/layout.jsx` to nest the provider and the Navbar/Footer shell around `children`, matching the current `src/main.jsx` → `App.jsx` nesting order (`LanguageProvider` outermost, then `Layout`):

```jsx
import "../src/styles.css";

import Layout from "../src/components/Layout";
import { LanguageProvider } from "../src/i18n/LanguageProvider";

export const metadata = {
  icons: {
    icon: "/brand_assets/logo asbizdev.png",
  },
};

export const viewport = {
  themeColor: "#D9342B",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <LanguageProvider>
          <Layout>{children}</Layout>
        </LanguageProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 7: Verify the Navbar renders against the placeholder page**

Run: `npm run dev`

Then in a second terminal:

Run: `curl -s http://localhost:3000 | grep -oE 'AS Biz Dev|skip-link|<div>ok</div>'`

Expected output (order may vary, all three should appear):
```
skip-link
AS Biz Dev
<div>ok</div>
```

Stop the dev server.

- [ ] **Step 8: Commit**

```bash
git add app/layout.jsx src/i18n/LanguageProvider.jsx src/components/RouteLink.jsx src/hooks/useActiveRoute.js src/i18n/LangSwitcher.jsx src/components/Navbar.jsx
git commit -m "Port i18n and navigation primitives from react-router to next/navigation"
```

---

### Task 4: Home page — fix Vite-only asset path, wire metadata, add fr/en routes

**Files:**
- Modify: `src/components/siteData.js`
- Modify: `src/views/Home.jsx`
- Create: `app/page.jsx` (overwrites Task 1's placeholder)
- Create: `app/en/page.jsx`

**Interfaces:**
- Consumes: `src/seo/metadata.js` (`SEO_META`), `src/seo/headTags.js` (`organisationJsonLd`), `src/constants/site.js` (`SITE_URL`), `src/constants/routes.js` (`pathFor`) — all unchanged.
- Produces: `/` and `/en` fully rendering the Home page in the correct language, each with server-rendered `<title>`, meta description, canonical, hreflang alternates, OG/Twitter tags, and organisation JSON-LD.

- [ ] **Step 1: Fix `ASSET`'s Vite-only env read**

`src/components/siteData.js` currently reads `import.meta.env?.BASE_URL`, a Vite-specific global that doesn't exist in Next's build — it would throw at build time. The site is always served from the domain root (confirmed by `vercel.json`'s trailing-slash/rewrite config), so hardcode the path:

Modify `src/components/siteData.js`:

```js
/** Base path for images, served from `public/brand_assets/`. */
export const ASSET = "/brand_assets/";

/**
 * Routes moved to `src/constants/routes.js` when the site became bilingual by
 * URL: a page now has one path per language, so a flat map of hrefs no longer
 * describes it. Contact details moved to `src/constants/site.js` alongside the
 * other site-wide facts. Both are re-exported here so existing imports keep
 * working.
 */
export { CONTACT_EMAIL, CONTACT_PHONE } from "../constants/site";
```

- [ ] **Step 2: Mark `Home.jsx` as a client component and drop the now-redundant `useSeo` call**

`Home.jsx` calls `useT("home")`, which reads `LanguageProvider`'s React context — that requires the client directive. Its metadata job moves to `generateMetadata` in the new route files (Step 3), so the `useSeo("home")` call and its import are removed to avoid two different systems writing conflicting `<title>`/meta tags into the document.

Modify `src/views/Home.jsx` — replace the top of the file:

```jsx
"use client";

import ArrowIcon from "../components/ArrowIcon";
import OfferCard from "../components/OfferCard";
import RevealOnScroll from "../components/RevealOnScroll";
import RouteLink from "../components/RouteLink";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import StepList from "../components/StepList";
import { ASSET } from "../components/siteData";
import { useT } from "../i18n";

export default function Home() {
  const t = useT("home");
```

(This removes the `import useSeo from "../hooks/useSeo";` line and the `useSeo("home");` call that followed `const t = useT("home");` — everything else in the file, including the entire JSX body, is unchanged.)

- [ ] **Step 3: Create the French Home route with metadata**

Create `app/page.jsx`:

```jsx
import Home from "../src/views/Home";
import { pathFor } from "../src/constants/routes";
import { organisationJsonLd } from "../src/seo/headTags";
import { SEO_META } from "../src/seo/metadata";
import { SITE_NAME, SITE_URL } from "../src/constants/site";

export function generateMetadata() {
  const { title, description } = SEO_META.home.fr;
  const url = `${SITE_URL}${pathFor("home", "fr")}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: url,
        en: `${SITE_URL}${pathFor("home", "en")}`,
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

export default function HomeFr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
        }}
      />
      <Home />
    </>
  );
}
```

- [ ] **Step 4: Create the English Home route with metadata**

Create `app/en/page.jsx`:

```jsx
import Home from "../../src/views/Home";
import { pathFor } from "../../src/constants/routes";
import { organisationJsonLd } from "../../src/seo/headTags";
import { SEO_META } from "../../src/seo/metadata";
import { SITE_NAME, SITE_URL } from "../../src/constants/site";

export function generateMetadata() {
  const { title, description } = SEO_META.home.en;
  const url = `${SITE_URL}${pathFor("home", "en")}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}${pathFor("home", "fr")}`,
        en: url,
        "x-default": `${SITE_URL}${pathFor("home", "fr")}`,
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

export default function HomeEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />
      <Home />
    </>
  );
}
```

- [ ] **Step 5: Verify both language routes render with correct copy and metadata**

Run: `npm run dev`

Then in a second terminal, check the French route:

Run: `curl -s http://localhost:3000/ | grep -oE '<title>[^<]*</title>|hreflang="en"|Développement commercial'`

Expected output includes the French `<title>` (containing "Développement commercial"), and an `hreflang="en"` alternate link.

Check the English route:

Run: `curl -s http://localhost:3000/en | grep -oE '<title>[^<]*</title>|hreflang="fr"|Business Development'`

Expected output includes the English `<title>` (containing "Business Development"), and an `hreflang="fr"` alternate link.

Then open both `http://localhost:3000/` and `http://localhost:3000/en` in a real browser (use the `claude-in-chrome` tools or ask the user to look) and confirm: the hero renders with the map image, the language switcher shows the correct active language, the mobile menu opens/closes, and there are no console errors.

Stop the dev server.

- [ ] **Step 6: Commit**

```bash
git add src/components/siteData.js src/views/Home.jsx app/page.jsx app/en/page.jsx
git commit -m "Wire Home page onto Next.js App Router with fr/en metadata"
```

---

### Task 5: Verify a production build

**Files:** none (verification only)

**Interfaces:** none — this task only confirms Tasks 1–4 produce a working static build.

- [ ] **Step 1: Run a production build**

Run: `npx next build`

Expected: build completes with exit code 0, and the route summary lists both `/` and `/en` as static (`○` prerendered) routes.

- [ ] **Step 2: Serve the production build and spot-check both routes**

Run: `npx next start -p 3000` (in the background/a separate terminal)

Run: `curl -s http://localhost:3000/ | grep -c "AS Biz Dev"` — expected: a non-zero count.
Run: `curl -s http://localhost:3000/en | grep -c "AS Biz Dev"` — expected: a non-zero count.

Stop the `next start` process.

- [ ] **Step 3: Report status**

No commit for this task (verification only). If the build fails, fix the surfaced error before considering Phase 1 done — do not proceed to Phase 2 on a broken build.

---

## Definition of Done

- `npm run dev` serves `/` (fr) and `/en` with the full Home page, correct navbar/footer, and no console errors.
- `npx next build` succeeds with both Home routes statically generated.
- Both routes carry correct, distinct `<title>`, meta description, canonical, hreflang alternates, and OG/Twitter tags server-rendered (visible in page source, not just after hydration).
- The old Vite app (`vite.config.js`, `index.html`, `src/main.jsx`, `npm run build:client`) is untouched and still present — cleanup is Phase 4, not this plan.
