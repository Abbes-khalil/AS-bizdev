/**
 * Crops the shared map viewBox to the bounding box of the given countries'
 * positions (with padding), so a zone page can centre on just its markets
 * while reusing the exact same generated country shapes and coordinate
 * space as the full Africa + Middle East map — no separate map asset per
 * zone. Takes country objects (each with a `.position` from countries.js),
 * not bare keys, so there's one join, not one per caller.
 */
export const viewBoxFor = (countries, padding = 130) => {
  const points = countries.map((country) => country.position).filter(Boolean);
  if (points.length === 0) return null;

  const xs = points.map((p) => p.cx);
  const ys = points.map((p) => p.cy);
  const minX = Math.min(...xs) - padding;
  const minY = Math.min(...ys) - padding;
  const maxX = Math.max(...xs) + padding;
  const maxY = Math.max(...ys) + padding;

  return `${minX} ${minY} ${maxX - minX} ${maxY - minY}`;
};

/**
 * Single source of truth for placing a marker over the map: converts an SVG
 * point into a `left`/`top` percentage of *whichever* viewBox is currently
 * on screen — the full map, or a zone page's cropped one from `viewBoxFor`.
 * Every page renders markers through this function (via `MarketsMap`), so
 * there is nowhere else a marker's position gets computed or duplicated.
 */
export const getMarkerPosition = ({ x, y }, [vbMinX, vbMinY, vbWidth, vbHeight]) => ({
  left: `${((x - vbMinX) / vbWidth) * 100}%`,
  top: `${((y - vbMinY) / vbHeight) * 100}%`,
});
