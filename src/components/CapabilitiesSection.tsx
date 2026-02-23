const CAPABILITIES = [
  {
    title: "20+ years delivering in regulated environments",
    img: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Trusted Research Environment design & operation",
    img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Federated collaboration and privacy-preserving analytics models",
    img: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Federated collaboration and privacy-preserving analytics models",
    img: "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Governance automation, assurance, and auditability (RegTech)",
    img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="border-b border-zinc-900/60 bg-gradient-to-b from-black to-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20 lg:px-0">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 className="text-lg font-semibold text-white md:text-xl">
            Capabilities in regulated environments
          </h2>
          <p className="hidden text-xs text-zinc-400 md:block">
            Horizontally scroll on smaller screens to explore more.
          </p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {CAPABILITIES.map((card) => (
            <article
              key={card.title}
              className="relative h-52 w-72 shrink-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/80"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: `url(${card.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              <div className="relative flex h-full flex-col justify-between p-5">
                <span className="h-2 w-2 rounded-sm bg-[#c5f018]" />
                <h3 className="text-sm font-semibold text-white">{card.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

