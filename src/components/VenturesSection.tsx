const RIGHT_VENTURES = ["Lorem ipsum initiative", "Preventive ecosystems prototype"];

export function VenturesSection() {
  return (
    <section className="border-b border-zinc-900/60 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20 lg:px-0">
        <div className="max-w-2xl">
          <h2 className="text-xl font-semibold text-white md:text-2xl">
            Ventures &amp; Initiatives
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-300">
            Innovation initiatives exploring next-generation health, data, and
            preventive ecosystems through secure infrastructure and analytics-driven
            models.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
          {/* Large left card */}
          <article className="flex flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/80 md:flex-row">
            <div className="h-40 w-full bg-[url('https://images.pexels.com/photos/1181465/pexels-photo-1181465.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center md:h-auto md:w-1/2" />
            <div className="flex flex-1 flex-col justify-between gap-4 p-6">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-white">
                  Lorem ipsum dolor sit amet
                </h3>
                <p className="text-xs text-zinc-400">
                  Exploring secure, standards-aligned infrastructure for
                  cross-institutional health and research ecosystems.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900/80">
                  <span className="text-[0.7rem]">📅</span>
                </span>
                <span>May 18, 2025</span>
              </div>
            </div>
          </article>

          {/* Right column stacked cards */}
          <div className="grid gap-4">
            {RIGHT_VENTURES.map((title, idx) => (
              <article
                key={title}
                className="flex overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/80"
              >
                <div
                  className="h-28 w-28 shrink-0 bg-cover bg-center md:h-auto"
                  style={{
                    backgroundImage:
                      idx === 0
                        ? "url(https://images.pexels.com/photos/7865665/pexels-photo-7865665.jpeg?auto=compress&cs=tinysrgb&w=1200)"
                        : "url(https://images.pexels.com/photos/1181409/pexels-photo-1181409.jpeg?auto=compress&cs=tinysrgb&w=1200)",
                  }}
                />
                <div className="flex flex-1 flex-col justify-between gap-3 p-4">
                  <div className="space-y-1">
                    <h3 className="text-xs font-semibold text-white">{title}</h3>
                    <p className="text-[0.7rem] text-zinc-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[0.7rem] text-zinc-400">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900/80">
                      <span>📅</span>
                    </span>
                    <span>May 18, 2025</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

