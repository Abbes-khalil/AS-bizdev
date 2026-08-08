import { useEffect, useState } from "react";

import { getArticleBySlug } from "../services/articles";

/**
 * Fetches a single published article by slug.
 *
 * @returns `{ article, loading, error }` — `article` is `undefined` while
 * loading, `null` once resolved if no matching published article exists.
 */
export default function useArticle(slug) {
  const [article, setArticle] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setArticle(undefined);
    setError(null);

    getArticleBySlug(slug)
      .then((data) => {
        if (!cancelled) setArticle(data);
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
  }, [slug]);

  return { article, loading, error };
}
