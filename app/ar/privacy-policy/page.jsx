import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { CONTACT_EMAIL } from "@/lib/constants/site";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("policy", "ar");

/**
 * Sections carry an optional `email: true` flag — the component then appends
 * a mailto link after the body text rather than embedding markup here.
 */
// ============================================
// المحتوى المعروض — التعديل هنا (العناوين، النصوص)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "AS Biz Dev",
    titleLead: "سياسة",
    titleAccent: "الخصوصية.",
    intro:
      "تلتزم AS Biz Dev بحماية خصوصية زوار موقعها الإلكتروني. توضح سياسة الخصوصية هذه كيفية جمعنا لبياناتكم الشخصية واستخدامها والإفصاح عنها وحمايتها، وفقاً للائحة العامة لحماية البيانات (RGPD).",
    effectiveDate: "تاريخ السريان: 20 يناير 2021.",
    updatedDate: "تم تحديث سياسة الخصوصية هذه بتاريخ 05 نوفمبر 2023.",
  },
  sections: [
    {
      title: "جمع البيانات الشخصية",
      body: "نجمع المعلومات التي تقدمونها لنا مباشرة (الاسم، عنوان البريد الإلكتروني، رقم الهاتف، العنوان البريدي، وأي معلومة تختارون مشاركتها معنا عبر نماذجنا). كما نجمع تلقائياً بعض المعلومات أثناء زيارتكم لموقعنا: عنوان IP، نوع المتصفح، الصفحات التي تمت زيارتها، أوقات الاتصال، وبيانات ناتجة عن ملفات تعريف الارتباط أو أدوات تتبع أخرى.",
    },
    {
      title: "استخدام البيانات الشخصية",
      body: "تُستخدم المعلومات التي نجمعها لتقديم خدماتنا وصيانتها وتحسينها، والرد على طلباتكم، والتواصل معكم بشأن خدماتنا وعروضنا، وتحليل زوار موقعنا، والامتثال لالتزاماتنا القانونية.",
    },
    {
      title: "مشاركة البيانات الشخصية",
      body: "لا نشارك بياناتكم الشخصية مع أطراف ثالثة، إلا في الحالات التالية: بموافقتكم المسبقة، للامتثال لالتزام قانوني، لحماية حقوقنا أو ممتلكاتنا، أو في إطار عملية تجارية (اندماج، استحواذ أو تفويت أصول).",
    },
    {
      title: "أمن البيانات",
      body: "نطبّق تدابير أمنية تقنية وتنظيمية مناسبة (جدران حماية، تشفير، ضوابط وصول مادية وإدارية) لحماية بياناتكم من أي وصول غير مصرح به أو تعديل أو إفصاح أو إتلاف.",
    },
    {
      title: "حقوقكم",
      body: "وفقاً للائحة العامة لحماية البيانات (RGPD)، تملكون حق الوصول إلى بياناتكم وتصحيحها وحذفها وتقييد معالجتها ونقلها، وكذلك حق الاعتراض على معالجتها وسحب موافقتكم في أي وقت. لممارسة هذه الحقوق، تواصلوا معنا عبر",
      email: true,
    },
    {
      title: "النقل الدولي للبيانات",
      body: "قد تُنقل بياناتكم وتُعالج في دول خارج المجال الاقتصادي الأوروبي (EEE). في هذه الحالة، نتأكد من أن عمليات النقل هذه تتم وفقاً لمتطلبات RGPD وتستفيد من مستوى حماية مناسب.",
    },
    {
      title: "تعديلات سياسة الخصوصية",
      body: "قد نقوم بتحديث سياسة الخصوصية هذه دورياً. سيُنشر أي تعديل على هذه الصفحة مع تاريخ مراجعة محدَّث. ندعوكم لمراجعتها بانتظام.",
    },
    {
      title: "التواصل",
      body: "لأي سؤال يتعلق بسياسة الخصوصية هذه أو بحماية بياناتكم الشخصية، يمكنكم التواصل معنا على العنوان التالي:",
      email: true,
    },
  ],
};

// ============================================
// المكوّن — تخطيط صفحة سياسة الخصوصية، لا تُعدَّل إلا لسبب تقني
// ============================================
export default function PolicyAr() {
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
