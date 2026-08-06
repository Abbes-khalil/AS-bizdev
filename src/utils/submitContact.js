import { CONTACT_EMAIL } from "../components/siteData";

/**
 * Contact form submission — a plain POST to a form service (Formspree,
 * Web3Forms, …). No backend of our own to run or maintain.
 *
 * Configure the destination in `.env`:
 *   VITE_CONTACT_ENDPOINT=https://formspree.io/f/xxxxxxx
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

/**
 * Only needed by services that identify the form through the request body
 * (Web3Forms). Formspree encodes identity in the URL and ignores this.
 */
const ACCESS_KEY = import.meta.env.VITE_CONTACT_ACCESS_KEY;

const TIMEOUT_MS = 15000;

/**
 * Fallback when the endpoint is missing or unreachable — opens the visitor's
 * mail client with what they already typed, so a lead is never lost.
 */
export const buildMailtoHref = ({ name, prenom, email, message }, subject) => {
  const body = [`${prenom || ""} ${name || ""}`.trim(), email, "", message]
    .filter(Boolean)
    .join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export async function submitContact(payload) {
  if (!ENDPOINT) throw new Error("VITE_CONTACT_ENDPOINT is not configured");

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...payload,
        ...(ACCESS_KEY && {
          access_key: ACCESS_KEY,
          subject: `Nouveau contact — ${`${payload.prenom || ""} ${payload.name || ""}`.trim()}`,
          from_name: "asbizdev.com",
        }),
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Contact endpoint returned ${response.status}`);
    }

    return response;
  } finally {
    clearTimeout(timer);
  }
}
