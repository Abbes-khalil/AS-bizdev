import { CONTACT_EMAIL } from "@/lib/constants/site";

/**
 * Partner registrations post to our own `/api/partner` Route Handler (honeypot
 * + Turnstile check, then forward). They route to their own destination
 * endpoint when one is configured, so they can land in a different inbox —
 * or, in phase B, the partner database — without touching the contact form.
 *
 *   NEXT_PUBLIC_PARTNER_ENDPOINT=https://formspree.io/f/xxxxxxx
 */

/** Human-readable fallback body, used only when the POST fails. */
export const buildPartnerMailto = (payload, subject) => {
  const body = [
    `${payload.firstName} ${payload.lastName}`.trim(),
    payload.company,
    payload.email,
    payload.phone,
    "",
    `${payload.baseCountry} — ${payload.coveredCountries?.join(", ") ?? ""}`,
    payload.sectors,
    "",
    payload.presentation,
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export async function submitPartner(payload) {
  const response = await fetch("/api/partner", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Partner submission failed: ${response.status}`);
  }

  return response;
}
