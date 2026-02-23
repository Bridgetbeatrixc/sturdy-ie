"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Ventures", href: "/ventures" },
  { label: "Writing", href: "/writing" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/70 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10 lg:px-0">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md border border-lime-400/40 bg-gradient-to-br from-lime-400/10 to-lime-500/0" />
          <span className="text-sm font-medium tracking-wide text-zinc-300">
            Jason<span className="font-semibold text-white">Sturdy</span>
          </span>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md bg-[#c5f018] text-black shadow-sm shadow-lime-300/40 transition hover:bg-lime-300 md:h-10 md:w-10"
        >
          <span className="flex flex-col gap-[3px]">
            <span className="h-[2px] w-4 bg-black" />
            <span className="h-[2px] w-4 bg-black" />
            <span className="h-[2px] w-4 bg-black" />
          </span>
        </button>
      </div>

      {/* Overlay Menu */}
      <div
        className={`absolute inset-x-0 origin-top transform bg-black/95 px-6 pb-6 pt-3 text-sm text-lime-300 shadow-lg shadow-black/60 transition-all md:px-10 lg:px-0 ${
          menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:flex-wrap md:gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-left font-medium tracking-wide text-lime-300/90 transition hover:text-lime-200"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

