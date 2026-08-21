import BulletList from "@/components/ui/BulletList";
import CtaBlock from "@/components/ui/CtaBlock";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StepList from "@/components/ui/StepList";
import TextCard from "@/components/ui/TextCard";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("network", "ar");

// ============================================
// المحتوى المعروض — التعديل هنا (العناوين، النصوص، الأزرار)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "شبكتنا",
    titleLead: "لا نبدأ",
    titleAccent: "من الصفر.",
    intro:
      "تراكم AS Biz Dev تدريجياً معرفة بالشركات وصناع القرار والقطاعات والشبكات المحلية من أجل تسريع التطوير التجاري لعملائها.",
  },

  base: {
    eyebrow: "شبكة مهنية منظمة",
    titleLead: "قاعدة خاصة،",
    titleAccent: "وبيئة علاقات موسّعة.",
    intro:
      "تمتلك AS Biz Dev قاعدة خاصة منظمة تضم قرابة 7000 جهة اتصال مهنية، مكمّلة بشبكتها الشخصية وعلاقاتها المهنية ومختلف المنظومات التي تشارك فيها الشركة. تمثّل بيئة العلاقات الموسّعة هذه آلاف صناع القرار وجهات الاتصال المهنية القابلة للتعبئة أو التحديد حسب الأسواق والمشاريع. لا يتعلق الأمر بقائمة بريدية بسيطة، بل برأسمال علاقاتي ومعلوماتي منظم.",
    functionsTitle: "الوظائف الممثَّلة",
    functions: [
      "الإدارة العامة",
      "الإدارة التجارية",
      "إدارة التصدير",
      "تطوير الأعمال",
      "المشتريات",
      "الإدارة الصناعية",
      "إدارة الفروع",
      "الإدارة التشغيلية",
    ],
  },

  pillars: {
    eyebrow: "ما يتغيّر",
    titleLead: "جودة الشبكة، أكثر من",
    titleAccent: "عدد جهات الاتصال.",
    items: [
      {
        title: "الوصول إلى المستوى المناسب لاتخاذ القرار",
        body: "لا تكمن قيمة القاعدة التجارية في عدد جهات الاتصال فقط. تُعطي AS Biz Dev الأولوية لتحديد الأشخاص الذين يملكون قدرة فعلية على اتخاذ القرار أو التوصية أو الشراء أو التوزيع أو تطوير شراكة أو فتح الوصول إلى سوق ما.",
      },
      {
        title: "معرفة تجمع بين السوق والقطاع وصانع القرار",
        body: "الدولة × القطاع × الشركة × الوظيفة × مستوى القرار. على سبيل المثال: تحديد صناع قرار صناعيين في المغرب، البحث عن موزعين تقنيين في ساحل العاج، تحديد فاعلين في القطاع الغذائي بتونس، البحث عن شركاء في السنغال، أو تحديد محاورين تجاريين في الإمارات العربية المتحدة.",
      },
    ],
  },

  ecosystem: {
    eyebrow: "منظومة شبكات مكمّلة",
    titleLead: "شبكات تكمّل",
    titleAccent: "معرفتنا بالأسواق.",
    intro:
      "لا تعتمد AS Biz Dev فقط على قاعدة اتصالاتها الخاصة. نعبّئ أيضاً شبكات مهنية واقتصادية ومؤسسية مختلفة.",
    items: [
      {
        title: "APM — جمعية تقدّم الإدارة",
        body: "شبكة فرنسية لرؤساء الشركات، منظمة حول نوادٍ تتيح للمدراء التكوّن وتبادل الخبرات فيما بينهم. بالنسبة لـ AS Biz Dev، تتيح هذه البيئة التواصل مع منظومة من مدراء الشركات الصغيرة والمتوسطة والكبرى المواجَهين بإشكاليات ملموسة في النمو والتنظيم والتطوير التجاري.",
      },
      {
        title: "GIZ — الوكالة الألمانية للتعاون الدولي",
        body: "الوكالة الألمانية للتعاون الدولي، حاضرة بقوة في العديد من الدول الناشئة ولا سيما في أفريقيا، في برامج التنمية الاقتصادية والتعاون والتكوين وهيكلة المنظومات المحلية. تعتمد AS Biz Dev على شبكات ومنظومات متطورة حول GIZ لإثراء معرفتها بالفاعلين المحليين.",
      },
      {
        title: "Business France",
        body: "الوكالة العمومية الفرنسية المكلفة على وجه الخصوص بمرافقة الشركات الفرنسية في تطورها الدولي، بفرق وشبكات في العديد من الدول. تتعاون AS Biz Dev مع Business France وهي مُدرجة ضمن آلياتها وشبكاتها، ما يكمّل قدرتنا على مرافقة الشركات الصغيرة والمتوسطة في مساعيها للتطور الدولي.",
      },
    ],
  },

  difference: {
    eyebrow: "ما يميّزنا",
    titleLead: "تحويل الشبكة",
    titleAccent: "إلى أعمال تجارية.",
    intro:
      "لا قيمة لقاعدة جهات اتصال إلا إذا مكّنت من توليد إجراءات تجارية مناسبة بشكل أسرع.",
    steps: [
      { title: "المعرفة", body: "فهم السوق وفاعليه وقطاعاته وقنوات توزيعه وخصوصياته المحلية." },
      { title: "التحديد", body: "إيجاد الشركات وصناع القرار والعملاء المحتملين والموزعين والشركاء ومدمجي الأنظمة." },
      { title: "الربط", body: "تعبئة قاعدة اتصالاتنا وشبكتنا المهنية وشبكة مدرائنا وشركائنا المحليين، ومنظومات APM وGIZ وBusiness France وغيرها من الشبكات ذات الصلة." },
      { title: "التنفيذ", body: "الانتقال إلى الفعل: البحث عن العملاء المحتملين، التواصل الأول، المواعيد، البحث عن شركاء، تطوير الحسابات، تنشيط الموزعين، متابعة مسار الفرص التجارية، توقعات المبيعات، الإدارة التجارية." },
    ],
  },

  closing: {
    quote: "نحن لا نبيع دفتر عناوين.",
    body: "نستخدم معرفة الأسواق والبيانات والشبكات المهنية وقدرتنا على التنفيذ لتسريع التطوير التجاري لعملائنا. لا تكمن قيمتنا فقط في قدرتنا على تحديد المحاورين المناسبين. بل تكمن في قدرتنا على تحويل هذه الروابط إلى إجراءات تجارية وفرص وتطوير للأسواق.",
  },

  cta: {
    eyebrow: "الذهاب أبعد",
    heading: "لنتحدث عن سوقكم",
    label: "تواصلوا معنا",
  },
};

