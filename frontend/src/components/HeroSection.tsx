"use client";

import Image from "next/image";
import jasonPortrait from "@/img/jason.png";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { HeroData, HeroSection, SectionPosition } from "@/lib/hero";
import { getSectionsForPosition } from "@/lib/hero";
import { LexicalRenderer } from "@/components/LexicalRenderer";

function SectionBlock({ block }: { block: HeroSection }) {
  if (block.blockType === "richTextSection") {
    return (
      <div className="text-sm text-zinc-400 max-w-4xl">
        <LexicalRenderer data={block.content} />
      </div>
    );
  }

  if (block.blockType === "bulletList") {
    return (
      <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400 max-w-4xl">
        {block.items.map((item, i) => (
          <li key={i}>
            <LexicalRenderer data={item.text} />
          </li>
        ))}
      </ul>
    );
  }

  return null;
}

function HeroSlot({
  sections,
  position,
}: {
  sections: HeroSection[];
  position: SectionPosition;
}) {
  const slots = getSectionsForPosition(sections, position);
  if (!slots.length) return null;
  return (
    <>
      {slots.map((block, i) => (
        <SectionBlock key={i} block={block} />
      ))}
    </>
  );
}

function SplitHeading({ heading, highlight }: { heading: string; highlight: string }) {
  if (!highlight || !heading.includes(highlight)) {
    return (
      <h1 className="text-5xl font-medium leading-tight tracking-tight text-white sm:text-6xl md:text-9xl md:leading-[1.05]">
        {heading}
      </h1>
    );
  }
  const [before, after] = heading.split(highlight);
  return (
    <h1 className="text-5xl font-medium leading-tight tracking-tight text-white sm:text-6xl md:text-9xl md:leading-[1.05]">
      {before}
      <span className="text-[#c5f018]">{highlight}</span>
      {after}
    </h1>
  );
}

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type Props = { data: HeroData | null };

// Fallback sections when CMS has no data yet
const FALLBACK_SECTIONS: HeroSection[] = [
  {
    blockType: "richTextSection",
    position: "below-tagline",
    content: {
      root: {
        type: "root",
        children: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "I design systems and operating models that enable organisations to use data in practice, translating policy, regulation, and governance into infrastructure that is secure, usable, and trusted.",
              },
            ],
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        version: 1,
      },
    },
  },
];

export function HeroSection({ data }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const heading = data?.heading ?? "Jason Sturdy";
  const headingHighlight = data?.headingHighlight ?? "Sturdy";
  const subheading = data?.subheading ?? "Building Trusted Systems from Policy to Practice";
  const tagline = data?.tagline ?? "Data Governance • Security Architecture • Operating Models • Digital Infrastructure";
  const sections = data?.sections?.length ? data.sections : FALLBACK_SECTIONS;
  const primaryCtaLabel = data?.primaryCtaLabel ?? "View Case Studies";
  const primaryCtaHref = data?.primaryCtaHref ?? "/case-studies";
  const secondaryCtaLabel = data?.secondaryCtaLabel ?? "Explore Insights";
  const secondaryCtaHref = data?.secondaryCtaHref ?? "/myinsights";

  return (
    <section ref={ref} className="relative overflow-hidden bg-neutral-950">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_90%,rgba(197,240,24,0.55)_0%,rgba(160,210,0,0.55)_20%,transparent_65%)]" />
      </div>

      <div className="relative mx-auto max-w-8xl px-4 py-30">
        <div className="pointer-events-none absolute -left-50 bottom-100 hidden h-90 w-90 rounded-full mr-[50px] border-[50px] border-zinc-700/60 md:block" />
        <div className="pointer-events-none absolute -right-50 top-100 hidden h-90 w-90 rounded-full border-[50px] border-zinc-700/60 md:block" />

        <div className="relative flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">

          <div className="w-full space-y-8">

            <HeroSlot sections={sections} position="above-heading" />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0 }}
            >
              <SplitHeading heading={heading} highlight={headingHighlight} />
            </motion.div>

            <HeroSlot sections={sections} position="below-heading" />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
              className="space-y-3 text-2xl sm:text-3xl md:text-6xl lg:text-3xl leading-relaxed text-zinc-200"
            >
              <p>{subheading}</p>
            </motion.div>

            <HeroSlot sections={sections} position="below-subheading" />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.22 }}
              className="text-base sm:text-lg text-zinc-300"
            >
              {tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.28 }}
            >
              <HeroSlot sections={sections} position="below-tagline" />
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
              className="relative mt-6 flex items-center lg:w-3xl w-xs lg:w-2xl"
            >
              <div className="h-[1px] flex-1 origin-left bg-zinc-400"
                style={{ animation: isInView ? "grow 1s ease-out forwards" : "none" }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.75 }}
                className="flex h-12 w-12 items-center justify-center"
              >
                <div className="relative flex h-8 w-8 items-center justify-center">
                  <span className="absolute h-[3px] w-full bg-[#c5f018]" />
                  <span className="absolute h-[3px] w-full rotate-60 bg-[#c5f018]" />
                  <span className="absolute h-[3px] w-full -rotate-60 bg-[#c5f018]" />
                </div>
              </motion.div>
            </motion.div>

            <HeroSlot sections={sections} position="above-cta" />

            {/* Buttons */}
            <div className="flex flex-col flex-wrap gap-4 pt-2 sm:flex-row">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              >
                <Link
                  href={primaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c5f018] px-6 py-5 text-lg font-semibold text-black transition duration-500 hover:-translate-y-[1px] hover:border-1 hover:border-zinc-300 hover:bg-black hover:text-[#CCFF00]"
                >
                  {primaryCtaLabel}
                  <ArrowIcon />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.58 }}
              >
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-lime-400/70 bg-transparent px-6 py-5 text-lg font-semibold text-lime-300 transition duration-500 hover:-translate-y-[1px] hover:bg-[#CCFF00] hover:text-black"
                >
                  {secondaryCtaLabel}
                  <ArrowIcon />
                </Link>
              </motion.div>
            </div>

            <HeroSlot sections={sections} position="below-cta" />

          </div>

          <div className="relative mx-auto mt-10 flex w-full max-w-md flex-col items-center justify-center lg:mt-0 md:mr-20 lg:-ml-34 lg:max-w-none lg:flex-1">
            <div className="pointer-events-none absolute inset-0 blur-3xl" />
            <div className="relative h-[280px] w-[220px] min-[400px]:h-[360px] min-[400px]:w-[270px] sm:h-[460px] sm:w-[320px] md:h-[550px] md:w-[400px] lg:h-[430px] lg:w-[280px]">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                className="relative h-full w-full scale-[2] overflow-hidden bg-transparent object-contain"
              >
                {data?.portrait?.url ? (
                  <Image
                    src={data.portrait.url}
                    alt={data.portrait.alt}
                    fill
                    unoptimized
                    className="object-contain -scale-x-100"
                    priority
                  />
                ) : (
                  <Image
                    src={jasonPortrait}
                    alt="Portrait of Jason Sturdy"
                    fill
                    className="object-contain -scale-x-100"
                    priority
                  />
                )}
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}