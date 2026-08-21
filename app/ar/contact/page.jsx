import { Suspense } from "react";

import ContactForm from "@/components/forms/ContactForm";
import NoScriptContactFallback from "@/components/forms/NoScriptContactFallback";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants/site";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";

export const generateMetadata = () => buildMetadata("contact", "ar");

// ============================================
// المحتوى المعروض — التعديل هنا (العناوين، النصوص، الأزرار، الأخطاء)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "لنبنِ ما هو قادم",
    titleLead: "لنتحدث عن",
    titleAccent: "مجال نموكم",
    titleTail: "القادم.",
    intro:
      "صفوا لنا طموحكم. سيتواصل معكم فريقنا لتنظيم لقاء أولي — في غضون 48 ساعة.",
  },
  form: {
    name: "الاسم",
    firstName: "الاسم الأول",
    email: "البريد الإلكتروني",
    message: "رسالتكم",
    marketPrefill: "السوق المعني:",
    messagePlaceholder: "صفوا مشروعكم، أسواقكم المستهدفة، قيودكم…",
    consentBefore: "بإرسال هذا النموذج، فإنكم توافقون على",
    consentLink: "سياسة الخصوصية",
    submit: "إرسال طلبي",
    submitting: "جارٍ الإرسال…",
    requiredAria: "إلزامي",
  },
  errors: {
    nameRequired: "يرجى إدخال اسمكم.",
    nameShort: "يبدو اسمكم قصيراً جداً.",
    firstNameRequired: "يرجى إدخال اسمكم الأول.",
    firstNameShort: "يبدو اسمكم الأول قصيراً جداً.",
    emailRequired: "عنوان البريد الإلكتروني مطلوب.",
    emailInvalid: "صيغة البريد الإلكتروني غير صحيحة.",
    messageRequired: "صفوا مشروعكم في بضعة أسطر.",
    messageShort: "رسالتكم قصيرة بعض الشيء — 10 أحرف كحد أدنى.",
  },
  status: {
    invalid: "يرجى تصحيح الحقول المحددة.",
    submitting: "جارٍ الإرسال…",
    success: "شكراً لكم! سننظم لقاءً أولياً في غضون 48 ساعة.",
    failed:
      "لم يتم إرسال الرسالة. راسلونا مباشرة — رسالتكم معبأة مسبقاً بالفعل:",
    failedLink: "فتح في تطبيق البريد",
    emailSubject: "طلب تواصل — asbizdev.com",
  },
  aside: {
    eyebrow: "AS Biz Dev",
    heading: "أفريقيا · الشرق الأوسط",
    body: "صفوا لنا سوقكم المستهدف، موزعيكم أو الفرص القائمة حالياً. لقاء أولي، دون أي التزام.",
  },
};

// ============================================
// المكوّن — تخطيط صفحة /ar/contact، لا تُعدَّل إلا لسبب تقني
// ============================================
export default function ContactPageAr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("ar")),
        }}
      />

      <main>
        <PageHero
          className="max-w-4xl"
          {...CONTENT.hero}
          overlay={
            <div
              className="pointer-events-none absolute -end-20 top-0 h-[40rem] w-[40rem] opacity-[0.06] pattern-lines"
              aria-hidden="true"
            />
          }
        />

        <section className="bg-white pb-20 lg:pb-24">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
              <RevealOnScroll variant="up">
                <Suspense fallback={<NoScriptContactFallback lang="ar" />}>
                  <ContactForm lang="ar" copy={CONTENT} />
                </Suspense>
              </RevealOnScroll>

              <RevealOnScroll variant="up" delay={0.15}>
                <aside className="flex flex-col gap-6">
                  <div className="rounded-card bg-navy p-8 text-white">
                    <p className="eyebrow text-orange">{CONTENT.aside.eyebrow}</p>
                    <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                      {CONTENT.aside.heading}
                    </h2>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-white/75">
                      {CONTENT.aside.body}
                    </p>
                    <div className="mt-6 space-y-2">
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        dir="ltr"
                        className="block text-end text-[0.95rem] text-orange link-underline"
                      >
                        {CONTACT_EMAIL}
                      </a>
                      <p dir="ltr" className="block text-end text-[0.95rem] text-orange">
                        {CONTACT_PHONE}
                      </p>
                    </div>
                  </div>
                </aside>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
