"use client";

export function CardAboutSection() {
  const cards = [
    {
      title: "Data Governance & Compliance",
      description:
        "Translating policy, regulation, and standards into working systems.",
    },
    {
      title: "Security Architecture",
      description:
        "Designing environments with control, access, and resilience built in.",
    },
    {
      title: "Data Infrastructure",
      description:
        "Enabling integration, interoperability, and structured data exchange.",
    },
    {
      title: "Operating Models & Delivery",
      description:
        "Designing operating models that enable the effective use of data in practice.",
    },
  ];

  return (
    <section className="relative z-10 bg-black overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-0">
        <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
          Core Areas of <span className="text-[#c5f018]">Focus</span>
        </h2>
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
          Focus areas where policy intent and operational delivery are translated
          into practical, trusted systems.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  0{index + 1}
                </span>
                <span className="h-px w-16 bg-zinc-700 transition-colors duration-300 group-hover:bg-[#c5f018]/60" />
              </div>

              <h3 className="text-2xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#c5f018]">
                {card.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-zinc-400">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}