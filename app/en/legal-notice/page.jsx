import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { CONTACT_EMAIL } from "@/lib/constants/site";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("legalNotice", "en");

/**
 * Every fact AS Biz Dev hasn't confirmed is a literal [TO BE COMPLETED]
 * placeholder — never a guess. Whoever fills these in should replace the
 * placeholder text itself, not just the brackets.
 */
// ============================================
// PAGE CONTENT — edit here (headings, copy)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "AS Biz Dev",
    titleLead: "Legal",
    titleAccent: "notice.",
    intro:
      "In accordance with applicable French law (loi n° 2004-575 of 21 June 2004 for confidence in the digital economy), users of asbizdev.com are informed of the identity of the parties involved in producing and maintaining it.",
  },
  sections: [
    {
      title: "Website publisher",
      body: "[TO BE COMPLETED — legal name, legal form, registered office address, company registration number, share capital, VAT number]",
    },
    {
      title: "Publication director",
      body: "[TO BE COMPLETED — name and role of the publication director]",
    },
    {
      title: "Hosting",
      body: "Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, United States.",
    },
    {
      title: "Contact",
      body: "For any question regarding this legal notice, you can contact us at the following address:",
      email: true,
    },
    {
      title: "Intellectual property",
      body: "All elements making up asbizdev.com (text, images, logos, structure) are protected by copyright and trademark law. Any reproduction, representation, modification or adaptation, in whole or in part, without prior authorisation, is prohibited.",
    },
  ],
};

// ============================================
// COMPONENT — legal notice page layout, leave alone unless it's a technical change
// ============================================
export default function LegalNoticeEn() {
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
        <PageHero {...t.hero} />

        <section className="bg-white pb-24 lg:pb-32">
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
