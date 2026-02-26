import Link from "next/link";

const FOOTER_NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Ventures", href: "/ventures" },
  { label: "Writings & Insights", href: "/writing" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { label: "Instagram", icon: "IG" },
  { label: "LinkedIn", icon: "in" },
  { label: "Twitter", icon: "X" },
  { label: "Facebook", icon: "f" },
];

export function FooterSection() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 40%, rgba(74, 110, 8, 0.95) 0%, rgba(45, 68, 5, 0.85) 30%, rgba(20, 30, 3, 0.9) 60%, #0a0a0a 100%)",
      }}
    >
      {/* Decorative gradient arcs — left */}
      <div className="pointer-events-none absolute -left-28 top-1/4 -translate-y-1/2">
        <svg
          width="280"
          height="320"
          viewBox="0 0 260 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="arcGradL1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D0F347" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#c5f018" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="40" r="170" stroke="url(#arcGradL1)" strokeWidth="32" />
          <circle cx="60" cy="40" r="125" stroke="url(#arcGradL2)" strokeWidth="30" />
        </svg>
      </div>

      {/* Decorative gradient arcs — right */}
      <div className="pointer-events-none absolute -right-28 top-1/2 -translate-y-1/2">
        <svg
          width="340"
          height="350"
          viewBox="0 0 300 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="arcGradR1" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c5f018" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#739F21" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <circle cx="210" cy="160" r="120" stroke="url(#arcGradR1)" strokeWidth="32" />
          <circle cx="210" cy="160" r="85" stroke="url(#arcGradR2)" strokeWidth="20" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20 lg:px-0">
        {/* Tagline */}
        <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-white md:text-base">
          Designing trusted environments for secure data collaboration,
          regulated innovation, and research partnerships
        </p>

        {/* Social icons */}
        <div className="mt-10 flex items-center justify-center gap-4">
          {SOCIALS.map((social) => (
            <button
              key={social.label}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/60 text-xs font-semibold text-zinc-300 transition hover:border-[#c5f018]/50 hover:text-[#c5f018]"
              aria-label={social.label}
            >
              {social.icon}
            </button>
          ))}
        </div>

        {/* Nav links */}
        <nav className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {FOOTER_NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg bg-[#2a2d26] px-8 py-4 text-sm font-medium text-white transition hover:border-[#c5f018]/40 hover:text-[#c5f018]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Divider + copyright */}
        <div className="mt-12 border-t border-[rgba(219,255,73,0.9)]  pt-6">
          <p className="text-center text-sm text-white">
            Copyright &copy; Jason Sturdy
          </p>
        </div>
      </div>
    </footer>
  );
}
