"use client";

import { useId } from "react";
import { UserStar } from "lucide-react";

import RevealOnScroll from "@/components/RevealOnScroll";
import { ASSET } from "@/components/siteData";
import { Marquee } from "@/components/ui/marquee";

export interface TeamMember {
  image: string;
  name: string;
  role: string;
}

export interface TeamProps {
  members?: readonly TeamMember[];
  title?: string;
  description?: string;
}

const DEFAULT_TEAM_MEMBERS: readonly TeamMember[] = [
  {
    image: `${ASSET}employe/stephane.jpg`,
    name: "Stéphane Allain",
    role: "Fondateur",
    bio: "20 ans d'expérience dans l'analyse et développement des marchés internationaux pour le compte de grands groupes.",
  },
  {
    image: `${ASSET}employe/wafa.webp`,
    name: "Wafa Zouaoui",
    role: "Responsable des Opérations",
    bio: "19 ans d'expérience dans le management opérationnel et fonctionnel dans le secteur B2B (Tourisme).",
  },
  {
    image: `${ASSET}employe/Chekib-.webp`,
    name: "Chekib Yeger",
    role: "Commercial Afrique francophone",
    bio: "13 ans d'expérience dans la force de vente principalement chez le leader mondial des verres correcteurs et d'équipement d'optique ophtalmique.",
  },
  {
    image: `${ASSET}employe/bechir.webp`,
    name: "Béchir Zouaoui",
    role: "Senior Graphic Designer",
    bio: "Plus de 13 ans d'expérience dans le monde du design et du développement web design.",
  },
  {
    image: `${ASSET}employe/khalil.webp`,
    name: "Khalil Abbes",
    role: "Chargé junior d'efficacité commerciale et IA",
  },
  {
    image: `${ASSET}employe/kaouther.webp`,
    name: "Kaouther Bousaidi",
    role: "Assistante Administrative",
  },
  {
    image: `${ASSET}employe/taher.webp`,
    name: "Taher Kassem",
    role: "Comptabilité & Finance",
  },
];

export default function Team({
  members = DEFAULT_TEAM_MEMBERS,
  title = "L'équipe AS Biz Dev",
  description =
    "Des profils opérationnels au service de votre développement — entre la France, l'Afrique et le Moyen-Orient.",
}: TeamProps) {
  const clipId = useId().replace(/:/g, "");

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 text-gray-200"
        fill="none"
        height="154"
        viewBox="0 0 460 154"
        width="460"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath={`url(#${clipId})`}>
          <path
            d="M-87.463 458.432C-102.118 348.092 -77.3418 238.841 -15.0744 188.274C57.4129 129.408 180.708 150.071 351.748 341.128C278.246 -374.233 633.954 380.602 548.123 42.7707"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="40"
          />
        </g>
        <defs>
          <clipPath id={clipId}>
            <rect fill="white" height="154" width="460" />
          </clipPath>
        </defs>
      </svg>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
        <RevealOnScroll
          variant="up"
          className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center"
        >
          <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-navy text-white">
            <UserStar aria-hidden="true" size={24} strokeWidth={2} />
          </div>

          <h2 className="relative mb-4 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            {title}
            <svg
              aria-hidden="true"
              className="absolute -top-2 -right-8 -z-10 w-24 text-orange/30"
              fill="currentColor"
              height="86"
              viewBox="0 0 108 86"
              width="108"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.8484 16.236L15 43.5793L78.2688 15L18.1218 71L93 34.1172L70.2047 65.2739"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="28"
              />
            </svg>
          </h2>
          <p className="max-w-2xl text-gray-700">{description}</p>
        </RevealOnScroll>

        <RevealOnScroll variant="up" delay={0.15}>
          <div className="relative w-full">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent sm:w-24 lg:w-32"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent sm:w-24 lg:w-32"
            />

            <Marquee
              ariaLabel={`Membres de ${title}`}
              className="[--gap:1.5rem]"
              speed={50}
            >
              {members.map((member) => (
                <article
                  className="group flex w-64 shrink-0 flex-col"
                  key={member.name}
                >
                  <div className="relative h-92 w-full overflow-hidden rounded-2xl bg-gray-100">
                    <img
                      alt={`Portrait de ${member.name}, ${member.role}`}
                      className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      decoding="async"
                      height="368"
                      loading="lazy"
                      src={member.image}
                      width="256"
                    />
                    <div className="absolute bottom-0 w-full rounded-2xl bg-white/90 p-3 backdrop-blur">
                      <h3 className="font-display text-[1rem] font-semibold text-navy">
                        {member.name}
                      </h3>
                      <p className="text-[0.85rem] text-orange">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </Marquee>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
