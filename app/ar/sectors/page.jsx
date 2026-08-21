import Link from "next/link";

import ArrowIcon from "@/components/ui/ArrowIcon";
import CrossFactorDiagram from "@/app/nos-secteurs/_components/CrossFactorDiagram";
import CtaBlock from "@/components/ui/CtaBlock";
import OfferCard from "@/components/ui/OfferCard";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SectorExplorer from "@/app/nos-secteurs/_components/SectorExplorer";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";
import { ROUTES } from "@/lib/routes";

export const generateMetadata = () => buildMetadata("sectors", "ar");

// ============================================
// المحتوى المعروض — التعديل هنا (العناوين، النصوص، القطاعات)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "قطاعاتنا",
    titleLead: "بيئات قطاعية",
    titleAccent: "نعرفها جيداً.",
    intro:
      "تتدخل AS Biz Dev في قطاعات تتيح لنا فيها خبرتنا وقاعدة اتصالاتنا وشبكاتنا تحديد الفاعلين الاقتصاديين وقنوات التوزيع والمحاورين المناسبين.",
  },
  heroNote:
    "لا يقوم نهجنا على ادعاء خبرة في جميع القطاعات، بل على تعبئة معرفة ملموسة بالمنظومات التي يمكننا العمل فيها.",

  explorer: {
    eyebrow: "مجالات معرفتنا",
    titleLead: "ثماني بيئات،",
    titleAccent: "معرفة ملموسة.",
    areasLabel: "المجالات الممثَّلة",
    actorsLabel: "الفاعلون القابلون للتحديد",
    highlightLabel: "محور رئيسي",
    developingLabel: "مجال قيد التطوير",
  },

  items: [
    {
      id: "industry",
      highlight: true,
      title: "الصناعة والمعدات",
      intro:
        "محور رئيسي في تموضع AS Biz Dev. تتيح معرفتنا بهذه البيئات تحديد الشركات والمحاورين المناسبين بسرعة أكبر.",
      areas: [
        "المعدات الصناعية",
        "الميكانيك",
        "المعادن",
        "الأتمتة",
        "الكهرباء",
        "الإلكترونيات",
        "صناعة البلاستيك",
        "التغليف",
        "المعدات التقنية",
        "المناولة الصناعية من الباطن",
      ],
      actors: [
        "الصناعيون",
        "الجهات الطالبة",
        "مصنّعو المعدات",
        "مدمجو الأنظمة",
        "الموزعون المتخصصون",
        "الشركاء التجاريون أو التقنيون",
      ],
    },
    {
      id: "distribution",
      title: "التوزيع والشبكات التجارية",
      intro:
        "يمكن لـ AS Biz Dev التدخل سواء في البحث عن شركاء جدد واختيارهم أو في تنشيط وتطوير شبكة قائمة.",
      areas: [
        "الموزعون",
        "المستوردون",
        "الوكلاء التجاريون",
        "مدمجو الأنظمة",
        "التجار",
        "الشركاء المحليون",
        "شبكات B2B",
      ],
    },
    {
      id: "agrifood",
      title: "الصناعات الغذائية والزراعة",
      areas: [
        "الصناعة الغذائية",
        "التحويل",
        "الإنتاج",
        "الزراعة",
        "التوزيع",
        "المعدات المهنية",
      ],
    },
    {
      id: "health",
      title: "الصحة والصيدلة",
      areas: [
        "الصناعة الصيدلانية",
        "المختبرات",
        "التوزيع المتخصص",
        "الصحة",
        "المعدات الطبية",
      ],
    },
    {
      id: "construction",
      title: "البناء والمعدات التقنية",
      areas: [
        "البناء",
        "الأشغال العامة",
        "التكييف والتهوية",
        "التبريد",
        "المعدات التقنية",
        "الموردون المتخصصون",
        "الموزعون المتخصصون",
      ],
    },
    {
      id: "automotive",
      title: "السيارات والتنقل",
      areas: [
        "الصناعيون",
        "مصنّعو المعدات",
        "الموزعون",
        "الموردون",
        "الشركات المرتبطة بالتنقل",
      ],
    },
    {
      id: "transport",
      title: "النقل واللوجستيات",
      areas: ["النقل", "اللوجستيات", "الشحن", "التخزين", "سلسلة التوريد"],
    },
    {
      id: "energy",
      status: "developing",
      title: "الطاقة والبنية التحتية",
      intro:
        "مجال يتم تطويره تدريجياً وفقاً للأسواق والمهام والشركاء والمراجع المتاحة فعلياً.",
      areas: [],
    },
  ],

  cross: {
    eyebrow: "ما يتيحه ذلك",
    titleLead: "معرفة تجمع بين",
    titleAccent: "السوق والقطاع وصانع القرار.",
    intro:
      "تكمن قيمة نهجنا في إمكانية الجمع بين عدة أبعاد للوصول مباشرة إلى الفعل التجاري.",
    factors: ["الدولة", "القطاع", "الشركة", "الوظيفة", "مستوى القرار"],
    outcome: "الفعل التجاري",
    examples: [
      "تحديد صناع قرار صناعيين في المغرب",
      "البحث عن موزعين تقنيين في ساحل العاج",
      "تحديد فاعلين في القطاع الغذائي بتونس",
      "البحث عن شركاء في السنغال",
      "تحديد محاورين تجاريين في الإمارات العربية المتحدة",
    ],
  },

  marketsLink: {
    eyebrow: "الذهاب أبعد",
    titleLead: "معرفة قطاعية تندرج",
    titleAccent: "ضمن أسواق مستهدفة.",
    body: "تكتسب مجالات معرفتنا قيمتها عندما تُجمع مع فهم ملموس للأسواق والشركات ومسارات القرار المحلية.",
    cta: "اكتشف أسواقنا",
  },

  offers: {
    eyebrow: "طريقتان لتعبئة هذه المعرفة",
    titleLead: "من التحديد",
    titleAccent: "إلى الإدارة التجارية.",
    items: [
      {
        routeKey: "acceleration",
        label: "التسريع",
        body: "تحديد العملاء المحتملين والجهات الطالبة والموزعين ومدمجي الأنظمة والشركاء من أجل خلق فرص تجارية جديدة.",
      },
      {
        routeKey: "pilotage",
        label: "الإدارة",
        body: "تنشيط الموزعين، تطوير الحسابات، متابعة الفرص، هيكلة مسار الفرص التجارية وتوحيد توقعات المبيعات.",
      },
    ],
    more: "اعرف المزيد",
  },

  cta: {
    eyebrow: "الذهاب أبعد",
    heading: "ترغبون في تطوير نشاطكم في أحد هذه القطاعات؟",
    label: "لنتحدث عن مشروعكم",
  },
};

