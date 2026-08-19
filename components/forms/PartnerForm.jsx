"use client";

import Link from "next/link";

import ArrowIcon from "@/components/ui/ArrowIcon";
import CheckboxGroup from "@/components/forms/CheckboxGroup";
import Field from "@/components/forms/Field";
import FormStatus from "@/components/forms/FormStatus";
import HoneypotField from "@/components/forms/HoneypotField";
import Select from "@/components/forms/Select";
import TextArea from "@/components/forms/TextArea";
import { PARTNER_FORM_SECTIONS } from "@/lib/constants/partnerForm";
import usePartnerForm from "@/hooks/usePartnerForm";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { ROUTES, THANK_YOU_PATH } from "@/lib/routes";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/constants/site";

const FORMSUBMIT_ACTION = `https://formsubmit.co/${CONTACT_EMAIL}`;

/** Renders one schema field with the control its type calls for. */
const Control = ({ field, copy, error, onBlur }) => {
  const labels = copy.fields[field.id];

  const shared = {
    name: field.id,
    label: labels.label,
    placeholder: labels.placeholder,
    error,
    onBlur,
    required: Boolean(field.required),
    requiredAria: copy.requiredAria,
    optionalLabel: copy.optional,
  };

  if (field.type === "textarea") {
    return <TextArea {...shared} rows={field.rows} />;
  }

  if (field.type === "select") {
    return (
      <Select
        {...shared}
        placeholder={copy.options.selectPlaceholder}
        options={field.options.map((value) => ({
          value,
          label: copy.options[value],
        }))}
      />
    );
  }

  if (field.type === "checkboxGroup") {
    return (
      <CheckboxGroup
        {...shared}
        options={field.options.map((value) => ({
          value,
          label: copy.options[value],
        }))}
      />
    );
  }

  return (
    <Field
      {...shared}
      type={field.type}
      autoComplete={field.autoComplete}
      inputMode={field.type === "email" ? "email" : undefined}
    />
  );
};

/**
 * Partner registration form (§13).
 *
 * Everything visible comes from `PARTNER_FORM_SECTIONS`: adding a question is
 * a schema entry plus its labels, never new markup — which is what keeps the
 * collected data and the stored data the same shape.
 */
const PartnerForm = ({ copy }) => {
  const { lang } = useLang();
  const { errors, status, formRef, onSubmit, onBlur } = usePartnerForm(copy);

  return (
    <>
    <noscript>
      <p className="rounded-card border border-gray-200 bg-white p-6 text-sm text-gray-700">
        {lang === "en"
          ? "This form requires JavaScript. You can also reach us directly at "
          : "Ce formulaire nécessite JavaScript. Vous pouvez aussi nous écrire directement à "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-navy underline">{CONTACT_EMAIL}</a>.
      </p>
    </noscript>
    <form
      ref={formRef}
      action={FORMSUBMIT_ACTION}
      method="POST"
      onSubmit={onSubmit}
      noValidate
      aria-describedby="form-status"
      className="rounded-card border border-gray-200 bg-white p-[1.25rem] shadow-soft lg:p-[3rem]"
    >
      <input type="hidden" name="_subject" value="Nouvelle candidature partenaire - AS Biz Dev" />
      <input
        type="hidden"
        name="_autoresponse"
        value="Merci pour votre candidature de partenariat, nous revenons vers vous sous 48h."
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_replyto" />
      <input type="hidden" name="_next" value={`${SITE_URL}${THANK_YOU_PATH[lang]}`} />

      {PARTNER_FORM_SECTIONS.map((section, index) => {
        const sectionCopy = copy.form.sections[section.id];
        const twoColumns = section.id === "identity" || section.id === "location";

        return (
          <fieldset
            key={section.id}
            className={index > 0 ? "mt-[2.5rem] border-t border-gray-200 pt-[2rem]" : ""}
          >
            <legend className="sr-only">{sectionCopy.title}</legend>

            <p className="font-display text-[0.75rem] font-medium uppercase tracking-widest text-gray-400">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-[0.5rem] font-display text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.02em] text-navy">
              {sectionCopy.title}
            </h2>
            <p className="mt-[0.5rem] max-w-2xl text-[0.9375rem] leading-[1.6] text-gray-700">
              {sectionCopy.description}
            </p>

            <div
              className={`mt-[1.75rem] grid gap-[1.25rem] ${twoColumns ? "sm:grid-cols-2" : ""}`}
            >
              {section.fields.map((field) => (
                <div
                  key={field.id}
                  className={
                    twoColumns && field.type === "textarea" ? "sm:col-span-2" : ""
                  }
                >
                  <Control
                    field={field}
                    copy={copy.form}
                    error={errors[field.id]}
                    onBlur={onBlur}
                  />
                </div>
              ))}
            </div>
          </fieldset>
        );
      })}

      <HoneypotField />

      <div className="mt-[1.75rem] border-t border-gray-200 pt-[1.75rem]">
        <label className="flex cursor-pointer items-start gap-[0.75rem]">
          <input
            type="checkbox"
            name="consent"
            onBlur={onBlur}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "err-consent" : undefined}
            className="mt-[0.2rem] h-[1.1rem] w-[1.1rem] shrink-0 cursor-pointer accent-orange"
          />
          <span className="text-[0.875rem] leading-[1.6] text-gray-700">
            {copy.form.consentBefore}{" "}
            <Link
              href={ROUTES.policy[lang]}
              className="text-navy underline underline-offset-2 hover:text-orange"
            >
              {copy.form.consentLink}
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="err-consent" className="mt-2 text-xs text-orange">
            {errors.consent}
          </p>
        )}
      </div>

      <FormStatus status={status} fallbackLabel={copy.status.failedLink} />

      <button
        type="submit"
        disabled={status.state === "submitting"}
        className="btn-primary mt-[1.75rem] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status.state === "submitting"
          ? copy.form.submitting
          : copy.form.submit}
        <ArrowIcon />
      </button>
    </form>
    </>
  );
};

export default PartnerForm;
