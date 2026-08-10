"use client";

import { useSearchParams } from "next/navigation";

import ArrowIcon from "../components/ArrowIcon";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/RevealOnScroll";
import Field from "../components/form/Field";
import FormStatus from "../components/form/FormStatus";
import RouteLink from "../components/RouteLink";
import { CONTACT_EMAIL, CONTACT_PHONE } from "../constants/site";
import { findCountryByKey } from "../data/countries";
import useContactForm from "../hooks/useContactForm";
import { useLang } from "../i18n/LanguageProvider";
import { useT } from "../i18n";

export default function Contact() {
  const t = useT("contact");
  const { errors, status, formRef, onSubmit, onBlur, fieldProps } =
    useContactForm(t);

  // Carries the market a visitor clicked through from on /marches (§21 of
  // the brief) into a starting line they can edit or delete.
  const { lang } = useLang();
  const searchParams = useSearchParams();
  const marketCountry = findCountryByKey(searchParams.get("market"));
  const messageDefault = marketCountry
    ? `${t.form.marketPrefill} ${marketCountry.name[lang] ?? marketCountry.name.fr}\n\n`
    : undefined;

  return (
    <main>
      <PageHero
        className="max-w-4xl"
        {...t.hero}
        overlay={
          <div
            className="pointer-events-none absolute -right-20 top-0 h-[40rem] w-[40rem] opacity-[0.06] pattern-lines"
            aria-hidden="true"
          />
        }
      />

      <section className="bg-white pb-24 lg:pb-32">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            <RevealOnScroll variant="up">
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

                {/*
                  Honeypot: hidden from users and screen readers, and skipped by
                  keyboard. Bots fill every field, so a value here marks spam.
                  Named `_gotcha` — Formspree discards such submissions natively.
                */}
                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <label>
                    Website
                    <input
                      type="text"
                      name="_gotcha"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>

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
                    <RouteLink
                      routeKey="policy"
                      className="text-navy underline underline-offset-2 hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
                    >
                      {t.form.consentLink}
                    </RouteLink>
                    .
                  </p>
                  <button
                    type="submit"
                    disabled={status.state === "submitting"}
                    className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status.state === "submitting"
                      ? t.form.submitting
                      : t.form.submit}
                    <ArrowIcon />
                  </button>
                </div>
              </form>
            </RevealOnScroll>

            <RevealOnScroll variant="up" delay={0.15}>
              <aside className="flex flex-col gap-6">
                <div className="rounded-card bg-navy p-8 text-white">
                  <p className="eyebrow text-orange">{t.aside.eyebrow}</p>
                  <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                    {t.aside.heading}
                  </h2>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-white/75">
                    {t.aside.body}
                  </p>
                  <div className="mt-6 space-y-2">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="block text-[0.95rem] text-orange link-underline"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    <p className="block text-[0.95rem] text-orange">
                      {CONTACT_PHONE}
                    </p>
                  </div>
                </div>
              </aside>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}
