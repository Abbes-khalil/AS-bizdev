import BulletList from "@/components/ui/BulletList";
import PageHero from "@/components/ui/PageHero";
import PartnerForm from "@/components/forms/PartnerForm";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("becomePartner", "ar");

/**
 * Field and option keys mirror `lib/constants/partnerForm.js`; only labels
 * live here, so the stored payload never depends on the language the
 * visitor filled the form in.
 */
// ============================================
// المحتوى المعروض — التعديل هنا (العناوين، النصوص، حقول النموذج)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "كن شريكاً",
    titleLead: "أنتم تعرفون سوقكم.",
    titleAccent: "لنبنِ الفرص معاً.",
    intro:
      "تبني AS Biz Dev شبكة مستهدفة من الشركاء التجاريين والقطاعيين في أسواقها ذات الأولوية بأفريقيا والشرق الأوسط.",
  },

  intent: {
    eyebrow: "ما يتعلق به الأمر",
    titleLead: "إدراج مهني،",
    titleAccent: "لا شيء آخر.",
    body: "نبحث عن محترفين يمتلكون معرفة فعلية بسوقهم، وشبكة محلية، وقدرة على المساهمة في تطوير الأعمال التجارية للشركات الصغيرة والمتوسطة الراغبة في تطوير نشاطها في بلدهم.",
    notTitle: "هذا الإدراج ليس",
    notItems: [
      "عرض عمل",
      "دليلاً عاماً",
      "وعداً تلقائياً بمهمة",
    ],
  },

  profiles: {
    eyebrow: "الملفات المطلوبة",
    titleLead: "لا نبحث عن",
    titleAccent: "الجميع.",
    items: [
      "مطورو أعمال مستقلون",
      "وكلاء تجاريون",
      "مستشارون تجاريون يمتلكون شبكة محلية",
      "موزعون",
      "مدمجو أنظمة",
      "خبراء قطاعيون",
      "شركات تمثيل تجاري",
      "شركات تمتلك قدرة فعلية على التقديم لدى الجهات الطالبة",
    ],
    note: "يتم تأهيل الملفات حسب الدولة والقطاعات والوظيفة والشبكة والخبرة ونوع العملاء الذين يمكن الوصول إليهم وقدرة التنقيب وقدرة التنشيط التجاري واللغات.",
  },

  form: {
    eyebrow: "النموذج",
    titleLead: "إدراج",
    titleAccent: "ملفي.",
    intro:
      "الحقول المشار إليها بعلامة النجمة ضرورية لتأهيل الملف. يستغرق الأمر حوالي عشر دقائق.",
    submit: "إرسال ملفي",
    submitting: "جارٍ الإرسال…",
    requiredAria: "إلزامي",
    optional: "اختياري",
    consentBefore: "بإرسال هذا النموذج، أوافق على تسجيل بياناتي واستخدامها من قبل AS Biz Dev في إطار إدراج الشركاء، وفقاً لـ",
    consentLink: "سياسة الخصوصية",
    sections: {
      identity: {
        title: "الهوية",
        description: "من أنتم وكيف يمكن التواصل معكم.",
      },
      location: {
        title: "الموقع",
        description: "أين تتمركزون وأين تتدخلون فعلياً.",
      },
      expertise: {
        title: "الخبرة",
        description: "ملفكم، قطاعاتكم وخبرتكم.",
      },
      network: {
        title: "الشبكة التجارية",
        description:
          "مع أي أنواع من العملاء أو المؤسسات تمتلكون شبكة نشطة؟",
      },
      capabilities: {
        title: "القدرات",
        description: "ما يمكنكم تولّيه.",
      },
      presentation: {
        title: "التقديم",
        description:
          "خبرتكم، معرفتكم بالسوق وشبكتكم المهنية.",
      },
    },
    fields: {
      firstName: { label: "الاسم الأول" },
      lastName: { label: "اسم العائلة" },
      company: { label: "الشركة" },
      role: { label: "الوظيفة" },
      email: { label: "البريد الإلكتروني المهني" },
      phone: { label: "الهاتف" },
      linkedin: { label: "لينكدإن", placeholder: "https://linkedin.com/in/…" },
      website: { label: "الموقع الإلكتروني", placeholder: "https://…" },
      baseCountry: { label: "بلد الإقامة أو التمركز" },
      city: { label: "المدينة" },
      coveredCountries: {
        label: "الدول المغطاة فعلياً تجارياً",
        placeholder: "دولة واحدة في كل سطر، أو مفصولة بفواصل.",
      },
      profileType: { label: "ملفكم" },
      sectors: {
        label: "القطاعات التي تتقنونها",
        placeholder:
          "صفوا القطاعات التي تتدخلون فيها فعلياً.",
      },
      experience: { label: "سنوات الخبرة" },
      languages: {
        label: "اللغات المهنية",
        placeholder: "الفرنسية، الإنجليزية، العربية…",
      },
      networkTypes: { label: "أنواع العملاء أو المؤسسات" },
      capabilities: { label: "ما يمكنكم تولّيه" },
      presentation: {
        label: "تقديمكم",
        placeholder:
          "قدّموا خبرتكم ومعرفتكم بالسوق ونوع الشبكة المهنية التي تمتلكونها.",
      },
      references: {
        label: "المراجع والمستندات",
        placeholder:
          "روابط سيرتكم الذاتية، ملف شركتكم، عرض تقديمي أو مراجعكم.",
      },
    },
    options: {
      independentBizDev: "مطور أعمال مستقل",
      salesAgent: "وكيل تجاري",
      salesConsultant: "مستشار تجاري بشبكة محلية",
      distributor: "موزع",
      integrator: "مدمج أنظمة",
      sectorExpert: "خبير قطاعي",
      salesRepresentationCompany: "شركة تمثيل تجاري",
      introductionCapability:
        "قدرة على التقديم لدى الجهات الطالبة",
      industrials: "الصناعيون",
      keyAccounts: "الحسابات الكبرى",
      smes: "الشركات الصغيرة والمتوسطة",
      distributors: "الموزعون",
      integrators: "مدمجو الأنظمة",
      epc: "شركات EPC",
      administrations: "الإدارات",
      institutions: "المؤسسات",
      other: "أخرى",
      prospectIdentification: "تحديد العملاء المحتملين",
      prospecting: "التنقيب",
      appointmentSetting: "تحديد المواعيد",
      commercialRepresentation: "التمثيل التجاري",
      distributorManagement: "تنشيط الموزعين",
      accountDevelopment: "تطوير الحسابات",
      distributorSearch: "البحث عن موزعين",
      opportunityFollowUp: "متابعة الفرص",
      marketWatch: "مراقبة السوق",
      negotiationSupport: "مرافقة المفاوضات",
      lt5: "أقل من 5 سنوات",
      "5to10": "من 5 إلى 10 سنوات",
      "10to20": "من 10 إلى 20 سنة",
      gt20: "أكثر من 20 سنة",
      selectPlaceholder: "اختاروا…",
    },
  },

  errors: {
    required: "هذا الحقل ضروري لتأهيل ملفكم.",
    emailInvalid: "صيغة البريد الإلكتروني غير صحيحة.",
    urlInvalid: "أدخلوا عنواناً يبدأ بـ https://",
    chooseOne: "اختاروا خياراً واحداً على الأقل.",
    tooShort: "بضعة أسطر إضافية ستساعدنا على تحديد ملفكم بشكل أفضل.",
    consent: "موافقتكم ضرورية لتسجيل ملفكم.",
  },

  status: {
    invalid: "يرجى تصحيح الحقول المحددة.",
    submitting: "جارٍ الإرسال…",
    success:
      "شكراً لكم. تم تسجيل ملفكم. سنتواصل معكم إذا توافقت مهمة ما مع سوقكم وشبكتكم.",
    failed:
      "لم يتم إرسال الطلب. راسلونا مباشرة — رسالتكم معبأة مسبقاً بالفعل:",
    failedLink: "فتح في تطبيق البريد",
    emailSubject: "إدراج شريك — asbizdev.com",
  },
};

