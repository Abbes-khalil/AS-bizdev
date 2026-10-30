import { useRef, useState } from "react";

import { markFormSubmitted } from "@/lib/analytics/formLead";
import { SITE_URL } from "@/lib/constants/site";
import { PARTNER_FIELDS } from "@/lib/constants/partnerForm";
import { validatePartnerForm } from "@/lib/validation/partnerForm";

const INITIAL_STATUS = { state: "idle", message: "" };

/**
 * Validation for the partner registration form. Submission itself is a
 * plain HTML form POST straight to FormSubmit.co (`action` on the <form> in
 * PartnerForm.jsx) — no fetch, no API route, no back-office payload shaping;
 * FormSubmit reads the raw named inputs directly. `onSubmit` only ever
 * blocks the browser's native submit when client-side validation fails; on
 * valid input it fills in `_replyto` and lets the POST go through.
 *
 * Values are read from the DOM through the schema rather than held in state:
 * a form this long re-rendering on every keystroke buys nothing, and the
 * schema stays the single description of what the form collects.
 */
export default function usePartnerForm(t) {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(INITIAL_STATUS);
  const formRef = useRef(null);

  const readValues = (form) => {
    const data = new FormData(form);

    const values = Object.fromEntries(
      PARTNER_FIELDS.map((field) => [
        field.id,
        field.type === "checkboxGroup"
          ? data.getAll(field.id)
          : String(data.get(field.id) ?? "").trim(),
      ]),
    );

    values.consent = form.elements.consent?.checked ?? false;
    return values;
  };

  const validate = (values) => validatePartnerForm(values, t.errors);

  const onSubmit = (event) => {
    const form = event.currentTarget;
    const values = readValues(form);
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
      setStatus({ state: "error", message: t.status.invalid });
      const firstInvalid = form.elements[Object.keys(nextErrors)[0]];
      const target = firstInvalid?.focus ? firstInvalid : firstInvalid?.[0];
      target?.focus?.();
      return;
    }

    form.elements._replyto.value = form.elements.email.value;

    // `_next`'s JSX value is built from SITE_URL (the production domain),
    // so it always resolves correctly there — but FormSubmit only honors a
    // `_next` redirect that matches the submitting page's own origin, so on
    // localhost/preview deploys it's silently ignored and FormSubmit shows
    // its own generic "Thanks!" page instead. Rewriting the origin here
    // fixes that everywhere without touching the production path.
    const nextField = form.elements._next;
    if (nextField) {
      nextField.value = nextField.value.replace(SITE_URL, window.location.origin);
    }

    // Browser autofill occasionally fills the honeypot (it's only
    // CSS-hidden, not type="hidden", so real bots skip it but autofill
    // sometimes doesn't) — FormSubmit then silently discards the whole
    // submission with no error and no email. Clearing it here doesn't
    // weaken the bot defense: bots that skip JS never reach this line
    // either way.
    if (form.elements._honey) form.elements._honey.value = "";

    // Counted on the thank-you page, once FormSubmit has accepted the POST.
    markFormSubmitted("partner");
  };

  const onBlur = (event) => {
    const form = event.currentTarget.form;
    if (form) setErrors(validate(readValues(form)));
  };

  return { errors, status, formRef, onSubmit, onBlur };
}