// ============================================
// المكوّن — تخطيط صفحة القطاعات، لا تُعدَّل إلا لسبب تقني
// ============================================
export default function SectorsAr() {
  const lang = "ar";
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
        <PageHero layout="split" {...t.hero} />

        <Section tone="alt">
          <RevealOnScroll variant="up" className="max-w-3xl">
            <p className="text-[0.9375rem] italic leading-[1.7] text-gray-500">
              {t.heroNote}
            </p>
          </RevealOnScroll>

          <SectionHeading
            eyebrow={t.explorer.eyebrow}
            titleLead={t.explorer.titleLead}
            titleAccent={t.explorer.titleAccent}
            className="mt-[1.75rem] max-w-3xl"
          />

          <div className="mt-[1.75rem]">
            <SectorExplorer items={t.items} copy={t.explorer} ariaLabel={t.explorer.eyebrow} />
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow={t.cross.eyebrow}
            titleLead={t.cross.titleLead}
            titleAccent={t.cross.titleAccent}
            intro={t.cross.intro}
            className="mx-auto max-w-2xl text-center"
          />

          <div className="mt-[2.5rem]">
            <CrossFactorDiagram
              factors={t.cross.factors}
              outcome={t.cross.outcome}
              examples={t.cross.examples}
            />
          </div>
        </Section>

        <Section tone="navy">
          <RevealOnScroll variant="up" className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <p className="eyebrow text-orange">{t.marketsLink.eyebrow}</p>
            <h2 className="font-display display-md font-semibold tracking-tight text-white text-balance">
              {t.marketsLink.titleLead}{" "}
              <span className="italic text-orange">{t.marketsLink.titleAccent}</span>
            </h2>
            <p className="max-w-2xl text-[1.0625rem] leading-[1.7] text-white/75">
              {t.marketsLink.body}
            </p>
            <Link href={ROUTES.markets[lang]} className="btn-primary mt-2">
              {t.marketsLink.cta}
              <ArrowIcon />
            </Link>
          </RevealOnScroll>
        </Section>

        <Section tone="alt">
          <SectionHeading
            eyebrow={t.offers.eyebrow}
            titleLead={t.offers.titleLead}
            titleAccent={t.offers.titleAccent}
          />

          <div className="mt-[2.5rem] grid gap-[1.25rem] lg:grid-cols-2 lg:gap-[1.25rem]">
            {t.offers.items.map((offer, index) => (
              <OfferCard key={offer.routeKey} offer={offer} index={index} lang={lang} moreLabel={t.offers.more} />
            ))}
          </div>
        </Section>

        <Section>
          <CtaBlock {...t.cta} lang={lang} />
        </Section>
      </main>
    </>
  );
}
