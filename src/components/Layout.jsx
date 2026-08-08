import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Each page renders its own <main>, so the shell only provides the wrapper the
 * skip link targets — `tabIndex={-1}` makes that wrapper focusable so "skip to
 * content" actually moves focus, not just the scroll position.
 */
const Layout = ({ children }) => (
  <div className="min-h-screen bg-white font-sans text-ink antialiased">
    <Navbar />
    <div id="main" tabIndex={-1} className="pt-[80px] focus:outline-none">
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
