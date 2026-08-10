import { MARKET_POSITIONS } from "../data/marketsMapData";

/**
 * Crops the shared map viewBox to the bounding box of the given market keys
 * (with padding), so a zone page can centre on just its markets while
 * reusing the exact same generated country shapes and coordinate space as
 * the full Africa + Middle East map — no separate map asset per zone.
 */
export const viewBoxFor = (keys, padding = 130) => {
  const points = keys.map((key) => MARKET_POSITIONS[key]).filter(Boolean);
  if (points.length === 0) return null;

  const xs = points.map((p) => p.cx);
  const ys = points.map((p) => p.cy);
  const minX = Math.min(...xs) - padding;
  const minY = Math.min(...ys) - padding;
  const maxX = Math.max(...xs) + padding;
  const maxY = Math.max(...ys) + padding;

  return `${minX} ${minY} ${maxX - minX} ${maxY - minY}`;
};
