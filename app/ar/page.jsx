import Image from "next/image";

import ArrowIcon from "@/components/ui/ArrowIcon";
import MotionCta from "@/components/ui/MotionCta";
import OfferCard from "@/components/ui/OfferCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StepList from "@/components/ui/StepList";
import { ASSET } from "@/lib/siteData";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";
import { ROUTES } from "@/lib/routes";

export const generateMetadata = () => buildMetadata("home", "ar");

// ============================================
// المحتوى المعروض — التعديل هنا (العناوين، النصوص، الأزرار)
// ============================================
const CONTENT = {
  hero: {
    titleLead: "سرّعوا تطوير أعمالكم التجارية في",
    titleAccent: "أفريقيا والشرق الأوسط",
    paragraphs: [
      "ترافق AS Biz Dev الشركات الصغيرة والمتوسطة في فتح وتطوير وإدارة أسواقها التصديرية.",
      "من البحث عن العملاء والموزعين إلى الإدارة التجارية الخارجية الكاملة لنشاطكم المحلي.",
    ],
    ctaPrimary: "لنتحدث عن سوقكم",
    ctaSecondary: "اكتشفوا نهجنا",
    mapAlt: "خريطة مناطق تدخل AS Biz Dev في أفريقيا والشرق الأوسط.",
  },

  twoWays: {
    eyebrow: "طريقتان للعمل مع AS Biz Dev",
    titleLead: "تطوير سوق، أو",
    titleAccent: "إدارة نشاطه.",
    intro:
      "نتدخل في لحظتين مختلفتين من الحياة التجارية لأي منطقة. يمكن الجمع بين العرضين أو اختيار أحدهما بشكل منفصل.",
    more: "اعرف المزيد",
    items: [
      {
        routeKey: "acceleration",
        label: "تسريع سوق",
        body: "ترغبون في دخول سوق جديد، تطوير منطقة، تحديد عملاء أو بناء شبكة توزيع. تحوّل AS Biz Dev طموحكم التنموي إلى خطة عمل تجارية وترافق تنفيذها ميدانياً.",
      },
      {
        routeKey: "pilotage",
        label: "تفويض الإدارة التجارية",
        body: "لديكم بالفعل عملاء أو موزعون أو فرص، لكن تنقصكم الموارد لتنشيط وتطوير نشاطكم بفعالية. تتولى AS Biz Dev كل أو جزءاً من الإدارة التجارية للمنطقة: الموزعون، مسار الفرص التجارية، التوقعات، خطط العمل والتقارير.",
      },
    ],
  },

  approach: {
    eyebrow: "ما يميّزنا",
    titleLead: "استراتيجية",
    titleAccent: "وتنفيذ.",
    intro:
      "لا نكتفي بوضع استراتيجية أو تسليم توصيات. حسب احتياجات الشركة، نحدد الفرص، نبحث عن الشركاء المحليين، نطوّر الأسواق ثم نضمن على المدى الطويل الإدارة التجارية للمنطقة الموكلة إلينا.",
    steps: [
      { title: "الفهم", body: "الإمكانات الفعلية للسوق، المنافسة القائمة، مسارات اتخاذ القرار." },
      { title: "تحديد الأولويات", body: "الأهداف والحسابات والقنوات المختارة، وتسلسل مقاربة السوق." },
      { title: "التحرك", body: "التواصل الأول، البحث عن العملاء المحتملين، المواعيد، البحث عن موزعين." },
      { title: "الإدارة", body: "مسار الفرص التجارية، خطط العمل، تنشيط الشركاء المحليين." },
      { title: "القياس", body: "توقعات المبيعات، الفوارق، النتائج، الخطوات القادمة." },
    ],
  },

  markets: {
    eyebrow: "الأسواق",
    titleLead: "أسواق محددة بالاسم،",
    titleAccent: "لا خريطة عالمية.",
    intro:
      "لا ندّعي حضوراً عالمياً. نعمل على أسواق محددة في أفريقيا والشرق الأوسط، ونذكرها بالاسم.",
    cta: "عرض الأسواق",
  },

  partner: {
    eyebrow: "كن شريكاً",
    titleLead: "أنتم تعرفون سوقكم.",
    titleAccent: "لنبنِ الفرص معاً.",
    intro:
      "تبني AS Biz Dev شبكة مستهدفة من الشركاء التجاريين والقطاعيين في أسواقها ذات الأولوية بأفريقيا والشرق الأوسط.",
    cta: "سجّل ملفي",
  },
};

