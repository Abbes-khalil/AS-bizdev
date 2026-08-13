import { describe, expect, it } from "vitest";

import {
  activeRouteKeyFor,
  alternatesOf,
  articleUrl,
  langFromPath,
  otherLanguageUrl,
  ROUTES,
} from "@/lib/routes";

describe("otherLanguageUrl", () => {
  it("resolves every FR route to its real EN counterpart", () => {
    for (const [key, pair] of Object.entries(ROUTES)) {
      expect(otherLanguageUrl(pair.fr, "fr")).toBe(pair.en);
    }
  });

  it("resolves every EN route to its real FR counterpart", () => {
    for (const [key, pair] of Object.entries(ROUTES)) {
      expect(otherLanguageUrl(pair.en, "en")).toBe(pair.fr);
    }
  });

  it("resolves an FR article URL to its EN slug", () => {
    const fr = articleUrl("fr", "mon-article");
    expect(otherLanguageUrl(fr, "fr")).toBe(articleUrl("en", "mon-article"));
  });

  it("resolves an EN article URL to its FR slug", () => {
    const en = articleUrl("en", "my-article");
    expect(otherLanguageUrl(en, "en")).toBe(articleUrl("fr", "my-article"));
  });

  it("falls back to the home page for an unknown path", () => {
    expect(otherLanguageUrl("/this-route-does-not-exist", "fr")).toBe(ROUTES.home.en);
    expect(otherLanguageUrl("/this-route-does-not-exist", "en")).toBe(ROUTES.home.fr);
  });
});

describe("alternatesOf", () => {
  it("returns both language URLs for a FR page", () => {
    expect(alternatesOf(ROUTES.pilotage.fr, "fr")).toEqual({
      fr: ROUTES.pilotage.fr,
      en: ROUTES.pilotage.en,
    });
  });

  it("returns both language URLs for an EN page", () => {
    expect(alternatesOf(ROUTES.pilotage.en, "en")).toEqual({
      fr: ROUTES.pilotage.fr,
      en: ROUTES.pilotage.en,
    });
  });
});

describe("langFromPath", () => {
  it("detects the English tree", () => {
    expect(langFromPath("/en")).toBe("en");
    expect(langFromPath("/en/markets/africa")).toBe("en");
  });

  it("defaults to French for every other path", () => {
    expect(langFromPath("/")).toBe("fr");
    expect(langFromPath("/marches/afrique")).toBe("fr");
    expect(langFromPath("/english-sounding-but-not")).toBe("fr");
  });
});

describe("activeRouteKeyFor", () => {
  it("finds the route key for a static FR and EN path", () => {
    expect(activeRouteKeyFor(ROUTES.contact.fr)).toBe("contact");
    expect(activeRouteKeyFor(ROUTES.contact.en)).toBe("contact");
  });

  it("treats any article path as the news key", () => {
    expect(activeRouteKeyFor(articleUrl("fr", "un-article"))).toBe("news");
    expect(activeRouteKeyFor(articleUrl("en", "an-article"))).toBe("news");
  });

  it("returns null for an unknown path", () => {
    expect(activeRouteKeyFor("/nothing-here")).toBeNull();
  });
});
