import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

interface VentureData {
  slug: string;
  title: string;
  status: string;
  headerIntro: string;
  ventureOverview: string;
  problemSpace: string;
  innovationDirection: string;
  dataAnalytics: string;
  collaboration: string;
}

const VENTURES: VentureData[] = [
  {
    slug: "preventive-health-platform",
    title: "Preventive Health Intelligence Platform",
    status: "Exploring",
    headerIntro:
      "Each initiative explores emerging opportunities across health, data, and preventive innovation, grounded in secure infrastructure and governance alignment.",
    ventureOverview:
      "This initiative explores how secure environments, data, and analytics can support new models of health optimisation, collaboration, or regulated innovation.",
    problemSpace:
      "The venture sits within a broader shift toward data-driven ecosystems, where infrastructure, governance, and analytics converge to enable next-generation preventive and performance models.",
    innovationDirection:
      "Development focuses on governance-aligned innovation, secure analytics, and scalable collaboration patterns that can operate credibly within regulated environments.",
    dataAnalytics:
      "Where relevant, initiatives incorporate biometrics, secure analytics, personalisation models, and preventive insights—while maintaining governance and trust boundaries.",
    collaboration:
      "Open to aligned research and innovation partners exploring pilots, co-development, or ecosystem initiatives.",
  },
  {
    slug: "federated-data-ecosystem",
    title: "Federated Data Ecosystem",
    status: "Active",
    headerIntro:
      "Each initiative explores emerging opportunities across health, data, and preventive innovation, grounded in secure infrastructure and governance alignment.",
    ventureOverview:
      "This initiative explores how secure environments, data, and analytics can support new models of cross-institutional collaboration without centralising sensitive datasets.",
    problemSpace:
      "Traditional analytics require data centralisation, creating governance, privacy, and sovereignty challenges. Federated approaches preserve institutional autonomy while enabling shared insights.",
    innovationDirection:
      "Development focuses on privacy-preserving computation, federated learning, and standards-aligned data exchange protocols that scale across institutional boundaries.",
    dataAnalytics:
      "Incorporates differential privacy, secure aggregation, and governance-aware query engines to deliver insights without exposing underlying data.",
    collaboration:
      "Open to aligned research and innovation partners exploring pilots, co-development, or ecosystem initiatives.",
  },
  {
    slug: "regulated-innovation-lab",
    title: "Regulated Innovation Lab",
    status: "Active",
    headerIntro:
      "Each initiative explores emerging opportunities across health, data, and preventive innovation, grounded in secure infrastructure and governance alignment.",
    ventureOverview:
      "This initiative explores how secure environments can serve as sandboxes for testing innovation patterns within highly regulated sectors.",
    problemSpace:
      "Regulation and innovation are often seen as opposing forces. This venture explores how governance alignment can actually accelerate credible innovation.",
    innovationDirection:
      "Development focuses on governance-aligned innovation, secure analytics, and scalable collaboration patterns that can operate credibly within regulated environments.",
    dataAnalytics:
      "Where relevant, initiatives incorporate compliance analytics, audit trail generation, and regulatory reporting automation—while maintaining trust boundaries.",
    collaboration:
      "Open to aligned research and innovation partners exploring pilots, co-development, or ecosystem initiatives.",
  },
  {
    slug: "performance-optimisation-engine",
    title: "Performance & Longevity Analytics",
    status: "Exploring",
    headerIntro:
      "Each initiative explores emerging opportunities across health, data, and preventive innovation, grounded in secure infrastructure and governance alignment.",
    ventureOverview:
      "This initiative explores how secure environments, data, and analytics can support new models of human performance optimisation and longevity insights.",
    problemSpace:
      "The venture sits within a broader shift toward data-driven health ecosystems, where biometrics, wearables, and analytics converge to enable preventive and performance models.",
    innovationDirection:
      "Development focuses on personalised analytics, secure biometric data pipelines, and evidence-based optimisation models within governed boundaries.",
    dataAnalytics:
      "Incorporates biometrics, secure analytics, personalisation models, and preventive insights—while maintaining governance and trust boundaries.",
    collaboration:
      "Open to aligned research and innovation partners exploring pilots, co-development, or ecosystem initiatives.",
  },
  {
    slug: "collaboration-platform",
    title: "Secure Collaboration Platform",
    status: "Relaunching",
    headerIntro:
      "Each initiative explores emerging opportunities across health, data, and preventive innovation, grounded in secure infrastructure and governance alignment.",
    ventureOverview:
      "This initiative explores how secure collaboration tooling can be re-engineered with end-to-end governance, auditability, and scalable trust boundaries.",
    problemSpace:
      "Institutional collaboration tools often lack the governance, audit, and compliance features required for regulated environments, creating friction and risk.",
    innovationDirection:
      "Development focuses on governance-aligned collaboration infrastructure, zero-trust architectures, and scalable permission models for cross-organisational workflows.",
    dataAnalytics:
      "Where relevant, initiatives incorporate activity analytics, compliance monitoring, and collaboration pattern insights—while maintaining governance and trust boundaries.",
    collaboration:
      "Open to aligned research and innovation partners exploring pilots, co-development, or ecosystem initiatives.",
  },
];

const STATUS_STYLES: Record<string, string> = {
  Exploring: "border-amber-500/40 bg-amber-500/10 text-amber-400",
  Active: "border-[#c5f018]/40 bg-[#c5f018]/10 text-[#c5f018]",
  Relaunching: "border-sky-400/40 bg-sky-400/10 text-sky-400",
};

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

export default async function VentureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const venture = VENTURES.find((v) => v.slug === slug);
  if (!venture) notFound();

  return (
    <main className="relative w-full overflow-x-hidden text-sm text-zinc-200">
      <Header />

      {/* Hero */}
      <section className="border-b border-zinc-900/60 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-10 md:py-20 lg:px-0">
          <Link
            href="/ventures"
            className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 transition hover:text-zinc-300"
          >
            ← Back to ventures
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span
              className={`inline-block rounded-full border px-3 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider ${STATUS_STYLES[venture.status]}`}
            >
              {venture.status}
            </span>
          </div>

          <h1 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
            {venture.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            {venture.headerIntro}
          </p>
        </div>
      </section>

      {/* Content sections */}
      <section className="border-b border-zinc-900/60 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 md:px-10 md:py-16 lg:px-0">
          <SectionBlock
            label="Venture Overview"
            body={venture.ventureOverview}
          />
          <SectionBlock label="Problem Space" body={venture.problemSpace} />
          <SectionBlock
            label="Innovation Direction"
            body={venture.innovationDirection}
          />
          <SectionBlock
            label="Data & Analytics Dimension"
            body={venture.dataAnalytics}
          />
          <SectionBlock
            label="Collaboration Opportunities"
            body={venture.collaboration}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-zinc-900/60 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 md:px-10 md:py-16 lg:px-0">
          <h2 className="text-xl font-semibold text-white md:text-2xl">
            Interested in collaborating?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-400">
            Open to aligned research and innovation partners exploring pilots,
            co-development, or ecosystem initiatives.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#c5f018] px-8 py-3 text-sm font-semibold text-black shadow-md shadow-lime-300/30 transition hover:-translate-y-[1px] hover:bg-lime-300"
          >
            Discuss partnership
            <span className="text-xs">→</span>
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
