import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import ScrollToTop from "@/components/layout/ScrollToTop";

/**
 * Each page renders its own <main>, so the shell only provides the wrapper the
 * skip link targets — `tabIndex={-1}` makes that wrapper focusable so "skip to
 * content" actually moves focus, not just the scroll position. Navbar/Footer
 * sit outside PageTransition so only the routed content fades between pages,
 * not the persistent chrome.
 */
const Layout = ({ children }) => (
  <div className="min-h-screen bg-white font-sans text-ink antialiased">
    <ScrollToTop />
    <Navbar />
    <div id="main" tabIndex={-1} className="pt-[80px] focus:outline-none">
      <PageTransition>{children}</PageTransition>
    </div>
    <Footer />
  </div>
);

export default Layout;
