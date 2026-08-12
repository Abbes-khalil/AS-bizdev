"use client";

import { useState } from "react";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ASSET } from "@/lib/siteData";
import { interpolate } from "@/lib/i18n/dictionaries";

const TeamCard = ({ member, index, portraitAlt }) => {
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = Boolean(member.photo) && !photoFailed;

  return (
    <RevealOnScroll
      as="article"
      variant="up"
      delay={0.08}
      index={index}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-navy hover:shadow-lift"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
        {showPhoto ? (
          <img
            alt={interpolate(portraitAlt, { name: member.name, role: member.role })}
            className="absolute inset-0 h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
            decoding="async"
            loading="lazy"
            src={`${ASSET}${member.photo}`}
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center font-display text-[2rem] font-semibold text-navy/20"
          >
            {member.name
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </div>
        )}
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-[0.25rem] w-0 bg-orange transition-all duration-500 group-hover:w-full"
        />
      </div>

      <div className="flex flex-1 flex-col p-[1.25rem]">
        <h3 className="font-display text-[1.125rem] font-semibold leading-[1.25] tracking-[-0.02em] text-navy">
          {member.name}
        </h3>
        <p className="mt-[0.35rem] text-[0.875rem] font-medium leading-[1.4] text-orange">
          {member.role}
        </p>
        {member.bio && (
          <p className="mt-[1rem] text-[0.875rem] leading-[1.6] text-gray-700">
            {member.bio}
          </p>
        )}
      </div>
    </RevealOnScroll>
  );
};

export default TeamCard;
