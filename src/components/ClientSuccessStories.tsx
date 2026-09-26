"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    initials: "KB",
    name: "Keith Bailey",
    role: "CEO",
    company: "Virtual Practice Solutions",
    service: "Dynamics 365 Sales",
    quote:
      "Partnering with WiselineLLC for our Dynamics 365 Sales implementation has truly transformed how we manage and grow our pipeline. Their team took the time to understand our unique processes and designed a tailored solution that streamlined our lead management, reducing manual handoffs and accelerating deal closures. Improved forecasting accuracy, giving leadership real-time insights they can trust. The project was delivered on time and within budget, and their comprehensive training and attentive post-go-live support ensured our team was up and running from day one. We could not be happier with the results and highly recommend WiselineLLC to any organization looking to supercharge their sales operations.",
  },
  {
    initials: "ZS",
    name: "Zakeer Shaik",
    role: "CEO",
    company: "Parathought",
    service: "Azure Cloud",
    quote:
      "WiselineBizz was instrumental in upgrading our Azure infrastructure. They implemented best-practice architecture and governance, streamlined our deployment process, improved monitoring and alerting, and introduced cost controls that made our environment easier to manage. Their approach was structured, security-first, and practical, and they ensured our internal team was enabled with documentation and knowledge transfer. We would gladly partner with them again.",
  },
];

export default function ClientSuccessStories() {
  return (
    <section
      id="success-stories"
      className="relative overflow-hidden bg-[#f8fafc] py-28 text-slate-950 md:py-36"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[15%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.08] blur-[140px]" />

        <div className="absolute right-[-15%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-blue-500/[0.07] blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0f172a 1px, transparent 1px),
              linear-gradient(to bottom, #0f172a 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute left-1/2 top-[35%] -translate-x-1/2 select-none whitespace-nowrap text-[18vw] font-bold tracking-[-0.08em] text-slate-950/[0.025]">
          TRUST
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
              Client Success Stories
            </span>
          </div>

          <h2 className="text-5xl font-semibold leading-[0.92] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
            Real results
            <br />
            <span className="text-slate-950/25">
              from real partnerships.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            We work alongside our clients to solve complex technology
            challenges, modernize their operations, and create measurable
            business impact.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-20 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)] transition-shadow duration-500 hover:shadow-[0_30px_100px_rgba(15,23,42,0.12)] md:p-10"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-cyan-400/[0.08] blur-[80px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              {/* Top row */}
              <div className="relative flex items-start justify-between">
                {/* Quote icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/10 bg-cyan-500/[0.06]">
                  <svg
                    className="h-7 w-7 text-cyan-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.17 6C4.87 6 3 7.87 3 10.17v.66C3 13.13 4.87 15 7.17 15H9v3l4-4.5V10.17C13 7.87 11.13 6 8.83 6H7.17Zm8 0C12.87 6 11 7.87 11 10.17v.66c0 2.3 1.87 4.17 4.17 4.17H17v3l4-4.5V10.17C21 7.87 19.13 6 16.83 6h-1.66Z" />
                  </svg>
                </div>

                {/* Service badge */}
                <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {testimonial.service}
                </span>
              </div>

              {/* Quote */}
              <p className="relative mt-10 text-lg leading-8 tracking-[-0.01em] text-slate-600 md:text-xl md:leading-9">
                “{testimonial.quote}”
              </p>

              {/* Divider */}
              <div className="my-10 h-px bg-slate-100" />

              {/* Client */}
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white shadow-lg">
                  {testimonial.initials}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-950">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>

                {/* Verified */}
                <div className="ml-auto hidden items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-slate-400 sm:flex">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10">
                    <svg
                      className="h-3 w-3 text-emerald-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>
                  Client Partner
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* Bottom trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Built on trust
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Long-term partnerships. Practical solutions. Measurable impact.
            </p>
          </div>

          <a
            href="/contact"
            className="group flex items-center gap-3 text-sm font-semibold text-slate-950"
          >
            Start your transformation
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}