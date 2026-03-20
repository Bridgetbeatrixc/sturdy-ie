import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "../../../components/Header";
import { FooterSection } from "../../../components/FooterSection";
import { getCaseStudyBySlug } from "../../../lib/caseStudies";

interface SectionBlockProps {
  label: string;
  body: string;
}

function SectionBlock({ label, body }: SectionBlockProps) {
  return (
    <div className="border-t border-zinc-800/60 pt-8">
      <h2 className="flex items-center gap-2 text-sm font-semibold text-white">
        <span className="h-2 w-2 rounded-sm bg-[#c5f018]" />
        {label}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{body}</p>
    </div>
  );
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <main className="relative px-2 lg:px-6 md:px-6 w-full overflow-x-hidden text-sm text-zinc-200">
      <Header />

      {/* Hero */}
      <section className="relative border-b border-zinc-900/60 bg-black">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${study.img})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50" />
        </div>

        <div className="relative mx-auto max-w-8xl px-4 py-20 sm:px-6 md:px-10 md:py-28 lg:px-0">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1 text-lg font-medium text-zinc-400 transition hover:text-zinc-200"
          >
            ← Case studies
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full border border-[#c5f018]/40 bg-[#c5f018]/10 px-3 py-0.5 font-semibold text-[#c5f018]">
              {study.theme}
            </span>
            <span className="text-zinc-500">Environment: {study.context}</span>
            {study.period && (
              <span className="text-zinc-600">Period: {study.period}</span>
            )}
          </div>

          <h1 className="mt-5 max-w-8xl text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
            {study.title}
          </h1>
          <p className="mt-4 max-w-8xl text-sm leading-relaxed text-zinc-300 md:text-base">
            {study.summary}
          </p>
        </div>
      </section>

      {/* Content sections */}
      <section className="border-b border-zinc-900/60 bg-black">
        <div className="mx-auto flex max-w-8xl flex-col gap-10 px-4 py-12 sm:px-6 md:px-10 md:py-16 lg:px-0">
          <SectionBlock label="Overview & Context"          body={study.overviewContext}           />
          <SectionBlock label="Environment Model"           body={study.environmentModel}          />
          <SectionBlock label="Governance & Controls"       body={study.governanceControls}        />
          <SectionBlock label="Standards & Interoperability" body={study.standardsInteroperability} />
          <SectionBlock label="Outcomes & Impact"           body={study.outcomesImpact}            />
          <SectionBlock label="Partnership Relevance"       body={study.partnershipRelevance}      />
        </div>
      </section>

      {/* CTA */}
          <div className="mx-auto max-w-6xl py-12 md:py-16 lg:py-16 mb-10 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-10 text-center">
            <h3 className="text-2xl md:text-5xl lg:text-5xl font-light text-white mb-6">Interested in a similar 
              <span className="text-[#c5f018]"> initiative?</span></h3>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed max-w-2xl mx-auto">
              Open to discussions with institutions exploring governance-aligned
            collaboration, secure environments, or regulated innovation partnerships.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#c5f018] px-8 py-5 text-lg font-semibold text-black transition hover:bg-[#d4ff2a]"
            >
              Discuss collaboration
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          </div>

      <FooterSection />
    </main>
  );
}