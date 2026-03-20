"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const strokeIcon = {
  width: "100%",
  height: "100%",
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconDataGovernance() {
  return (
    <svg {...strokeIcon} aria-hidden>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function IconSecurityArchitecture() {
  return (
    <svg {...strokeIcon} aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function IconRegulatorySystems() {
  return (
    <svg {...strokeIcon} aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  );
}

function IconInstitutionalInfrastructure() {
  return (
    <svg {...strokeIcon} aria-hidden>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

type FocusCard = {
  slug: string;
  title: string;
  tagline: string;
  img: string;
  icon: ReactNode;
};

const PROFILE_FOCUS: FocusCard[] = [
  {
    slug: "data-governance",
    title: "Data Governance",
    tagline: "Accountable data lifecycle and policy alignment",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
    icon: <IconDataGovernance />,
  },
  {
    slug: "security-architecture",
    title: "Security Architecture",
    tagline: "Resilient, threat-aware platform design",
    img: "/profile-security-digital-lock.png",
    icon: <IconSecurityArchitecture />,
  },
  {
    slug: "regulatory-systems",
    title: "Regulatory Systems",
    tagline: "RegTech and SupTech delivery at scale",
    img: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=900&auto=format&fit=crop&q=80",
    icon: <IconRegulatorySystems />,
  },
  {
    slug: "institutional-infrastructure",
    title: "Institutional Infrastructure",
    tagline: "Long-horizon digital capability for institutions",
    img: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=900",
    icon: <IconInstitutionalInfrastructure />,
  },
];

function FocusCard({
  card,
  index,
  sectionInView,
}: {
  card: FocusCard;
  index: number;
  sectionInView: boolean;
}) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, {
    once: true,
    margin: "0px 0px -12% 0px",
  });

  const show = sectionInView && cardInView;

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 36 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{
        duration: 0.65,
        delay: 0.08 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950 shadow-black/40 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#c5f018]/50 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.65),0_0_0_1px_rgba(197,240,24,0.12)]">
        <img
          src={card.img}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[#c5f018]/[0.03] mix-blend-overlay opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />

        <div className="absolute left-0 right-0 top-0 z-[1] flex items-start justify-between p-4 md:p-5">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c5f018]/80 bg-black/55 text-[#c5f018] shadow-[0_0_20px_rgba(197,240,24,0.15)] backdrop-blur-md transition-transform duration-500 group-hover:scale-110 md:h-[3.25rem] md:w-[3.25rem]"
            aria-hidden
          >
            <div className="h-[1.35rem] w-[1.35rem] md:h-7 md:w-7">{card.icon}</div>
          </div>
          <span className="rounded-md border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-sm md:text-xs">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-[1]">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c5f018]/40 to-transparent opacity-80" />
          <div className="bg-gradient-to-t from-black/95 via-black/75 to-transparent px-5 pb-7 pt-12 text-center md:px-6 md:pb-8 md:pt-14">
            <h3 className="text-xl font-light leading-snug tracking-tight text-white md:text-2xl">
              {card.title}
            </h3>
          </div>
        </div>

        <div className="absolute inset-0 z-[2] flex flex-col justify-end rounded-2xl border border-[#c5f018]/60 bg-zinc-950/93 p-6 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 md:p-7">
          <div className="mb-3 h-0.5 w-10 self-center rounded-full bg-[#c5f018] md:self-auto" />
          <h3 className="text-center text-xl font-light text-white md:text-left md:text-2xl">
            {card.title}
          </h3>
          <p className="mt-4 text-center text-sm leading-relaxed text-zinc-300 md:text-left md:text-[0.95rem]">
            {card.tagline}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function ProfileSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <section id="profile" className="mx-auto max-w-8xl px-4 py-16 md:px-4 md:py-24 lg:px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex items-center justify-center gap-2 py-4"
      >
        <span
          className="h-2 w-2 shrink-0 rounded-full bg-[#c5f018]"
          style={{ animation: "dotPulse 1s ease-in-out infinite" }}
        />
        <span className="text-sm text-white md:text-lg">Profile</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
        className="text-center text-2xl font-light leading-tight text-white md:text-6xl"
      >
        <span className="text-white">Leadership </span>
        <span className="font-semibold text-[#c5f018]">Perspective</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="mx-auto mt-6 max-w-4xl space-y-4 text-center text-sm leading-relaxed text-zinc-300 md:text-lg"
      >
        <p>
          Operating at executive and board level, I bridge product strategy with
          regulator-grade delivery.
        </p>
        <p>
          My work supports RegTech, SupTech, AI governance, and cross-border
          collaboration.
        </p>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 md:mt-20 lg:grid-cols-4 lg:gap-6">
        {PROFILE_FOCUS.map((card, index) => (
          <FocusCard
            key={card.slug}
            card={card}
            index={index}
            sectionInView={isInView}
          />
        ))}
      </div>
    </section>
  );
}
