/**
 * Counts a form submission as a lead only once FormSubmit has accepted it.
 *
 * Both forms POST natively to FormSubmit.co, which redirects to our thank-you
 * page (`_next`) only after a successful submission. The hook marks the form
 * type in sessionStorage right before the POST; the thank-you page reads the
 * mark, clears it, and sends a GA4 `generate_lead` event. A direct visit or a
 * reload of the thank-you page finds no mark and counts nothing.
 *
 * The event goes through `window.pilotoneTrack` (public/analytics.js, PilotOne
 * kit): it returns false until the visitor has accepted measurement, so a
 * visitor who refused is never measured. No field value is ever sent.
 */

export const LEAD_STORAGE_KEY = "asbd_form_submitted";
export const FORM_TYPES = ["contact", "partner"];

const WAIT_STEP_MS = 250;
const WAIT_MAX_MS = 15000;

function storage(win) {
  try {
    return win?.sessionStorage ?? null;
  } catch {
    return null;
  }
}

/** Called by the form hooks once validation passed, right before the POST. */
export function markFormSubmitted(formType, win = globalThis.window) {
  if (!FORM_TYPES.includes(formType)) return false;
  const s = storage(win);
  if (!s) return false;
  try {
    s.setItem(LEAD_STORAGE_KEY, formType);
    return true;
  } catch {
    return false;
  }
}

/** Reads and clears the mark, so one submission is counted once. */
export function consumeFormSubmitted(win = globalThis.window) {
  const s = storage(win);
  if (!s) return null;
  try {
    const value = s.getItem(LEAD_STORAGE_KEY);
    s.removeItem(LEAD_STORAGE_KEY);
    return FORM_TYPES.includes(value) ? value : null;
  } catch {
    return null;
  }
}

/**
 * Sends `generate_lead` as soon as GA4 is available (consent may be given a few
 * seconds after the page loads). Gives up silently after WAIT_MAX_MS.
 * Returns a cancel function for the effect cleanup.
 */
export function trackLeadWhenReady(formType, lang, win = globalThis.window) {
  let waited = 0;
  let timer = null;
  const params = { form_type: formType, form_lang: lang };

  const attempt = () => {
    const sent = typeof win?.pilotoneTrack === "function" && win.pilotoneTrack("generate_lead", params);
    if (sent || waited >= WAIT_MAX_MS) return;
    waited += WAIT_STEP_MS;
    timer = win.setTimeout(attempt, WAIT_STEP_MS);
  };

  attempt();
  return () => {
    if (timer) win.clearTimeout(timer);
  };
}
