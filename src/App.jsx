import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";
import { LANGS, PATHS, pathFor } from "./constants/routes";
import { LEGACY_REDIRECTS } from "./constants/legacyRedirects";

/** Pages are split per route: a visitor landing on one never downloads the rest. */
const Home = lazy(() => import("./pages/Home"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Acceleration = lazy(() => import("./pages/Acceleration"));
const Pilotage = lazy(() => import("./pages/Pilotage"));
const Markets = lazy(() => import("./pages/Markets"));
const Zone = lazy(() => import("./pages/Zone"));
const Country = lazy(() => import("./pages/Country"));
const Article = lazy(() => import("./pages/Article"));
const About = lazy(() => import("./pages/About"));
const BecomePartner = lazy(() => import("./pages/BecomePartner"));
const Contact = lazy(() => import("./pages/Contact"));
const News = lazy(() => import("./pages/News"));
const Partners = lazy(() => import("./pages/Partners"));
const Policy = lazy(() => import("./pages/Policy"));
const NotFound = lazy(() => import("./pages/NotFound"));

/** One element per route key; the same element serves both language trees. */
const ELEMENTS = {
  home: <Home />,
  solutions: <Solutions />,
  acceleration: <Acceleration />,
  pilotage: <Pilotage />,
  markets: <Markets />,
  africa: <Zone zone="africa" />,
  middleEast: <Zone zone="middleEast" />,
  country: <Country />,
  about: <About />,
  becomePartner: <BecomePartner />,
  contact: <Contact />,
  news: <News />,
  article: <Article />,
  partners: <Partners />,
  policy: <Policy />,
};

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {Object.entries(ELEMENTS).flatMap(([key, element]) =>
            LANGS.map((lang) => (
              <Route
                key={`${key}-${lang}`}
                path={PATHS[key][lang]}
                element={element}
              />
            )),
          )}

          {Object.entries(LEGACY_REDIRECTS).map(([from, key]) => (
            <Route
              key={from}
              path={from}
              element={<Navigate to={pathFor(key, "fr")} replace />}
            />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
