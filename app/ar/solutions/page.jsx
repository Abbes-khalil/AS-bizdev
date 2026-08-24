import CtaBlock from "@/components/ui/CtaBlock";
import OfferCard from "@/components/ui/OfferCard";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("solutions", "ar");

// ============================================
// المحتوى المعروض — التعديل هنا (العناوين، النصوص، الأزرار)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "حلولنا",
    titleLead: "عرضان،",
    titleAccent: "ميدان واحد.",
    intro:
      "تتدخل AS Biz Dev في لحظتين من الحياة التجارية لأي منطقة: عندما يجب تطويرها، وعندما يجب إدارتها. لا شيء آخر.",
  },
  items: [
    {
      routeKey: "acceleration",
      eyebrow: "العرض 01",
      title: "تسريع التطوير التجاري",
      body: "فتح سوق جديد، تحديد العملاء، البحث عن موزعين أو وكلاء، إعادة إطلاق منطقة غير مطوّرة بما فيه الكفاية، إطلاق عرض جديد. نصل إلى حد الفعل التجاري وخلق فرص ملموسة.",
      bullets: [
        "تأهيل السوق والإمكانات الفعلية",
        "تحديد العملاء والموزعين والشركاء",
        "البحث عن العملاء المحتملين، التواصل الأول، المواعيد",
        "هيكلة مسار الفرص التجارية وخطة عمل لكل سوق",
      ],
    },
    {
      routeKey: "pilotage",
      eyebrow: "العرض 02",
      title: "إدارة تجارية خارجية للتصدير",
      body: "لديكم موزعون أو وكلاء أو عملاء محليون أو إمكانات محددة، لكن مواردكم الداخلية محدودة. نتولى كل أو جزءاً من الإدارة التجارية للمنطقة الموكلة إلينا.",
      bullets: [
        "تنشيط وتطوير شبكة التوزيع",
        "إدارة مسار الفرص التجارية والفرص القائمة",
        "توحيد توقعات المبيعات",
        "تقارير حول النشاط والنتائج والمخاطر",
      ],
    },
  ],
  more: "عرض التفاصيل",
  cta: {
    eyebrow: "الذهاب أبعد",
    heading: "في أي سوق ترغبون في التقدم؟",
    label: "لنتحدث عن سوقكم",
  },
};

// ============================================
// المكوّن — تخطيط صفحة الحلول، لا تُعدَّل إلا لسبب تقني
// ============================================
export default function SolutionsAr() {
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
          <div className="grid gap-[1.25rem] lg:grid-cols-2 lg:gap-[1.25rem]">
            {t.items.map((offer, index) => (
              <OfferCard
                key={offer.routeKey}
                offer={offer}
                index={index}
                lang={lang}
                moreLabel={t.more}
                variant={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>

          <CtaBlock {...t.cta} lang={lang} className="mt-[3.25rem]" />
        </Section>
      </main>
    </>
  );
}
