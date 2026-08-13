import { useRef, useState } from "react";

import { readContactValues, validateContactForm } from "@/lib/validation/contactForm";
import { buildMailtoHref, submitContact } from "@/lib/utils/submitContact";

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

  const validate = (form) => validateContactForm(readContactValues(form), t.errors);

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
      ...readContactValues(form),
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
