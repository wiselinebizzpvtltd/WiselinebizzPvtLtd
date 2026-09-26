// "use client";

// import Footer from "@/src/components/Footer";
// import { motion } from "motion/react";
// import Link from "next/link";

// const services = [
//   {
//     number: "01",
//     title: "Dynamics 365 CE",
//     subtitle: "CRM",
//     description:
//       "Sales, Service & Field Service solutions designed around your business processes.",
//     icon: "◆",
//     gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",

//     deliver: [
//       "Lead, opportunity, pipeline and forecasting setup",
//       "Case management, SLAs, queues, routing & knowledge base",
//       "Power Automate flows, approvals, notifications, and automations",
//       "Integrations with ERP, portals, email, telephony, and other apps",
//       "Dashboards and KPI reporting",
//       "Training, SOPs, and admin handover",
//     ],

//     outcomes: [
//       "Faster execution",
//       "Improved visibility",
//       "Cleaner CRM data",
//       "Better adoption",
//     ],

//     engagement: [
//       "Fixed-scope implementation (phase-wise)",
//       "Sprint-based enhancements (T&M)",
//       "AMC / Managed Support (monthly)",
//     ],
//   },

//   {
//     number: "02",
//     title: "Dynamics 365 F&O",
//     subtitle: "ERP",
//     description:
//       "Finance and Operations solutions that improve process control, visibility, and operational efficiency.",
//     icon: "◇",
//     gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",

//     deliver: [
//       "Fit-gap, process standardization, and configuration",
//       "CE ↔ F&O integration and end-to-end visibility",
//       "Security, controls, and audit-ready practices",
//       "Stabilization, performance tuning, and upgrade support",
//       "Training and go-live support",
//     ],

//     outcomes: [
//       "Better process control",
//       "Smoother operations",
//       "Stronger reporting",
//     ],

//     engagement: [
//       "Fixed-scope implementation (phase-wise)",
//       "Sprint-based enhancements (T&M)",
//       "AMC / Managed Support (monthly)",
//     ],
//   },

//   {
//     number: "03",
//     title: "Azure Cloud",
//     subtitle: "& Integration",
//     description:
//       "Secure and scalable cloud architecture connecting your business applications, data, and processes.",
//     icon: "✦",
//     gradient: "from-sky-500/20 via-cyan-500/10 to-transparent",

//     deliver: [
//       "Azure architecture, integration design, and implementation",
//       "APIs, middleware, batch jobs, and messaging patterns",
//       "Telemetry, monitoring, alerting, and runbooks",
//       "DevOps pipelines, release governance, environment strategy",
//       "Security: RBAC, secrets, access patterns, best practices",
//     ],

//     outcomes: [
//       "Reliable integrations",
//       "Scalable cloud backbone",
//       "Easier maintenance",
//     ],

//     engagement: [
//       "Architecture consulting",
//       "Implementation & deployment",
//       "Ongoing support & optimization",
//     ],
//   },

//   {
//     number: "04",
//     title: "AI",
//     subtitle: "Automations",
//     description:
//       "Intelligent automation that reduces repetitive work and helps teams make faster, better decisions.",
//     icon: "✧",
//     gradient: "from-violet-500/20 via-purple-500/10 to-transparent",

//     deliver: [
//       "Workflow automation for approvals, ticketing, onboarding, and case triage",
//       "Intelligent document processing (extract → validate → update CRM/ERP)",
//       "AI-driven knowledge search and drafting with governance",
//       "Chatbots for FAQs and internal support workflows",
//       "AI opportunity assessment + prototype",
//     ],

//     outcomes: [
//       "Reduced manual effort",
//       "Faster turnaround",
//       "More consistent operations",
//     ],

//     engagement: [
//       "POC & prototype development",
//       "Full implementation",
//       "Continuous improvement",
//     ],
//   },

//   {
//     number: "05",
//     title: "Digital",
//     subtitle: "Marketing",
//     description:
//       "Performance-focused digital marketing connected with your sales and CRM ecosystem.",
//     icon: "◎",
//     gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",