// ============================================
// المكوّن — تخطيط صفحة كن شريكاً (§11–§13)، لا تُعدَّل إلا لسبب تقني
// ============================================
export default function BecomePartnerAr() {
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
          <div className="grid gap-[1.25rem] lg:grid-cols-2 lg:gap-[3rem]">
            <SectionHeading
              eyebrow={t.intent.eyebrow}
              titleLead={t.intent.titleLead}
              titleAccent={t.intent.titleAccent}
              intro={t.intent.body}
              className=""
            />

            <RevealOnScroll
              variant="up"
              delay={0.1}
              className="rounded-card border border-dashed border-gray-200 p-[2rem]"
            >
              <h3 className="font-display text-[1.125rem] font-semibold tracking-[-0.02em] text-navy">
                {t.intent.notTitle}
              </h3>
              <BulletList
                items={t.intent.notItems}
                marker="cross"
                className="mt-[1.25rem]"
              />
            </RevealOnScroll>
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow={t.profiles.eyebrow}
            titleLead={t.profiles.titleLead}
            titleAccent={t.profiles.titleAccent}
          />

          <RevealOnScroll variant="up" className="mt-[1.75rem]">
            <BulletList items={t.profiles.items} columns={2} />
            <p className="mt-[1.75rem] max-w-3xl text-[0.9375rem] leading-[1.7] text-gray-500">
              {t.profiles.note}
            </p>
          </RevealOnScroll>
        </Section>

        <Section tone="alt" id="formulaire">
          <SectionHeading
            eyebrow={t.form.eyebrow}
            titleLead={t.form.titleLead}
            titleAccent={t.form.titleAccent}
            intro={t.form.intro}
          />

          <RevealOnScroll variant="up" className="mt-[1.75rem]">
            <PartnerForm copy={t} />
          </RevealOnScroll>
        </Section>
      </main>
    </>
  );
}
