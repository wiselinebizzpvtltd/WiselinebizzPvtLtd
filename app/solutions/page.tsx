"use client";

import Footer from "@/src/components/Footer";
import { motion } from "motion/react";
import Link from "next/link";

const solutions = [
  {
    number: "01",
    category: "CRM",
    title: "Lead-to-Cash Optimization",
    description:
      "Streamline your entire sales process from lead capture to revenue realization with automated workflows, real-time pipeline visibility, and forecasting accuracy.",
    icon: "↗",
    accent: "cyan",
    benefits: [
      "Automated lead qualification & routing",
      "Real-time pipeline dashboards",
      "Accurate revenue forecasting",
      "Faster quote-to-cash cycles",
    ],
    technologies: ["Dynamics 365", "Power Automate", "Power BI"],
  },
  {
    number: "02",
    category: "CRM",
    title: "Customer Service Automation",
    description:
      "Transform customer support with intelligent case routing, SLA management, knowledge base integration, and automated escalations for faster resolution times.",
    icon: "◉",
    accent: "blue",
    benefits: [
      "Intelligent case routing",
      "SLA tracking & enforcement",
      "Self-service knowledge portal",
      "Reduced response times",
    ],
    technologies: ["Dynamics 365", "Power Platform", "AI"],
  },
  {
    number: "03",
    category: "Automation",
    title: "Partner / Vendor Onboarding",
    description:
      "Automate partner and vendor onboarding with structured workflows, document collection, approval routing, and compliance tracking.",
    icon: "◇",
    accent: "violet",
    benefits: [
      "Automated document collection",
      "Approval workflow automation",
      "Compliance tracking",
      "Faster onboarding cycles",
    ],
    technologies: ["Power Automate", "SharePoint", "Dynamics 365"],
  },
  {
    number: "04",
    category: "Analytics",
    title: "Sales Forecasting & Management",
    description:
      "Gain real-time visibility into sales performance, pipeline health, and revenue forecasts with customized dashboards and AI-powered insights.",
    icon: "⌁",
    accent: "emerald",
    benefits: [
      "Real-time sales metrics",
      "Predictive forecasting",
      "Custom KPI dashboards",
      "Executive insights",
    ],
    technologies: ["Power BI", "Dynamics 365", "Azure AI"],
  },
  {
    number: "05",
    category: "Integration",
    title: "ERP-CRM Integration",
    description:
      "Seamlessly connect Dynamics 365 CRM and ERP for unified customer data, automated order processing, and end-to-end business visibility.",
    icon: "∞",
    accent: "sky",
    benefits: [
      "Unified customer view",
      "Automated order sync",
      "Inventory visibility",
      "Reduced data entry",
    ],
    technologies: ["Dynamics 365 CE", "Dynamics 365 F&O", "Azure"],
  },
  {
    number: "06",
    category: "Azure",
    title: "Azure Integration Hub",
    description:
      "Build a robust integration layer with APIs, messaging patterns, and monitoring to connect all your business systems reliably.",
    icon: "✦",
    accent: "cyan",
    benefits: [
      "Scalable API layer",
      "Real-time data sync",
      "Centralized monitoring",
      "Error handling & recovery",
    ],
    technologies: ["Azure Functions", "Service Bus", "API Management"],
  },
  {
    number: "07",
    category: "AI",
    title: "Document Processing Automation",
    description:
      "Extract, validate, and process claims, invoices, and onboarding documents automatically using AI-powered document intelligence.",
    icon: "✧",
    accent: "purple",
    benefits: [
      "AI-powered data extraction",
      "Automated validation",
      "CRM / ERP integration",
      "Up to 90% less manual processing",
    ],
    technologies: ["Azure AI", "Document Intelligence", "Power Automate"],
  },
  {
    number: "08",
    category: "AI",
    title: "AI Knowledge Search",
    description:
      "Empower support teams with intelligent knowledge search, AI-assisted responses, and context-aware suggestions for faster customer resolution.",
    icon: "⌕",
    accent: "indigo",
    benefits: [
      "Intelligent knowledge search",
      "AI-suggested responses",
      "Context-aware recommendations",
      "Faster ticket resolution",
    ],
    technologies: ["Azure AI", "Copilot", "Dynamics 365"],
  },
  {
    number: "09",
    category: "Marketing",
    title: "Marketing-to-Sales Automation",
    description:
      "Connect marketing campaigns to sales with automated lead scoring, assignment, and nurturing workflows for improved conversion rates.",
    icon: "↗",
    accent: "orange",
    benefits: [
      "Automated lead scoring",
      "Intelligent assignment",
      "Nurture campaigns",
      "Higher conversion rates",
    ],
    technologies: ["Dynamics 365", "Power Automate", "Marketing"],
  },
];

