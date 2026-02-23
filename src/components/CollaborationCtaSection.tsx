export function CollaborationCtaSection() {
  return (
    <section className="border-b border-zinc-900/60">
      <div className="bg-slate-950 bg-[linear-gradient(135deg,rgba(148,163,184,0.06)_0,rgba(148,163,184,0.06)_1px,transparent_1px,transparent_12px)] bg-[length:14px_14px]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20 lg:px-0">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-xl font-semibold text-white md:text-2xl">
              Exploring <span className="text-[#c5f018]">Collaboration</span>?
            </h2>
            <p className="text-sm leading-relaxed text-zinc-300">
              Open to partnerships across research, regulated innovation, and venture
              initiatives where secure environments, governance, and
              standards-aligned exchange are critical.
            </p>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-[#c5f018] px-6 py-3 text-sm font-semibold text-black shadow-md shadow-lime-300/30 transition hover:-translate-y-[1px] hover:bg-lime-300"
            >
              <span>Get in touch</span>
              <span className="text-xs">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

