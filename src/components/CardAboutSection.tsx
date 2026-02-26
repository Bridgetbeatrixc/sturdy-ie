export function CardAboutSection() {
  const cards = [
    {
      title: "Governance & Compliance",
      description:
        "I operationalise regulatory frameworks into governance-aligned systems with built-in assurance, auditability, and defensible technical controls.",
    },
    {
      title: "Product & Innovation Development",
      description:
        "Alongside governance and infrastructure advisory, I lead end-to-end platform and product initiatives, delivering secure data collaboration, controlled analytics, and institution-ready pilots.",
    },
    {
      title: "Research Collaboration",
      description:
        "I enable secure cross-border research collaboration using Trusted Research Environments, federated models, and structured multi-party governance.",
    },
    {
      title: "Venture Alignment",
      description:
        "In parallel, I engage in venture initiatives in precision nutrition and data-driven health optimisation, exploring how secure data infrastructure, biometrics, and personalised analytics enable next-generation preventive health models.",
    },
  ];

  return (
    <section className="relative z-10 bg-black overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-0">
        {/* 4-column card grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl bg-zinc-900 p-8 flex flex-col gap-6"
            >
              <h3 className="text-2xl font-bold text-white leading-snug text-center">
                {card.title}
              </h3>
              <p className="text-lg leading-relaxed text-white text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}