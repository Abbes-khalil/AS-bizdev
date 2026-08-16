import { CONTACT_EMAIL } from "@/lib/constants/site";

/**
 * Contact form submission — posts to our own `/api/contact` Route Handler,
 * which checks the honeypot, verifies Turnstile, then sends the notification
 * + confirmation emails via Resend (`lib/email/sendFormEmail.js`). Configure
 * `RESEND_API_KEY` in `.env` — see `.env.example`.
 */

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
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Contact submission failed: ${response.status}`);
  }

  return response;
}
