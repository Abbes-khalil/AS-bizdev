import { Resend } from "resend";

import { CONTACT_EMAIL } from "@/lib/constants/site";

let resend;
const getResend = () => {
  if (!resend) resend = new Resend(process.env.RESEND_API_KEY);
  return resend;
};

// TODO: remplacer par no-reply@asbizdev.com une fois le domaine vérifié sur Resend
const FROM = "AS Biz Dev <onboarding@resend.dev>";

const NOTIFICATION_SUBJECT = {
  contact: "Nouveau message - Contact AS Biz Dev",
  partner: "Nouvelle candidature partenaire - AS Biz Dev",
};

const CONFIRMATION = {
  contact: {
    subject: "Nous avons bien reçu votre message — AS Biz Dev",
    body: (values) =>
      `Bonjour ${values.prenom || values.name || ""},\n\n` +
      `Merci pour votre message, nous revenons vers vous sous 48h.\n\n` +
      `L'équipe AS Biz Dev`,
  },
  partner: {
    subject: "Votre candidature partenaire a bien été reçue — AS Biz Dev",
    body: (values) =>
      `Bonjour ${values.firstName || ""},\n\n` +
      `Merci pour votre candidature de partenariat, nous revenons vers vous sous 48h.\n\n` +
      `L'équipe AS Biz Dev`,
  },
};

/** "key: value" lines, skipping empty ones — the notification email's body. */
const formatFields = (values) =>
  Object.entries(values)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(", ") : value}`)
    .join("\n");

/**
 * Sends the two emails a validated submission triggers: a notification to
 * CONTACT_EMAIL with every submitted field, and a confirmation to the
 * visitor's own address. Called only after the honeypot and Turnstile
 * checks in `handleFormSubmission.js` pass.
 *
 * The notification is the email that matters: its failure throws, so the
 * caller can log it and report a real error instead of a false success.
 * The confirmation is a courtesy — if it fails, that's logged here and
 * swallowed, since the actual message was already delivered.
 *
 * @param {"contact" | "partner"} formType
 * @param {object} values - form fields (honeypot/Turnstile fields already stripped)
 */
export async function sendFormEmail(formType, values) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const client = getResend();

  const { error: notificationError } = await client.emails.send({
    from: FROM,
    to: CONTACT_EMAIL,
    replyTo: values.email || undefined,
    subject: NOTIFICATION_SUBJECT[formType],
    text: formatFields(values),
  });

  if (notificationError) {
    throw new Error(`Resend notification failed: ${notificationError.message}`);
  }

  if (!values.email) return;

  try {
    const { error: confirmationError } = await client.emails.send({
      from: FROM,
      to: values.email,
      subject: CONFIRMATION[formType].subject,
      text: CONFIRMATION[formType].body(values),
    });

    if (confirmationError) {
      console.error("Resend confirmation email failed:", confirmationError);
    }
  } catch (error) {
    console.error("Resend confirmation email failed:", error);
  }
}
