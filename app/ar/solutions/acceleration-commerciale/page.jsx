import BulletList from "@/components/ui/BulletList";
import CtaBlock from "@/components/ui/CtaBlock";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StepList from "@/components/ui/StepList";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, organisationJsonLd } from "@/lib/seo/headTags";
import { SITE_URL } from "@/lib/constants/site";

export const generateMetadata = () => buildMetadata("acceleration", "ar");

// ============================================
// المحتوى المعروض — التعديل هنا (العناوين، النصوص، الأزرار)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "العرض 01 — تسريع التطوير التجاري",
    titleLead: "تحويل الإمكانات إلى",
    titleAccent: "نشاط تجاري فعلي.",
    intro:
      "لا تُجري AS Biz Dev دراسة تخلص إلى أن سوقاً ما مثير للاهتمام. الهدف هو الوصول إلى حد الفعل التجاري وخلق فرص ملموسة.",
  },

  situations: {
    eyebrow: "الوضع الأولي",
    titleLead: "من المرجح أنكم تتعرّفون على",
    titleAccent: "إحدى هذه العبارات.",
    items: [
      "«نرغب في تطوير هذه الدولة لكن لا نعرف من أين نبدأ.»",
      "«حددنا إمكانات لكن لا نملك الموارد التجارية المتاحة.»",
      "«نبحث عن موزعين.»",
      "«حضورنا في هذا السوق ما زال غير كافٍ.»",
    ],
  },

  process: {
    eyebrow: "استجابة AS Biz Dev",
    titleLead: "ست خطوات، من تأهيل السوق",
    titleAccent: "إلى النتائج الأولى.",
    steps: [
      { title: "تأهيل السوق", body: "الإمكانات التجارية الفعلية، المنافسة القائمة، قيود الوصول، مسارات اتخاذ القرار." },
      { title: "تحديد الأهداف", body: "الأهداف ذات الأولوية، العملاء المحتملون، الموزعون والوكلاء المراد تأهيلهم." },
      { title: "بناء خطة العمل", body: "تسلسل المقاربة لكل سوق، الموارد المخصصة، المحطات ومعايير النجاح." },
      { title: "البحث عن العملاء المحتملين والشركاء", body: "التواصل الأول، البحث عن العملاء المحتملين، تنظيم المواعيد، تأهيل الموزعين." },
      { title: "تطوير الفرص", body: "تطوير الحسابات، مرافقة المفاوضات الأولى، هيكلة مسار الفرص التجارية." },
      { title: "المتابعة وقياس النتائج", body: "تقدم الفرص، الفوارق مقارنة بالخطة، القرارات الواجب اتخاذها للمرحلة القادمة." },
    ],
  },

  interventions: {
    eyebrow: "أنواع التدخلات",
    titleLead: "ما نتولاه",
    titleAccent: "بالمسؤولية.",
    intro: "حسب المشروع، يشمل التدخل كل أو جزءاً من هذه العناصر.",
    items: [
      "تحليل الإمكانات التجارية",
      "تأهيل الأسواق",
      "تحديد الأهداف ذات الأولوية",
      "تحديد العملاء المحتملين",
      "تحديد وتأهيل الموزعين",
      "البحث عن وكلاء أو شركاء تجاريين",
      "التواصل الأول والبحث عن العملاء المحتملين",
      "تنظيم المواعيد",
      "تطوير الحسابات",
      "مرافقة المفاوضات الأولى",
      "هيكلة مسار الفرص التجارية",
      "إعداد خطة عمل لكل سوق",
    ],
  },

  cta: {
    eyebrow: "الذهاب أبعد",
    heading: "أي سوق ترغبون في فتحه أو إعادة إطلاقه؟",
    label: "لنتحدث عن سوقكم",
  },
};

const SituationQuote = ({ quote, index }) => (
  <RevealOnScroll
    as="li"
    variant="up"
    delay={0.05}
    index={index}
    className="rounded-card border border-gray-200 bg-white p-[1.25rem]"
  >
    <blockquote className="font-display text-[1.0625rem] font-medium leading-[1.5] tracking-[-0.02em] text-navy">
      {quote}
    </blockquote>
  </RevealOnScroll>
);

// ============================================
// المكوّن — العرض 1، تسريع التطوير التجاري (§8)، لا تُعدَّل إلا لسبب تقني
// ============================================
export default function AccelerationAr() {
  const lang = "ar";
  const t = CONTENT;

  const breadcrumb = breadcrumbJsonLd([
    { name: "الرئيسية", url: `${SITE_URL}${ROUTES.home.ar}` },
    { name: "حلولنا", url: `${SITE_URL}${ROUTES.solutions.ar}` },
    { name: "تسريع التطوير التجاري", url: `${SITE_URL}${ROUTES.acceleration.ar}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("ar")),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <main>
        <PageHero layout="split" {...t.hero} />

        <Section tone="alt">
          <SectionHeading
            eyebrow={t.situations.eyebrow}
            titleLead={t.situations.titleLead}
            titleAccent={t.situations.titleAccent}
          />

          <ul role="list" className="mt-[1.75rem] grid gap-[1.25rem] md:grid-cols-2">
            {t.situations.items.map((quote, index) => (
              <SituationQuote key={quote} quote={quote} index={index} />
            ))}
          </ul>
        </Section>

        <Section>
          <SectionHeading
            eyebrow={t.process.eyebrow}
            titleLead={t.process.titleLead}
            titleAccent={t.process.titleAccent}
          />

          <div className="mt-[2.5rem]">
            <StepList steps={t.process.steps} />
          </div>
        </Section>

        <Section tone="alt">
          <SectionHeading
            eyebrow={t.interventions.eyebrow}
            titleLead={t.interventions.titleLead}
            titleAccent={t.interventions.titleAccent}
            intro={t.interventions.intro}
          />

          <RevealOnScroll variant="up" className="mt-[1.75rem]">
            <BulletList items={t.interventions.items} columns={2} />
          </RevealOnScroll>

          <CtaBlock {...t.cta} lang={lang} className="mt-[3.25rem]" />
        </Section>
      </main>
    </>
  );
}
