import { useRef, useState } from "react";

import { buildMailtoHref, submitContact } from "@/lib/utils/submitContact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INITIAL_STATUS = { state: "idle", message: "" };

/**
 * Validation and submission for the contact form.
 *
 * @param t copy for the active language (`useT("contact")`)
 * @returns form state plus the handlers to spread onto the <form> and fields
 */
export default function useContactForm(t) {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(INITIAL_STATUS);
  const formRef = useRef(null);

  const validate = (form) => {
    const next = {};
    const name = form.name.value.trim();
    const prenom = form.prenom.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name) next.name = t.errors.nameRequired;
    else if (name.length < 2) next.name = t.errors.nameShort;

    // Prénom is optional on the origin site — only validated when filled in.
    if (prenom && prenom.length < 2) next.prenom = t.errors.firstNameShort;

    if (!email) next.email = t.errors.emailRequired;
    else if (!EMAIL_PATTERN.test(email)) next.email = t.errors.emailInvalid;

    if (!message) next.message = t.errors.messageRequired;
    else if (message.length < 10) next.message = t.errors.messageShort;

    return next;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({ state: "error", message: t.status.invalid });
      const firstEl = form.elements[Object.keys(nextErrors)[0]];
      if (firstEl) firstEl.focus();
      return;
    }

    const payload = {
      name: form.name.value.trim(),
      prenom: form.prenom.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
      _gotcha: form.elements._gotcha.value, // honeypot
    };

    setStatus({ state: "submitting", message: t.status.submitting });

    try {
      await submitContact(payload);
      setStatus({ state: "success", message: t.status.success });
      form.reset();
      window.scrollTo({
        top: formRef.current?.offsetTop ?? 0,
        behavior: "smooth",
      });
    } catch {
      // Never drop the lead: offer the pre-filled mailto as a fallback.
      setStatus({
        state: "failed",
        message: t.status.failed,
        mailto: buildMailtoHref(payload, t.status.emailSubject),
      });
    }
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
