import BulletList from "@/components/ui/BulletList";
import CtaBlock from "@/components/ui/CtaBlock";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, organisationJsonLd } from "@/lib/seo/headTags";
import { SITE_URL } from "@/lib/constants/site";

export const generateMetadata = () => buildMetadata("pilotage", "ar");

// ============================================
// المحتوى المعروض — التعديل هنا (العناوين، النصوص، الأزرار)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "العرض 02 — إدارة تجارية خارجية للتصدير",
    titleLead: "نشاطكم التجاري التصديري يُقاد كامتداد",
    titleAccent: "لفريقكم.",
    intro:
      "تتولى AS Biz Dev، نيابةً عن الشركة الصغيرة أو المتوسطة، كل أو جزءاً من إدارة نشاطها التجاري في منطقة جغرافية محددة.",
  },

  situations: {
    eyebrow: "لمن يوجَّه هذا العرض",
    titleLead: "أربع حالات نواجهها",
    titleAccent: "بانتظام.",
    items: [
      "لديكم موزعون لكن ينقصكم الوقت لتنشيطهم.",
      "توقعاتكم التجارية تفتقر إلى الوضوح.",
      "الفرص موجودة لكن متابعتها غير منتظمة.",
      "ترغبون في تطوير منطقة دون توظيف فريق تجاري مخصص فوراً.",
    ],
    outro:
      "نعمل مباشرة مع موزعيكم وشركائكم وعملائكم المحتملين وفرقكم الداخلية.",
  },

  functions: {
    eyebrow: "النطاق",
    titleLead: "خمس وظائف",
    titleAccent: "مشمولة.",
    items: [
      {
        title: "التنشيط",
        lead: "شبكة الموزعين.",
        bullets: [
          "تواصل منتظم مع الموزعين",
          "مراجعات تجارية ومتابعة نشاطهم",
          "تحديد الأولويات وخطط العمل",
          "متابعة الأهداف وتحديد الصعوبات",
        ],
      },
      {
        title: "التطوير",
        lead: "الحسابات والأسواق والفرص.",
        bullets: [
          "البحث عن العملاء المحتملين وتطوير الحسابات",
          "تحديد موزعين جدد وتأهيلهم",
          "تقييم الإمكانات ومرافقة التفاوض",
          "الإدماج التدريجي في الشبكة",
        ],
      },
      {
        title: "الإدارة",
        lead: "مسار الفرص التجارية وخطط العمل.",
        bullets: [
          "تحديد وتأهيل الفرص",
          "المتابعة وترتيب الأولويات والمتابعة الدورية",
          "تحديث مسار الفرص التجارية بانتظام",
          "التنسيق مع فرقكم",
        ],
      },
      {
        title: "التوقّع",
        lead: "المبيعات وتوحيد التوقعات.",
        bullets: [
          "جمع المعلومات من الشركاء",
          "تحليل الفرص وتوحيد التوقعات",
          "تحديث التوقعات",
          "تحديد الفوارق ورفع المخاطر والفرص",
        ],
      },
      {
        title: "التقارير",
        lead: "حول النشاط والنتائج والخطوات القادمة.",
        bullets: [
          "النشاط التجاري، الفرص، مسار الفرص التجارية",
          "توقعات المبيعات والإجراءات المتخذة",
          "النتائج والمخاطر",
          "الخطوات القادمة",
        ],
      },
    ],
  },

  promise: {
    eyebrow: "ما يتغيّر",
    titleLead: "قدرة تجارية تشغيلية،",
    titleAccent: "دون هيكل محلي فوري.",
    body: "تحصل الشركة على قدرة تجارية تشغيلية في أسواقها التصديرية دون الحاجة إلى تشكيل فريق مخصص أو هيكل محلي كامل فوراً.",
    note: "يبقى مستوى الاستعانة بمصادر خارجية قابلاً للتعديل: يمكن لـ AS Biz Dev تولي مهمة محددة أو ضمان إدارة تجارية دورية على منطقة معينة.",
  },

  cta: {
    eyebrow: "الذهاب أبعد",
    heading: "أي منطقة ترغبون في تفويضها؟",
    label: "لنتحدث عن منطقتكم",
  },
};

const FunctionCard = ({ item, index }) => (
  <RevealOnScroll
    as="article"
    variant="up"
    delay={0.05}
    index={index}
    className="flex h-full flex-col rounded-card border border-gray-200 bg-white p-[1.25rem] transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lift"
  >
    <h3 className="font-display text-[1.25rem] font-semibold uppercase leading-[1.2] tracking-[-0.02em] text-navy">
      {item.title}
    </h3>
    <p className="mt-[0.5rem] text-[0.9375rem] leading-[1.5] text-orange">
      {item.lead}
    </p>
    <BulletList items={item.bullets} marker="dash" className="mt-[1.25rem]" />
  </RevealOnScroll>
);

// ============================================
// المكوّن — العرض 2، إدارة تجارية خارجية للتصدير (§9)، لا تُعدَّل إلا لسبب تقني
// ============================================
export default function PilotageAr() {
  const lang = "ar";
  const t = CONTENT;

  const breadcrumb = breadcrumbJsonLd([
    { name: "الرئيسية", url: `${SITE_URL}${ROUTES.home.ar}` },
    { name: "حلولنا", url: `${SITE_URL}${ROUTES.solutions.ar}` },
    { name: "إدارة تجارية خارجية للتصدير", url: `${SITE_URL}${ROUTES.pilotage.ar}` },
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

          <RevealOnScroll variant="up" className="mt-[1.75rem]">
            <BulletList items={t.situations.items} columns={2} />
            <p className="mt-[1.75rem] max-w-2xl text-[1.0625rem] leading-[1.7] text-gray-700">
              {t.situations.outro}
            </p>
          </RevealOnScroll>
        </Section>

        <Section>
          <SectionHeading
            eyebrow={t.functions.eyebrow}
            titleLead={t.functions.titleLead}
            titleAccent={t.functions.titleAccent}
          />

          <div className="mt-[2.5rem] grid gap-[1.25rem] md:grid-cols-2 lg:grid-cols-3">
            {t.functions.items.map((item, index) => (
              <FunctionCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </Section>

        <Section tone="navy">
          <RevealOnScroll variant="up" className="max-w-3xl">
            <p className="eyebrow text-orange">{t.promise.eyebrow}</p>
            <h2 className="mt-4 font-display display-md font-semibold tracking-tight text-white text-balance">
              {t.promise.titleLead}{" "}
              <span className="italic text-orange">{t.promise.titleAccent}</span>
            </h2>
            <p className="mt-6 text-[1.0625rem] leading-[1.7] text-white/75">
              {t.promise.body}
            </p>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-white/75">
              {t.promise.note}
            </p>
          </RevealOnScroll>
        </Section>

        <Section tone="alt">
          <CtaBlock {...t.cta} lang={lang} />
        </Section>
      </main>
    </>
  );
}