//     deliver: [
//       "SEO + content strategy",
//       "Performance campaigns across Google, Meta and LinkedIn",
//       "Landing pages and conversion optimization",
//       "Lead capture + CRM integration",
//       "Reporting dashboards and insights",
//     ],

//     outcomes: [
//       "More qualified leads",
//       "Better conversion",
//       "Measurable ROI",
//     ],

//     engagement: [
//       "Monthly retainer packages",
//       "Campaign-based projects",
//       "Full-service marketing",
//     ],
//   },
// ];

// const serviceLinks = [
//   "Dynamics 365 CE",
//   "Dynamics 365 F&O",
//   "Azure Cloud",
//   "AI Automations",
//   "Digital Marketing",
// ];

// export default function ServicesPage() {
//   return (
//     <main className="relative overflow-hidden bg-[#f8fafc] text-neutral-900">
//       {/* =========================================================
//           BACKGROUND
//       ========================================================== */}

//       <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
//         <div className="absolute left-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-200/30 blur-[140px]" />

//         <div className="absolute right-[5%] top-[35%] h-[500px] w-[500px] rounded-full bg-blue-200/20 blur-[150px]" />

//         <div className="absolute bottom-[10%] left-[30%] h-[500px] w-[600px] rounded-full bg-violet-200/20 blur-[160px]" />

//         <div
//           className="absolute inset-0 opacity-[0.025]"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, #0f172a 1px, transparent 1px),
//               linear-gradient(to bottom, #0f172a 1px, transparent 1px)
//             `,
//             backgroundSize: "80px 80px",
//           }}
//         />
//       </div>

//       {/* =========================================================
//           HERO
//       ========================================================== */}

//       <section className="relative z-10 px-6 pb-20 pt-32 md:pb-28 md:pt-44 lg:px-10">
//         <div className="mx-auto max-w-7xl">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >
//             <div className="mb-7 flex items-center gap-3">
//               <span className="h-px w-10 bg-cyan-500" />

//               <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
//                 Our Services
//               </span>
//             </div>

//             <h1 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[92px]">
//               Technology that
//               <br />
//               <span className="text-neutral-400">
//                 moves business forward.
//               </span>
//             </h1>

//             <p className="mt-9 max-w-2xl text-base leading-8 text-neutral-500 md:text-lg">
//               Comprehensive solutions across Dynamics 365, Azure, AI, and
//               Digital Marketing to transform your business operations.
//             </p>
//           </motion.div>

//           {/* Hero stats */}

//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.8,
//               delay: 0.2,
//             }}
//             className="mt-14 flex flex-wrap gap-3"
//           >
//             {[
//               "Dynamics 365",
//               "Azure",
//               "Power Platform",
//               "AI",
//               "Digital Growth",
//             ].map((item, index) => (
//               <span
//                 key={item}
//                 className="rounded-full border border-neutral-200 bg-white/60 px-4 py-2 text-xs font-medium text-neutral-500 shadow-sm backdrop-blur-xl"
//               >
//                 <span className="mr-2 text-cyan-500">0{index + 1}</span>
//                 {item}
//               </span>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================================
//           SERVICE NAVIGATION
//       ========================================================== */}

//       <section className="sticky top-0 z-40 border-y border-neutral-200/70 bg-white/60 backdrop-blur-2xl">
//         <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 scrollbar-hide lg:px-10">
//           {serviceLinks.map((service, index) => (
//             <a
//               key={service}
//               href={`#service-${index + 1}`}
//               className="group flex shrink-0 items-center gap-2 rounded-full border border-neutral-200/80 bg-white/60 px-4 py-2.5 text-xs font-medium text-neutral-500 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-600"
//             >
//               <span className="text-[10px] text-cyan-500">
//                 0{index + 1}
//               </span>

//               {service}
//             </a>
//           ))}
//         </div>
//       </section>

//       {/* =========================================================
//           SERVICES
//       ========================================================== */}

//       <section className="relative z-10 px-6 py-24 md:py-32 lg:px-10">
//         <div className="mx-auto max-w-7xl">
//           <div className="space-y-28 md:space-y-40">
//             {services.map((service, index) => (
//               <ServiceCard
//                 key={service.number}
//                 service={service}
//                 index={index}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FINAL CTA
//       ========================================================== */}

