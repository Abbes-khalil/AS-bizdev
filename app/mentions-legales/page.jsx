import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { CONTACT_EMAIL } from "@/lib/constants/site";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("legalNotice", "fr");

// ============================================
// CONTENU AFFICHÉ — modifier ici (titres, textes)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "AS Biz Dev",
    titleLead: "Mentions",
    titleAccent: "légales.",
    intro:
      "Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site asbizdev.com l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.",
  },
  sections: [
    {
      title: "Éditeur du site",
      body: "AS BIZ DEV, société par actions simplifiée unipersonnelle (SASU) au capital de 4 000 €, dont le siège social est situé 17b Avenue René Coty, 85100 Les Sables-d'Olonne, France, immatriculée sous le numéro SIRET 892 945 676 00021, n° de TVA intracommunautaire FR68892945676.",
    },
    {
      title: "Directeur de la publication",
      body: "Stéphane Allain, président de AS BIZ DEV.",
    },
    {
      title: "Hébergement",
      body: "Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.",
    },
    {
      title: "Contact",
      body: "Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse suivante :",
      email: true,
    },
    {
      title: "Propriété intellectuelle",
      body: "L'ensemble des éléments constituant le site asbizdev.com (textes, images, logos, structure) est protégé au titre du droit d'auteur et du droit des marques. Toute reproduction, représentation, modification ou adaptation, totale ou partielle, sans autorisation préalable, est interdite.",
    },
  ],
};

// ============================================
// COMPOSANT — mise en page de /mentions-legales, ne pas toucher sauf besoin technique
// ============================================
export default function LegalNoticeFr() {
  const t = CONTENT;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
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
