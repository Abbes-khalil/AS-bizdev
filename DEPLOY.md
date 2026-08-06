# Deploying to the WordPress hosting

This site is a **static React app** — it replaces the WordPress install rather
than running inside it. WordPress itself is not needed: you upload built files
to the same hosting account and the same domain.

> ⚠️ **This removes the existing WordPress site.** It is destructive and not
> reversible without a backup. Do step 1 before anything else.

---

## 1. Back up the current site (do not skip)

From the hosting control panel (cPanel / OVH / o2switch):

- [ ] **Files** — download the whole `public_html/` (or `www/`) directory
- [ ] **Database** — export the WordPress MySQL database via phpMyAdmin
- [ ] **Keep `wp-config.php`** — it holds the DB credentials, useful if you ever
      need to restore

Keep both somewhere off the server. Do not continue until you have them.

---

## 2. Configure the contact form *before* building

Create a form at [formspree.io](https://formspree.io) and put the URL in `.env`:

```bash
cp .env.example .env
# then edit .env:
VITE_CONTACT_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

> **Important:** Vite bakes `VITE_*` variables into the JavaScript at build
> time. Setting this *after* building has no effect — you must rebuild.
> If you skip this, the form still works but falls back to opening the
> visitor's mail client instead of sending automatically.

---

## 3. Build

```bash
npm install
npm run build
```

This produces `dist/`, containing:

```
dist/
├─ index.html
├─ .htaccess          ← Apache rules: SPA routing, caching, compression
├─ assets/            ← hashed JS + CSS
└─ brand_assets/      ← all images
```

Confirm `dist/.htaccess` exists. Without it every URL except the homepage
returns a 404.

---

## 4. Clear WordPress off the server

In the file manager or over FTP, delete from `public_html/`:

```
wp-admin/     wp-includes/     wp-content/
wp-*.php      index.php        .htaccess       readme.html   license.txt
```

Simplest safe approach: rename `public_html/` to `public_html_old/` and create
a fresh empty `public_html/`. That way the old site is one rename away if
something goes wrong.

The MySQL database can stay for now — it costs nothing and is your safety net.
Delete it only once the new site has run for a few weeks.

---

## 5. Upload

Upload the **contents of `dist/`** — not the `dist` folder itself — into
`public_html/`.

Correct result on the server:

```
public_html/index.html
public_html/.htaccess
public_html/assets/…
public_html/brand_assets/…
```

If you end up with `public_html/dist/index.html`, everything will 404.

> FTP clients often hide dotfiles. Enable "show hidden files" or `.htaccess`
> will be silently skipped — the single most common cause of a broken deploy.

---

## 6. Verify on the live domain

- [ ] `https://asbizdev.com` — homepage loads with images
- [ ] `https://asbizdev.com/who-is-who` — **deep link works** (proves `.htaccess`)
- [ ] Reload that page with F5 — still works, no 404
- [ ] An old WordPress URL such as `/nos-valeurs/` still resolves
- [ ] Team photos and partner logos appear
- [ ] Switch to EN — nav and content change
- [ ] Submit the contact form and confirm the email arrives
- [ ] Check on a phone

If deep links 404, `.htaccess` did not upload or `mod_rewrite` is disabled —
ask the host to enable it.

---

## Notes

**Domain.** No DNS change is needed if the domain already points at this
hosting. Only the files change.

**Updating later.** Run `npm run build` and re-upload `dist/`. There is no
admin panel — content lives in `src/i18n/content/*.js` and requires a rebuild.
If someone non-technical needs to edit text, that's a different setup
(headless CMS) and worth discussing before committing to this route.

**`vercel.json`** is ignored by Apache. It is harmless to leave in the repo and
is only used if you also deploy to Vercel.

**HTTPS.** Once the SSL certificate is active, uncomment the "Force HTTPS"
block at the top of `public/.htaccess` and rebuild.