//       <section className="relative z-10 px-6 pb-24 pt-10 md:pb-36 lg:px-10">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.8 }}
//           className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-neutral-200 bg-white/60 px-7 py-16 shadow-[0_30px_100px_rgba(15,23,42,0.08)] backdrop-blur-2xl md:px-14 md:py-20"
//         >
//           <div className="pointer-events-none absolute right-[-100px] top-[-180px] h-[450px] w-[450px] rounded-full bg-cyan-200/30 blur-[100px]" />

//           <div className="relative">
//             <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
//               Let&apos;s work together
//             </span>

//             <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl md:text-6xl">
//               Have a business challenge?
//               <br />
//               <span className="text-neutral-400">
//                 Let&apos;s solve it together.
//               </span>
//             </h2>

//             <p className="mt-7 max-w-xl text-base leading-7 text-neutral-500">
//               Tell us what you&apos;re trying to improve, automate, or
//               transform. We&apos;ll help you identify the right technology and
//               the right approach.
//             </p>

//             <div className="mt-9">
//               <Link
//                 href="/contact"
//                 className="group inline-flex items-center gap-4 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:shadow-[0_15px_40px_rgba(6,182,212,0.25)]"
//               >
//                 Start a conversation

//                 <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
//                   →
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Footer */}
//       <section>
//         <Footer/>
//       </section>
//     </main>
//   );
// }

// /* ================================================================
//    SERVICE CARD
// ================================================================ */

// function ServiceCard({
//   service,
//   index,
// }: {
//   service: (typeof services)[number];
//   index: number;
// }) {
//   const reverse = index % 2 !== 0;

//   return (
//     <motion.article
//       id={`service-${index + 1}`}
//       initial={{ opacity: 0, y: 70 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{
//         once: true,
//         amount: 0.12,
//       }}
//       transition={{
//         duration: 0.9,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="scroll-mt-24"
//     >
//       {/* =========================================================
//           TOP SERVICE HEADER
//       ========================================================== */}

//       <div className="mb-10 flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <span className="font-mono text-xs tracking-[0.2em] text-cyan-600">
//             {service.number}
//           </span>

//           <span className="h-px w-16 bg-neutral-200" />

//           <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
//             Service
//           </span>
//         </div>

//         <motion.div
//           animate={{
//             y: [0, -5, 0],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200 bg-white/70 text-lg text-cyan-500 shadow-sm backdrop-blur-xl"
//         >
//           {service.icon}
//         </motion.div>
//       </div>

//       {/* =========================================================
//           MAIN GLASS CARD
//       ========================================================== */}

//       <div
//         className={`group relative overflow-hidden rounded-[36px] border border-neutral-200/80 bg-white/55 p-6 shadow-[0_30px_100px_rgba(15,23,42,0.07)] backdrop-blur-2xl md:p-10 lg:p-12`}
//       >
//         {/* Glow */}

//         <div
//           className={`pointer-events-none absolute ${
//             reverse ? "left-[-180px]" : "right-[-180px]"
//           } top-[-180px] h-[500px] w-[500px] rounded-full bg-gradient-to-br ${
//             service.gradient
//           } blur-[100px] transition-transform duration-1000 group-hover:scale-125`}
//         />

//         {/* Shine */}

//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-70" />

//         <div
//           className={`relative grid gap-14 lg:grid-cols-12 lg:items-start ${
//             reverse ? "" : ""
//           }`}
//         >
//           {/* =====================================================
//               LEFT / MAIN CONTENT
//           ====================================================== */}

//           <div
//             className={`lg:col-span-5 ${
//               reverse ? "lg:order-2" : "lg:order-1"
//             }`}
//           >
//             <motion.div
//               initial={{ opacity: 0, x: reverse ? 30 : -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//             >
//               <h2 className="text-4xl font-semibold tracking-[-0.045em] text-neutral-900 md:text-5xl lg:text-6xl">
//                 {service.title}
//               </h2>

//               <div className="mt-2 text-xl font-light text-cyan-600 md:text-2xl">
//                 {service.subtitle}
//               </div>

