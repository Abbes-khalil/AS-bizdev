import AsBizDevEdge from "@/components/references/AsBizDevEdge";
import CtaBlock from "@/components/ui/CtaBlock";
import NetworkEcosystem from "@/components/references/NetworkEcosystem";
import PageHero from "@/components/ui/PageHero";
import ReferencesSection from "@/components/references/ReferencesSection";
import Section from "@/components/ui/Section";
import { interpolate } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { organisationJsonLd } from "@/lib/seo/headTags";
import { NETWORK_STATS, REFERENCES, SECTORS } from "@/app/nos-partenaires/_components/PartnersContent.data";

export const generateMetadata = () => buildMetadata("partners", "ar");

/**
 * `edge.blocks[0].body` carries a `{contactsPhrase}` token, interpolated
 * below from `NETWORK_STATS.contactsCount` (PartnersContent.data.js) —
 * never hardcode a contact count back into that string.
 *
 * The references themselves (clients, network institutions, partners —
 * name, description, logo, sectors, all in one object per entry) stay in
 * `PartnersContent.data.js`, kept separate on purpose: it's a scalable
 * dataset (filterable, sortable, per-entry `isPublished`), not page copy.
 */
// ============================================
// المحتوى المعروض — التعديل هنا (العناوين، النصوص، التسميات)
// ============================================
const CONTENT = {
  hero: {
    eyebrow: "المراجع والمنظومة",
    titleLead: "وثقوا",
    titleAccent: "بنا.",
    intro:
      "تلجأ إلينا الشركات الصغيرة والمتوسطة والكبرى والمجموعات الصناعية والمؤسسات لتسريع تطوير أعمالها التجارية وهيكلة أسواقها وتحويل فرصها إلى نتائج. تتدخل AS Biz Dev لدى شركات مختلفة الأحجام والقطاعات، مع تخصص قوي في البيئات الصناعية والتكنولوجية وB2B.",
  },
  sectorLabels: {
    ariaLabel: "التصفية حسب القطاع",
    all: "الكل",
    industrie: "الصناعة",
    automobile: "السيارات",
    technologies: "التكنولوجيا",
    distribution: "التوزيع",
    sante: "الصحة",
    transport: "النقل",
    services: "الخدمات",
  },
  referencesSection: {
    title: "مراجع العملاء",
    intro:
      "شركات عملت معها AS Biz Dev مباشرة، في إطار مهام تسريع التطوير التجاري أو التطور الدولي أو البحث عن شركاء أو الإدارة التجارية الخارجية.",
    featuredLabel: "المراجع الرئيسية",
    moreLabel: "مراجع أخرى",
  },
  groupLabel: "علامة",
  groupsLabel: "علامات مرتبطة",
  networkSection: {
    eyebrow: "منظومة شبكات مكمّلة",
    title: "المنظومات والشبكات",
    intro:
      "تعتمد AS Biz Dev أيضاً على عدة شبكات مهنية واقتصادية ومؤسسية تكمّل قاعدة اتصالاتنا الخاصة وتعزز معرفتنا بالأسواق.",
    partnersIntro:
      "منظومة من الشركاء القادرين على تقديم خبرات مكمّلة حسب المشاريع والأسواق.",
  },
  categoryLabel: "الفئة",
  labels: {
    client: "مرجع عميل",
    network: "شبكة ومؤسسة",
    partner: "شريك",
  },
  websiteLabel: "الموقع الإلكتروني",
  logoAlt: "شعار {name}",
  categories: {
    industry: { title: "الصناعة / التطوير التجاري" },
    consulting: {
      title: "الاستشارات / التدريب على تطوير المؤسسات",
    },
  },
  edge: {
    eyebrow: "أبعد من المراجع",
    titleLead: "مراجع، لكن قبل كل شيء",
    titleAccent: "قدرة على الفعل.",
    intro:
      "تشكّل شبكتنا ومراجعنا نقطة انطلاق، لا غاية في حد ذاتها. تجمع AS Biz Dev بين معرفة الأسواق والوصول إلى صناع القرار والشبكات المهنية والمؤسسية وقدرة التنفيذ التجاري من أجل تسريع تطور عملائها.",
    blocks: [
      {
        heading: "شبكة خاصة منظمة",
        body: "تمتلك AS Biz Dev قاعدة خاصة من {contactsPhrase}، تغطي عدة آلاف من الشركات. تُكمَّل هذه القاعدة بشبكتنا الشخصية وبمختلف المنظومات التي نشارك فيها.",
      },
      {
        heading: "حضور قوي لصناع القرار",
        body: "تضم شبكتنا العديد من المحاورين الذين يشغلون مناصب اتخاذ القرار. لا تقوم قيمة AS Biz Dev إذاً فقط على عدد جهات الاتصال، بل على القدرة على تحديد المستويات المناسبة لاتخاذ القرار والوصول إليها.",
        list: [
          "الإدارة العامة",
          "الإدارة التجارية",
          "إدارة التصدير",
          "تطوير الأعمال",
          "المشتريات",
          "الإدارة الصناعية",
          "إدارة الفروع",
        ],
      },
      {
        heading: "توجّه صناعي وB2B قوي",
        body: "توضح المراجع المقدَّمة على وجه الخصوص معرفتنا بالبيئات التالية.",
        list: [
          "الصناعة",
          "المعدات التقنية",
          "السيارات",
          "الطيران",
          "الإلكترونيات",
          "التوزيع",
          "النقل واللوجستيات",
          "الصحة",
          "التكنولوجيا",
          "خدمات B2B",
        ],
      },
    ],
  },
  finalCta: {
    eyebrow: "الخطوة القادمة",
    heading: "لنطوّر سوقكم القادم",
    label: "لنتحدث عن سوقكم",
  },
};

