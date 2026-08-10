/**
 * Sector tabs for the secondary references mosaic — purely presentational,
 * filtering happens in the caller.
 */
const SectorFilter = ({ sectors, labels, active, onChange }) => (
  <div role="tablist" aria-label={labels.all} className="flex flex-wrap gap-2">
    {["all", ...sectors].map((sector) => (
      <button
        key={sector}
        type="button"
        role="tab"
        aria-pressed={active === sector}
        aria-selected={active === sector}
        onClick={() => onChange(sector)}
        className={`rounded-btn px-4 py-2 font-display text-[0.85rem] font-medium transition-colors duration-300 ${
          active === sector
            ? "bg-navy text-white"
            : "bg-white text-gray-600 hover:bg-navy/10 hover:text-navy"
        }`}
      >
        {labels[sector]}
      </button>
    ))}
  </div>
);

export default SectorFilter;
