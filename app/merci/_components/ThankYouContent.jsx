import Link from "next/link";

import ArrowIcon from "@/components/ui/ArrowIcon";
import { ROUTES } from "@/lib/routes";

import LeadTracker from "./LeadTracker";

const COPY = {
  fr: {
    eyebrow: "Message envoyé",
    heading: "Merci !",
    body: "Votre message a bien été transmis. Notre équipe revient vers vous sous 48 heures.",
    cta: "Retour à l'accueil",
  },
  en: {
    eyebrow: "Message sent",
    heading: "Thank you!",
    body: "Your message has been sent. Our team will get back to you within 48 hours.",
    cta: "Back to home",
  },
  ar: {
    eyebrow: "تم إرسال الرسالة",
    heading: "شكراً لكم!",
    body: "تم إرسال رسالتكم بنجاح. سيتواصل معكم فريقنا في غضون 48 ساعة.",
    cta: "العودة إلى الصفحة الرئيسية",
  },
};

/** Post-submission confirmation for the contact and partner forms — reached via FormSubmit's `_next` redirect after a successful submission, never linked to directly. */
export default function ThankYouContent({ lang }) {
  const t = COPY[lang] ?? COPY.fr;

  return (
    <main className="flex min-h-[70vh] items-center bg-white">
      <LeadTracker lang={lang} />
      <div className="container-x">
        <div className="mx-auto max-w-xl rounded-card border border-gray-200 bg-white p-8 text-center shadow-soft lg:p-12">
          <span
            className="mx-auto flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-orange/10 text-orange"
            aria-hidden="true"
          >
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8L6.5 11.5L13 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <p className="eyebrow mt-6 text-orange">{t.eyebrow}</p>
          <h1 className="mt-3 font-display text-[2.5rem] font-semibold leading-[1.2] tracking-[-0.03em] text-navy">
            {t.heading}
          </h1>
          <p className="mt-4 text-[1rem] leading-[1.6] text-gray-700">{t.body}</p>

          <Link href={ROUTES.home[lang]} className="btn-primary mt-8 inline-flex">
            {t.cta}
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </main>
  );
}
