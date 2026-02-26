// ─── Types ───────────────────────────────────────────────────────────────────

export interface ArticleIndex {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  flagship: boolean;
}

export interface ArticleDetail {
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  flagship?: boolean;
  sections: { heading: string; body: string }[];
}

// ─── Styles ──────────────────────────────────────────────────────────────────

export const CATEGORY_STYLES: Record<string, { active: string; badge: string; tag: string }> = {
  "All":                          { active: "bg-[#c5f018] border-[#c5f018] text-black",    badge: "bg-black/20 text-black",   tag: "" },
  "Governance & Compliance":      { active: "bg-blue-500 border-blue-500 text-white",       badge: "bg-white/20 text-white",   tag: "border-blue-500/40 text-blue-400 bg-blue-500/10" },
  "Research Collaboration":       { active: "bg-emerald-500 border-emerald-500 text-white", badge: "bg-white/20 text-white",   tag: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10" },
  "Interoperability & Standards": { active: "bg-violet-500 border-violet-500 text-white",   badge: "bg-white/20 text-white",   tag: "border-violet-500/40 text-violet-400 bg-violet-500/10" },
  "Preventive Health Innovation": { active: "bg-rose-500 border-rose-500 text-white",       badge: "bg-white/20 text-white",   tag: "border-rose-500/40 text-rose-400 bg-rose-500/10" },
  "AI & Regulated Data":          { active: "bg-amber-500 border-amber-500 text-black",     badge: "bg-black/20 text-black",   tag: "border-amber-500/40 text-amber-400 bg-amber-500/10" },
};

// ─── Index list (for the listing page) ───────────────────────────────────────

export const ARTICLES_INDEX: ArticleIndex[] = [
  {
    slug: "reframing-three-wise-monkeys-data-governance",
    title: "Reframing the Three Wise Monkeys for Data Governance",
    category: "Governance & Compliance",
    date: "June 2025",
    author: "Jason Sturdy",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt: "A cornerstone perspective on how the see-no-evil model of data governance is failing institutions — and what a proactive, accountability-first framework looks like in practice.",
    flagship: true,
  },
  {
    slug: "trusted-research-environments-beyond-compliance",
    title: "Trusted Research Environments Beyond Compliance",
    category: "Research Collaboration",
    date: "May 2025",
    author: "Jason Sturdy",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt: "TREs are too often framed as a compliance checkbox. This piece argues for a broader institutional role — enabling federated research, cross-border collaboration, and long-term data trust.",
    flagship: false,
  },
  {
    slug: "interoperability-as-governance",
    title: "Interoperability as Governance",
    category: "Interoperability & Standards",
    date: "April 2025",
    author: "Jason Sturdy",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt: "Standards like FHIR and OpenAPI are not just technical decisions — they are governance choices. Unpacking how interoperability architecture shapes institutional accountability.",
    flagship: false,
  },
  {
    slug: "precision-nutrition-data-infrastructure",
    title: "Precision Nutrition Needs a Data Infrastructure Rethink",
    category: "Preventive Health Innovation",
    date: "March 2025",
    author: "Jason Sturdy",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt: "Next-generation preventive health models depend on biometric data, personalised analytics, and secure infrastructure. Exploring what that foundation needs to look like.",
    flagship: false,
  },
  {
    slug: "ai-regulated-data-environments",
    title: "AI in Regulated Data Environments",
    category: "AI & Regulated Data",
    date: "February 2025",
    author: "Jason Sturdy",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt: "Deploying AI inside regulated data environments requires more than model governance. It demands a rethinking of access control, auditability, and institutional accountability.",
    flagship: false,
  },
  {
    slug: "five-safes-practical-implementation",
    title: "Five Safes: From Principle to Practice",
    category: "Governance & Compliance",
    date: "January 2025",
    author: "Jason Sturdy",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt: "The Five Safes framework is well understood in theory. This piece examines the practical gaps institutions face when attempting real-world implementation at scale.",
    flagship: false,
  },
  {
    slug: "federated-learning-health-data",
    title: "Federated Learning and Health Data Sovereignty",
    category: "Research Collaboration",
    date: "December 2024",
    author: "Jason Sturdy",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt: "Federated learning offers a path to cross-institutional research without centralising sensitive data. Examining the governance conditions that make it viable at scale.",
    flagship: false,
  },
  {
    slug: "fhir-beyond-interoperability",
    title: "FHIR Beyond Interoperability: A Governance Standard",
    category: "Interoperability & Standards",
    date: "November 2024",
    author: "Jason Sturdy",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt: "FHIR adoption is accelerating, but most implementations stop at data exchange. This piece explores how FHIR can anchor consent, lineage, and accountability frameworks.",
    flagship: false,
  },
  {
    slug: "biometrics-preventive-health",
    title: "Biometrics and the Future of Preventive Health Models",
    category: "Preventive Health Innovation",
    date: "October 2024",
    author: "Jason Sturdy",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt: "Wearable biometrics are generating unprecedented longitudinal health data. The question is not what we can collect — but how we govern it responsibly.",
    flagship: false,
  },
];

// ─── Detail data (keyed by slug — server-side lookup) ────────────────────────

export const ARTICLES_DETAIL: Record<string, ArticleDetail> = {
  "reframing-three-wise-monkeys-data-governance": {
    title: "Reframing the Three Wise Monkeys for Data Governance",
    category: "Governance & Compliance",
    date: "June 2025",
    author: "Jason Sturdy",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    flagship: true,
    sections: [
      {
        heading: "Intro",
        body: `The three wise monkeys — see no evil, hear no evil, speak no evil — have long served as a cultural shorthand for wilful ignorance. In the context of data governance, this metaphor has never been more apt, nor more dangerous. Institutions across health, research, and regulated industries are operating under governance frameworks that reward silence over accountability, containment over transparency, and compliance theatre over genuine trust-building.

This is not an accident. It is a structural outcome — one that can be deliberately redesigned. This piece argues for a fundamental reframing: from reactive concealment to proactive stewardship.`,
      },
      {
        heading: "Context — Why This Matters Now",
        body: `The volume and sensitivity of data in regulated environments is growing faster than the governance structures designed to contain it. The expansion of health data sharing agreements, the proliferation of AI systems trained on institutional datasets, and the increasing cross-border nature of research collaboration have all outpaced the frameworks that were designed for an era of siloed, static data.

Simultaneously, trust in institutions is fragile. High-profile breaches, opaque consent models, and the perceived misuse of public data have eroded the social licence that enables data collaboration in the first place. Governance is no longer a back-office function — it is the foundation on which public and institutional trust is built or destroyed.`,
      },
      {
        heading: "Problem Framing — What's Failing Today",
        body: `Most institutional data governance frameworks share a common failure mode: they are designed to pass audits, not to enable accountability. They prioritise documentation over practice, and compliance signalling over behavioural change.

The Three Wise Monkeys model persists because it is comfortable. "See no evil" means not looking too closely at how data is actually used. "Hear no evil" means ignoring warnings from data stewards, researchers, and ethicists who raise concerns. "Speak no evil" means suppressing institutional transparency in favour of reputational protection.

The result is a governance landscape where accountability is diffused, incidents are minimised, and the same structural failures repeat — because no one within the system is incentivised to surface them.`,
      },
      {
        heading: "Strategic Perspective — A Proactive Accountability Model",
        body: `The alternative is not punitive oversight. It is proactive accountability — a governance posture where institutions actively seek out risk, reward transparency, and build the technical and organisational infrastructure to make accountability the path of least resistance.

This means three things. First, visibility: governance systems should make data flows, access decisions, and usage patterns legible to those responsible for them. Second, voice: there must be legitimate channels for data stewards, researchers, and affected communities to raise concerns without retaliation. Third, accountability: when things go wrong — and they will — the response must be proportionate, public where appropriate, and genuinely corrective rather than performatively remedial.`,
      },
      {
        heading: "Operational Model — Implementation Patterns",
        body: `Translating this into practice requires both technical and organisational change. On the technical side, this means investing in data lineage tooling, access audit logs that are reviewed rather than just retained, and consent management systems that reflect genuine choice rather than coercive opt-in flows.

On the organisational side, it means establishing data governance functions with real authority — not advisory committees that produce reports no one reads. It means embedding data stewardship roles within operational teams, not just in compliance. And it means adopting governance frameworks like the Five Safes — Safe People, Safe Projects, Safe Settings, Safe Data, Safe Outputs — as operational standards rather than aspirational principles.

Crucially, governance must be proportionate. Not every dataset requires the same level of control. The operational model should be tiered, with risk-appropriate controls that enable research and collaboration rather than defaulting to restriction as the lowest-risk option.`,
      },
      {
        heading: "Institutional Impact — Outcomes, Trust, Collaboration",
        body: `Institutions that adopt a proactive accountability model do not just reduce risk — they unlock capability. When researchers trust that their access to sensitive data is governed well, they propose more ambitious studies. When the public trust that their data is stewarded responsibly, they are more willing to consent to its use. When partners trust that an institution's governance is robust, they are more willing to enter data-sharing agreements.

The institutional impact is therefore not just reputational. It is strategic. Governance is a competitive differentiator in research partnerships, regulatory negotiations, and public engagement. Institutions that treat it as such are better positioned to build the cross-sector collaborations that complex problems — in health, climate, infrastructure — actually require.`,
      },
      {
        heading: "Closing Perspective — Forward-Looking",
        body: `The Three Wise Monkeys have had their moment. The data environments of the next decade will be too complex, too interconnected, and too consequential for governance frameworks built on concealment and compliance theatre to hold.

The institutions that will lead are those that choose to look, to listen, and to speak — actively, honestly, and in service of the people whose data they hold. Reframing governance as a trust-building function rather than a risk-minimisation exercise is not idealism. It is the most pragmatic response to an era in which public trust is the scarcest resource in data collaboration.`,
      },
    ],
  },
  "trusted-research-environments-beyond-compliance": {
    title: "Trusted Research Environments Beyond Compliance",
    category: "Research Collaboration",
    date: "May 2025",
    author: "Jason Sturdy",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
    flagship: false,
    sections: [
      { heading: "Intro", body: `Trusted Research Environments were conceived as a mechanism for enabling access to sensitive data while managing risk. In practice, many have become elaborate compliance checkboxes — expensive, slow, and misaligned with the research needs they were designed to serve.\n\nThis piece argues for a broader institutional role for TREs: not as security perimeters, but as enabling infrastructure for federated research, cross-border collaboration, and long-term data trust.` },
      { heading: "Context — Why This Matters Now", body: `The Five Safes framework, on which most TREs are based, was designed for a world of batch data access and discrete research projects. Today's research landscape — involving real-time data streams, federated models, and multi-institutional collaboration — demands something more architecturally ambitious.` },
      { heading: "Problem Framing — What's Failing Today", body: `TREs fail researchers when they become bottlenecks rather than enablers. Slow onboarding, inflexible output controls, and the absence of federated access mean that institutions default to bilateral data-sharing agreements — which are harder to govern and easier to misuse than a well-designed TRE.` },
      { heading: "Strategic Perspective — Research Infrastructure, Not Security Perimeters", body: `The reframe is simple but significant: TREs should be thought of as research infrastructure, not security perimeters. Their value is not in what they prevent, but in what they enable — safely, reproducibly, and at scale.` },
      { heading: "Operational Model — Enabling Federated Research", body: `In practice, this means investing in self-service access pathways for pre-approved researcher cohorts, building federated query capabilities that avoid data movement entirely, and designing output checking processes that are proportionate to the sensitivity of the data.` },
      { heading: "Institutional Impact — Anchor Infrastructure for Research Consortia", body: `TREs that are genuinely enabling become anchor infrastructure for research consortia. They attract partners, reduce the transaction cost of collaboration, and create a reusable trust layer that benefits multiple projects over time.` },
      { heading: "Closing Perspective — Forward-Looking", body: `The next generation of TREs will not be judged on how tightly they control access. They will be judged on how efficiently they enable the research that public data was collected to support — with accountability, reproducibility, and trust built in from the start.` },
    ],
  },
  "interoperability-as-governance": {
    title: "Interoperability as Governance",
    category: "Interoperability & Standards",
    date: "April 2025",
    author: "Jason Sturdy",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1200",
    flagship: false,
    sections: [
      { heading: "Intro", body: `Standards like FHIR and OpenAPI are routinely discussed as technical decisions — choices about data formats, API design, and system integration. But they are something more consequential: they are governance choices that shape what data can be accessed, by whom, under what conditions, and with what accountability.` },
      { heading: "Context — Why This Matters Now", body: `Health data interoperability has moved from a technical aspiration to a regulatory requirement in multiple jurisdictions. The NHS Long Term Plan, the EU Health Data Space, and equivalent frameworks in Australia and Canada all mandate standards-based data sharing. The question is no longer whether to adopt interoperability standards, but how to embed governance from the start.` },
      { heading: "Problem Framing — What's Failing Today", body: `Most interoperability implementations treat governance as a downstream concern — something to be addressed after the technical infrastructure is in place. The result is systems that exchange data efficiently but without the consent, lineage, or accountability mechanisms that make that exchange trustworthy.` },
      { heading: "Strategic Perspective — Standards as Governance Architecture", body: `Every interoperability decision is a governance decision. Choosing FHIR R4 over a proprietary format is not just a technical preference — it is a commitment to a particular model of data portability, consent management, and audit capability.` },
      { heading: "Operational Model — Embedding Governance in Standards Adoption", body: `In practice, this means extending FHIR implementations to include consent resources, provenance tracking, and audit event logging as standard components — not optional extensions. API security should be treated as an identity and authorisation problem, with fine-grained access controls that reflect the sensitivity of the data being exchanged.` },
      { heading: "Institutional Impact — Trust as Infrastructure", body: `Institutions that treat interoperability as governance infrastructure build trust at scale. Their data exchange relationships are more durable, their regulatory relationships are more productive, and their ability to participate in multi-institutional research is significantly enhanced.` },
      { heading: "Closing Perspective — Forward-Looking", body: `As AI systems increasingly consume health and research data through API interfaces, the governance decisions embedded in interoperability standards will determine whether those systems are accountable or opaque. The institutions that get this right now will be better positioned for the regulatory and ethical scrutiny that is coming.` },
    ],
  },
  "precision-nutrition-data-infrastructure": {
    title: "Precision Nutrition Needs a Data Infrastructure Rethink",
    category: "Preventive Health Innovation",
    date: "March 2025",
    author: "Jason Sturdy",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    flagship: false,
    sections: [
      { heading: "Intro", body: `Precision nutrition — the tailoring of dietary guidance to individual biology, behaviour, and context — is one of the most promising frontiers in preventive health. It is also one of the most data-intensive. The infrastructure required to support it at scale does not yet exist in most health systems, and the governance frameworks required to make it trustworthy are even further behind.` },
      { heading: "Context — Why This Matters Now", body: `The convergence of continuous glucose monitoring, gut microbiome sequencing, wearable biometrics, and longitudinal dietary tracking is generating a new category of health data — highly personal, highly actionable, and highly sensitive.` },
      { heading: "Problem Framing — What's Failing Today", body: `The current infrastructure for precision nutrition is fragmented, proprietary, and ungoverned. Consumer wearable platforms hold biometric data in siloed ecosystems. Dietary tracking apps have no interoperability with clinical systems. Consent models are designed for data extraction, not for genuine participant agency.` },
      { heading: "Strategic Perspective — Infrastructure Before Intervention", body: `Before precision nutrition can be delivered at scale, the data infrastructure to support it must be built. This means investing in interoperable data platforms, longitudinal data linkage capabilities, and governance frameworks that give participants genuine control over how their data is used.` },
      { heading: "Operational Model — Building the Foundation", body: `In practice, this requires a federated data architecture that links wearable, dietary, and clinical data without centralising it; a consent management layer that reflects the ongoing, dynamic nature of participation; and a governance framework proportionate to the sensitivity of biometric and dietary data.` },
      { heading: "Institutional Impact — Enabling Next-Generation Preventive Models", body: `Health systems that invest in this infrastructure will be positioned to deliver precision nutrition programmes that are evidence-based, scalable, and genuinely personalised — reducing the burden of diet-related chronic disease at population scale.` },
      { heading: "Closing Perspective — Forward-Looking", body: `Precision nutrition is not a distant aspiration. The science is here. The data is being generated. What is missing is the infrastructure and governance to make it actionable at scale.` },
    ],
  },
  "ai-regulated-data-environments": {
    title: "AI in Regulated Data Environments",
    category: "AI & Regulated Data",
    date: "February 2025",
    author: "Jason Sturdy",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    flagship: false,
    sections: [
      { heading: "Intro", body: `Deploying AI inside regulated data environments requires more than model governance. It demands a rethinking of access control, auditability, and institutional accountability at every layer of the stack. The frameworks that govern human access to sensitive data were not designed with AI systems in mind — and the gaps are consequential.` },
      { heading: "Context — Why This Matters Now", body: `AI systems are increasingly being deployed in health, legal, financial, and research contexts where the underlying data is subject to strict regulatory controls. The pace of AI adoption has outrun the governance frameworks designed to contain it.` },
      { heading: "Problem Framing — What's Failing Today", body: `Most regulated data environments treat AI as a user — a system that requests access, processes data, and returns outputs. But AI systems can memorise training data, generate outputs that reveal sensitive information, and operate at a scale that makes conventional audit approaches inadequate.` },
      { heading: "Strategic Perspective — Governance-First AI Deployment", body: `The governance-first approach starts with a simple principle: AI systems should be subject to at least the same governance controls as the humans whose roles they augment or replace. Extend existing data governance frameworks to cover AI access, AI outputs, and AI accountability.` },
      { heading: "Operational Model — Extending Governance to AI Systems", body: `AI systems should be treated as identities within access control frameworks — with the same fine-grained permissions, audit logging, and review processes as human users. AI outputs should be subject to output checking proportionate to the sensitivity of the training data. AI model governance should track not just what data was used, but under what consent conditions.` },
      { heading: "Institutional Impact — Accountability at Scale", body: `Institutions that get AI governance right in regulated environments gain a significant competitive advantage. They can deploy AI more quickly, face fewer regulatory challenges, and build the institutional trust required to access the sensitive datasets on which AI development depends.` },
      { heading: "Closing Perspective — Forward-Looking", body: `The EU AI Act, NHS AI governance frameworks, and equivalent instruments are creating a new regulatory floor for AI deployment in regulated environments. Institutions that treat this as a compliance burden will fall behind those that treat it as an opportunity to build genuinely accountable AI infrastructure.` },
    ],
  },
  "five-safes-practical-implementation": {
    title: "Five Safes: From Principle to Practice",
    category: "Governance & Compliance",
    date: "January 2025",
    author: "Jason Sturdy",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200",
    flagship: false,
    sections: [
      { heading: "Intro", body: `The Five Safes framework — Safe People, Safe Projects, Safe Settings, Safe Data, Safe Outputs — is one of the most widely cited governance frameworks in research data management. It is also one of the most inconsistently implemented. The gap between the principle and the practice is where most governance failures occur.` },
      { heading: "Context — Why This Matters Now", body: `As research data environments become more complex — with federated access, AI-assisted analysis, and cross-border collaboration — the Five Safes framework is being asked to do more than it was originally designed for.` },
      { heading: "Problem Framing — What's Failing Today", body: `The most common failure mode is treating the Five Safes as a checklist rather than a governance philosophy. Institutions tick the boxes without asking whether the controls are proportionate, whether they are actually enforced, or whether they are enabling or obstructing legitimate research.` },
      { heading: "Strategic Perspective — The Five Safes as a Governance Philosophy", body: `The Five Safes are most powerful when used as a framework for risk-proportionate governance — not as a set of binary controls, but as a set of dimensions along which risk can be managed. The question for each dimension is not "is this safe?" but "is this safe enough, given the other safeguards in place?"` },
      { heading: "Operational Model — Risk-Proportionate Implementation", body: `Risk-proportionate Five Safes implementation means calibrating controls to the actual sensitivity of the data and the actual risk of the project. High-risk projects warrant more rigorous controls. Lower-risk projects should face lighter-touch governance that enables rather than obstructs research.` },
      { heading: "Institutional Impact — Enabling Research Without Compromising Accountability", body: `Institutions that implement the Five Safes in a risk-proportionate way enable more research, more quickly, without compromising accountability. They become preferred partners for research collaborations, because their governance is seen as enabling rather than obstructive.` },
      { heading: "Closing Perspective — Forward-Looking", body: `The Five Safes framework will remain relevant for as long as research requires access to sensitive data. The institutions that will lead are those that treat it as a living governance philosophy, continuously refined in response to new research modalities, new regulatory requirements, and new forms of institutional risk.` },
    ],
  },
  "federated-learning-health-data": {
    title: "Federated Learning and Health Data Sovereignty",
    category: "Research Collaboration",
    date: "December 2024",
    author: "Jason Sturdy",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    flagship: false,
    sections: [
      { heading: "Intro", body: `Federated learning offers a compelling answer to one of health data's central dilemmas: how to train AI models on sensitive datasets without centralising the data itself. But the technical promise is running ahead of the governance frameworks required to make it trustworthy.` },
      { heading: "Context — Why This Matters Now", body: `Cross-institutional health research is increasingly dependent on machine learning models that require large, diverse training datasets. Federated learning allows models to be trained across distributed data without the data leaving its original environment — a significant privacy advantage.` },
      { heading: "Problem Framing — What's Failing Today", body: `Most federated learning deployments in health focus on the technical architecture and underinvest in the governance layer. Questions of consent, data quality, model auditability, and accountability for model outputs are frequently deferred or ignored entirely.` },
      { heading: "Strategic Perspective — Governance as an Enabler of Federated Research", body: `Federated learning is only as trustworthy as the governance conditions under which it operates. The institutions that will lead in this space are those that treat governance as a design constraint, not an afterthought.` },
      { heading: "Operational Model — Building Governed Federated Systems", body: `Governed federated learning requires: clear data contribution agreements that specify what data is used and under what conditions; model audit trails that allow the provenance of model outputs to be traced; and output governance that ensures federated models are not used to infer sensitive attributes from participating datasets.` },
      { heading: "Institutional Impact — Enabling Multi-Institutional Research at Scale", body: `Institutions that build well-governed federated learning infrastructure position themselves as anchor partners in multi-institutional research consortia. The governance layer becomes a competitive asset, not just a compliance cost.` },
      { heading: "Closing Perspective — Forward-Looking", body: `Federated learning will be a cornerstone of health AI infrastructure over the next decade. The governance frameworks built now will shape whether that infrastructure is trustworthy — or whether it reproduces the accountability failures of centralised data systems in a distributed form.` },
    ],
  },
  "fhir-beyond-interoperability": {
    title: "FHIR Beyond Interoperability: A Governance Standard",
    category: "Interoperability & Standards",
    date: "November 2024",
    author: "Jason Sturdy",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200",
    flagship: false,
    sections: [
      { heading: "Intro", body: `FHIR has become the dominant standard for health data exchange. But most implementations treat it as a plumbing specification — a way to move data between systems efficiently. The governance potential of FHIR is largely untapped.` },
      { heading: "Context — Why This Matters Now", body: `Regulatory mandates for FHIR adoption are accelerating globally. The result is a wave of FHIR implementations that are technically compliant but governmentally shallow — exchanging data without the consent, lineage, or accountability mechanisms that make that exchange trustworthy.` },
      { heading: "Problem Framing — What's Failing Today", body: `FHIR implementations routinely omit the resources most relevant to governance: Consent, Provenance, AuditEvent. These are treated as optional extensions rather than core components, resulting in data exchange infrastructure that has no memory of why data was shared, under what conditions, or what happened to it.` },
      { heading: "Strategic Perspective — FHIR as a Governance Architecture", body: `FHIR's resource model is rich enough to encode consent, provenance, and audit trails alongside clinical data. Institutions that treat these resources as core — not optional — build data exchange infrastructure that is accountable by design.` },
      { heading: "Operational Model — Implementing Governance-First FHIR", body: `Governance-first FHIR implementation means: mandatory Consent resource implementation for any data exchange involving personal data; Provenance resources that track data lineage across system boundaries; and AuditEvent logging that is reviewed, not just retained.` },
      { heading: "Institutional Impact — Trust Infrastructure for the Health Data Ecosystem", body: `Institutions that implement FHIR with governance built in become preferred partners in health data sharing agreements. Their data exchange relationships are more durable because they are built on demonstrable accountability.` },
      { heading: "Closing Perspective — Forward-Looking", body: `As the health data ecosystem becomes more interconnected, the governance decisions embedded in FHIR implementations will determine whether data flows can be trusted. The standard is capable of encoding that trust. The question is whether institutions will use it.` },
    ],
  },
  "biometrics-preventive-health": {
    title: "Biometrics and the Future of Preventive Health Models",
    category: "Preventive Health Innovation",
    date: "October 2024",
    author: "Jason Sturdy",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200",
    flagship: false,
    sections: [
      { heading: "Intro", body: `Wearable biometrics are generating unprecedented longitudinal health data. Continuous heart rate, sleep architecture, activity patterns, blood oxygen, skin temperature — the data streams from consumer devices are richer than anything available to clinicians a decade ago. The question is not what we can collect. It is how we govern it responsibly.` },
      { heading: "Context — Why This Matters Now", body: `The wearable market has crossed a threshold: devices are now clinically accurate enough to be meaningful for health monitoring, and adoption is broad enough to generate population-scale datasets. The gap between data generation and data governance has never been wider.` },
      { heading: "Problem Framing — What's Failing Today", body: `Biometric data from consumer wearables exists in a governance vacuum. Consent models are designed for data extraction, not participant agency. Data is siloed in proprietary platforms with no interoperability. There is no standard for how biometric data should be handled, shared, or used in research.` },
      { heading: "Strategic Perspective — Biometrics as Preventive Health Infrastructure", body: `Longitudinal biometric data is the foundation of next-generation preventive health models. But it will only be usable at scale if the governance infrastructure to support it is built alongside the collection infrastructure.` },
      { heading: "Operational Model — Building Governed Biometric Data Systems", body: `Governed biometric data systems require: dynamic consent models that reflect the ongoing nature of data collection; interoperability standards that allow biometric data to be linked with clinical records; and governance frameworks that give participants genuine control over how their data is used.` },
      { heading: "Institutional Impact — Enabling Population-Scale Preventive Health", body: `Health systems and research institutions that build governed biometric data infrastructure position themselves to deliver preventive health programmes that are genuinely personalised — using longitudinal data to identify risk patterns and intervene before conditions develop.` },
      { heading: "Closing Perspective — Forward-Looking", body: `The biometric data being generated today will be the foundation of preventive health models for the next generation. The governance decisions made now — about consent, interoperability, and accountability — will determine whether that foundation is trustworthy.` },
    ],
  },
};