import { useEffect, useState } from "react";

import { getPublishedArticles } from "../services/articles";

/** Fetches all published articles once (language-independent, bilingual rows). */
export default function useArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    getPublishedArticles()
      .then((data) => {
        if (!cancelled) setArticles(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { articles, loading, error };
}