const categories = [
  "All Solutions",
  "CRM",
  "Automation",
  "Analytics",
  "Integration",
  "Azure",
  "AI",
  "Marketing",
];

const accentStyles: Record<
  string,
  {
    dot: string;
    text: string;
    bg: string;
    border: string;
    glow: string;
  }
> = {
  cyan: {
    dot: "bg-cyan-500",
    text: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    glow: "bg-cyan-200/30",
  },
  blue: {
    dot: "bg-blue-500",
    text: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    glow: "bg-blue-200/30",
  },
  violet: {
    dot: "bg-violet-500",
    text: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    glow: "bg-violet-200/30",
  },
  emerald: {
    dot: "bg-emerald-500",
    text: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    glow: "bg-emerald-200/30",
  },
  sky: {
    dot: "bg-sky-500",
    text: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
    glow: "bg-sky-200/30",
  },
  purple: {
    dot: "bg-purple-500",
    text: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    glow: "bg-purple-200/30",
  },
  indigo: {
    dot: "bg-indigo-500",
    text: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    glow: "bg-indigo-200/30",
  },
  orange: {
    dot: "bg-orange-500",
    text: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    glow: "bg-orange-200/30",
  },
};

export default function SolutionsPage() {
  return (
    <main className="relative overflow-hidden bg-[#f6f9fc] text-slate-900">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[5%] h-[550px] w-[550px] rounded-full bg-cyan-200/25 blur-[160px]" />

        <div className="absolute right-[-10%] top-[25%] h-[600px] w-[600px] rounded-full bg-blue-200/20 blur-[170px]" />

        <div className="absolute bottom-[10%] left-[30%] h-[600px] w-[700px] rounded-full bg-violet-200/15 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0f172a 1px, transparent 1px),
              linear-gradient(to bottom, #0f172a 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Hero */}
      <section className="relative z-10 px-6 pb-20 pt-32 md:pb-28 md:pt-44 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
                Solutions & Use Cases
              </span>
            </div>

            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-slate-900 sm:text-6xl md:text-7xl lg:text-[88px]">
              Technology solving
              <br />

              <span className="bg-gradient-to-r from-slate-400 via-slate-500 to-cyan-600 bg-clip-text text-transparent">
                real business problems.
              </span>
            </h1>

            <p className="mt-9 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
              Real-world applications of our technology expertise designed to
              solve common business challenges, improve efficiency, and drive
              measurable results.
            </p>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            <Stat number="09" label="Use Cases" />

            <Stat number="06+" label="Technology Areas" />

            <Stat number="360°" label="Business Focus" />

            <Stat number="∞" label="Possibilities" />
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-0 z-40 border-y border-slate-200/70 bg-white/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 scrollbar-hide lg:px-10">
          {categories.map((category, index) => (
            <a
              key={category}
              href={
                index === 0
                  ? "#solutions"
                  : `#${category.toLowerCase().replace(/\s+/g, "-")}`
              }
              className="group flex shrink-0 items-center gap-2 rounded-full border border-slate-200/80 bg-white/60 px-4 py-2.5 text-xs font-medium text-slate-500 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-600"
            >
              {index === 0 && (
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              )}

              {index > 0 && (
                <span className="font-mono text-[10px] text-cyan-500">
                  0{index}
                </span>
              )}

              {category}
            </a>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section
        id="solutions"
        className="relative z-10 px-6 py-20 md:py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600">
                Business Applications
              </span>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-slate-900 md:text-5xl">
                From challenge
                <br />
                <span className="text-slate-400">to measurable outcome.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              Explore how we apply Microsoft technologies, cloud, AI, and
              automation to solve practical business challenges.
            </p>
          </motion.div>

          {/* Solution Grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={solution.number}
                solution={solution}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Banner */}
      <section className="relative z-10 px-6 pb-24 pt-4 md:pb-36 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-slate-200 bg-white/70 shadow-[0_30px_100px_rgba(15,23,42,0.07)] backdrop-blur-2xl"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute right-[-150px] top-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-200/30 blur-[110px]" />

          <div className="relative grid gap-12 p-8 md:p-14 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />

                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600">
                  Your challenge. Our solution.
                </span>
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-slate-900 md:text-5xl lg:text-6xl">
                Have a process that could be
                <span className="text-slate-400"> smarter?</span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500">
                Tell us where your business is losing time, visibility, or
                efficiency. We&apos;ll help map the problem to the right
                technology and implementation approach.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-4 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:shadow-[0_15px_40px_rgba(6,182,212,0.25)]"
            >
              Discuss your challenge

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Stat                                                                       */
/* -------------------------------------------------------------------------- */

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white/60 px-4 py-4 backdrop-blur-xl">
      <div className="text-xl font-semibold tracking-tight text-slate-900">
        {number}
      </div>

      <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
        {label}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Solution Card                                                              */
/* -------------------------------------------------------------------------- */

function SolutionCard({
  solution,
  index,
}: {
  solution: (typeof solutions)[number];
  index: number;
}) {
  const accent = accentStyles[solution.accent];

  return (
    <motion.article
      id={
        index === 0
          ? undefined
          : solution.category.toLowerCase().replace(/\s+/g, "-")
      }
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.65,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
      }}
      className="group relative"
    >
      <div className="relative h-full overflow-hidden rounded-[26px] border border-slate-200/80 bg-white/70 p-6 shadow-[0_15px_60px_rgba(15,23,42,0.045)] backdrop-blur-2xl transition-all duration-500 hover:border-slate-300 hover:shadow-[0_25px_80px_rgba(15,23,42,0.09)]">
        {/* Glow */}
        <div
          className={`pointer-events-none absolute right-[-100px] top-[-100px] h-[250px] w-[250px] rounded-full ${accent.glow} opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* Top line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-70" />

        {/* Header */}
        <div className="relative flex items-start justify-between">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl border ${accent.border} ${accent.bg} text-lg ${accent.text} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
          >
            {solution.icon}
          </div>

          <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-slate-300">
            {solution.number}
          </span>
        </div>

        {/* Category */}
        <div className="relative mt-6 flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />

          <span
            className={`text-[10px] font-semibold uppercase tracking-[0.25em] ${accent.text}`}
          >
            {solution.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="relative mt-3 text-[22px] font-semibold leading-[1.12] tracking-[-0.035em] text-slate-900 transition-colors duration-300 group-hover:text-slate-950">
          {solution.title}
        </h3>

        {/* Description */}
        <p className="relative mt-4 text-[13px] leading-6 text-slate-500">
          {solution.description}
        </p>

        {/* Divider */}
        <div className="relative my-6 h-px bg-gradient-to-r from-slate-200 via-slate-200 to-transparent" />

        {/* Benefits */}
        <div className="relative">
          <div className="mb-3 text-[9px] font-bold uppercase tracking-[0.24em] text-slate-400">
            Key Benefits
          </div>

          <div className="space-y-2.5">
            {solution.benefits.map((benefit, benefitIndex) => (
              <motion.div
                key={benefit}
                initial={{
                  opacity: 0,
                  x: -8,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.35,
                  delay: 0.15 + benefitIndex * 0.05,
                }}
                className="flex items-start gap-2.5"
              >
                <span
                  className={`mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${accent.bg} ${accent.text} text-[9px] font-bold ring-1 ${accent.border}`}
                >
                  ✓
                </span>

                <span className="text-[12px] leading-5 text-slate-600">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="relative mt-7">
          <div className="mb-3 text-[9px] font-bold uppercase tracking-[0.24em] text-slate-400">
            Technology
          </div>

          <div className="flex flex-wrap gap-1.5">
            {solution.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-200 bg-slate-50/80 px-2.5 py-1 text-[9px] font-medium text-slate-500 transition-colors duration-300 group-hover:border-slate-300 group-hover:text-slate-600"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Hover arrow */}
        <div
          className={`absolute bottom-6 right-6 flex h-8 w-8 translate-x-2 items-center justify-center rounded-full ${accent.bg} ${accent.text} opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100`}
        >
          →
        </div>

        {/* Background number */}
        <div className="pointer-events-none absolute bottom-[-25px] right-[-5px] select-none text-[110px] font-bold leading-none tracking-[-0.1em] text-slate-900/[0.025]">
          {solution.number}
        </div>
      </div>
    </motion.article>
  );
}