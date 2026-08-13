import { useRef, useState } from "react";

import {
  INITIAL_PARTNER_STATUS,
  PARTNER_FIELDS,
} from "@/lib/constants/partnerForm";
import { validatePartnerForm } from "@/lib/validation/partnerForm";
import { buildPartnerMailto, submitPartner } from "@/lib/utils/submitPartner";

const INITIAL_STATUS = { state: "idle", message: "" };

/** "Sénégal, Mali\nCôte d'Ivoire" → ["Sénégal", "Mali", "Côte d'Ivoire"] */
const splitList = (value) =>
  value
    .split(/[\n,;]+/)
    .map((entry) => entry.trim())
    .filter(Boolean);

/**
 * Validation and submission for the partner registration form.
 *
 * Values are read from the DOM through the schema rather than held in state:
 * a form this long re-rendering on every keystroke buys nothing, and the
 * schema stays the single description of what the form collects.
 */
export default function usePartnerForm(t, lang) {
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

  /**
   * Structured record, not a formatted message: option ids, a country array,
   * and the intake status the back-office will start from (§13–§15).
   */
  const buildPayload = (values) => ({
    ...values,
    coveredCountries: splitList(values.coveredCountries),
    locale: lang,
    submittedAt: new Date().toISOString(),
    status: INITIAL_PARTNER_STATUS,
    source: "website",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = readValues(form);
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({ state: "error", message: t.status.invalid });
      const firstInvalid = form.elements[Object.keys(nextErrors)[0]];
      const target = firstInvalid?.focus ? firstInvalid : firstInvalid?.[0];
      target?.focus?.();
      return;
    }

    const payload = buildPayload(values);
    setStatus({ state: "submitting", message: t.status.submitting });

    try {
      await submitPartner({ ...payload, _gotcha: form.elements._gotcha.value });
      setStatus({ state: "success", message: t.status.success });
      form.reset();
      window.scrollTo({
        top: formRef.current?.offsetTop ?? 0,
        behavior: "smooth",
      });
    } catch {
      // Never drop a profile: offer the pre-filled mailto as a fallback.
      setStatus({
        state: "failed",
        message: t.status.failed,
        mailto: buildPartnerMailto(payload, t.status.emailSubject),
      });
    }
  };

  const onBlur = (event) => {
    const form = event.currentTarget.form;
    if (form) setErrors(validate(readValues(form)));
  };

  return { errors, status, formRef, onSubmit, onBlur };
}
