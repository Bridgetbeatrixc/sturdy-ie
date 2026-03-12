export function HomeAboutSection() {
  return (
    <section className="relative z-10 overflow-visible">
      <div
        className="mx-auto flex max-w-7xl flex-col gap-30 md:flex-row px-4 py-8 md:px-10 md:py-20 lg:px-6"
        style={{ opacity: 0, animation: 'fadeUp 0.8s ease-out 0.2s forwards' }}
      >
        {/* Hero Profile Card */}
        <div className="max-w-sm space-y-5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-[#c5f018]"
              style={{ animation: 'dotPulse 1s ease-in-out infinite' }} />
            <span className="text-lg font-semibold">
              Focus
            </span>
          </div>
          <h2 className="text-3xl leading-relaxed text-white md:text-5xl">
            Current Areas of <span className="text-[#c5f018]">Work</span>
          </h2>
        </div>

        {/* About paragraphs */}
        <div className="max-w-2xl space-y-4 text-[0.95rem] leading-relaxed text-zinc-300">
          <p className="text-lg">
            My work focuses on designing trusted digital infrastructure that enables institutions to govern, exchange, and analyse complex data ecosystems.
          </p>
          <p className="text-lg">
            This includes platforms and frameworks that support secure collaboration, regulatory alignment, and responsible data innovation across healthcare, research, financial systems, and the public sector.
          </p>
        </div>
      </div>
    </section>
  );
}