// ============================================
// المكوّن — تخطيط صفحة شبكتنا، لا تُعدَّل إلا لسبب تقني
// ============================================
export default function NetworkAr() {
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
            eyebrow={t.base.eyebrow}
            titleLead={t.base.titleLead}
            titleAccent={t.base.titleAccent}
            intro={t.base.intro}
          />

          <RevealOnScroll variant="up" className="mt-[1.75rem] max-w-2xl">
            <h3 className="font-display text-[1rem] font-semibold tracking-[-0.02em] text-navy">
              {t.base.functionsTitle}
            </h3>
            <BulletList items={t.base.functions} columns={2} className="mt-[1.25rem]" />
          </RevealOnScroll>
        </Section>

        <Section>
          <SectionHeading
            eyebrow={t.pillars.eyebrow}
            titleLead={t.pillars.titleLead}
            titleAccent={t.pillars.titleAccent}
          />

          <div className="mt-[2.5rem] grid gap-[1.25rem] md:grid-cols-2">
            {t.pillars.items.map((item, index) => (
              <TextCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </Section>

        <Section tone="alt">
          <SectionHeading
            eyebrow={t.ecosystem.eyebrow}
            titleLead={t.ecosystem.titleLead}
            titleAccent={t.ecosystem.titleAccent}
            intro={t.ecosystem.intro}
          />

          <div className="mt-[2.5rem] grid gap-[1.25rem] md:grid-cols-3">
            {t.ecosystem.items.map((item, index) => (
              <TextCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow={t.difference.eyebrow}
            titleLead={t.difference.titleLead}
            titleAccent={t.difference.titleAccent}
            intro={t.difference.intro}
          />

          <div className="mt-[2.5rem]">
            <StepList steps={t.difference.steps} />
          </div>
        </Section>

        <Section tone="navy">
          <RevealOnScroll variant="up" className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[1.75rem] font-semibold italic leading-[1.3] tracking-[-0.02em] text-white lg:text-[2.25rem]">
              {t.closing.quote}
            </p>
            <p className="mt-[1.5rem] text-[1.0625rem] leading-[1.7] text-white/75">
              {t.closing.body}
            </p>
          </RevealOnScroll>
        </Section>

        <Section>
          <CtaBlock {...t.cta} lang={lang} />
        </Section>
      </main>
    </>
  );
}
