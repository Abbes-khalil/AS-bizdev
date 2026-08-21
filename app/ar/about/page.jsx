import Link from "next/link";

import BulletList from "@/components/ui/BulletList";
import CtaBlock from "@/components/ui/CtaBlock";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Team from "@/app/as-biz-dev/_components/Team";
import TextCard from "@/components/ui/TextCard";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";
import { ROUTES } from "@/lib/routes";

export const generateMetadata = () => buildMetadata("about", "ar");

// ============================================
// المحتوى المعروض — التعديل هنا (العناوين، النصوص، الفريق)
// ============================================
const PHOTOS = {
  stephane: "employe/stephane.webp",
  wafa: "employe/wafa.webp",
  khalil: "employe/khalil.webp",
  kaouther: "employe/kaouther.webp",
  taher: "employe/taher.webp",
  Achwek: "employe/Achwek.jpeg",
};

const CONTENT = {
  hero: {
    eyebrow: "AS Biz Dev",
    titleLead: "تسريع. تطوير.",
    titleAccent: "قيادة.",
    intro:
      "تعمل AS Biz Dev مع الشركات الصغيرة والمتوسطة وشركات B2B، ولا سيما الصناعية منها، التي ترغب في تطوير أو هيكلة أو تعزيز نشاطها التجاري في أسواق مستهدفة بأفريقيا والشرق الأوسط.",
  },

  positioning: {
    eyebrow: "موقعنا",
    titleLead: "لا نتوقف عند",
    titleAccent: "التوصية.",
    intro:
      "ما يميّزنا هو أننا نعمل في آنٍ واحد على تسريع الأعمال التجارية وعلى القيادة التشغيلية لجزء من النشاط التجاري التصديري، على المدى الطويل.",
    doTitle: "ما نقوم به",
    doItems: [
      "تحديد الفرص في سوق مستهدف",
      "البحث عن شركاء محليين وتأهيلهم",
      "التنقيب، تطوير الحسابات والفرص",
      "إدارة شبكة الموزعين على المدى الطويل",
      "قيادة خط الفرص التجارية وتوحيد توقعات المبيعات",
      "إعداد تقارير حول النشاط والنتائج والمخاطر",
    ],
    dontTitle: "ما لا نقوم به",
    dontItems: [
      "بيع استشارات عامة دون تنفيذ فعلي وراءها",
      "ادعاء حضور عالمي لا نملكه",
      "تسليم دراسة تخلص إلى أن سوقاً ما يبدو مثيراً للاهتمام، والتوقف عند ذلك",
    ],
  },

  method: {
    eyebrow: "كيف نعمل",
    titleLead: "الفهم، تحديد الأولويات، التحرك،",
    titleAccent: "القيادة، القياس.",
    intro:
      "نعمل مع فرقكم وشركائكم المحليين على المدى الطويل. المفردات المستخدمة هي تلك المتداولة ميدانياً: الموزعون، الوكلاء، خط الفرص التجارية، التوقعات، الطلبيات، خطط العمل، معدلات التحويل.",
  },

  principles: {
    eyebrow: "طريقة عملنا",
    titleLead: "ثلاثة التزامات",
    titleAccent: "نلتزم بها.",
    items: [
      {
        title: "الوفاء بالكلمة",
        body: "لا وعود متهورة، لا تجاوز للميزانية: يعرف العميل دائماً أين تقف الأمور. نفعل ما نقوله — بما في ذلك الإقرار عندما لا يحقق إجراء ما النتيجة المتوقعة.",
      },
      {
        title: "الالتزام على المدى الطويل",
        body: "إيقاعنا هو إيقاع الميدان والهدف والموعد النهائي. لا نقدّم أمراً واقعاً: بمجرد تأطير المشكلة، نقترح الحل الأكثر موثوقية وننفذه.",
      },
      {
        title: "المسؤولية",
        body: "تسعير عادل، موردون محليون يُدفع لهم في الوقت المحدد، تنقلات محدودة بما هو ضروري. هذه التزامات تشغيلية، وليست موقفاً شكلياً.",
      },
    ],
  },

  expertise: {
    eyebrow: "خبرتنا",
    titleLead: "ما يمكننا القيام به",
    titleAccent: "ميدانياً.",
    items: [
      {
        title: "التنظيم في المراحل الأولى",
        body: "التوريد، التخطيط، الطلب، إدارة المخزون: نقيّم تأثير القرار التجاري على سلسلة المنتج، من المصنع إلى العميل.",
      },
      {
        title: "إبراز العرض",
        body: "دراسة المنافسة والسوق، تموضع المنتج، تخطيط التواصل: نستهدف القنوات التي تصل فعلياً إلى العملاء المحتملين في المنطقة.",
      },
      {
        title: "مرافقة الإدارة",
        body: "النمو التصديري يغيّر التنظيم الداخلي. نرافق الفرق المعنية، وندرّبها عند الحاجة.",
      },
    ],
    sectorsCta: "اطّلع على قطاعاتنا",
  },

  team: {
    sectionTitle: "فريق AS Biz Dev",
    sectionDescription:
      "ملفات ميدانية في خدمة تطوير أعمالكم التجارية في أفريقيا والشرق الأوسط.",
    portraitAlt: "صورة {name}، {role}",
    members: [
      {
        photo: PHOTOS.stephane,
        name: "Stéphane Allain",
        role: "المؤسس",
        bio: "20 عاماً من الخبرة في تحليل وتطوير الأسواق الدولية لمجموعات كبرى.",
      },
      {
        photo: PHOTOS.wafa,
        name: "Wafa Zouaoui",
        role: "مديرة العمليات",
        bio: "19 عاماً من الخبرة في الإدارة التشغيلية والوظيفية في قطاع B2B (السياحة).",
      },
      {
        name: "Achwek Kefifi",
        photo: PHOTOS.Achwek,
        bio: "10 سنوات من الخبرة في التجارة B2B، لا سيما في المغرب العربي الكبير.",
      },
      {
        photo: PHOTOS.khalil,
        name: "Khalil Abbes",
        role: "مسؤول كفاءة المبيعات والذكاء الاصطناعي (Junior)",
      },
      {
        photo: PHOTOS.kaouther,
        name: "Kaouther Bousaidi",
        role: "مساعدة إدارية",
      },
      {
        photo: PHOTOS.taher,
        name: "Taher Kassem",
        role: "المحاسبة والمالية",
      },
    ],
  },

  cta: {
    eyebrow: "الذهاب أبعد",
    heading: "في أي سوق ترغبون في التقدم؟",
    label: "لنتحدث عن سوقكم",
  },
};

