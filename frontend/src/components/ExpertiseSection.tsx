"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const EXPERTISE_ITEMS = [
  {
    title: "Governance & Compliance",
    body: "Operationalising regulatory frameworks into deployable environments with assurance, auditability, and defensible controls.",
  },
  {
    title: "Sovereign Data Infrastructure",
    body: "Designing mission-critical platforms aligned to resilience, security, and long-term operational integrity.",
  },
  {
    title: "Secure Collaboration",
    body: "Enabling cross-organisation collaboration through governed access models, secure environments, and trust boundaries.",
  },
  {
    title: "Interoperability & Data Exchange",
    body: "Implementing standards-led architectures so data can be securely shared, understood, and reused across ecosystems.",
  },
];

export function ExpertiseSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="px-4 py-8 sm:px-8 md:px-0 md:py-16"
      style={{
        opacity: visible ? undefined : 0,
        animation: visible ? 'fadeUp 2s forwards' : 'none',
      }}
    >
      <style>{`
        @keyframes slideUpReveal {
          from { opacity: 0; transform: translateY(80px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="mx-auto max-w-8xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">

          {/* Left */}
          <div className="w-full lg:w-1/2">
            <div className="mb-4 flex items-center gap-2 text-white">
              <span className="h-2 w-2 rounded-full bg-[#c5f018]"
                style={{ animation: 'dotPulse 1s ease-in-out infinite' }} />
              <span className="text-sm md:text-lg">Expertise</span>
            </div>

            <h2 className="text-2xl font-semibold leading-tight text-[#c5f018] md:text-6xl">
              Governance-led <span className="text-white font-light">transformation in regulated ecosystems</span>
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {EXPERTISE_ITEMS.map((item, i) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-800/80 px-6 py-7"
                  style={{
                    opacity: 0,
                    animation: visible ? `fadeUp 1.5s ease-out ${0.2 + i * 0.3}s forwards` : 'none',
                  }}
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#c5f018]/70 bg-[#c5f018]/10">
                    <span className="h-5 w-5 rounded-xl border border-[#c5f018]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-3xl text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed md:text-lg">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div
              className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden"
              style={{
                opacity: 0,
                animation: visible ? 'slideUpReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards' : 'none',
              }}
            >
              <div className="h-64 sm:h-120 lg:h-[700px] w-full rounded-2xl bg-[url('https://images.pexels.com/photos/1181567/pexels-photo-1181567.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center" />
            </div>

            <p
              className="text-sm leading-relaxed text-white md:text-base"
              style={{
                opacity: 0,
                animation: visible ? 'fadeUp 1.5s ease-out 0.4s forwards' : 'none',
              }}
            >
              Executive delivery across public sector, financial services, and
              health—bridging innovation ambition with regulator-grade execution.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c5f018] bg-transparent px-6 py-5 text-sm md:text-xl font-semibold text-[#c5f018] transition duration-500 hover:bg-[#c5f018] hover:text-black"
              style={{
                opacity: 0,
                animation: visible ? 'fadeUp 1.5s ease-out 0.6s forwards' : 'none',
              }}
            >
              Discuss Collaboration
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}