// ============================================
// المكوّن — تخطيط الصفحة الرئيسية، لا تُعدَّل إلا لسبب تقني
// ============================================
export default function HomePageAr() {
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
        {/* HERO — who we help, what we do, where, in one screen (§7). */}
        <section className="relative overflow-hidden bg-white">
          <div className="relative container-x pt-8 pb-12 md:pt-10 md:pb-14 lg:pt-14 lg:pb-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.9fr_1fr] lg:gap-10 xl:gap-14">
              <RevealOnScroll variant="up">
                <h1 className="font-display max-w-xl text-[2.5rem] font-semibold leading-[1.15] tracking-tight text-navy md:text-[3rem] lg:max-w-none lg:text-[2.5rem] xl:text-[2.75rem]">
                  <span className="block text-balance">{t.hero.titleLead}</span>
                  <span className="block text-balance italic text-orange">
                    {t.hero.titleAccent}
                  </span>
                </h1>

                {t.hero.paragraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={`${index === 0 ? "mt-8" : "mt-4"} max-w-xl text-[1.0625rem] leading-[1.65] text-gray-700 text-pretty`}
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <MotionCta href={ROUTES.contact[lang]} className="btn-primary">
                    {t.hero.ctaPrimary}
                    <ArrowIcon />
                  </MotionCta>
                  <MotionCta href={ROUTES.solutions[lang]} className="btn-secondary">
                    {t.hero.ctaSecondary}
                  </MotionCta>
                </div>
              </RevealOnScroll>

              <RevealOnScroll variant="right" delay={0.15} className="relative">
                <div className="relative mx-auto aspect-square w-full">
                  <Image
                    src={ASSET + "maps.webp"}
                    alt={t.hero.mapAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* TWO WAYS TO WORK WITH US — the fork the whole site is built on. */}
        <Section tone="alt">
          <SectionHeading
            eyebrow={t.twoWays.eyebrow}
            titleLead={t.twoWays.titleLead}
            titleAccent={t.twoWays.titleAccent}
            intro={t.twoWays.intro}
          />

          <div className="mt-[2.5rem] grid gap-[1.25rem] lg:grid-cols-2 lg:gap-[1.25rem]">
            {t.twoWays.items.map((offer, index) => (
              <OfferCard
                key={offer.routeKey}
                offer={offer}
                index={index}
                lang={lang}
                moreLabel={t.twoWays.more}
              />
            ))}
          </div>
        </Section>

        {/* STRATEGY + EXECUTION (§5). */}
        <Section>
          <SectionHeading
            eyebrow={t.approach.eyebrow}
            titleLead={t.approach.titleLead}
            titleAccent={t.approach.titleAccent}
            intro={t.approach.intro}
          />

          <div className="mt-[2.5rem]">
            <StepList steps={t.approach.steps} columns={5} />
          </div>
        </Section>

        {/* MARKETS — named markets, never a world map (§6). */}
        <Section tone="navy">
          <div className="grid items-end gap-[1.25rem] lg:grid-cols-[1.4fr_0.6fr]">
            <RevealOnScroll variant="up">
              <p className="eyebrow text-orange">{t.markets.eyebrow}</p>
              <h2 className="mt-4 font-display display-md font-semibold tracking-tight text-white text-balance">
                {t.markets.titleLead}{" "}
                <span className="italic text-orange">
                  {t.markets.titleAccent}
                </span>
              </h2>
              <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.7] text-white/75">
                {t.markets.intro}
              </p>
            </RevealOnScroll>

            <RevealOnScroll variant="up" delay={0.1} className="lg:justify-self-end">
              <MotionCta href={ROUTES.markets[lang]} className="btn-primary">
                {t.markets.cta}
                <ArrowIcon />
              </MotionCta>
            </RevealOnScroll>
          </div>
        </Section>

        {/* PARTNER NETWORK (§11). */}
        <Section tone="alt">
          <div className="grid items-end gap-[1.25rem] lg:grid-cols-[1.4fr_0.6fr]">
            <SectionHeading
              eyebrow={t.partner.eyebrow}
              titleLead={t.partner.titleLead}
              titleAccent={t.partner.titleAccent}
              intro={t.partner.intro}
            />

            <RevealOnScroll variant="up" delay={0.1} className="lg:justify-self-end">
              <MotionCta href={ROUTES.becomePartner[lang]} className="btn-navy">
                {t.partner.cta}
                <ArrowIcon />
              </MotionCta>
            </RevealOnScroll>
          </div>
        </Section>
      </main>
    </>
  );
}