const published = (type) =>
  REFERENCES.filter((org) => org.type === type && org.isPublished).sort(
    (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0),
  );

const withLang = (org, lang) => ({
  ...org,
  ...org.content[lang],
  groupBrands: org.group?.brands,
});

const CONTACTS_PHRASE = (count) =>
  count
    ? `قرابة ${count} جهة اتصال مهنية`
    : "آلاف جهات الاتصال المهنية";

// ============================================
// المكوّن — تخطيط صفحة /ar/partners، لا تُعدَّل إلا لسبب تقني
// ============================================
export default function PartnersAr() {
  const lang = "ar";
  const t = CONTENT;

  const clients = published("client").map((org) => withLang(org, lang));
  const networkOrgs = published("network").map((org) => withLang(org, lang));
  const partnerOrgs = published("partner").map((org) => withLang(org, lang));

  const contactsPhrase = CONTACTS_PHRASE(NETWORK_STATS.contactsCount);
  const edge = {
    ...t.edge,
    blocks: t.edge.blocks.map((block, i) =>
      i === 0
        ? { ...block, body: interpolate(block.body, { contactsPhrase }) }
        : block,
    ),
  };

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
          <p className="max-w-2xl text-[1.05rem] leading-relaxed text-gray-700">
            {t.referencesSection.intro}
          </p>

          <div className="mt-10">
            <ReferencesSection
              clients={clients}
              sectors={SECTORS}
              sectorLabels={t.sectorLabels}
              featuredLabel={t.referencesSection.featuredLabel}
              moreLabel={t.referencesSection.moreLabel}
              referencesLabel={t.referencesSection.title}
              logoAlt={t.logoAlt}
              groupLabel={t.groupLabel}
              groupsLabel={t.groupsLabel}
            />
          </div>
        </Section>

        <NetworkEcosystem
          networkOrgs={networkOrgs}
          partnerOrgs={partnerOrgs}
          partnerCategories={t.categories}
          eyebrow={t.networkSection.eyebrow}
          title={t.networkSection.title}
          intro={t.networkSection.intro}
          partnersIntro={t.networkSection.partnersIntro}
          categoryLabel={t.categoryLabel}
          logoAlt={t.logoAlt}
        />

        <Section tone="white">
          <AsBizDevEdge {...edge} />
        </Section>

        <Section tone="alt">
          <CtaBlock {...t.finalCta} lang={lang} />
        </Section>
      </main>
    </>
  );
}
