import PageHero from "../components/PageHero";
import Team from "../components/Team";
import { useT } from "../i18n";

export default function WhoIsWho() {
  const { hero } = useT("team");

  return (
    <main>
      <PageHero layout="split" {...hero} />
      <Team />
    </main>
  );
}
