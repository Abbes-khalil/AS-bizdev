import { describe, expect, it, vi } from "vitest";

import {
  LEAD_STORAGE_KEY,
  consumeFormSubmitted,
  markFormSubmitted,
  trackLeadWhenReady,
} from "@/lib/analytics/formLead";

const fakeWindow = (track) => {
  const store = new Map();
  return {
    sessionStorage: {
      getItem: (k) => (store.has(k) ? store.get(k) : null),
      setItem: (k, v) => store.set(k, String(v)),
      removeItem: (k) => store.delete(k),
    },
    pilotoneTrack: track,
    setTimeout: (fn, ms) => setTimeout(fn, ms),
    clearTimeout: (t) => clearTimeout(t),
  };
};

describe("form lead mark", () => {
  it("counts one submission once", () => {
    const win = fakeWindow();
    expect(markFormSubmitted("partner", win)).toBe(true);
    expect(consumeFormSubmitted(win)).toBe("partner");
    expect(consumeFormSubmitted(win)).toBe(null);
  });

  it("counts nothing on a direct visit to the thank-you page", () => {
    expect(consumeFormSubmitted(fakeWindow())).toBe(null);
  });

  it("refuses an unknown form type", () => {
    const win = fakeWindow();
    expect(markFormSubmitted("newsletter", win)).toBe(false);
    win.sessionStorage.setItem(LEAD_STORAGE_KEY, "newsletter");
    expect(consumeFormSubmitted(win)).toBe(null);
  });

  it("survives a browser without storage", () => {
    expect(markFormSubmitted("contact", {})).toBe(false);
    expect(consumeFormSubmitted({})).toBe(null);
  });
});

describe("trackLeadWhenReady", () => {
  it("sends generate_lead with the form type and language, never a field value", () => {
    const track = vi.fn(() => true);
    trackLeadWhenReady("contact", "fr", fakeWindow(track));
    expect(track).toHaveBeenCalledWith("generate_lead", { form_type: "contact", form_lang: "fr" });
  });

  it("waits for consent, then sends once", async () => {
    vi.useFakeTimers();
    let accepted = false;
    const track = vi.fn(() => accepted);
    trackLeadWhenReady("partner", "en", fakeWindow(track));
    vi.advanceTimersByTime(1000);
    accepted = true;
    vi.advanceTimersByTime(250);
    const calls = track.mock.calls.length;
    vi.advanceTimersByTime(5000);
    expect(track.mock.calls.length).toBe(calls);
    vi.useRealTimers();
  });

  it("gives up after 15 s when the visitor never accepts", () => {
    vi.useFakeTimers();
    const track = vi.fn(() => false);
    trackLeadWhenReady("contact", "ar", fakeWindow(track));
    vi.advanceTimersByTime(60000);
    expect(track.mock.calls.length).toBeLessThanOrEqual(62);
    vi.useRealTimers();
  });
});
