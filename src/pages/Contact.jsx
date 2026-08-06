import { useRef, useState } from "react";

import RevealOnScroll from "../components/RevealOnScroll";
import { CONTACT_EMAIL, CONTACT_PHONE, ROUTES } from "../components/siteData";
import { useT } from "../i18n";
import { buildMailtoHref, submitContact } from "../utils/submitContact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INITIAL_STATUS = { state: "idle", message: "" };

const StatusIcon = ({ state }) => {
  if (state === "success") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M3 8L6.5 11.5L13 5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (state === "error" || state === "failed") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 5V8.5M8 11V11.01"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (state === "submitting") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="animate-spin"
      >
        <circle
          cx="8"
          cy="8"
          r="6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="20"
          strokeDashoffset="10"
        />
      </svg>
    );
  }

  return null;
};

const inputClasses = (hasError) =>
  `min-h-14 rounded-btn border bg-white px-4 text-[1rem] text-navy outline-none transition-all focus:bg-white focus:ring-4 ${
    hasError
      ? "border-orange focus:border-orange focus:ring-orange/20"
      : "border-gray-200 focus:border-navy focus:ring-navy/15"
  }`;

/**
 * Declared at module scope so the input keeps its DOM identity across
 * re-renders — an inline component would remount and clear the field.
 */
const Field = ({
  name,
  label,
  error,
  onBlur,
  requiredAria,
  required = true,
  type = "text",
  autoComplete,
  inputMode,
}) => (
  <label className="grid gap-2">
    <span className="font-display text-[0.8125rem] font-medium tracking-wide text-gray-700">
      {label}
      {required && (
        <>
          {" "}
          <span className="text-orange" aria-label={requiredAria}>
            *
          </span>
        </>
      )}
    </span>
    <input
      required={required}
      type={type}
      name={name}
      autoComplete={autoComplete}
      inputMode={inputMode}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `err-${name}` : undefined}
      onBlur={onBlur}
      className={inputClasses(Boolean(error))}
    />
    {error && (
      <p id={`err-${name}`} className="text-xs text-orange">
        {error}
      </p>
    )}
  </label>
);

export default function Contact() {
  const t = useT("contact");
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
      _gotcha: form.elements._gotcha.value, // honeypot — see the hidden field below
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

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 pattern-dots opacity-[0.15]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 top-0 h-[40rem] w-[40rem] opacity-[0.06] pattern-lines"
          aria-hidden="true"
        />
        <div className="relative container-x py-20 lg:py-28">
          <RevealOnScroll variant="up" className="max-w-4xl">
            <div className="inline-flex items-center gap-3">
              <span
                className="h-1 w-10 rounded-full bg-orange"
                aria-hidden="true"
              />
              <p className="eyebrow text-orange">{t.hero.eyebrow}</p>
            </div>
            <h1 className="mt-6 font-display display-xl font-semibold text-navy text-balance">
              {t.hero.titleLead}{" "}
              <span className="italic text-orange">{t.hero.titleAccent}</span>
              {t.hero.titleTail && ` ${t.hero.titleTail}`}
            </h1>
            <p className="mt-8 max-w-2xl text-[1.125rem] leading-[1.65] text-gray-700">
              {t.hero.intro}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Form + Aside */}
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

                <div
                  id="form-status"
                  role="status"
                  aria-live="polite"
                  className={`mt-6 rounded-btn border px-4 py-3 text-sm ${
                    status.state === "success"
                      ? "border-gray-200 bg-surface-alt text-navy"
                      : status.state === "error" || status.state === "failed"
                        ? "border-orange/30 bg-orange-50 text-orange"
                        : status.state === "submitting"
                          ? "border-gray-200 bg-surface-alt text-gray-700"
                          : "hidden"
                  }`}
                >
                  <span className="flex items-start gap-2">
                    <span className="mt-[0.15rem] shrink-0">
                      <StatusIcon state={status.state} />
                    </span>
                    <span>
                      {status.message}
                      {status.mailto && (
                        <>
                          {" "}
                          <a
                            href={status.mailto}
                            className="font-semibold underline underline-offset-2 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 rounded"
                          >
                            {t.status.failedLink}
                          </a>
                        </>
                      )}
                    </span>
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-gray-500">
                    {t.form.consentBefore}{" "}
                    <a
                      href={ROUTES.policy}
                      className="text-navy underline underline-offset-2 hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
                    >
                      {t.form.consentLink}
                    </a>
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
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 7H13M13 7L7 1M13 7L7 13"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
