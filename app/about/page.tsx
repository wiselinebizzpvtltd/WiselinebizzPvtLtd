"use client";
import Footer from "@/src/components/Footer";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

const focusAreas = [
  {
    number: "01",
    title: "Deliver Business Outcomes",
    description:
      "We focus on delivering tangible business results, not just configuration. Every solution is designed to drive measurable value.",
    icon: "↗",
    accent: "cyan",
  },
  {
    number: "02",
    title: "Scalable Architecture",
    description:
      "We build solutions with security, governance, and scalability in mind so your technology can grow with your business.",
    icon: "◇",
    accent: "blue",
  },
  {
    number: "03",
    title: "Ensure Adoption",
    description:
      "Through comprehensive training and structured rollout, we help your teams adopt and maximize their technology investment.",
    icon: "◎",
    accent: "violet",
  },
  {
    number: "04",
    title: "Long-term Support",
    description:
      "Through AMC and managed services, we keep your systems optimized while continuously improving them as your business evolves.",
    icon: "∞",
    accent: "emerald",
  },
];

const values = [
  {
    number: "01",
    title: "Client-centric",
    description: "Deep business understanding before technology decisions.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Technical Excellence",
    description: "Strong expertise across the Microsoft technology ecosystem.",
    icon: "✦",
  },
  {
    number: "03",
    title: "Transparent Communication",
    description: "Clear communication throughout the project lifecycle.",
    icon: "↔",
  },
  {
    number: "04",
    title: "Quality & Delivery",
    description: "Commitment to quality, accountability, and timely delivery.",
    icon: "✓",
  },
  {
    number: "05",
    title: "Continuous Innovation",
    description: "Constant learning and adoption of better technologies.",
    icon: "✧",
  },
  {
    number: "06",
    title: "Strong Governance",
    description: "Best practices, security, and structured delivery.",
    icon: "⌘",
  },
];

const technologies = [
  "Dynamics 365",
  "Azure",
  "Power Platform",
  "AI & Automation",
  "Power BI",
  "Digital Marketing",
];

