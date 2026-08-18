import { useRef, useState } from "react";

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
  };

  const onBlur = (event) => {
    const form = event.currentTarget.form;
    if (form) setErrors(validate(readValues(form)));
  };

  return { errors, status, formRef, onSubmit, onBlur };
}
