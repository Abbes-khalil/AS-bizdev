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

/** Field order + French labels for the notification email, per form. Fields not listed here still show up, keyed by their raw name. */
const FIELD_LABELS = {
  contact: {
    prenom: "Prénom",
    name: "Nom",
    email: "Email",
    message: "Message",
  },
  partner: {
    firstName: "Prénom",
    lastName: "Nom",
    company: "Société",
    role: "Fonction",
    email: "Email",
    phone: "Téléphone",
    linkedin: "LinkedIn",
    website: "Site web",
    baseCountry: "Pays de résidence",
    city: "Ville",
    coveredCountries: "Pays couverts",
    profileType: "Type de profil",
    sectors: "Secteurs",
    experience: "Expérience",
    languages: "Langues",
    networkTypes: "Types de réseau",
    capabilities: "Capacités",
    presentation: "Présentation",
    references: "Références",
    consent: "Consentement",
    locale: "Langue du site",
    submittedAt: "Soumis le",
    status: "Statut",
    source: "Source",
  },
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

/** "key: value" lines, skipping empty ones — plain-text fallback for the notification email. */
const formatFieldsText = (values) =>
  Object.entries(values)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(", ") : value}`)
    .join("\n");

/** Labeled, ordered rows for the notification email — HTML version. */
const formatFieldsHtml = (formType, values) => {
  const labels = FIELD_LABELS[formType];
  const orderedKeys = [...Object.keys(labels), ...Object.keys(values).filter((key) => !(key in labels))];

  const rows = orderedKeys
    .map((key) => [key, values[key]])
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => {
      const label = labels[key] ?? key;
      const display = Array.isArray(value) ? value.join(", ") : String(value);
      return `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid #EEF3F9;font-family:sans-serif;font-size:13px;font-weight:600;color:#223266;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:10px 16px;border-bottom:1px solid #EEF3F9;font-family:sans-serif;font-size:14px;color:#2C2C2C;white-space:pre-wrap;">${escapeHtml(display)}</td>
        </tr>`;
    })
    .join("");

  return `
    <div style="max-width:560px;margin:0 auto;font-family:sans-serif;">
      <div style="background:#223266;padding:20px 24px;border-radius:8px 8px 0 0;">
        <span style="color:#ffffff;font-size:16px;font-weight:700;">AS Biz Dev</span>
      </div>
      <table style="width:100%;border-collapse:collapse;background:#ffffff;border:1px solid #EEF3F9;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;">
        ${rows}
      </table>
    </div>`;
};

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
    html: formatFieldsHtml(formType, values),
    text: formatFieldsText(values),
  });

  if (notificationError) {
    throw new Error(`Resend notification failed: ${notificationError.message}`);
  }

  if (!values.email) return;

  try {
    const { error: confirmationError } = await client.emails.send({
      from: FROM,
      to: values.email,
      replyTo: CONTACT_EMAIL,
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