//               <p className="mt-7 max-w-md text-base leading-8 text-neutral-500">
//                 {service.description}
//               </p>

//               {/* Decorative line */}

//               <div className="mt-10 flex items-center gap-3">
//                 <div className="h-px w-20 bg-cyan-400" />
//                 <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
//                 <div className="h-px w-8 bg-neutral-200" />
//               </div>
//             </motion.div>
//           </div>

//           {/* =====================================================
//               RIGHT CONTENT
//           ====================================================== */}

//           <div
//             className={`lg:col-span-7 ${
//               reverse ? "lg:order-1" : "lg:order-2"
//             }`}
//           >
//             {/* What we deliver */}

//             <ServiceGroup
//               title="What We Deliver"
//               items={service.deliver}
//               delay={0.1}
//             />

//             {/* Outcomes */}

//             <div className="mt-12">
//               <ServiceGroup
//                 title="Typical Outcomes"
//                 items={service.outcomes}
//                 delay={0.2}
//                 compact
//               />
//             </div>

//             {/* Engagement */}

//             <div className="mt-12">
//               <ServiceGroup
//                 title="Engagement Options"
//                 items={service.engagement}
//                 delay={0.3}
//                 compact
//               />
//             </div>
//           </div>
//         </div>

//         {/* Bottom number */}

//         <div className="pointer-events-none absolute bottom-[-40px] right-6 select-none text-[180px] font-bold leading-none tracking-[-0.1em] text-neutral-900/[0.025]">
//           {service.number}
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// /* ================================================================
//    SERVICE GROUP
// ================================================================ */

// function ServiceGroup({
//   title,
//   items,
//   delay = 0,
//   compact = false,
// }: {
//   title: string;
//   items: string[];
//   delay?: number;
//   compact?: boolean;
// }) {
//   return (
//     <div>
//       <motion.div
//         initial={{ opacity: 0, x: 20 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{
//           duration: 0.6,
//           delay,
//         }}
//         className="mb-5 flex items-center gap-3"
//       >
//         <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
//           {title}
//         </span>

//         <span className="h-px flex-1 bg-neutral-200" />
//       </motion.div>

//       <div
//         className={`grid ${
//           compact
//             ? "gap-2 sm:grid-cols-2 lg:grid-cols-1"
//             : "gap-3"
//         }`}
//       >
//         {items.map((item, index) => (
//           <motion.div
//             key={item}
//             initial={{
//               opacity: 0,
//               y: 15,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.5,
//               delay: delay + index * 0.04,
//             }}
//             whileHover={{
//               x: 5,
//             }}
//             className={`group/item flex items-start gap-3 rounded-xl border border-neutral-200/60 bg-white/45 ${
//               compact ? "px-4 py-3" : "px-4 py-3.5"
//             } backdrop-blur-md transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-50/50`}
//           >
//             <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-cyan-300/70 text-[8px] text-cyan-500 transition-all duration-300 group-hover/item:bg-cyan-500 group-hover/item:text-white">
//               ✓
//             </span>

