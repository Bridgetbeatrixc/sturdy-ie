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
    <footer className="relative overflow-hidden bg-black">
      {/* Background decorative lime circles */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border-[16px] border-[#c5f018]/20" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full border-[16px] border-[#c5f018]/20" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20 lg:px-0">
        {/* Tagline */}
        <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-zinc-300 md:text-base">
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
              className="rounded-lg border border-zinc-700 bg-zinc-900/40 px-5 py-2 text-xs font-medium text-zinc-300 transition hover:border-[#c5f018]/40 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Divider + copyright */}
        <div className="mt-12 border-t border-zinc-800 pt-6">
          <p className="text-center text-xs text-zinc-500">
            Copyright &copy; Jason Sturdy
          </p>
        </div>
      </div>
    </footer>
  );
}
