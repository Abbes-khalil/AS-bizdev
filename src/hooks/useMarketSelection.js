import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { findCountryByKey, findCountryBySlug } from "../data/countries";

/**
 * Shared by every market page (/marches, /marches/afrique,
 * /marches/moyen-orient): opens a market's modal in place, keeps
 * `?country=slug` in the URL for direct links, and cleans it up on close
 * without a full navigation.
 */
export default function useMarketSelection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedKey, setSelectedKey] = useState(null);

  useEffect(() => {
    const slug = searchParams.get("country");
    if (!slug) return;
    const match = findCountryBySlug(slug);
    if (match) setSelectedKey(match.key);
  }, [searchParams]);

  const selectMarket = (key) => {
    setSelectedKey(key);
    const country = findCountryByKey(key);
    setSearchParams(
      (params) => {
        const next = new URLSearchParams(params);
        if (country) next.set("country", country.slug);
        return next;
      },
      { replace: true },
    );
  };

  const closeModal = () => {
    setSelectedKey(null);
    setSearchParams(
      (params) => {
        const next = new URLSearchParams(params);
        next.delete("country");
        return next;
      },
      { replace: true },
    );
  };

  const selectedMarket = selectedKey ? findCountryByKey(selectedKey) : null;

  return { selectedKey, selectedMarket, selectMarket, closeModal };
}
