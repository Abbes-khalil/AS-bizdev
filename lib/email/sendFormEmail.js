import { CONTACT_EMAIL, SITE_URL } from "@/lib/constants/site";

// ⚠️ Avant mise en prod : un email de confirmation sera envoyé par FormSubmit à
// contact@asbizdev.com lors de la première soumission réelle — il faut cliquer sur
// le lien de confirmation dans cet email pour activer la réception, sinon les
// soumissions suivantes échoueront silencieusement côté FormSubmit.
//
// Doit être le endpoint /ajax/ (pas https://formsubmit.co/EMAIL tout court) :
// le endpoint simple sert la page d'accueil FormSubmit en HTML dès qu'il ne
// détecte pas une vraie soumission de <form> de navigateur, même avec
// Accept: application/json — vérifié en interrogeant les deux en direct.
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

/** Every notification is also copied here. */
const NOTIFY_CC = "khalilabbes66@gmail.com";

const SUBJECT = {
  contact: "Nouveau message - Contact AS Biz Dev",
  partner: "Nouvelle candidature partenaire - AS Biz Dev",
};

const AUTORESPONSE = {
  contact: "Merci pour votre message, nous revenons vers vous sous 48h.",
  partner: "Merci pour votre candidature de partenariat, nous revenons vers vous sous 48h.",
};

/** FormSubmit only accepts flat string values — arrays (checkbox groups) are joined for readability. */
const flattenValues = (values) =>
  Object.fromEntries(
    Object.entries(values)
      .filter(([, value]) => value !== undefined && value !== null && value !== "")
      .map(([key, value]) => [key, Array.isArray(value) ? value.join(", ") : String(value)]),
  );

/**
 * Sends the submission to FormSubmit.co, which relays it to CONTACT_EMAIL
 * (cc'd to NOTIFY_CC) and auto-replies to the visitor's own address (detected
 * from the `email` field). Called only after the honeypot and Turnstile
 * checks in `handleFormSubmission.js` pass, so FormSubmit's own captcha stays
 * disabled (`_captcha: false`) and its own honeypot field (`_honey`) is sent
 * empty for parity — spam is already gated upstream by our own honeypot and
 * Turnstile, before this function ever runs.
 *
 * @param {"contact" | "partner"} formType
 * @param {object} values - form fields (honeypot/Turnstile fields already stripped)
 */
export async function sendFormEmail(formType, values) {
  const response = await fetch(FORMSUBMIT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // FormSubmit rejects requests with no browser-like Referer/Origin.
      Referer: SITE_URL,
      Origin: SITE_URL,
    },
    body: JSON.stringify({
      ...flattenValues(values),
      _subject: SUBJECT[formType],
      _autoresponse: AUTORESPONSE[formType],
      _cc: NOTIFY_CC,
      _honey: "",
      _captcha: "false",
    }),
  });

  let body;
  try {
    body = await response.json();
  } catch {
    body = null;
  }

  if (!response.ok || body?.success === "false") {
    throw new Error(
      `FormSubmit submission failed: ${response.status} ${body?.message ?? ""}`.trim(),
    );
  }
}
