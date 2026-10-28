import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { CONTACT_EMAIL } from "@/lib/constants/site";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("policy", "en");

/**
 * Sections carry an optional `email: true` flag — the component then appends
 * a mailto link after the body text rather than embedding markup here.
 */
// ============================================
// PAGE CONTENT — edit here (headings, copy)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "AS Biz Dev",
    titleLead: "Privacy",
    titleAccent: "policy.",
    intro:
      "AS Biz Dev is committed to protecting the privacy of visitors to its website. This Privacy Policy explains how we collect, use, disclose and protect your personal data, in accordance with the General Data Protection Regulation (GDPR).",
    effectiveDate: "Effective date: 20 January 2021.",
    updatedDate: "This Privacy Policy was last updated on 28 October 2026.",
  },
  sections: [
    {
      title: "Collection of personal data",
      body: "We collect the information you provide to us directly (name, email address, telephone number, postal address, and any information you choose to share through our forms). We also automatically collect certain information when you visit our site: IP address, browser type, pages visited, connection timestamps, and data from cookies or other trackers.",
    },
    {
      title: "Use of personal data",
      body: "The information we collect is used to provide, maintain and improve our services, respond to your requests, communicate with you about our services and offers, analyse our site's audience, and comply with our legal obligations.",
    },
    {
      title: "Sharing of personal data",
      body: "We do not share your personal data with third parties, except in the following cases: with your prior consent, to meet a legal obligation, to protect our rights or property, or as part of a commercial transaction (merger, acquisition or transfer of assets).",
    },
    {
      title: "Data security",
      body: "We implement appropriate technical and organisational security measures (firewalls, encryption, physical and administrative access controls) to protect your data against unauthorised access, alteration, disclosure or destruction.",
    },
    {
      title: "Your rights",
      body: "Under the General Data Protection Regulation (GDPR), you have the right to access, rectify, erase, restrict the processing of and port your data, as well as the right to object to processing and to withdraw your consent at any time. To exercise these rights, contact us at",
      email: true,
    },
    {
      title: "International transfers",
      body: "Your data may be transferred to and processed in countries outside the European Economic Area (EEA). In such cases, we ensure that these transfers are carried out in accordance with GDPR requirements and benefit from an adequate level of protection.",
    },
    {
      title: "Audience measurement and cookies",
      body: "With your consent, this site measures its traffic with Google Analytics (Google Ireland Limited): pages viewed, where the visit came from, device type and approximate country. These measurements are used only to understand what is read. Nothing is stored or measured until you accept, your choice is kept for one year, and you can change it at any time with the \"Manage cookies\" link at the bottom of every page. The site also uses Vercel Web Analytics, a cookie-free measurement that cannot identify you.",
    },
    {
      title: "Changes to our Privacy Policy",
      body: "We may update this Privacy Policy from time to time. Any change will be published on this page along with an updated revision date. We invite you to review it regularly.",
    },
    {
      title: "Contact",
      body: "For any question regarding this Privacy Policy or the protection of your personal data, you can contact us at the following address:",
      email: true,
    },
  ],
};

// ============================================
// COMPONENT — privacy policy page layout, leave alone unless it's a technical change
// ============================================
export default function PolicyEn() {
  const t = CONTENT;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("en")),
        }}
      />

      <main>
        <PageHero {...t.hero}>
          <p className="mt-6 text-[1rem] text-gray-700">{t.hero.effectiveDate}</p>
          <p className="mt-2 text-[1rem] text-gray-700">{t.hero.updatedDate}</p>
        </PageHero>

        <section className="bg-white pb-20 lg:pb-24">
          <div className="container-x">
            <article className="mx-auto max-w-3xl">
              {t.sections.map((section, i) => (
                <RevealOnScroll
                  as="section"
                  key={section.title}
                  variant="up"
                  delay={0.05}
                  amount={0.2}
                  className="grid gap-6 border-t border-gray-200 py-10 first:border-t-0 first:pt-0 lg:grid-cols-[1fr_2fr] lg:gap-12"
                >
                  <div>
                    <span className="font-display text-[0.7rem] font-medium uppercase tracking-widest text-orange">
                      0{i + 1}
                    </span>
                    <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-navy">
                      {section.title}
                    </h2>
                  </div>
                  <div className="text-[1.0625rem] leading-[1.75] text-gray-700">
                    {section.body}
                    {section.email && (
                      <>
                        {" "}
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="text-navy link-underline"
                        >
                          {CONTACT_EMAIL}
                        </a>
                        .
                      </>
                    )}
                  </div>
                </RevealOnScroll>
              ))}
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
