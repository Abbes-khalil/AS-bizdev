const TIMEOUT_MS = 15000;

/**
 * Only needed by services that identify the form through the request body
 * (Web3Forms). Formspree encodes identity in the URL and ignores this.
 */
const ACCESS_KEY = import.meta.env.VITE_CONTACT_ACCESS_KEY;

/**
 * Plain JSON POST to a form service — no backend of our own to run.
 *
 * The payload is sent as structured JSON rather than flattened text so that
 * when the partner database arrives (phase B) the same shape can be stored
 * without changing anything in the forms.
 */
export default async function postToEndpoint(endpoint, payload, subject) {
  if (!endpoint) throw new Error("Form endpoint is not configured");

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...payload,
        ...(ACCESS_KEY && {
          access_key: ACCESS_KEY,
          subject,
          from_name: "asbizdev.com",
        }),
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Form endpoint returned ${response.status}`);
    }

    return response;
  } finally {
    clearTimeout(timer);
  }
}
