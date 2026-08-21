import { describe, expect, it } from "vitest";

import {
  activeRouteKeyFor,
  alternatesOf,
  articleUrl,
  langFromPath,
  ROUTES,
} from "@/lib/routes";

describe("alternatesOf", () => {
  it("resolves every FR route to its real EN and AR counterparts", () => {
    for (const pair of Object.values(ROUTES)) {
      expect(alternatesOf(pair.fr, "fr")).toEqual(pair);
    }
  });

  it("resolves every EN route to its real FR and AR counterparts", () => {
    for (const pair of Object.values(ROUTES)) {
      expect(alternatesOf(pair.en, "en")).toEqual(pair);
    }
  });

  it("resolves every AR route to its real FR and EN counterparts", () => {
    for (const pair of Object.values(ROUTES)) {
      expect(alternatesOf(pair.ar, "ar")).toEqual(pair);
    }
  });

  it("resolves an article URL to its other-language slugs", () => {
    const fr = articleUrl("fr", "mon-article");
    expect(alternatesOf(fr, "fr")).toEqual({
      fr,
      en: articleUrl("en", "mon-article"),
      ar: articleUrl("ar", "mon-article"),
    });
  });

  it("falls back to every home page for an unknown path", () => {
    expect(alternatesOf("/this-route-does-not-exist", "fr")).toEqual({
      fr: ROUTES.home.fr,
      en: ROUTES.home.en,
      ar: ROUTES.home.ar,
    });
  });
});

describe("langFromPath", () => {
  it("detects the English tree", () => {
    expect(langFromPath("/en")).toBe("en");
    expect(langFromPath("/en/markets/africa")).toBe("en");
  });

  it("detects the Arabic tree", () => {
    expect(langFromPath("/ar")).toBe("ar");
    expect(langFromPath("/ar/markets/africa")).toBe("ar");
  });

  it("defaults to French for every other path", () => {
    expect(langFromPath("/")).toBe("fr");
    expect(langFromPath("/marches/afrique")).toBe("fr");
    expect(langFromPath("/english-sounding-but-not")).toBe("fr");
  });
});

describe("activeRouteKeyFor", () => {
  it("finds the route key for a static FR, EN and AR path", () => {
    expect(activeRouteKeyFor(ROUTES.contact.fr)).toBe("contact");
    expect(activeRouteKeyFor(ROUTES.contact.en)).toBe("contact");
    expect(activeRouteKeyFor(ROUTES.contact.ar)).toBe("contact");
  });

  it("treats any article path as the news key", () => {
    expect(activeRouteKeyFor(articleUrl("fr", "un-article"))).toBe("news");
    expect(activeRouteKeyFor(articleUrl("en", "an-article"))).toBe("news");
    expect(activeRouteKeyFor(articleUrl("ar", "an-article"))).toBe("news");
  });

  it("returns null for an unknown path", () => {
    expect(activeRouteKeyFor("/nothing-here")).toBeNull();
  });
});
