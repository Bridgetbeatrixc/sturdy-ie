"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { CaseStudyIndex } from "../lib/caseStudies";

function CaseStudySlide({
  item,
  index,
}: {
  item: CaseStudyIndex;
  index: number;
}) {
  const number = index + 1;
  return (
    <Link
      href={`/case-studies/${item.slug}`}
      className="group relative flex min-h-screen w-full shrink-0 flex-col items-stretch md:min-h-0 md:h-full md:min-w-full md:w-full md:flex-row md:items-center"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {item.img?.trim() ? (
          <>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item.img})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          </>
        ) : (
          <div className="h-full w-full bg-zinc-900" />
        )}
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 py-16 sm:px-8 md:px-20 lg:px-28">
        <div className="space-y-4">
          <div className="mb-4 flex items-center gap-3 text-xs font-medium text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-[#c5f018]" />
            <span className="tracking-[0.25em] uppercase">Case studies</span>
          </div>

          <h3 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl transition-colors group-hover:text-[#c5f018]">
            {item.title}
          </h3>

          <p className="max-w-2xl text-sm leading-relaxed text-zinc-200 md:text-lg">
            {item.theme?.trim() ||
              (item.summary && item.summary.length > 180
                ? item.summary.slice(0, 180) + "…"
                : item.summary || "")}
          </p>
        </div>
      </div>

      {/* Number */}
      <div className="relative z-10 flex justify-end px-4 pb-8 md:absolute md:right-0 md:top-0 md:flex md:h-full md:items-center md:px-8 md:pb-0 md:pr-12 lg:pr-16">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c5f018] text-sm font-semibold text-black md:h-12 md:w-12">
          {number}
        </div>
      </div>
    </Link>
  );
}

export function CaseStudiesSection({ caseStudies }: { caseStudies: CaseStudyIndex[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      if (window.innerWidth < 768) return; // no horizontal scroll on mobile

      const { scrollLeft, scrollWidth, clientWidth } = el;
      const threshold = 2; // px tolerance for subpixel
      const atLeftEnd = scrollLeft <= threshold;
      const atRightEnd = scrollLeft + clientWidth >= scrollWidth - threshold;

      // At right end, scrolling down: scroll page down to exit sticky
      if (atRightEnd && e.deltaY > 0) {
        e.preventDefault();
        window.scrollBy({ top: e.deltaY * 3, behavior: "smooth" });
        return;
      }
      // At left end, scrolling up: scroll page up to exit sticky
      if (atLeftEnd && e.deltaY < 0) {
        e.preventDefault();
        window.scrollBy({ top: e.deltaY * 3, behavior: "smooth" });
        return;
      }

      e.preventDefault();
      el.scrollBy({ left: e.deltaY * 8, behavior: "smooth" });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const unique = Array.from(
    new Map(caseStudies.map((c) => [c.slug, c])).values()
  );

  return (
    <div className="min-h-0 md:min-h-[140vh]">
      <section
        className="relative flex w-full flex-col border-b border-zinc-900/60 bg-black md:sticky md:top-0 md:h-screen md:min-h-screen"
        aria-label="Case studies"
      >
        {/* Mobile: vertical stack, no horizontal scroll. Desktop: horizontal carousel */}
        <div className="relative flex min-h-0 flex-1 md:overflow-hidden">
          {unique.length > 0 ? (
            <div
              ref={scrollRef}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
              className="flex w-full flex-col md:flex-row md:h-full md:overflow-x-auto md:overscroll-x-contain [&::-webkit-scrollbar]:hidden"
            >
              {unique.map((c, i) => (
                <CaseStudySlide key={c.slug} item={c} index={i} />
              ))}
            </div>
          ) : (
            <div className="flex w-full flex-1 items-center justify-center bg-zinc-900/40 px-4">
              <p className="text-center text-sm text-zinc-500">
                No case studies published yet. Check back soon.
              </p>
            </div>
          )}
        </div>

        {/* CTA footer */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-[#c5f018] bg-black/60 px-6 py-3 text-sm font-semibold text-[#c5f018] backdrop-blur-sm transition hover:bg-[#c5f018] hover:text-black"
          >
            View all case studies
            <span className="text-xs">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
