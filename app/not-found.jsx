import NotFound from "../src/views/NotFound";
import { organisationJsonLd } from "../src/seo/headTags";
import { SEO_META } from "../src/seo/metadata";

/**
 * Rendered for any URL that matches no route, in either language tree —
 * `NotFound` itself reads the language from the current pathname client-side
 * (see `useLang`), so one file covers both `/whatever` and `/en/whatever`.
 */
export const metadata = {
  title: SEO_META.notFound.fr.title,
  description: SEO_META.notFound.fr.description,
  robots: { index: false, follow: true },
};

export default function NotFoundPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationJsonLd("fr")),
        }}
      />
      <NotFound />
    </>
  );
}
