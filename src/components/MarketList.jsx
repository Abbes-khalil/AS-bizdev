import { motion } from "framer-motion";

import ArrowIcon from "./ArrowIcon";
import RevealOnScroll from "./RevealOnScroll";
import { ASSET } from "./siteData";
import { SUBREGIONS, TIER_LABELS } from "../data/countries";
import { useLang } from "../i18n/LanguageProvider";

/**
 * Every flag is mounted on the same neutral surface, like a placard in a
 * display case — so a country's own colours never clash with the page, and
 * every card reads as one consistent gallery regardless of flag hue.
 *
 * This is the accessible, always-visible equivalent of the map: same
 * markets, same click target (opens the on-page modal), reachable without a
 * mouse and readable by assistive tech or a crawler.
 */
const CountryCard = ({ country, index, lang, onSelect, moreLabel }) => (
  <RevealOnScroll as="li" variant="up" delay={0.05} index={index} className="h-full">
    <button
      type="button"
      onClick={() => onSelect(country.key)}
      className="group flex h-full w-full flex-col overflow-hidden rounded-card border border-gray-200 bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
    >
      <div className="flex h-[9rem] w-full items-center justify-center bg-surface-alt">
        <motion.div
          whileHover={{ scale: 1.08, rotate: -1.5 }}
          transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
          className="h-[3.75rem] w-[5.5rem] overflow-hidden rounded-[0.625rem] bg-white shadow-soft ring-1 ring-black/5"
        >
          <img
            src={`${ASSET}flags/${country.flagCode}.svg`}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col p-[1.75rem]">
        {country.tier && TIER_LABELS[country.tier] && (
          <span className="font-display text-[0.65rem] font-medium uppercase tracking-widest text-gray-400">
            {TIER_LABELS[country.tier][lang] ?? TIER_LABELS[country.tier].fr}
          </span>
        )}

        <h3 className="mt-2 font-display text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.02em] text-navy">
          {country.name[lang] ?? country.name.fr}
        </h3>

        {country.intro?.[lang] && (
          <p className="mt-[0.75rem] text-[0.9375rem] leading-[1.6] text-gray-700">
            {country.intro[lang]}
          </p>
        )}

        <span className="btn-ghost pointer-events-none mt-[1.5rem] self-start">
          {moreLabel}
          <ArrowIcon />
        </span>
      </div>
    </button>
  </RevealOnScroll>
);

const CountryGrid = ({ countries, lang, onSelect, moreLabel }) => (
  <ul role="list" className="grid gap-[1.25rem] md:grid-cols-2 lg:grid-cols-3">
    {countries.map((country, index) => (
      <CountryCard
        key={country.key}
        country={country}
        index={index}
        lang={lang}
        onSelect={onSelect}
        moreLabel={moreLabel}
      />
    ))}
  </ul>
);

/**
 * The accessible market list for a page — grouped under each subregion
 * heading present in `countries` (so a zone page naturally shows only its
 * own groups), or a flat grid when `groups` isn't passed. `activeRegion`
 * (from the map's filter chips, when present) dims groups that don't match,
 * so the list and the map stay in sync.
 */
const MarketList = ({ countries, groups, activeRegion = "all", onSelect, moreLabel }) => {
  const { lang } = useLang();

  if (!groups) {
    return <CountryGrid countries={countries} lang={lang} onSelect={onSelect} moreLabel={moreLabel} />;
  }

  return (
    <div className="space-y-[3rem]">
      {SUBREGIONS.map((key) => {
        const group = countries.filter((country) => country.subregion === key);
        if (group.length === 0) return null;

        const copy = groups[key];
        const dimmed = activeRegion !== "all" && activeRegion !== key;

        return (
          <div
            key={key}
            className={`transition-opacity duration-300 ${dimmed ? "opacity-40" : "opacity-100"}`}
          >
            <RevealOnScroll variant="up" className="mb-[1.25rem]">
              <h3 className="font-display text-[1.125rem] font-semibold tracking-[-0.02em] text-navy">
                {copy?.title}
              </h3>
              {copy?.body && (
                <p className="mt-[0.5rem] text-[0.9375rem] leading-[1.6] text-gray-700">
                  {copy.body}
                </p>
              )}
            </RevealOnScroll>

            <CountryGrid countries={group} lang={lang} onSelect={onSelect} moreLabel={moreLabel} />
          </div>
        );
      })}
    </div>
  );
};

export default MarketList;
