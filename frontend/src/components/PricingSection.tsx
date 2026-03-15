"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";

const PLANS = [
  {
    name: "Starter",
    description: "Perfect for small business exploration",
    monthlyPrice: "$49.00 USD",
    yearlyPrice: "$588.00 USD",
    period: "Per Year",
    featured: false,
    features: [
      "Initial business assessment",
      "Monthly strategy sessions",
      "Basic performance reporting",
      "Email support",
    ],
  },
  {
    name: "Professional",
    description: "Growing companies ready to scale",
    monthlyPrice: "$69.00 USD",
    yearlyPrice: "$828.00 USD",
    period: "Per Year",
    featured: true,
    features: [
      "Comprehensive business analysis",
      "Bi-weekly strategy consultations",
      "Financial planning support",
      "Priority email & chat support",
    ],
  },
  {
    name: "Enterprise",
    description: "Perfect for small business exploration",
    monthlyPrice: "$99.00 USD",
    yearlyPrice: "$1188.00 USD",
    period: "Per Year",
    featured: false,
    features: [
      "Dedicated account manager",
      "Weekly in-depth strategy",
      "Custom growth roadmap",
      "Full reporting & analytics",
    ],
  },
];

function PricingCard({ plan, index, yearly }: { plan: typeof PLANS[0]; index: number; yearly: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  // only left (index 0) and right (index 2) cards get scale animation
  const isSideCard = index === 0 || index === 2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col rounded-2xl p-8 md:p-14 ${
        plan.featured ? "bg-gradient-to-b from-[#4a6b00] to-[#1a2800]" : "bg-zinc-900"
      }`}
    >
      <h3 className="text-2xl md:text-4xl font-light text-white">{plan.name}</h3>
      <p className="mt-1 text-sm text-zinc-300">{plan.description}</p>

      <div className="mt-6">
        <span className="text-2xl md:text-4xl font-light text-white">
          {yearly ? plan.yearlyPrice : plan.monthlyPrice}
        </span>
        <p className="mt-1 text-sm text-zinc-400">{yearly ? "Per Year" : "Per Month"}</p>
      </div>

      {/* Button — scale animation only on side cards */}
      <motion.div
        initial={isSideCard ? { scale: 0.5, opacity: 0 } : false}
        animate={isInView && isSideCard ? { scale: 1, opacity: 1 } : isSideCard ? { scale: 0.5, opacity: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6"
      >
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-base font-semibold transition duration-300 border border-[#c5f018] text-[#c5f018] hover:bg-[#c5f018] hover:text-black"
        >
          Contact us
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </motion.div>

      <div className="my-6 border-t border-white/10" />

      <ul className="space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm text-zinc-200">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <polyline points="2,8 6,13 14,3" stroke="#c5f018" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function PricingSection() {
  const [yearly, setYearly] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <section className="relative mx-auto flex max-w-8xl flex-col py-8 md:py-24 px-4 md:px-0">

      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="space-y-5"
      >
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-sm bg-[#c5f018]"
            style={{ animation: "dotPulse 1s ease-in-out infinite" }}
          />
          <span className="text-lg text-white">Price plan</span>
        </div>
        <h2 className="text-3xl leading-tight text-white md:text-6xl">
          Pricing that works{" "}
          <span className="text-[#c5f018] font-semibold">for you</span>
        </h2>
        <p className="text-lg text-white max-w-3xl">
          Explore our flexible pricing options designed to meet the needs of
          businesses of all sizes. Whether you&apos;re just starting or scaling up
        </p>
        <div className="flex flex-col md:flex-row md:items-end items-center md:justify-end gap-6">
          <div className="gap-3 md:self-auto bg-zinc-900 rounded-full px-7 py-2 md:py-4">
            <button
              onClick={() => setYearly(false)}
              className={`px-7 py-3 rounded-full text-sm font-light transition-all duration-300 ${
                !yearly ? "bg-zinc-700 text-white" : "text-zinc-400"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-7 py-3 rounded-full text-sm font-light transition-all duration-300 ${
                yearly ? "bg-zinc-700 text-white" : "text-zinc-400"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PLANS.map((plan, index) => (
          <PricingCard key={plan.name} plan={plan} index={index} yearly={yearly} />
        ))}
      </div>

    </section>
  );
}