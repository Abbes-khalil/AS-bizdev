import { useRef, useState } from "react";

import { SITE_URL } from "@/lib/constants/site";
import { readContactValues, validateContactForm } from "@/lib/validation/contactForm";

const INITIAL_STATUS = { state: "idle", message: "" };

/**
 * Validation for the contact form. Submission itself is a plain HTML form
 * POST straight to FormSubmit.co (`action` on the <form> in ContactForm.jsx)
 * — no fetch, no API route. `onSubmit` only ever blocks the browser's native
 * submit when client-side validation fails; on valid input it fills in
 * `_replyto` from whatever the visitor typed and lets the POST go through.
 *
 * @param t the active language's `CONTENT` object, passed down from
 *   `app/contact/page.jsx` or `app/en/contact/page.jsx`
 * @returns form state plus the handlers to spread onto the <form> and fields
 */
export default function useContactForm(t) {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(INITIAL_STATUS);
  const formRef = useRef(null);

  const validate = (form) => validateContactForm(readContactValues(form), t.errors);

  const onSubmit = (e) => {
    const form = e.currentTarget;
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      e.preventDefault();
      setStatus({ state: "error", message: t.status.invalid });
      const firstEl = form.elements[Object.keys(nextErrors)[0]];
      if (firstEl) firstEl.focus();
      return;
    }

    // FormSubmit's reply-to needs an explicit value; mirror it from the
    // field the visitor actually filled in, right before the native POST.
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
  };

  const onBlur = (e) => {
    const form = e.currentTarget.form;
    if (form) setErrors(validate(form));
  };

  const fieldProps = (name) => ({
    name,
    error: errors[name],
    onBlur,
    requiredAria: t.form.requiredAria,
  });

  return { errors, status, formRef, onSubmit, onBlur, fieldProps };
}
