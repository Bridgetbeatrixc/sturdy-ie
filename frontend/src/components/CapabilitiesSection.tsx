"use client";

import { useEffect, useRef, useState } from "react";

const CAPABILITIES = [
  {
    img: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    img: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    img: "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export function CapabilitiesSection() {
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="mx-auto max-w-8xl"
      style={{
        opacity: visible ? undefined : 0,
        animation: visible ? 'fadeUp 2s forwards' : 'none',
      }}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {CAPABILITIES.map((card, index) => (
          <div
            key={index}
            className="group border border-white/15 p-3 sm:p-5 transition-all duration-500 cursor-pointer hover:-translate-y-4"
          >
            <article
              className={`relative w-full overflow-hidden rounded-lg bg-zinc-950/80 h-64 sm:h-80 md:h-96 lg:h-[28rem] ${
                index === 3 || index === 0 ? "pt-32 lg:pt-40" : ""
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-500 group-hover:opacity-80 group-hover:scale-105"
                style={{ backgroundImage: `url(${card.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              <div className="relative flex h-full flex-col justify-between p-4 sm:p-5">

                {index === 1 && (
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 shrink-0 bg-[#c5f018]" />
                      <span className="text-lg sm:text-2xl text-white">Ireland</span>
                    </div>
                    <div className="self-end text-right">
                      <p className="text-sm sm:text-lg text-white">27 Greenfield Ave,</p>
                      <p className="text-sm sm:text-lg text-white">Dublin, Ireland</p>
                    </div>
                  </div>
                )}

                {(index === 0 || index === 3) && (
                  <>
                    <div className="absolute inset-4 sm:inset-6 border border-white/60 pointer-events-none" />
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white p-3 sm:p-6 flex justify-end gap-3">
                      <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black">90%</span>
                      <span className="text-xs sm:text-sm text-black leading-tight">Customer<br />satisfaction</span>
                    </div>
                  </>
                )}

              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}