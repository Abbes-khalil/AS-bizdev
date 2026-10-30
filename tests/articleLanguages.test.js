import { describe, expect, it } from "vitest";

import { articleAlternates, translatedLangs } from "@/lib/seo/articleLanguages";
import { parseInline } from "@/lib/data/inlineText";

const copy = (title) => ({ title, preview: "", content: [{ type: "paragraph", text: title }] });

const article = ({ en, ar } = {}) => ({
  key: "sujet",
  slug: { fr: "sujet", en: "topic", ar: "sujet" },
  fr: copy("Sujet"),
  en: en ?? copy("Sujet"),
  ar: ar ?? null,
});

describe("translatedLangs", () => {
  it("keeps only French when /en mirrors the French copy and /ar is missing", () => {
    expect(translatedLangs(article())).toEqual(["fr"]);
  });

  it("adds a language whose copy really differs", () => {
    expect(translatedLangs(article({ en: copy("Topic") }))).toEqual(["fr", "en"]);
  });
});

describe("articleAlternates", () => {
  it("noindexes an untranslated version and gives it no hreflang set", () => {
    const meta = articleAlternates(article(), "en");
    expect(meta.robots).toEqual({ index: false, follow: true });
    expect(meta.alternates.languages).toBeUndefined();
  });

  it("gives every translated version the same reciprocal set", () => {
    const a = article({ en: copy("Topic") });
    const fr = articleAlternates(a, "fr").alternates.languages;
    const en = articleAlternates(a, "en").alternates.languages;
    expect(fr).toEqual(en);
    expect(Object.keys(fr)).toEqual(["fr", "en", "x-default"]);
    expect(articleAlternates(a, "en").alternates.canonical).toBe(fr.en);
  });
});

describe("parseInline", () => {
  it("splits bold and links, leaves the rest literal", () => {
    expect(parseInline("a **b** [c](/contact) d * e")).toEqual([
      { type: "text", text: "a " },
      { type: "bold", text: "b" },
      { type: "text", text: " " },
      { type: "link", text: "c", href: "/contact" },
      { type: "text", text: " d * e" },
    ]);
  });

  it("refuses links that are neither site-relative nor https", () => {
    expect(parseInline("[x](javascript:alert(1))")).toEqual([
      { type: "text", text: "[x](javascript:alert(1))" },
    ]);
  });
});
