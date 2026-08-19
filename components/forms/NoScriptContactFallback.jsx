import { CONTACT_EMAIL } from "@/lib/constants/site";

/**
 * Rendered in place of `ContactForm` while its `useSearchParams()` Suspense
 * boundary is unresolved — which, for a visitor with JavaScript disabled, is
 * forever. Without this, that boundary's `fallback={null}` would leave the
 * contact page with no way to reach the company at all.
 */
const NoScriptContactFallback = ({ lang }) => (
  <noscript>
    <p className="rounded-card border border-gray-200 bg-white p-8 text-sm text-gray-700 shadow-soft lg:p-12">
      {lang === "en"
        ? "This form requires JavaScript. You can also reach us directly at "
        : "Ce formulaire nécessite JavaScript. Vous pouvez aussi nous écrire directement à "}
      <a href={`mailto:${CONTACT_EMAIL}`} className="text-navy underline">
        {CONTACT_EMAIL}
      </a>
      .
    </p>
  </noscript>
);

export default NoScriptContactFallback;
