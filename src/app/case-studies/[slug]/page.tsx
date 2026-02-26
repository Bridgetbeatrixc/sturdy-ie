import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

interface CaseStudyData {
  slug: string;
  title: string;
  summary: string;
  theme: string;
  context: string;
  period: string;
  img: string;
  overviewContext: string;
  environmentModel: string;
  governanceControls: string;
  standardsInteroperability: string;
  outcomesImpact: string;
  partnershipRelevance: string;
}

const CASE_STUDIES: CaseStudyData[] = [
  {
    slug: "trusted-research-environment",
    title: "Trusted Research Environment Design",
    summary:
      "Designed a governance-aligned secure environment enabling multi-institutional research collaboration.",
    theme: "Research Collaboration / TRE",
    context: "Multi-institutional research consortium",
    period: "2024",
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1200",
    overviewContext:
      "This initiative focused on enabling secure collaboration within a regulated research environment, balancing innovation needs with governance, privacy, and compliance requirements across multiple institutional partners.",
    environmentModel:
      "The environment was designed to support controlled data access, secure analytics, and institutional collaboration through a structured governance and infrastructure model aligned to regulatory expectations—enabling researchers to work with sensitive datasets without direct data transfer.",
    governanceControls:
      "Governance frameworks were embedded across the environment, including role-based access control models, policy enforcement mechanisms, comprehensive audit logging, and assurance patterns that ensure operational compliance and institutional trust at every layer.",
    standardsInteroperability:
      "Interoperability frameworks and data exchange standards were applied to ensure datasets can be securely shared, understood, and reused across organisational boundaries—supporting FAIR principles while maintaining governance alignment.",
    outcomesImpact:
      "The initiative enabled secure multi-party research collaboration, improved insight generation from sensitive datasets, and scalable adoption across institutions—while preserving compliance obligations and public trust.",
    partnershipRelevance:
      "This environment provides a model for institutions exploring similar research collaboration or governance-aligned Trusted Research Environment initiatives.",
  },
  {
    slug: "federated-analytics-model",
    title: "Federated Analytics Collaboration Model",
    summary:
      "Implemented a federated analytics model enabling insight generation without centralising sensitive data.",
    theme: "Federated Analytics / Privacy-Preserving Collaboration",
    context: "Cross-organisational data ecosystem",
    period: "2024",
    img: "https://images.pexels.com/photos/1181528/pexels-photo-1181528.jpeg?auto=compress&cs=tinysrgb&w=1200",
    overviewContext:
      "This initiative focused on enabling cross-organisational analytics within a federated environment, balancing the need for actionable insights with governance, data sovereignty, and privacy-preservation requirements.",
    environmentModel:
      "The environment was designed to support distributed query execution, secure aggregation, and institutional collaboration through a federated model where data never leaves its source—aligned to regulatory expectations and data sovereignty principles.",
    governanceControls:
      "Governance frameworks were embedded across the federated layer, including consent management, differential privacy controls, policy enforcement mechanisms, audit logging, and trust boundaries that ensure each institution retains full control over their data.",
    standardsInteroperability:
      "Interoperability frameworks and federated query standards were applied to ensure analytical models can operate consistently across heterogeneous data environments without requiring schema harmonisation or data centralisation.",
    outcomesImpact:
      "The initiative enabled secure multi-party analytics, improved insight generation without data movement, and scalable adoption across the ecosystem—while preserving data sovereignty, compliance obligations, and institutional trust.",
    partnershipRelevance:
      "This model provides a reference architecture for organisations exploring federated analytics, privacy-preserving collaboration, or governance-aligned data partnership initiatives.",
  },
  {
    slug: "finance-cost-governance",
    title: "Finance Optimisation & Cost Governance",
    summary:
      "Delivered a governance-aligned cost management model within a regulated financial services environment.",
    theme: "Cost Governance / Regulated Finance",
    context: "Regulated financial services organisation",
    period: "2024",
    img: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg?auto=compress&cs=tinysrgb&w=1200",
    overviewContext:
      "This initiative focused on optimising cost structures within a regulated financial services environment, balancing operational efficiency with governance, audit, and compliance requirements.",
    environmentModel:
      "The environment was designed to surface cost drivers, enable granular spend attribution, and support decision-making through structured reporting and governance models aligned to regulatory expectations.",
    governanceControls:
      "Governance frameworks were embedded across the cost management layer, including approval workflows, policy enforcement mechanisms, audit logging, and assurance patterns that ensure financial compliance and stakeholder trust.",
    standardsInteroperability:
      "Where applicable, financial reporting standards and data exchange protocols were applied to ensure cost data can be securely shared, reconciled, and audited across organisational boundaries.",
    outcomesImpact:
      "The initiative enabled transparent cost governance, improved spend visibility, and scalable adoption of optimisation practices—while preserving regulatory compliance and institutional accountability.",
    partnershipRelevance:
      "This model provides a framework for regulated organisations exploring cost governance, financial optimisation, or compliance-aligned spend management initiatives.",
  },
  {
    slug: "healthcare-data-sharing",
    title: "Healthcare Data Sharing Framework",
    summary:
      "Designed a consent-based framework enabling secure, compliant sharing of clinical data across NHS trusts and research partners.",
    theme: "Healthcare / Clinical Data Collaboration",
    context: "NHS trust and research partner network",
    period: "2023",
    img: "https://images.pexels.com/photos/7659574/pexels-photo-7659574.jpeg?auto=compress&cs=tinysrgb&w=800",
    overviewContext:
      "This initiative focused on enabling secure clinical data sharing within a healthcare environment, balancing research needs with patient consent, privacy, and regulatory compliance requirements.",
    environmentModel:
      "The environment was designed to support consent-based data access, secure transfer, and institutional collaboration through a structured governance and infrastructure model aligned to NHS and ICO expectations.",
    governanceControls:
      "Governance frameworks were embedded across the sharing layer, including consent management, data minimisation controls, audit logging, and assurance patterns that ensure Caldicott compliance and patient trust.",
    standardsInteroperability:
      "HL7 FHIR and NHS interoperability standards were applied to ensure clinical datasets can be securely shared, understood, and reused across trust and research partner boundaries.",
    outcomesImpact:
      "The initiative enabled secure multi-party clinical data sharing, improved research collaboration, and scalable adoption across the network—while preserving patient privacy and regulatory obligations.",
    partnershipRelevance:
      "This framework provides a model for healthcare organisations exploring similar clinical data collaboration or governance-aligned sharing initiatives.",
  },
  {
    slug: "regulatory-reporting-automation",
    title: "Regulatory Reporting Automation",
    summary:
      "Automated reporting pipelines and data quality controls to meet MiFID II transaction reporting obligations with full auditability.",
    theme: "Compliance / Regulatory Reporting",
    context: "Regulated investment services firm",
    period: "2023",
    img: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    overviewContext:
      "This initiative focused on automating regulatory reporting within a regulated investment services environment, balancing reporting accuracy with operational efficiency, audit trail integrity, and compliance requirements.",
    environmentModel:
      "The environment was designed to support automated data collection, transformation pipelines, and submission workflows through a structured model aligned to MiFID II and FCA regulatory expectations.",
    governanceControls:
      "Governance frameworks were embedded across the reporting pipeline, including data quality gates, reconciliation controls, audit logging, and assurance patterns that ensure reporting accuracy and regulatory trust.",
    standardsInteroperability:
      "FCA transaction reporting schemas and ISO 20022 messaging standards were applied to ensure report data can be accurately generated, validated, and submitted across regulatory boundaries.",
    outcomesImpact:
      "The initiative enabled automated, auditable regulatory reporting, reduced manual processing, and scalable adoption of quality controls—while preserving compliance obligations and operational accountability.",
    partnershipRelevance:
      "This model provides a reference for firms exploring regulatory reporting automation, compliance pipeline design, or governance-aligned reporting initiatives.",
  },
];

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
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <main className="relative w-full overflow-x-hidden text-sm text-zinc-200">
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

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:px-0">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 transition hover:text-zinc-200"
          >
            ← Back to case studies
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full border border-[#c5f018]/40 bg-[#c5f018]/10 px-3 py-0.5 font-semibold text-[#c5f018]">
              {study.theme}
            </span>
            <span className="text-zinc-500">
              Environment: {study.context}
            </span>
            {study.period && (
              <span className="text-zinc-600">Period: {study.period}</span>
            )}
          </div>

          <h1 className="mt-5 max-w-3xl text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
            {study.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
            {study.summary}
          </p>
        </div>
      </section>

      {/* Content sections */}
      <section className="border-b border-zinc-900/60 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:px-10 md:py-16 lg:px-0">
          <SectionBlock
            label="Overview & Context"
            body={study.overviewContext}
          />
          <SectionBlock
            label="Environment Model"
            body={study.environmentModel}
          />
          <SectionBlock
            label="Governance & Controls"
            body={study.governanceControls}
          />
          <SectionBlock
            label="Standards & Interoperability"
            body={study.standardsInteroperability}
          />
          <SectionBlock
            label="Outcomes & Impact"
            body={study.outcomesImpact}
          />
          <SectionBlock
            label="Partnership Relevance"
            body={study.partnershipRelevance}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-zinc-900/60 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center md:px-10 md:py-16 lg:px-0">
          <h2 className="text-xl font-semibold text-white md:text-2xl">
            Interested in a similar initiative?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-400">
            Open to discussions with institutions exploring governance-aligned
            collaboration, secure environments, or regulated innovation
            partnerships.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#c5f018] px-8 py-3 text-sm font-semibold text-black shadow-md shadow-lime-300/30 transition hover:-translate-y-[1px] hover:bg-lime-300"
          >
            Discuss collaboration
            <span className="text-xs">→</span>
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
