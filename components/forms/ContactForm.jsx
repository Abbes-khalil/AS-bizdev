"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import ArrowIcon from "@/components/ui/ArrowIcon";
import Field from "@/components/forms/Field";
import FormStatus from "@/components/forms/FormStatus";
import HoneypotField from "@/components/forms/HoneypotField";
import { findCountryByKey } from "@/lib/data/countries";
import useContactForm from "@/hooks/useContactForm";
import { ROUTES, THANK_YOU_PATH } from "@/lib/routes";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/constants/site";

const FORMSUBMIT_ACTION = `https://formsubmit.co/${CONTACT_EMAIL}`;

/**
 * The interactive part of /contact: form state, validation, submission, and
 * the `?market=` prefill (read via `useSearchParams`, client-only). Copy
 * comes in as `copy` from the page that renders this (`app/contact/page.jsx`
 * or `app/en/contact/page.jsx`) — each owns its own FR/EN text, so there's
 * no shared dictionary lookup here.
 *
 * Submission is a plain HTML POST to FormSubmit.co — no API route, no
 * backend of ours. `_next` sends the visitor to our own thank-you page
 * after FormSubmit processes the submission.
 *
 * ⚠️ Avant mise en prod : FormSubmit envoie un email de confirmation à
 * contact@asbizdev.com lors de la toute première soumission réelle — il
 * faut cliquer sur le lien "Activate Form" dedans, sinon les soumissions
 * suivantes échouent silencieusement côté FormSubmit.
 */
export default function ContactForm({ lang, copy }) {
  const t = copy;
  const { errors, status, formRef, onSubmit, onBlur, fieldProps } = useContactForm(t);

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
      action={FORMSUBMIT_ACTION}
      method="POST"
      onSubmit={onSubmit}
      noValidate
      className="rounded-card border border-gray-200 bg-white p-8 shadow-soft lg:p-12"
      aria-describedby="form-status"
    >
      <input type="hidden" name="_subject" value="Nouveau message - Contact AS Biz Dev" />
      <input
        type="hidden"
        name="_autoresponse"
        value="Merci pour votre message, nous revenons vers vous sous 48h."
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_cc" value="khalilabbes66@gmail.com" />
      <input type="hidden" name="_replyto" />
      <input type="hidden" name="_next" value={`${SITE_URL}${THANK_YOU_PATH[lang]}`} />

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
