import Link from "next/link";

const FOOTER_NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Ventures", href: "/ventures" },
  { label: "Writing", href: "/writing" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = ["Instagram", "LinkedIn", "Twitter", "Facebook"];

export function FooterSection() {
  return (
    <footer className="bg-black pb-10 pt-10">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-0">
        <div className="rounded-3xl bg-gradient-to-r from-lime-500/40 via-lime-500/30 to-emerald-400/40 p-[1px]">
          <div className="flex flex-col gap-8 rounded-[1.4rem] bg-black/95 px-6 py-10 md:px-10 md:py-12">
            <p className="max-w-3xl text-sm leading-relaxed text-white">
              Designing trusted environments for secure data collaboration, regulated
              innovation, and research partnerships.
            </p>

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-3">
                {SOCIALS.map((social) => (
                  <button
                    key={social}
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-lime-400/70 bg-black/80 text-[0.7rem] text-lime-300 transition hover:bg-lime-400/10"
                    aria-label={social}
                  >
                    {social[0]}
                  </button>
                ))}
              </div>

              <nav className="flex flex-wrap gap-2">
                {FOOTER_NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full bg-zinc-900/80 px-4 py-1.5 text-xs font-medium text-zinc-300 transition hover:bg-zinc-800"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <p className="pt-2 text-center text-[0.7rem] text-zinc-400">
              Copyright © Jason Sturdy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

