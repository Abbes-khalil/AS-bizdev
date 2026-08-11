import { Suspense } from "react";

import ContactForm from "@/components/forms/ContactForm";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants/site";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default function ContactContent({ lang }) {
  const t = getDictionary(lang, "contact");

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
              <Suspense fallback={null}>
                <ContactForm lang={lang} />
              </Suspense>
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
