/**
 * The shared root layout stays statically renderable and therefore cannot
 * read the request pathname. Mark the complete Arabic route subtree here so
 * crawlers and no-JavaScript clients receive the correct language and reading
 * direction in the server-rendered HTML.
 */
export default function ArabicLayout({ children }) {
  return (
    <div lang="ar" dir="rtl">
      {children}
    </div>
  );
}

