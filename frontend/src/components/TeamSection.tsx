"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { TEAM } from "@/lib/team";

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <section id="team" className="mx-auto max-w-8xl py-16 md:py-24 px-4 md:px-4 lg:px-4">

      {/* Label */}
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
        <span className="text-sm md:text-lg">Our team</span>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
        className="text-center text-2xl font-light leading-tight text-white md:text-6xl"
      >
        Trusted consulting{" "}
        <span className="text-[#c5f018] font-semibold">experts</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="mx-auto mt-6 max-w-4xl text-center text-sm leading-relaxed md:text-lg"
      >
        Our consulting team brings together industry expertise, strategic
        thinking, and proven leadership to help businesses solve challenges,
        seize opportunities, and achieve lasting success.
      </motion.p>

      {/* Team grid — no animation */}
      <div className="mt-8 md:mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((member) => (
          <div
            key={member.slug}
            className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-zinc-800/80 transition-colors hover:border-[#c5f018]/60"
          >
            <img
              src={member.img}
              alt={member.name}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-6 py-8 pt-16 text-center">
              <h3 className="text-2xl md:text-4xl font-light text-white">{member.name}</h3>
              <p className="mt-2 text-sm text-[#c5f018]">{member.role}</p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-zinc-900 border-0.5 border-[#c5f018] bg-black p-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-2xl font-light text-white md:text-3xl">{member.name}</h3>
              <p className="mt-2 text-sm font-medium text-[#c5f018]">{member.role}</p>
              <div className="mt-8 flex-1" />
              <p className="text-sm leading-relaxed text-white">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}