//             <span
//               className={`${
//                 compact ? "text-sm" : "text-sm"
//               } leading-6 text-neutral-500 transition-colors duration-300 group-hover/item:text-neutral-800`}
//             >
//               {item}
//             </span>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import Footer from "@/src/components/Footer";
import { motion } from "motion/react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Dynamics 365 CE",
    subtitle: "CRM",
    description:
      "Sales, Service & Field Service solutions designed around your business processes.",
    icon: "◆",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",

    deliver: [
      "Lead, opportunity, pipeline and forecasting setup",
      "Case management, SLAs, queues, routing & knowledge base",
      "Power Automate flows, approvals, notifications, and automations",
      "Integrations with ERP, portals, email, telephony, and other apps",
      "Dashboards and KPI reporting",
      "Training, SOPs, and admin handover",
    ],

    outcomes: [
      "Faster execution",
      "Improved visibility",
      "Cleaner CRM data",
      "Better adoption",
    ],

    engagement: [
      "Fixed-scope implementation (phase-wise)",
      "Sprint-based enhancements (T&M)",
      "AMC / Managed Support (monthly)",
    ],
  },

  {
    number: "02",
    title: "Dynamics 365 F&O",
    subtitle: "ERP",
    description:
      "Finance and Operations solutions that improve process control, visibility, and operational efficiency.",
    icon: "◇",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",

    deliver: [
      "Fit-gap, process standardization, and configuration",
      "CE ↔ F&O integration and end-to-end visibility",
      "Security, controls, and audit-ready practices",
      "Stabilization, performance tuning, and upgrade support",
      "Training and go-live support",
    ],

    outcomes: [
      "Better process control",
      "Smoother operations",
      "Stronger reporting",
    ],

    engagement: [
      "Fixed-scope implementation (phase-wise)",
      "Sprint-based enhancements (T&M)",
      "AMC / Managed Support (monthly)",
    ],
  },

  {
    number: "03",
    title: "Azure Cloud",
    subtitle: "& Integration",
    description:
      "Secure and scalable cloud architecture connecting your business applications, data, and processes.",
    icon: "✦",
    gradient: "from-sky-500/20 via-cyan-500/10 to-transparent",

    deliver: [
      "Azure architecture, integration design, and implementation",
      "APIs, middleware, batch jobs, and messaging patterns",
      "Telemetry, monitoring, alerting, and runbooks",
      "DevOps pipelines, release governance, environment strategy",
      "Security: RBAC, secrets, access patterns, best practices",
    ],

    outcomes: [
      "Reliable integrations",
      "Scalable cloud backbone",
      "Easier maintenance",
    ],

    engagement: [
      "Architecture consulting",
      "Implementation & deployment",
      "Ongoing support & optimization",
    ],
  },

  {
    number: "04",
    title: "AI",
    subtitle: "Automations",
    description:
      "Intelligent automation that reduces repetitive work and helps teams make faster, better decisions.",
    icon: "✧",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",

    deliver: [
      "Workflow automation for approvals, ticketing, onboarding, and case triage",
      "Intelligent document processing (extract → validate → update CRM/ERP)",
      "AI-driven knowledge search and drafting with governance",
      "Chatbots for FAQs and internal support workflows",
      "AI opportunity assessment + prototype",
    ],

    outcomes: [
      "Reduced manual effort",
      "Faster turnaround",
      "More consistent operations",
    ],

    engagement: [
      "POC & prototype development",
      "Full implementation",
      "Continuous improvement",
    ],
  },

  {
    number: "05",
    title: "Digital",
    subtitle: "Marketing",
    description:
      "Performance-focused digital marketing connected with your sales and CRM ecosystem.",
    icon: "◎",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",

    deliver: [
      "SEO + content strategy",
      "Performance campaigns across Google, Meta and LinkedIn",
      "Landing pages and conversion optimization",
      "Lead capture + CRM integration",
      "Reporting dashboards and insights",
    ],

    outcomes: [
      "More qualified leads",
      "Better conversion",
      "Measurable ROI",
    ],

    engagement: [
      "Monthly retainer packages",
      "Campaign-based projects",
      "Full-service marketing",
    ],
  },
];

