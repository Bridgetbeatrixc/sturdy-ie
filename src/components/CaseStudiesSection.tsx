const CASE_STUDIES = [
  {
    number: 1,
    title:
      "Designed a governance-aligned secure environment enabling multi-institutional research collaboration.",
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: 2,
    title:
      "Implemented a federated analytics model enabling insight generation without centralising sensitive data.",
    img: "https://images.pexels.com/photos/1181528/pexels-photo-1181528.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: 3,
    title: "Finance optimisation – Cost management.",
    img: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="border-b border-zinc-900/60 bg-gradient-to-b from-black to-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20 lg:px-0">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#c5f018]" />
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-300">
            Case studies
          </h2>
        </div>

        <div className="space-y-8">
          {CASE_STUDIES.map((item, idx) => (
            <article
              key={item.number}
              className={`flex flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/80 md:flex-row ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className="relative h-60 w-full md:h-72 md:w-1/2"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="absolute inset-0 bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute -bottom-4 left-5 flex h-10 w-10 items-center justify-center rounded-full border border-lime-400/70 bg-black/80 text-sm font-semibold text-lime-300">
                  {item.number}
                </div>
              </div>
              <div className="flex flex-1 items-center p-6 md:p-8">
                <p className="max-w-xl text-sm leading-relaxed text-zinc-200">
                  {item.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

