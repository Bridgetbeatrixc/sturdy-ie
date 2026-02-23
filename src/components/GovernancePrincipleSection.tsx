export function GovernancePrincipleSection() {
  return (
    <section className="border-b border-zinc-900/60 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:px-10 md:py-20 lg:px-0">
        <div className="max-w-xl space-y-5">
          <h2 className="text-xl font-semibold text-white md:text-2xl">
            The Governance <span className="text-[#c5f018]">Principle</span>
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300">
            Governance is often explained through the Three Wise Monkeys: “see no
            evil, hear no evil, speak no evil”. But in data-intensive environments,
            good governance requires the opposite — structured visibility,
            transparent listening, and accountable communication.
          </p>
          <p className="text-sm leading-relaxed text-zinc-300">
            Institutions must be able to see how data flows, where it is used, and
            which controls apply. They must hear and respond to regulatory
            expectations, ethical considerations, and societal concerns.
          </p>
          <p className="text-sm leading-relaxed text-zinc-300">
            And they must speak clearly about how data is governed, safeguarded, and
            operationalised. This creates trust — enabling collaboration, innovation,
            and public value without losing sight of accountability.
          </p>
        </div>

        <div className="flex-1">
          <div className="h-64 w-full overflow-hidden rounded-3xl border border-zinc-800 bg-[url('https://images.pexels.com/photos/1526492/pexels-photo-1526492.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center md:h-72" />
        </div>
      </div>
    </section>
  );
}

