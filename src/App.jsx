import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";
import { LANGS, PATHS, pathFor } from "./constants/routes";
import { LEGACY_REDIRECTS } from "./constants/legacyRedirects";

/** Pages are split per route: a visitor landing on one never downloads the rest. */
const Home = lazy(() => import("./views/Home"));
const Solutions = lazy(() => import("./views/Solutions"));
const Acceleration = lazy(() => import("./views/Acceleration"));
const Pilotage = lazy(() => import("./views/Pilotage"));
const Markets = lazy(() => import("./views/Markets"));
const MarketZone = lazy(() => import("./views/MarketZone"));
const Article = lazy(() => import("./views/Article"));
const About = lazy(() => import("./views/About"));
const Sectors = lazy(() => import("./views/Sectors"));
const Network = lazy(() => import("./views/Network"));
const BecomePartner = lazy(() => import("./views/BecomePartner"));
const Contact = lazy(() => import("./views/Contact"));
const News = lazy(() => import("./views/News"));
const Partners = lazy(() => import("./views/Partners"));
const Policy = lazy(() => import("./views/Policy"));
const NotFound = lazy(() => import("./views/NotFound"));

/** One element per route key; the same element serves both language trees. */
const ELEMENTS = {
  home: <Home />,
  solutions: <Solutions />,
  acceleration: <Acceleration />,
  pilotage: <Pilotage />,
  markets: <Markets />,
  africa: <MarketZone continent="africa" />,
  middleEast: <MarketZone continent="middleEast" />,
  about: <About />,
  sectors: <Sectors />,
  network: <Network />,
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
