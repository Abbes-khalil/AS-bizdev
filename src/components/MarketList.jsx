import ArrowIcon from "./ArrowIcon";
import RevealOnScroll from "./RevealOnScroll";
import RouteLink from "./RouteLink";
import { PLACEHOLDER_SLOTS } from "../data/countries";
import { useLang } from "../i18n/LanguageProvider";

const CARD =
  "flex h-full flex-col rounded-card border border-gray-200 bg-white p-[1.75rem] transition-all duration-300";

const CountryCard = ({ country, index, lang, moreLabel }) => (
  <RevealOnScroll
    as="li"
    variant="up"
    delay={0.05}
    index={index}
    className={`${CARD} hover:-translate-y-1 hover:border-navy hover:shadow-lift`}
  >
    <h3 className="font-display text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.02em] text-navy">
      {country.name[lang] ?? country.name.fr}
    </h3>

    {country[lang]?.intro && (
      <p className="mt-[0.75rem] text-[0.9375rem] leading-[1.6] text-gray-700">
        {country[lang].intro}
      </p>
    )}

    <RouteLink
      routeKey="country"
      params={{ slug: country.slug[lang] ?? country.slug.fr }}
      className="btn-ghost mt-[1.5rem] self-start"
    >
      {moreLabel}
      <ArrowIcon />
    </RouteLink>
  </RevealOnScroll>
);

/**
 * Empty state. The brief forbids naming a market before AS Biz Dev confirms
 * it (§6, §16), so an unvalidated zone shows explicit slots rather than
 * plausible-looking countries or an empty page.
 */
const PlaceholderCard = ({ label, index }) => (
  <RevealOnScroll
    as="li"
    variant="up"
    delay={0.05}
    index={index}
    className={`${CARD} border-dashed bg-transparent`}
  >
    <p className="font-display text-[1rem] font-medium leading-[1.4] tracking-[-0.02em] text-gray-400">
      {label}
    </p>
  </RevealOnScroll>
);

/**
 * The countries of one zone — or the placeholder slots while the list is
 * still being validated.
 */
const MarketList = ({ countries, empty, moreLabel }) => {
  const { lang } = useLang();

  return (
    <>
      <ul role="list" className="grid gap-[1.25rem] md:grid-cols-2 lg:grid-cols-3">
        {countries.length > 0
          ? countries.map((country, index) => (
              <CountryCard
                key={country.key}
                country={country}
                index={index}
                lang={lang}
                moreLabel={moreLabel}
              />
            ))
          : Array.from({ length: PLACEHOLDER_SLOTS }, (_, index) => (
              <PlaceholderCard key={index} label={empty.title} index={index} />
            ))}
      </ul>

      {countries.length === 0 && (
        <RevealOnScroll variant="up" className="mt-[2rem]">
          <p className="max-w-2xl text-[1rem] leading-[1.7] text-gray-700">
            {empty.body}
          </p>
        </RevealOnScroll>
      )}
    </>
  );
};

export default MarketList;
