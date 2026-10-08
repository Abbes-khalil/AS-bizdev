/**
 * Explicitly mark the English route subtree in the server-rendered HTML.
 * This overrides the shared French root language for all page content while
 * preserving static generation.
 */
export default function EnglishLayout({ children }) {
  return (
    <div lang="en" dir="ltr">
      {children}
    </div>
  );
}

