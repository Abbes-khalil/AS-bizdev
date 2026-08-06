# Running this site on WordPress

The React app is wrapped in a minimal WordPress theme. WordPress serves the
page shell and owns the domain; React renders everything inside it.

```
Browser → WordPress (index.php) → <div id="root"> → React takes over
                    ↑
          theme enqueues the built JS/CSS
```

> **Read this first:** the content is **not** editable from the WordPress
> admin. Text lives in `src/i18n/content/*.js` and changing a sentence means
> rebuilding and re-uploading the theme. If the reason for moving to WordPress
> is so someone can edit text themselves, this approach does not deliver that —
> see "If you need admin editing" at the bottom.

---

## Build the theme

```bash
npm install
npm run build:wp
```

That produces `wordpress-theme/asbizdev/`:

```
asbizdev/
├─ style.css        theme header
├─ functions.php    enqueues the bundle, handles SPA routing
├─ index.php        the only template
└─ assets/          built JS, CSS and all 33 images
```

Everything is built with `base` set to the theme's URL, so every asset
resolves inside `/wp-content/themes/asbizdev/`.

---

## Install it in WordPress Studio

1. Open **Studio** and create a site (or use an existing one).
2. Click **⋯ → Open site folder** (Studio shows the path to the WordPress install).
3. Copy the folder `wordpress-theme/asbizdev` into `wp-content/themes/`.
4. In the site's admin: **Appearance → Themes → Activate "AS Biz Dev"**.
5. **Settings → Permalinks → Post name → Save.**
   This step is not optional — with the default "Plain" permalinks, WordPress
   never passes `/who-is-who` through to the theme and deep links break.

Open the site. You should see the homepage, and `/who-is-who` should work.

### Alternative: upload a zip

Zip the `asbizdev` folder, then **Appearance → Themes → Add New → Upload Theme**.
Zip the folder itself, not its contents — the theme files must sit inside a
single top-level directory.

---

## Check it works

- [ ] Homepage renders with images
- [ ] `/who-is-who` loads directly (not a 404) — proves permalinks + routing
- [ ] Refresh that URL — still works
- [ ] Old WordPress URLs like `/nos-valeurs/` resolve
- [ ] FR ⇄ EN switch changes nav and content
- [ ] Team photos and partner logos appear
- [ ] Contact form submits (needs `VITE_CONTACT_ENDPOINT` set **before** building)

If pages 404: permalinks are still "Plain", or the theme isn't active.
If the page is blank: open the browser console — a 404 on the JS bundle means
the `assets/` folder didn't copy across.

---

## Updating the site later

Any content or design change follows the same loop:

```bash
# edit src/i18n/content/*.js or components
npm run build:wp
# copy wordpress-theme/asbizdev over the installed theme
```

Asset filenames are hashed per build and read from Vite's manifest, so
browsers pick up changes immediately — no cache-busting needed.

---

## Going live

Studio is local only. To publish:

- **Studio → Sync** pushes to a WordPress.com site. ⚠️ Custom themes require a
  **Business plan or higher**. On Free/Personal/Premium, uploading a custom
  theme is blocked and this will not work.
- **Self-hosted** (OVH, o2switch, your current host): upload the `asbizdev`
  folder to `wp-content/themes/` over FTP and activate it.

---

## Honestly: do you need WordPress at all?

This setup keeps WordPress in the stack while using none of what it is good
for — no posts, no pages, no editor, no plugins driving content. You get the
maintenance surface of WordPress (core updates, security patches, PHP
versions) for a site that is really just static files.

`DEPLOY.md` covers uploading the plain static build to the same hosting, which
is simpler and faster. This route makes sense if the company standardises on
WordPress hosting, or you plan to add real WordPress features later.

### If you need admin editing

That is a genuinely different build: **headless WordPress**. Content lives in
WordPress (editable in the admin, with Polylang for FR/EN), and React fetches
it through the REST API instead of importing local dictionaries.

It is the right answer if non-technical people must edit copy — but it is a
rebuild of the content layer, not a config change. Worth deciding before
committing to this route.
