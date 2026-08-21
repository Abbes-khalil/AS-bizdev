import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { CONTACT_EMAIL } from "@/lib/constants/site";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("legalNotice", "ar");

// ============================================
// المحتوى المعروض — التعديل هنا (العناوين، النصوص)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "AS Biz Dev",
    titleLead: "الإشعار",
    titleAccent: "القانوني.",
    intro:
      "وفقاً لأحكام القانون الفرنسي رقم 2004-575 الصادر في 21 يونيو 2004 المتعلق بالثقة في الاقتصاد الرقمي، يُوضَّح لمستخدمي موقع asbizdev.com هوية مختلف الجهات المتدخلة في إنجازه ومتابعته.",
  },
  sections: [
    {
      title: "ناشر الموقع",
      body: "AS BIZ DEV، شركة مساهمة مبسطة ذات شريك وحيد (SASU) برأس مال قدره 4000 يورو، ومقرها الاجتماعي 17b Avenue René Coty، 85100 Les Sables-d'Olonne، فرنسا، مسجلة تحت رقم SIRET 892 945 676 00021، رقم التعريف الضريبي داخل الاتحاد الأوروبي FR68892945676.",
    },
    {
      title: "مدير النشر",
      body: "Stéphane Allain، رئيس شركة AS BIZ DEV.",
    },
    {
      title: "الاستضافة",
      body: "Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, الولايات المتحدة الأمريكية.",
    },
    {
      title: "التواصل",
      body: "لأي سؤال يتعلق بهذا الإشعار القانوني، يمكنكم التواصل معنا على العنوان التالي:",
      email: true,
    },
    {
      title: "الملكية الفكرية",
      body: "جميع العناصر المكوّنة لموقع asbizdev.com (النصوص، الصور، الشعارات، الهيكلة) محمية بموجب حق المؤلف وحق العلامات التجارية. يُمنع أي استنساخ أو تمثيل أو تعديل أو تكييف، كلياً أو جزئياً، دون إذن مسبق.",
    },
  ],
};

// ============================================
// المكوّن — تخطيط صفحة الإشعار القانوني، لا تُعدَّل إلا لسبب تقني
// ============================================
export default function LegalNoticeAr() {
  const t = CONTENT;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("ar")),
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
                          dir="ltr"
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
