/**
 * Sector filter toggles for the secondary references mosaic — purely
 * presentational, filtering happens in the caller. These are exclusive
 * filter buttons, not content tabs with separate panels, so they use the
 * plain toggle-button ARIA pattern (aria-pressed) rather than role="tab" —
 * mixing both on one control is redundant and not a standard pattern.
 */
const SectorFilter = ({ sectors, labels, active, onChange }) => (
  <div role="group" aria-label={labels.ariaLabel} className="flex flex-wrap gap-2">
    {["all", ...sectors].map((sector) => (
      <button
        key={sector}
        type="button"
        aria-pressed={active === sector}
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
