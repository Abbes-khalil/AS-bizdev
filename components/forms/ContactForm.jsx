"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import ArrowIcon from "@/components/ui/ArrowIcon";
import Field from "@/components/forms/Field";
import FormStatus from "@/components/forms/FormStatus";
import HoneypotField from "@/components/forms/HoneypotField";
import { findCountryByKey } from "@/lib/data/countries";
import useContactForm from "@/hooks/useContactForm";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { ROUTES } from "@/lib/routes";

/**
 * The interactive part of /contact: form state, validation, submission, and
 * the `?market=` prefill (read via `useSearchParams`, client-only). The
 * static hero/aside around it live in the server-rendered `ContactContent`.
 */
export default function ContactForm({ lang }) {
  const t = getDictionary(lang, "contact");
  const { errors, status, formRef, onSubmit, onBlur, fieldProps } =
    useContactForm(t);

  // Carries the market a visitor clicked through from on /marches (§21 of
  // the brief) into a starting line they can edit or delete.
  const searchParams = useSearchParams();
  const marketCountry = findCountryByKey(searchParams.get("market"));
  const messageDefault = marketCountry
    ? `${t.form.marketPrefill} ${marketCountry.name[lang] ?? marketCountry.name.fr}\n\n`
    : undefined;

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="rounded-card border border-gray-200 bg-white p-8 shadow-soft lg:p-12"
      aria-describedby="form-status"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          {...fieldProps("name")}
          label={t.form.name}
          autoComplete="family-name"
        />
        <Field
          {...fieldProps("prenom")}
          label={t.form.firstName}
          autoComplete="given-name"
          required={false}
        />
        <Field
          {...fieldProps("email")}
          label={t.form.email}
          type="email"
          autoComplete="email"
          inputMode="email"
        />
      </div>

      <HoneypotField />

      <label className="mt-6 grid gap-2">
        <span className="font-display text-[0.8125rem] font-medium tracking-wide text-gray-700">
          {t.form.message}{" "}
          <span className="text-orange" aria-label={t.form.requiredAria}>
            *
          </span>
        </span>
        <textarea
          required
          name="message"
          rows={6}
          defaultValue={messageDefault}
          placeholder={t.form.messagePlaceholder}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "err-message" : undefined}
          onBlur={onBlur}
          className={`rounded-btn border p-4 text-[1rem] text-navy outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
            errors.message
              ? "border-orange bg-white focus:border-orange focus:ring-orange/20"
              : "border-gray-200 bg-white focus:border-navy focus:ring-navy/15"
          }`}
        />
        {errors.message && (
          <p id="err-message" className="text-xs text-orange">
            {errors.message}
          </p>
        )}
      </label>

      <FormStatus status={status} fallbackLabel={t.status.failedLink} />

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-gray-500">
          {t.form.consentBefore}{" "}
          <Link
            href={ROUTES.policy[lang]}
            className="text-navy underline underline-offset-2 hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
          >
            {t.form.consentLink}
          </Link>
          .
        </p>
        <button
          type="submit"
          disabled={status.state === "submitting"}
          className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status.state === "submitting" ? t.form.submitting : t.form.submit}
          <ArrowIcon />
        </button>
      </div>
    </form>
  );
}