// ============================================
// المكوّن — تخطيط صفحة AS Biz Dev، لا تُعدَّل إلا لسبب تقني
// ============================================
export default function AboutAr() {
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
          <SectionHeading
            eyebrow={t.positioning.eyebrow}
            titleLead={t.positioning.titleLead}
            titleAccent={t.positioning.titleAccent}
            intro={t.positioning.intro}
          />

          <div className="mt-[2.5rem] grid gap-[1.25rem] lg:grid-cols-2 lg:gap-[1.25rem]">
            <RevealOnScroll
              variant="left"
              className="rounded-card border border-gray-200 bg-white p-[2rem]"
            >
              <h3 className="font-display text-[1.125rem] font-semibold tracking-[-0.02em] text-navy">
                {t.positioning.doTitle}
              </h3>
              <BulletList items={t.positioning.doItems} className="mt-[1.25rem]" />
            </RevealOnScroll>

            <RevealOnScroll
              variant="right"
              delay={0.1}
              className="rounded-card border border-dashed border-gray-200 p-[2rem]"
            >
              <h3 className="font-display text-[1.125rem] font-semibold tracking-[-0.02em] text-navy">
                {t.positioning.dontTitle}
              </h3>
              <BulletList
                items={t.positioning.dontItems}
                marker="cross"
                className="mt-[1.25rem]"
              />
            </RevealOnScroll>
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow={t.method.eyebrow}
            titleLead={t.method.titleLead}
            titleAccent={t.method.titleAccent}
            intro={t.method.intro}
          />

          <SectionHeading
            eyebrow={t.principles.eyebrow}
            titleLead={t.principles.titleLead}
            titleAccent={t.principles.titleAccent}
            className="mt-[3.25rem] max-w-3xl"
          />

          <div className="mt-[1.75rem] grid gap-[1.25rem] md:grid-cols-3">
            {t.principles.items.map((item, index) => (
              <TextCard
                key={item.title}
                item={item}
                index={index}
                variant={index % 2 === 0 ? "up" : "scale"}
              />
            ))}
          </div>
        </Section>

        <Section tone="alt">
          <SectionHeading
            eyebrow={t.expertise.eyebrow}
            titleLead={t.expertise.titleLead}
            titleAccent={t.expertise.titleAccent}
          />

          <div className="mt-[2.5rem] grid gap-[1.25rem] md:grid-cols-3">
            {t.expertise.items.map((item, index) => (
              <TextCard
                key={item.title}
                item={item}
                index={index}
                variant={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>

          <RevealOnScroll variant="up" className="mt-[1.75rem]">
            <Link href={ROUTES.sectors[lang]} className="btn-ghost">
              {t.expertise.sectorsCta}
            </Link>
          </RevealOnScroll>
        </Section>

        <Team copy={t.team} />

        <Section>
          <CtaBlock {...t.cta} lang={lang} />
        </Section>
      </main>
    </>
  );
}
