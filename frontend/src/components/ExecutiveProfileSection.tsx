"use client";

export function ExecutiveProfileSection() {
  const sections = [
    {
      title: "Background",
      content: [
        "I’ve spent over 20 years working across public sector, financial services, and health systems, starting in technical roles and moving into leading larger programmes and platform delivery across multiple organisations and countries.",
        "Early in my career, the work was focused on security, recovery, and core systems where reliability and control were critical. That experience shaped how I think about systems today. Systems need to work under real conditions, not just in design.",
        "As my work evolved, I moved into more complex environments where technology is only one part of the problem. These included national platforms, regulated data systems, and multi-organisation programmes shaped as much by policy and governance as by engineering.",
        "Across these environments, a consistent pattern emerged: data exists and regulation exists, but the systems connecting them often do not work in a way that organisations can rely on.",
        "Alongside platform delivery, I’ve designed operating models that enable organisations to use data more effectively in practice. This has involved aligning technology, data, governance, and delivery functions so that systems are not only implemented, but actively used, sustained, and trusted within regulated environments.",
      ],
    },
    {
      title: "Perspective",
      content: [
        "I don’t see this as a purely technical problem. In most of the environments I’ve worked in, the challenge sits between policy, systems, and how organisations actually operate.",
        "Regulation defines what should happen. Technology defines what could happen. The difficulty is making those two things align in practice.",
        "A lot of my work sits in that space, translating governance, policy, and regulatory intent into infrastructure that works under real conditions.",
      ],
      bullets: [
        "Systems that technically exist but don’t support how organisations need to work",
        "Data that requires significant effort to prepare before it can be used",
        "Regulatory requirements that are understood but difficult to implement consistently",
      ],
    },
    {
      title: "Working Across Environments",
      content: [
        "Over the course of my work, I’ve been involved in a range of environments facing similar challenges from different perspectives. This includes academic and research settings, public health and government systems, and clinical environments where data supports care and operational decision-making.",
        "I’ve also worked in financial and regulated industries, where data underpins risk, compliance, and reporting across complex regulatory frameworks. In parallel, I’ve been involved in collaborative data environments, innovation programmes, and global contexts where systems need to function under real-world constraints.",
        "While each environment has its own context, the underlying challenge is often consistent: designing systems that allow data, policy, and operations to work together in a way that is usable, trusted, and sustainable.",
      ],
    },
    {
      title: "Why It Matters",
      content: [
        "Across the environments I’ve worked in, whether in public sector, financial services, or health systems, the challenge is rarely a lack of data or regulation. Both already exist in abundance.",
        "The issue is that data often cannot be used in a meaningful way, and policy and regulatory intent are difficult to translate into systems that work in practice.",
        "In public sector and government, this affects how decisions are made and how services are delivered. In financial systems, it impacts risk, compliance, and trust. In healthcare and research, it slows progress, limits collaboration, and reduces the impact data should be delivering.",
        "I’ve seen how much effort is spent working around systems rather than benefiting from them, and how much potential remains locked in data that is never fully used.",
        "For me, the work is about addressing that directly. It’s about making sure that data, policy, and systems are aligned in a way that allows organisations to operate with clarity, confidence, and control.",
        "Because when that works properly, it enables better decisions, stronger oversight, faster research, and in some cases, outcomes that directly affect people’s lives.",
      ],
    },
  ];

  return (
    <section className="mt-24 overflow-hidden bg-black px-6 md:px-10 lg:px-0">
      <div className="mx-auto max-w-6xl space-y-20">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/70 p-8 md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#c5f018]/10 blur-3xl" />
          <h2 className="text-3xl font-bold text-[#c5f018] md:text-5xl">
            Building Trusted Systems
            <span className="text-white"> from Policy to Practice</span>
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-zinc-300 md:text-lg">
            I work in data, infrastructure, and regulated systems. Over time,
            I&apos;ve seen how difficult it is for organisations to use the data
            they already have, particularly in environments shaped by policy,
            regulation, and operational complexity.
          </p>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-zinc-300 md:text-lg">
            My focus is on building systems that make that possible in practice,
            translating policy, governance, and regulatory requirements into
            infrastructure that organisations can actually use and trust.
          </p>
        </div>

        {sections.map((section, index) => (
          <article
            key={section.title}
            className="grid gap-6 border-t border-zinc-800 pt-10 md:grid-cols-[220px_1fr] md:gap-10"
          >
            <div className="md:sticky md:top-20 md:self-start">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Section {index + 1}
              </p>
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                {section.title}
              </h3>
            </div>

            <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 md:p-8">
              {section.content.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-zinc-300 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}

              {section.bullets && (
                <ul className="space-y-3 border-l-2 border-[#c5f018]/40 pl-5 text-base leading-relaxed text-zinc-300 md:text-lg">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="list-disc">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
