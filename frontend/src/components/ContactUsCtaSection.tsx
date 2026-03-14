"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const CARDS = [
  {
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    bg: "bg-cyan-500",
    tilt: "-rotate-12",
  },
  {
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    bg: "bg-zinc-600",
    tilt: "rotate-0",
  },
  {
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400",
    bg: "bg-orange-500",
    tilt: "rotate-12",
  },
];

const StarIcon = () => (
  <svg className="h-6 w-6 text-white/60" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
  </svg>
);

export function ContactUsCtaSection() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => e?.isIntersecting && setAnimated(true),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden border-b border-zinc-900/60">
      <div
        className="relative px-4 py-20 sm:px-6 md:px-10 md:py-28"
        style={{
          background: "linear-gradient(to top, rgba(34, 56, 8, 0.95) 0%, rgba(20, 30, 5, 0.9) 40%, #0a0a0a 100%)",
        }}
      >
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Contact us button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#c5f018] px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#d4ff2a]"
          >
            Contact us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Heading */}
          <h2 className="mt-8 text-3xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            Let&apos;s find the right solution
            <br />
            together.
          </h2>

          {/* Image cards */}
          <div className="relative mt-16 flex items-center justify-center gap-0 overflow-visible">
            {CARDS.map((card, i) => (
              <div
                key={i}
                className={`relative flex shrink-0 transition-transform duration-700 ease-out ${
                  animated ? card.tilt : "rotate-0"
                } ${i === 0 ? "-mr-8 md:-mr-12" : i === 2 ? "-ml-8 md:-ml-12" : "z-10 -mx-4 md:-mx-6"} ${i === 1 ? "scale-110" : "scale-100"}`}
              >
                <div
                  className={`overflow-hidden rounded-2xl border-2 border-white/10 shadow-xl ${card.bg}`}
                >
                  <img
                    src={card.img}
                    alt=""
                    className="h-48 w-36 object-cover object-top md:h-56 md:w-44"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
