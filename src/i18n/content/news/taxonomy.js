/**
 * Article classification (§24) — a small, fixed list to start, extended as
 * AS Biz Dev's LinkedIn content grows. Keys are stable ids stored on each
 * article; labels are what filters/badges display.
 */
export const ZONES = [
  { key: "africa", label: { fr: "Afrique", en: "Africa" } },
  { key: "middleEast", label: { fr: "Moyen-Orient", en: "Middle East" } },
];

export const THEMES = [
  {
    key: "businessDevelopment",
    label: { fr: "Développement commercial", en: "Business development" },
  },
  { key: "export", label: { fr: "Export", en: "Export" } },
  { key: "distribution", label: { fr: "Distribution", en: "Distribution" } },
];

export const zoneLabel = (key, lang) =>
  ZONES.find((zone) => zone.key === key)?.label[lang] ?? key;

export const themeLabel = (key, lang) =>
  THEMES.find((theme) => theme.key === key)?.label[lang] ?? key;
