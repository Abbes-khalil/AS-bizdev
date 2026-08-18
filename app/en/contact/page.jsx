import { Suspense } from "react";

import ContactForm from "@/components/forms/ContactForm";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants/site";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("contact", "en");

// ============================================
// PAGE CONTENT — edit here (headings, copy, buttons, errors)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "Let's build what comes next",
    titleLead: "Let's talk about your next growth",
    titleAccent: "territory",
    titleTail: "",
    intro:
      "Tell us about your ambition. Our team will get back to you to set up a first conversation — within 48 hours.",
  },
  form: {
    name: "Last name",
    firstName: "First name",
    email: "Email",
    message: "Your message",
    marketPrefill: "Market:",
    messagePlaceholder:
      "Describe your project, your target markets, your constraints…",
    consentBefore: "By submitting this form, you accept our",
    consentLink: "privacy policy",
    submit: "Send my request",
    submitting: "Sending…",
    requiredAria: "required",
  },
  errors: {
    nameRequired: "Please enter your last name.",
    nameShort: "That name looks too short.",
    firstNameRequired: "Please enter your first name.",
    firstNameShort: "That first name looks too short.",
    emailRequired: "An email address is required.",
    emailInvalid: "Invalid email format.",
    messageRequired: "Tell us about your project in a few lines.",
    messageShort: "Your message is a little short — 10 characters minimum.",
  },
  status: {
    invalid: "Please correct the highlighted fields.",
    submitting: "Sending…",
    success: "Thank you! We'll set up a first conversation within 48 hours.",
    failed:
      "We couldn't send your message. Email us directly — it's already filled in for you:",
    failedLink: "Open in your mail app",
    emailSubject: "Contact request — asbizdev.com",
  },
  aside: {
    eyebrow: "AS Biz Dev",
    heading: "Africa · Middle East",
    body: "Tell us about your target market, your distributors or the opportunities already on the table. A first conversation, no strings attached.",
  },
};

// ============================================
// COMPONENT — /en/contact page layout, leave alone unless it's a technical change
// ============================================
export default function ContactPageEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />

      <main>
        <PageHero
          className="max-w-4xl"
          {...CONTENT.hero}
          overlay={
            <div
              className="pointer-events-none absolute -right-20 top-0 h-[40rem] w-[40rem] opacity-[0.06] pattern-lines"
              aria-hidden="true"
            />
          }
        />

        <section className="bg-white pb-20 lg:pb-24">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
              <RevealOnScroll variant="up">
                <Suspense fallback={null}>
                  <ContactForm lang="en" copy={CONTENT} />
                </Suspense>
              </RevealOnScroll>

              <RevealOnScroll variant="up" delay={0.15}>
                <aside className="flex flex-col gap-6">
                  <div className="rounded-card bg-navy p-8 text-white">
                    <p className="eyebrow text-orange">{CONTENT.aside.eyebrow}</p>
                    <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                      {CONTENT.aside.heading}
                    </h2>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-white/75">
                      {CONTENT.aside.body}
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
    </>
  );
}
