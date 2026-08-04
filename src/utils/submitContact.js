import { CONTACT_EMAIL } from "../components/siteData";

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;
const TIMEOUT_MS = 15000;

/** Reasons a submission can fail, so the UI can react differently to each. */
export const FAILURE = {
  UNCONFIGURED: "unconfigured",
  NETWORK: "network",
  SERVER: "server",
};

export class ContactError extends Error {
  constructor(reason, status) {
    super(`Contact submission failed: ${reason}`);
    this.name = "ContactError";
    this.reason = reason;
    this.status = status;
  }
}

export const isEndpointConfigured = () => Boolean(ENDPOINT);

/**
 * Fallback route when the endpoint is missing or unreachable — opens the
 * visitor's mail client with the message they already typed, so a lead is
 * never silently dropped.
 */
export const buildMailtoHref = ({ name, prenom, email, message }, subject) => {
  const body = [
    `${prenom || ""} ${name || ""}`.trim(),
    email,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export async function submitContact(payload) {
  if (!ENDPOINT) throw new ContactError(FAILURE.UNCONFIGURED);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  let response;
  try {
    response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } catch {
    throw new ContactError(FAILURE.NETWORK);
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) throw new ContactError(FAILURE.SERVER, response.status);

  return response;
}
