"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/writing" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10 lg:px-0">
          {/* Logo */}
          <Link href="/" className="relative z-[60] flex items-center gap-2">
            <div className="h-7 w-7 rounded-md border border-lime-400/40 bg-gradient-to-br from-lime-400/10 to-lime-500/0" />
            <span className="text-sm font-medium tracking-wide text-zinc-300">
              Jason<span className="font-semibold text-white">Sturdy</span>
            </span>
          </Link>

          {/* Hamburger button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-md transition"
          >
            <span className="flex flex-col items-center justify-center gap-[5px]">
              <span
                className={`block h-[2px] w-5 transition-all duration-300 ${
                  menuOpen
                    ? "translate-y-[7px] rotate-45 bg-black"
                    : "bg-white"
                }`}
              />
              <span
                className={`block h-[2px] w-5 transition-all duration-300 ${
                  menuOpen ? "opacity-0 bg-black" : "bg-white"
                }`}
              />
              <span
                className={`block h-[2px] w-5 transition-all duration-300 ${
                  menuOpen
                    ? "-translate-y-[7px] -rotate-45 bg-black"
                    : "bg-white"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Lime slide-down panel */}
      <div
        className={`fixed inset-x-0 top-0 z-[55] flex flex-col bg-[#c5f018] transition-all duration-500 ease-in-out ${
          menuOpen ? "h-screen" : "h-0"
        } overflow-hidden`}
      >
        <div className="mt-20 flex flex-1 flex-col px-8 pt-8 md:px-16">
          <nav className="flex flex-col gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-semibold text-black transition-opacity hover:opacity-70 md:text-4xl"
              >
                {item.label}
              </Link>
            ))}
            {/* Pages link with arrow */}
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-3xl font-semibold text-black transition-opacity hover:opacity-70 md:text-4xl"
            >
              Pages
              <span className="text-xl">&#8599;</span>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
