export const VENTURES_INDEX = [
  {
    slug: "preventive-health-platform",
    title: "Preventive Health Intelligence Platform",
    status: "Exploring" as const,
    overview:
      "Exploring how secure biometrics, personalised analytics, and governance-aligned infrastructure can power next-generation preventive health models.",
  },
  {
    slug: "federated-data-ecosystem",
    title: "Federated Data Ecosystem",
    status: "Active" as const,
    overview:
      "Building infrastructure for privacy-preserving cross-institutional analytics without centralising sensitive datasets.",
  },
  {
    slug: "regulated-innovation-lab",
    title: "Regulated Innovation Lab",
    status: "Active" as const,
    overview:
      "A sandbox for testing governance-aligned innovation patterns within highly regulated sectors such as finance and healthcare.",
  },
  {
    slug: "performance-optimisation-engine",
    title: "Performance & Longevity Analytics",
    status: "Exploring" as const,
    overview:
      "Investigating data-driven models for human performance optimisation grounded in secure analytics and preventive insights.",
  },
  {
    slug: "collaboration-platform",
    title: "Secure Collaboration Platform",
    status: "Relaunching" as const,
    overview:
      "Re-engineering institutional collaboration tooling with end-to-end governance, auditability, and scalable trust boundaries.",
  },
];

export const STATUS_STYLES: Record<string, string> = {
  Exploring: "border-amber-500/40 bg-amber-500/10 text-amber-400",
  Active: "border-[#c5f018]/40 bg-[#c5f018]/10 text-[#c5f018]",
  Relaunching: "border-sky-400/40 bg-sky-400/10 text-sky-400",
};

export interface VentureDetailData {
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

export const VENTURES_DETAIL: VentureDetailData[] = [
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