const serviceLinks = [
  "Dynamics 365 CE",
  "Dynamics 365 F&O",
  "Azure Cloud",
  "AI Automations",
  "Digital Marketing",
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-[#f6f9fc] text-slate-900">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[5%] top-[8%] h-[500px] w-[500px] rounded-full bg-cyan-200/25 blur-[150px]" />

        <div className="absolute right-[0%] top-[30%] h-[550px] w-[550px] rounded-full bg-blue-200/20 blur-[160px]" />

        <div className="absolute bottom-[5%] left-[25%] h-[550px] w-[650px] rounded-full bg-violet-200/15 blur-[170px]" />

        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0f172a 1px, transparent 1px),
              linear-gradient(to bottom, #0f172a 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative z-10 px-6 pb-20 pt-32 md:pb-28 md:pt-44 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
                Our Services
              </span>
            </div>

            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-slate-900 sm:text-6xl md:text-7xl lg:text-[92px]">
              Technology that
              <br />
              <span className="bg-gradient-to-r from-slate-400 via-slate-500 to-cyan-600 bg-clip-text text-transparent">
                moves business forward.
              </span>
            </h1>

            <p className="mt-9 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
              Comprehensive solutions across Dynamics 365, Azure, AI, and
              Digital Marketing to transform your business operations.
            </p>
          </motion.div>

          {/* Hero technology pills */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mt-14 flex flex-wrap gap-3"
          >
            {[
              "Dynamics 365",
              "Azure",
              "Power Platform",
              "AI",
              "Digital Growth",
            ].map((item, index) => (
              <motion.span
                key={item}
                whileHover={{
                  y: -3,
                }}
                className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-medium text-slate-500 shadow-sm backdrop-blur-xl transition-colors duration-300 hover:border-cyan-200 hover:text-cyan-600"
              >
                <span className="mr-2 font-mono text-cyan-500">
                  0{index + 1}
                </span>

                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SERVICE NAVIGATION
      ========================================================== */}

      <section className="sticky top-0 z-40 border-y border-slate-200/70 bg-white/65 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 scrollbar-hide lg:px-10">
          {serviceLinks.map((service, index) => (
            <a
              key={service}
              href={`#service-${index + 1}`}
              className="group flex shrink-0 items-center gap-2 rounded-full border border-slate-200/80 bg-white/60 px-4 py-2.5 text-xs font-medium text-slate-500 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-600"
            >
              <span className="font-mono text-[10px] text-cyan-500">
                0{index + 1}
              </span>

              {service}
            </a>
          ))}
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}

      <section className="relative z-10 px-6 py-20 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => (
              <ServiceCard
                key={service.number}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section className="relative z-10 px-6 pb-24 pt-4 md:pb-36 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-slate-200 bg-white/65 px-7 py-14 shadow-[0_30px_100px_rgba(15,23,42,0.07)] backdrop-blur-2xl md:px-14 md:py-18"
        >
          <div className="pointer-events-none absolute right-[-100px] top-[-180px] h-[450px] w-[450px] rounded-full bg-cyan-200/30 blur-[100px]" />

          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
              Let&apos;s work together
            </span>

            <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-slate-900 sm:text-5xl md:text-6xl">
              Have a business challenge?
              <br />
              <span className="text-slate-400">
                Let&apos;s solve it together.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-500">
              Tell us what you&apos;re trying to improve, automate, or
              transform. We&apos;ll help you identify the right technology and
              the right approach.
            </p>

            <div className="mt-9">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:shadow-[0_15px_40px_rgba(6,182,212,0.25)]"
              >
                Start a conversation

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}

      <section>
        <Footer />
      </section>
    </main>
  );
}

/* ================================================================
   SERVICE CARD
================================================================ */

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const reverse = index % 2 !== 0;

  return (
    <motion.article
      id={`service-${index + 1}`}
      initial={{
        opacity: 0,
        y: 50,
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
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="scroll-mt-28"
    >
      {/* =========================================================
          SERVICE HEADER
      ========================================================== */}

      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-cyan-600">
            {service.number}
          </span>

          <span className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
            Service
          </span>
        </div>

        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200/70 bg-white/80 text-base text-cyan-500 shadow-[0_8px_30px_rgba(6,182,212,0.08)] backdrop-blur-xl"
        >
          {service.icon}
        </motion.div>
      </div>

      {/* =========================================================
          MAIN CARD
      ========================================================== */}

      <div className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/70 shadow-[0_20px_70px_rgba(15,23,42,0.06)] backdrop-blur-2xl transition-all duration-500 hover:border-cyan-200/80 hover:shadow-[0_25px_90px_rgba(6,182,212,0.10)]">
        {/* Background glow */}

        <div
          className={`pointer-events-none absolute ${
            reverse ? "left-[-160px]" : "right-[-160px]"
          } top-[-180px] h-[420px] w-[420px] rounded-full bg-gradient-to-br ${
            service.gradient
          } blur-[100px] transition-transform duration-1000 group-hover:scale-125`}
        />

        {/* Top shine */}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

        {/* Bottom shine */}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* =======================================================
            CONTENT
        ======================================================== */}

        <div className="relative grid gap-10 p-7 md:p-9 lg:grid-cols-12 lg:gap-12 lg:p-10">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div
            className={`lg:col-span-4 ${
              reverse ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <motion.div
              initial={{
                opacity: 0,
                x: reverse ? 25 : -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Technology label */}

              <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-600">
                  Microsoft Technology
                </span>
              </div>

              {/* Title */}

              <h2 className="text-3xl font-semibold leading-[1] tracking-[-0.045em] text-slate-900 md:text-4xl lg:text-[48px]">
                {service.title}
              </h2>

              {/* Subtitle */}

              <div className="mt-2 text-lg font-medium tracking-tight text-cyan-600">
                {service.subtitle}
              </div>

              {/* Description */}

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500 md:text-[15px]">
                {service.description}
              </p>

              {/* Decorative line */}

              <div className="mt-7 flex items-center gap-2">
                <div className="h-[2px] w-14 rounded-full bg-cyan-400" />

                <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                <div className="h-px w-8 bg-slate-200" />
              </div>

              {/* Service number */}

              <div className="mt-8 hidden select-none lg:block">
                <span className="font-mono text-[11px] tracking-[0.3em] text-slate-300">
                  0{index + 1} / 05
                </span>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT CONTENT
          ====================================================== */}

          <div
            className={`lg:col-span-8 ${
              reverse ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {/* =================================================
                WHAT WE DELIVER
            ================================================= */}

            <ServiceGroup
              title="What We Deliver"
              items={service.deliver}
              delay={0.1}
            />

            {/* =================================================
                TYPICAL OUTCOMES
            ================================================= */}

            <div className="mt-9">
              <ServiceGroup
                title="Typical Outcomes"
                items={service.outcomes}
                delay={0.2}
                compact
              />
            </div>

            {/* =================================================
                ENGAGEMENT OPTIONS
            ================================================= */}

            <div className="mt-9">
              <ServiceGroup
                title="Engagement Options"
                items={service.engagement}
                delay={0.3}
                compact
              />
            </div>
          </div>
        </div>

        {/* Large background number */}

        <div className="pointer-events-none absolute bottom-[-35px] right-4 select-none text-[150px] font-bold leading-none tracking-[-0.1em] text-slate-900/[0.025]">
          {service.number}
        </div>
      </div>
    </motion.article>
  );
}

/* ================================================================
   SERVICE GROUP
================================================================ */

function ServiceGroup({
  title,
  items,
  delay = 0,
  compact = false,
}: {
  title: string;
  items: string[];
  delay?: number;
  compact?: boolean;
}) {
  return (
    <div>
      {/* Group heading */}

      <motion.div
        initial={{
          opacity: 0,
          x: 15,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
          delay,
        }}
        className="mb-4 flex items-center gap-3"
      >
        <span
          className={`text-[10px] font-bold uppercase tracking-[0.22em] ${
            compact ? "text-cyan-600" : "text-slate-400"
          }`}
        >
          {title}
        </span>

        <span className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
      </motion.div>

      {/* =========================================================
          COMPACT GROUPS
      ========================================================== */}

      {compact ? (
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: delay + index * 0.05,
              }}
              whileHover={{
                y: -2,
              }}
              className="rounded-full border border-slate-200/80 bg-slate-50/80 px-3.5 py-2 text-xs font-medium text-slate-600 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
            >
              {item}
            </motion.div>
          ))}
        </div>
      ) : (
        /* =======================================================
           WHAT WE DELIVER
        ======================================================== */

        <div className="grid gap-2 sm:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
                delay: delay + index * 0.04,
              }}
              whileHover={{
                x: 3,
              }}
              className="group/item flex items-start gap-3 rounded-xl border border-slate-200/60 bg-white/55 px-3.5 py-3 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-50/60"
            >
              {/* Check icon */}

              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-[10px] font-bold text-cyan-600 ring-1 ring-cyan-200/70 transition-all duration-300 group-hover/item:bg-cyan-500 group-hover/item:text-white">
                ✓
              </span>

              {/* Text */}

              <span className="text-[13px] leading-5 text-slate-600 transition-colors duration-300 group-hover/item:text-slate-900">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}