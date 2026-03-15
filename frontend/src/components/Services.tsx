"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const SERVICES_ITEMS = [
  {
    title: "Governance & Compliance",
    body: "Operationalising regulatory frameworks into deployable environments with assurance, auditability, and defensible controls.",
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Sovereign Data Infrastructure",
    body: "Designing mission-critical platforms aligned to resilience, security, and long-term operational integrity.",
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    title: "Secure Collaboration",
    body: "Enabling cross-organisation collaboration through governed access models, secure environments, and trust boundaries.",
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Interoperability & Data Exchange",
    body: "Implementing standards-led architectures so data can be securely shared, understood, and reused across ecosystems.",
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
      </svg>
    ),
  },
];

const total = SERVICES_ITEMS.length;

function ServiceCard({
  item,
  index,
  scrollYProgress,
  isMobile,
}: {
  item: typeof SERVICES_ITEMS[0];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  isMobile: boolean;
}) {
  const revealStart = index / total;
  const revealEnd = revealStart + 0.5 / total;

  const opacity = useTransform(scrollYProgress, [revealStart, revealEnd], [0, 1]);
  const y = useTransform(scrollYProgress, [revealStart, revealEnd], [60, 0]);

  return (
    <motion.div
      style={isMobile ? {} : { opacity, y }}
      className="group flex flex-col items-center md:flex-row md:items-center gap-4 md:gap-12 rounded-lg md:rounded-2xl border border-[#677f06] p-6 md:p-0"
    >
      <div className="flex-shrink-0 flex h-14 w-14 md:h-38 md:w-40 items-center justify-center rounded-xl md:rounded-l-2xl md:rounded-r-none bg-[#c5f018] text-black">
        <div className="w-7 h-7 md:w-14 md:h-14">{item.icon}</div>
      </div>
      <div className="space-y-2 md:space-y-4 text-center md:text-left md:px-0 md:pb-0">
        <h3 className="md:text-2xl text-base font-medium text-white">{item.title}</h3>
        <p className="md:text-sm text-xs leading-relaxed text-zinc-300">{item.body}</p>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const gradientOpacity = useTransform(
    scrollYProgress,
    [1 / total, 1],
    [0, 1]
  );

  return (
    <div
      ref={containerRef}
      style={{ height: isMobile ? "auto" : `${100 * (total + 1)}vh` }}
    >
      <div className={isMobile ? "" : "sticky top-0 h-fit mb-8 overflow-hidden"}>

        {!isMobile && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: gradientOpacity,
              background:
                "radial-gradient(ellipse at 50% 90%, rgba(103, 147, 20, 0.55) 30%, rgba(45,68,5,0.35) 50%, transparent 70%)",
            }}
          />
        )}

        <div className="relative h-full mx-auto max-w-8xl py-2 md:py-12 lg:py-12 px-4 sm:px-8 md:px-4 lg:px-0 flex items-center">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full">

            <div className="w-full lg:w-1/2">
              <div className="mb-4 flex items-center gap-2 text-white">
                <span
                  className="h-2 w-2 rounded-full bg-[#c5f018]"
                  style={{ animation: "dotPulse 1s ease-in-out infinite" }}
                />
                <span className="md:text-lg text-sm">Lorem ipsum</span>
              </div>
              <h2 className="text-2xl font-semibold leading-tight text-[#c5f018] md:text-5xl">
                Discover <span className="text-white font-light">the range of</span>
              </h2>
              <div className="mt-12 h-64 sm:h-80 lg:h-[420px] w-full rounded-2xl bg-[url('https://images.pexels.com/photos/1181567/pexels-photo-1181567.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center" />
            </div>

            <div className="w-full lg:w-1/2 space-y-4">
              {SERVICES_ITEMS.map((item, index) => (
                <ServiceCard
                  key={item.title}
                  item={item}
                  index={index}
                  scrollYProgress={scrollYProgress}
                  isMobile={isMobile}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}