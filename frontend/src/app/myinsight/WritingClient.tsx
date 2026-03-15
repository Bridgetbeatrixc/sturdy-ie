"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "../../components/Header";
import { FooterSection } from "../../components/FooterSection";
import { MyInsightIndex } from "../../lib/myInsight";

const ITEMS_PER_PAGE = 6;

export function WritingClient({ myInsights = [] }: { myInsights?: MyInsightIndex[] }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(myInsights.length / ITEMS_PER_PAGE);
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return myInsights.slice(start, start + ITEMS_PER_PAGE);
  }, [myInsights, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative w-full overflow-x-hidden bg-black text-zinc-200">
      <Header />

      {/* Header */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-4 pt-24 pb-16 sm:px-6 md:px-10 lg:px-0 text-center">
          <p className="text-sm text-[#c5f018] mb-2">• Our blogs</p>
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-white">Expert advisory </span>
            <span className="text-[#c5f018]">updates</span>
          </h1>
        </div>
      </section>

      {/* Article grid */}
      <section className="bg-black">
        <div className="mx-auto max-w-8xl px-4 pb-20 sm:px-6 md:px-10 lg:px-0">
          {paginated.length === 0 ? (
            <div className="py-24 text-center text-zinc-500">No insights yet.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {paginated.map((myInsight) => (
                <Link
                  key={myInsight.slug}
                  href={`/myinsight/${myInsight.slug}`}
                  className="group block overflow-hidden"
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[440/500] bg-zinc-800">
                    <img
                      src={myInsight.image}
                      alt={myInsight.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-[#c5f018] px-3 py-1 text-xs font-semibold text-black">
                      {myInsight.category}
                    </span>
                  </div>
                  <div className="pt-4">
                    <p className="text-[16px] text-white mb-2">
                      {myInsight.author} • {myInsight.date}
                    </p>
                    <h2 className="text-[36px] text-white leading-snug group-hover:text-zinc-200 transition-colors">
                      {myInsight.title}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center">
              <div className="flex items-center gap-4">
                {currentPage > 1 && (
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="flex items-center gap-2 rounded-lg border border-white bg-zinc-900 px-6 py-3 text-sm text-white transition hover:bg-zinc-800"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                    </svg>
                    Previous page
                  </button>
                )}
                {currentPage < totalPages && (
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="flex items-center gap-2 rounded-lg border border-white bg-zinc-900 px-6 py-3 text-sm text-white transition hover:bg-zinc-800"
                  >
                    Next page
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
