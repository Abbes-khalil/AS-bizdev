import { useState, useRef } from "react";
import RevealOnScroll from "../components/RevealOnScroll";

const initialErrors = {};
const initialStatus = { state: "idle", message: "" };

export default function Contact() {
  const [errors, setErrors] = useState(initialErrors);
  const [status, setStatus] = useState(initialStatus);
  const formRef = useRef(null);
  const firstFieldRef = useRef(null);

  const validate = (form) => {
    const next = {};
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name) next.name = "Merci d'indiquer votre nom.";
    else if (name.length < 2) next.name = "Votre nom semble trop court.";

    if (!email) next.email = "Une adresse email est requise.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Format d'email invalide.";

    if (!message) next.message = "Décrivez votre projet en quelques lignes.";
    else if (message.length < 10)
      next.message = "Votre message est un peu court — 10 caractères minimum.";

    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        state: "error",
        message: "Merci de corriger les champs surlignés.",
      });
      const firstKey = Object.keys(nextErrors)[0];
      const firstEl = form.elements[firstKey];
      if (firstEl) firstEl.focus();
      return;
    }

    setStatus({ state: "submitting", message: "Envoi en cours…" });
    // Simulated send — replace with real endpoint when available.
    setTimeout(() => {
      setStatus({
        state: "success",
        message: "Merci ! Nous organisons un premier échange sous 48 heures.",
      });
      form.reset();
      window.scrollTo({
        top: formRef.current?.offsetTop ?? 0,
        behavior: "smooth",
      });
    }, 900);
  };

  const onBlur = (e) => {
    const form = e.currentTarget.form;
    if (!form) return;
    const next = validate(form);
    setErrors(next);
  };

  const inputClasses = (key) =>
    `min-h-14 rounded-btn border bg-white px-4 text-[1rem] text-navy outline-none transition-all focus:bg-white focus:ring-4 ${
      errors[key]
        ? "border-orange focus:border-orange focus:ring-orange/20"
        : "border-gray-200 focus:border-navy focus:ring-navy/15"
    }`;

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
              <p className="eyebrow text-orange">Construisons la suite</p>
            </div>
            <h1 className="mt-6 font-display display-xl font-semibold text-navy text-balance">
              Parlons de votre prochain{" "}
              <span className="italic text-orange">territoire</span> de
              croissance.
            </h1>
            <p className="mt-8 max-w-2xl text-[1.125rem] leading-[1.65] text-gray-700">
              Décrivez-nous votre ambition. Notre équipe vous répondra pour
              organiser un premier échange — sous 48 heures.
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
                  <label className="grid gap-2">
                    <span className="font-display text-[0.8125rem] font-medium tracking-wide text-gray-700">
                      Nom{" "}
                      <span className="text-orange" aria-hidden="true">
                        *
                      </span>
                    </span>
                    <input
                      ref={firstFieldRef}
                      required
                      name="name"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "err-name" : undefined}
                      onBlur={onBlur}
                      className={inputClasses("name")}
                    />
                    {errors.name && (
                      <p id="err-name" className="text-xs text-orange">
                        {errors.name}
                      </p>
                    )}
                  </label>
                  <label className="grid gap-2">
                    <span className="font-display text-[0.8125rem] font-medium tracking-wide text-gray-700">
                      Prenom{" "}
                      <span className="text-orange" aria-hidden="true">
                        *
                      </span>
                    </span>
                    <input
                      ref={firstFieldRef}
                      required
                      name="prenom"
                      autoComplete="prenom"
                      aria-invalid={Boolean(errors.prenom)}
                      aria-describedby={
                        errors.prenom ? "err-prenom" : undefined
                      }
                      onBlur={onBlur}
                      className={inputClasses("prenom")}
                    />
                    {errors.preonm && (
                      <p id="err-prenom" className="text-xs text-orange">
                        {errors.prenom}
                      </p>
                    )}
                  </label>
                  <label className="grid gap-2">
                    <span className="font-display text-[0.8125rem] font-medium tracking-wide text-gray-700">
                      Email{" "}
                      <span className="text-orange" aria-hidden="true">
                        *
                      </span>
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      inputMode="email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "err-email" : undefined}
                      onBlur={onBlur}
                      className={inputClasses("email")}
                    />
                    {errors.email && (
                      <p id="err-email" className="text-xs text-orange">
                        {errors.email}
                      </p>
                    )}
                  </label>
                </div>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <label className="grid gap-2"></label>
                </div>
                <label className="mt-6 grid gap-2">
                  <span className="font-display text-[0.8125rem] font-medium tracking-wide text-gray-700">
                    Votre message{" "}
                    <span className="text-orange" aria-hidden="true">
                      *
                    </span>
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={6}
                    placeholder="Décrivez votre projet, vos marchés cibles, vos contraintes…"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "err-message" : undefined
                    }
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
                      : status.state === "error"
                        ? "border-orange/30 bg-orange-50 text-orange"
                        : status.state === "submitting"
                          ? "border-gray-200 bg-surface-alt text-gray-700"
                          : "hidden"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {status.state === "success" && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8L6.5 11.5L13 5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {status.state === "error" && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M8 5V8.5M8 11V11.01"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                    {status.state === "submitting" && (
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
                    )}
                    {status.message}
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-gray-500">
                    En soumettant ce formulaire, vous acceptez notre{" "}
                    <a
                      href="/politiques-de-confidentialite"
                      className="text-navy underline underline-offset-2 hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
                    >
                      politique de confidentialité
                    </a>
                    .
                  </p>
                  <button
                    type="submit"
                    disabled={status.state === "submitting"}
                    className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status.state === "submitting"
                      ? "Envoi…"
                      : "Envoyer ma demande"}
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
                  <p className="eyebrow text-orange">AS Biz Dev</p>
                  <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                    France · Afrique · Moyen-Orient
                  </h2>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-white/75">
                    Nous intervenons à vos côtés, de la stratégie au déploiement
                    opérationnel. Un premier échange, sans engagement.
                  </p>
                  <div className="mt-6 space-y-2">
                    <a
                      href="mailto:contact@asbizdev.com"
                      className="block text-[0.95rem] text-orange link-underline"
                    >
                      contact@asbizdev.com
                    </a>
                    <p className="block text-[0.95rem] text-orange ">
                      +33 06 07 38 69 63
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
