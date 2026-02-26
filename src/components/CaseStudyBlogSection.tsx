"use client";

import Link from "next/link";

const CASE_STUDY_POSTS = [
  {
    slug: "trusted-research-environment",
    title: "Trusted Research Environment Design",
    summary:
      "Designed a governance-aligned secure environment enabling multi-institutional research collaboration.",
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800",
    theme: "Research Collaboration / TRE",
    context: "Multi-institutional research consortium",
    period: "2024",
  },
  {
    slug: "federated-analytics-model",
    title: "Federated Analytics Collaboration Model",
    summary:
      "Implemented a federated analytics model enabling insight generation without centralising sensitive data.",
    img: "https://images.pexels.com/photos/1181528/pexels-photo-1181528.jpeg?auto=compress&cs=tinysrgb&w=800",
    theme: "Federated Analytics / Privacy-Preserving Collaboration",
    context: "Cross-organisational data ecosystem",
    period: "2024",
  },
  {
    slug: "finance-cost-governance",
    title: "Finance Optimisation & Cost Governance",
    summary:
      "Delivered a governance-aligned cost management model within a regulated financial services environment.",
    img: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg?auto=compress&cs=tinysrgb&w=800",
    theme: "Cost Governance / Regulated Finance",
    context: "Regulated financial services organisation",
    period: "2024",
  },
  {
    slug: "healthcare-data-sharing",
    title: "Healthcare Data Sharing Framework",
    summary:
      "Designed a consent-based framework enabling secure, compliant sharing of clinical data across NHS trusts and research partners.",
    img: "https://images.pexels.com/photos/7659574/pexels-photo-7659574.jpeg?auto=compress&cs=tinysrgb&w=800",
    theme: "Healthcare / Clinical Data Collaboration",
    context: "NHS trust and research partner network",
    period: "2023",
  },
  {
    slug: "regulatory-reporting-automation",
    title: "Regulatory Reporting Automation",
    summary:
      "Automated reporting pipelines and data quality controls to meet MiFID II transaction reporting obligations with full auditability.",
    img: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    theme: "Compliance / Regulatory Reporting",
    context: "Regulated investment services firm",
    period: "2023",
  },
];

export function CaseStudyBlogSection() {
  return (
    <section className="border-b border-zinc-900/60 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-10 md:py-20 lg:px-0">
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-[#c5f018]" />
            <span className="text-xs font-semibold tracking-[0.3em] text-lime-300/80">
              All case studies
            </span>
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
            Case studies &amp; delivery examples
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Selected examples of governance-aligned delivery, secure data
            collaboration, and regulatory compliance initiatives.
          </p>
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          {CASE_STUDY_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col gap-6 border-b border-zinc-800/60 pb-12 last:border-0 last:pb-0 md:flex-row md:gap-10 md:pb-16"
            >
              <Link
                href={`/case-studies/${post.slug}`}
                className="relative block aspect-[16/10] shrink-0 overflow-hidden rounded-lg md:aspect-video md:w-[45%]"
              >
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${post.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute left-4 top-4 rounded-full bg-[#c5f018] px-3 py-1 text-xs font-semibold text-black">
                  {post.theme.split(" / ")[0]}
                </span>
              </Link>

              <div className="flex flex-1 flex-col justify-center">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
                  <span className="rounded-full border border-zinc-700 px-2.5 py-0.5 font-medium text-zinc-400">
                    {post.theme}
                  </span>
                  {post.period && (
                    <span className="text-zinc-600">Period: {post.period}</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-[#c5f018] md:text-2xl">
                  <Link href={`/case-studies/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {post.summary}
                </p>
                <p className="mt-1 text-xs text-zinc-600">
                  {post.context}
                </p>
                <Link
                  href={`/case-studies/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#c5f018] transition-opacity hover:opacity-80"
                >
                  Read case study
                  <span className="text-xs">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