export default function AboutPage() {
  const storyRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const lineY = useTransform(scrollYProgress, [0, 1], [-30, 60]);

  return (
    <main className="relative overflow-hidden bg-[#f6f9fc] text-slate-900">
      {/* ---------------------------------------------------------------- */}
      {/* Background                                                       */}
      {/* ---------------------------------------------------------------- */}

      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[-12%] top-[4%] h-[600px] w-[600px] rounded-full bg-cyan-200/25 blur-[170px]" />

        <div className="absolute right-[-10%] top-[22%] h-[600px] w-[600px] rounded-full bg-blue-200/20 blur-[170px]" />

        <div className="absolute bottom-[15%] left-[25%] h-[650px] w-[700px] rounded-full bg-violet-200/15 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0f172a 1px, transparent 1px),
              linear-gradient(to bottom, #0f172a 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                             */}
      {/* ---------------------------------------------------------------- */}

      <section className="relative z-10 px-6 pb-24 pt-32 md:pb-32 md:pt-44 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
                About WiselineBizz
              </span>
            </div>

            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-slate-900 sm:text-6xl md:text-7xl lg:text-[90px]">
              Technology partner
              <br />

              <span className="bg-gradient-to-r from-slate-400 via-slate-500 to-cyan-600 bg-clip-text text-transparent">
                built around your business.
              </span>
            </h1>

            <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
                WiselineBizz is an IT consulting company helping organizations
                transform operations through Dynamics 365, Azure, AI
                automation, and digital marketing.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                  Pune · India · Global
                </span>
              </div>
            </div>
          </motion.div>

          {/* Technology Pills */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mt-14 flex flex-wrap gap-2.5"
          >
            {technologies.map((technology, index) => (
              <motion.div
                key={technology}
                whileHover={{
                  y: -3,
                }}
                className="rounded-full border border-slate-200 bg-white/70 px-4 py-2.5 text-xs font-medium text-slate-500 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-cyan-200 hover:text-cyan-600"
              >
                <span className="mr-2 font-mono text-cyan-500">
                  0{index + 1}
                </span>

                {technology}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Who We Are                                                       */}
      {/* ---------------------------------------------------------------- */}

      <section
        ref={storyRef}
        className="relative z-10 overflow-hidden px-6 py-24 md:py-32 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Visual */}
            <motion.div
              style={{ y: imageY }}
              className="relative lg:col-span-5"
            >
              <div className="relative mx-auto aspect-[0.9] max-w-md overflow-hidden rounded-[36px] border border-slate-200/80 bg-white/60 shadow-[0_30px_100px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
                {/* Glow */}
                <div className="absolute left-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-cyan-200/35 blur-[100px]" />

                <div className="absolute bottom-[-100px] right-[-100px] h-[350px] w-[350px] rounded-full bg-blue-200/30 blur-[100px]" />

                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, #0f172a 1px, transparent 1px),
                      linear-gradient(to bottom, #0f172a 1px, transparent 1px)
                    `,
                    backgroundSize: "45px 45px",
                  }}
                />

                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-cyan-200/70 bg-white/50 shadow-[0_20px_80px_rgba(6,182,212,0.12)] backdrop-blur-xl">
                    <div className="absolute inset-5 rounded-full border border-dashed border-cyan-300/50" />

                    <div className="absolute inset-10 rounded-full bg-gradient-to-br from-cyan-100/80 to-blue-100/60 blur-xl" />

                    <div className="relative text-center">
                      <div className="text-5xl font-semibold tracking-[-0.08em] text-slate-900">
                        W
                      </div>

                      <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.3em] text-cyan-600">
                        WiselineBizz
                      </div>
                    </div>

                    {/* Orbit dots */}
                    <OrbitDot className="left-[-6px] top-[32%]" />
                    <OrbitDot className="right-[5px] top-[17%]" />
                    <OrbitDot className="bottom-[12px] left-[35%]" />
                    <OrbitDot className="bottom-[27%] right-[-4px]" />
                  </div>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-2xl border border-white/80 bg-white/60 px-4 py-3 backdrop-blur-xl">
                  <div>
                    <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Headquarters
                    </div>

                    <div className="mt-1 text-sm font-semibold text-slate-800">
                      Pune, Maharashtra
                    </div>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-50 text-cyan-600">
                    ↗
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Story */}
            <motion.div
              style={{ y: textY }}
              className="lg:col-span-7"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-500" />

                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600">
                  Who We Are
                </span>
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-slate-900 md:text-5xl lg:text-6xl">
                We turn complex technology
                <br />
                <span className="text-slate-400">
                  into practical business value.
                </span>
              </h2>

              <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-8 text-slate-500">
                <p>
                  WiselineBizz PVT is an IT consulting company based in Pune,
                  Maharashtra, India, providing comprehensive services across
                  Dynamics 365 CE & F&O, Azure, AI automations, and digital
                  marketing.
                </p>

                <p>
                  We partner with organizations to transform their business
                  operations through technology. Our team combines technical
                  expertise with practical business understanding to deliver
                  solutions that focus on real outcomes.
                </p>

                <p>
                  Whether you are implementing your first CRM, modernizing an
                  ERP, building cloud integrations, or automating workflows
                  with AI, we bring the experience and methodology required for
                  successful delivery.
                </p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <MiniStat value="CRM" label="Dynamics 365" />

                <MiniStat value="Cloud" label="Azure & Integration" />

                <MiniStat value="AI" label="Automation & Intelligence" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Parallax line */}
        <motion.div
          style={{ y: lineY }}
          className="pointer-events-none absolute right-[8%] top-[20%] hidden h-[500px] w-px bg-gradient-to-b from-transparent via-cyan-300/40 to-transparent lg:block"
        />
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Location                                                         */}
      {/* ---------------------------------------------------------------- */}

      <section className="relative z-10 px-6 py-20 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/65 p-8 shadow-[0_25px_90px_rgba(15,23,42,0.06)] backdrop-blur-2xl md:p-12"
          >
            <div className="pointer-events-none absolute right-[-100px] top-[-180px] h-[450px] w-[450px] rounded-full bg-cyan-200/25 blur-[110px]" />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-200 bg-cyan-50 text-cyan-600">
                    ◎
                  </span>

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600">
                    Our Location
                  </span>
                </div>

                <h2 className="text-4xl font-semibold tracking-[-0.045em] text-slate-900 md:text-5xl">
                  Pune at the
                  <br />
                  <span className="text-slate-400">center of delivery.</span>
                </h2>

                <p className="mt-6 max-w-lg text-sm leading-7 text-slate-500">
                  Based in Pune, Maharashtra, we work with organizations across
                  India and support global clients through remote and
                  on-site delivery models.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-3 sm:grid-cols-3">
                  <LocationCard
                    number="01"
                    title="Pan-India"
                    description="Serving organizations across India."
                    icon="◉"
                  />

                  <LocationCard
                    number="02"
                    title="Global"
                    description="Supporting international clients."
                    icon="◎"
                  />

                  <LocationCard
                    number="03"
                    title="Flexible"
                    description="Remote & on-site delivery."
                    icon="↗"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Our Focus                                                        */}
      {/* ---------------------------------------------------------------- */}

      <section className="relative z-10 px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600">
                Our Focus
              </span>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-900 md:text-5xl lg:text-6xl">
                How we approach
                <br />
                <span className="text-slate-400">
                  every engagement.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              Technology is only valuable when it creates meaningful business
              outcomes. These principles guide how we design, deliver, and
              support every solution.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {focusAreas.map((item, index) => (
              <FocusCard key={item.number} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Values                                                           */}
      {/* ---------------------------------------------------------------- */}

      <section className="relative z-10 px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600">
                Our Values
              </span>

              <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-slate-900 md:text-5xl">
                Principles that
                <br />
                <span className="text-slate-400">
                  shape our work.
                </span>
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-7 text-slate-500">
                From the first conversation to long-term support, our values
                influence how we communicate, design, deliver, and improve.
              </p>

              <div className="mt-9 h-px w-32 bg-gradient-to-r from-cyan-400 to-transparent" />
            </motion.div>

            <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
              {values.map((value, index) => (
                <ValueCard
                  key={value.number}
                  value={value}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA                                                              */}
      {/* ---------------------------------------------------------------- */}

      <section className="relative z-10 px-6 pb-24 pt-10 md:pb-36 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[34px] border border-slate-200 bg-white/70 shadow-[0_30px_100px_rgba(15,23,42,0.07)] backdrop-blur-2xl"
        >
          <div className="pointer-events-none absolute right-[-120px] top-[-180px] h-[500px] w-[500px] rounded-full bg-cyan-200/30 blur-[120px]" />

          <div className="pointer-events-none absolute bottom-[-150px] left-[25%] h-[350px] w-[350px] rounded-full bg-blue-200/20 blur-[100px]" />

          <div className="relative grid gap-10 p-8 md:p-14 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500" />

                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600">
                  Let&apos;s build something meaningful
                </span>
              </div>

              <h2 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-slate-900 md:text-5xl lg:text-6xl">
                Your business has a challenge.
                <br />
                <span className="text-slate-400">
                  Let&apos;s turn it into an opportunity.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500">
                Whether you are starting a transformation, modernizing an
                existing system, or looking for a long-term technology partner,
                we&apos;d love to understand what you&apos;re building.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-4 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:shadow-[0_15px_40px_rgba(6,182,212,0.25)]"
            >
              Start a conversation

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
/* Focus Card                                                                 */
/* -------------------------------------------------------------------------- */

function FocusCard({
  item,
  index,
}: {
  item: (typeof focusAreas)[number];
  index: number;
}) {
  const accents: Record<
    string,
    {
      text: string;
      bg: string;
      border: string;
      glow: string;
    }
  > = {
    cyan: {
      text: "text-cyan-600",
      bg: "bg-cyan-50",
      border: "border-cyan-200",
      glow: "bg-cyan-200/30",
    },
    blue: {
      text: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      glow: "bg-blue-200/30",
    },
    violet: {
      text: "text-violet-600",
      bg: "bg-violet-50",
      border: "border-violet-200",
      glow: "bg-violet-200/30",
    },
    emerald: {
      text: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      glow: "bg-emerald-200/30",
    },
  };

  const accent = accents[item.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: (index % 2) * 0.08,
      }}
      whileHover={{
        y: -5,
      }}
      className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/65 p-7 shadow-[0_18px_70px_rgba(15,23,42,0.05)] backdrop-blur-2xl transition-all duration-500 hover:border-slate-300 hover:shadow-[0_25px_80px_rgba(15,23,42,0.08)] md:p-8"
    >
      <div
        className={`pointer-events-none absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full ${accent.glow} opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl border ${accent.border} ${accent.bg} ${accent.text} text-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
        >
          {item.icon}
        </div>

        <span className="font-mono text-[11px] tracking-[0.2em] text-slate-300">
          {item.number}
        </span>
      </div>

      <h3 className="relative mt-7 text-2xl font-semibold tracking-[-0.035em] text-slate-900">
        {item.title}
      </h3>

      <p className="relative mt-4 max-w-xl text-sm leading-7 text-slate-500">
        {item.description}
      </p>

      <div className="relative mt-7 flex items-center gap-2">
        <div className={`h-1 w-10 rounded-full ${accent.bg}`} />

        <div className={`h-1 w-1 rounded-full ${accent.text}`} />

        <div className="h-px w-16 bg-slate-200" />
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/* Value Card                                                                 */
/* -------------------------------------------------------------------------- */

function ValueCard({
  value,
  index,
}: {
  value: (typeof values)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
      }}
      whileHover={{
        y: -4,
      }}
      className="group relative overflow-hidden rounded-[22px] border border-slate-200/80 bg-white/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-200 hover:bg-white/80 hover:shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50 text-sm text-cyan-600 ring-1 ring-cyan-100 transition-transform duration-300 group-hover:scale-110">
          {value.icon}
        </div>

        <span className="font-mono text-[9px] tracking-[0.2em] text-slate-300">
          {value.number}
        </span>
      </div>

      <h3 className="mt-5 text-sm font-semibold text-slate-800">
        {value.title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {value.description}
      </p>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Location Card                                                              */
/* -------------------------------------------------------------------------- */

function LocationCard({
  number,
  title,
  description,
  icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="group rounded-[22px] border border-slate-200/80 bg-white/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 ring-1 ring-cyan-100">
          {icon}
        </div>

        <span className="font-mono text-[9px] tracking-[0.2em] text-slate-300">
          {number}
        </span>
      </div>

      <h3 className="mt-6 text-sm font-semibold text-slate-800">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {description}
      </p>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Mini Stat                                                                  */
/* -------------------------------------------------------------------------- */

function MiniStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white/60 px-4 py-4 backdrop-blur-xl">
      <div className="text-sm font-semibold text-slate-900">{value}</div>

      <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-slate-400">
        {label}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Orbit Dot                                                                  */
/* -------------------------------------------------------------------------- */

function OrbitDot({ className }: { className: string }) {
  return (
    <span
      className={`absolute h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)] ${className}`}
    />
  );
}