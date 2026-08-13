# `components/pages/` — naming convention

Every page has a `<Name>Content.jsx` component (the layout/markup) and usually a
`<Name>Content.content.js` file (its copy). Two file types share this folder:

## `.content.js` — text shown to the user

Always the same shape: **`{ fr: {...}, en: {...} }`** at the top level, French and
English side by side, nothing else. Read via `getDictionary(lang, "namespace")`
(Server Components) or `useT("namespace")` (Client Components), both from
`lib/i18n/dictionaries.js`, where every `.content.js` file is registered.

```js
const home = {
  fr: { hero: { titleLead: "Accélérez votre développement commercial en" } },
  en: { hero: { titleLead: "Accelerate your business development across" } },
};
export default home;
```

## `.data.js` — structured data, not page copy

Only `PartnersContent.data.js` today. It holds the actual reference records
(clients, network institutions) — `key`, `type`, `sectors`, `logo`, `sortOrder`
— with each entry's own small amount of localized text nested per-record
(`content: { fr: { name }, en: { name } }`), not at the file's top level.

**This is deliberately a separate file from `PartnersContent.content.js`, not a
naming inconsistency to fix by merging them.** `PartnersContent.content.js`
still follows the standard `{ fr, en }` page-copy shape above (hero, section
labels, CTA); folding ~30 reference records into it would break that shape for
every other `.content.js` file to stay consistent with. Two files, two
concerns: copy vs. data — same as the folder's `<Name>Content.jsx` /
`<Name>Content.content.js` split, one level further.

If a future page needs the same kind of structured, non-copy data (a table,
a list of records), give it its own `<Name>Content.data.js` rather than
stretching `.content.js`'s `{ fr, en }` shape to fit.
