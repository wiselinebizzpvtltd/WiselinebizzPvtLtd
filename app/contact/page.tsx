"use client";

import ContactForm from "@/src/components/ContactForm";
import Footer from "@/src/components/Footer";
import { motion } from "motion/react";
import Link from "next/link";
import { FormEvent, useState } from "react";

const services = [
  "Dynamics 365 CE",
  "Dynamics 365 F&O",
  "Azure",
  "AI Automations",
  "Digital Marketing",
];

const timelines = ["Immediate", "1–2 months", "3–6 months", "Flexible"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative overflow-hidden bg-[#f6f9fc] text-slate-900">
      {/* Ambient Background */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[-12%] top-[5%] h-[650px] w-[650px] rounded-full bg-cyan-200/25 blur-[170px]" />

        <div className="absolute right-[-12%] top-[20%] h-[650px] w-[650px] rounded-full bg-blue-200/20 blur-[170px]" />

        <div className="absolute bottom-[10%] left-[25%] h-[600px] w-[600px] rounded-full bg-violet-200/15 blur-[180px]" />

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

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative z-10 px-6 pb-20 pt-32 md:pb-28 md:pt-44 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-14 lg:grid-cols-12 lg:gap-20">
            {/* Hero Copy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-8"
            >
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-500" />

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
                  Let&apos;s Connect
                </span>
              </div>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.065em] text-slate-900 sm:text-6xl md:text-7xl lg:text-[88px]">
                Let&apos;s build
                <br />
                <span className="bg-gradient-to-r from-slate-400 via-slate-500 to-cyan-600 bg-clip-text text-transparent">
                  something better.
                </span>
              </h1>

              <p className="mt-9 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
                Share your project requirement and we&apos;ll respond with the
                right next steps. From Dynamics 365 implementations to Azure
                integrations and AI automation, let&apos;s explore what we can
                build together.
              </p>
            </motion.div>

            {/* Response Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="lg:col-span-4 lg:justify-self-end"
            >
              <div className="relative w-full max-w-sm overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/65 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.06)] backdrop-blur-2xl">
                <div className="absolute right-[-70px] top-[-70px] h-44 w-44 rounded-full bg-cyan-200/30 blur-[70px]" />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 ring-1 ring-cyan-100">
                      <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-500" />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Response Promise
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        Within 1 business day
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 h-px bg-slate-100" />

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      Project inquiry
                    </span>

                    <span className="font-mono text-[10px] tracking-[0.15em] text-cyan-600">
                      OPEN
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT AREA
      ========================================================= */}
      <section className="relative z-10 px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            {/* =====================================================
                LEFT CONTACT INFORMATION
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-5"
            >
              <div className="h-full rounded-[32px] border border-slate-200/80 bg-white/60 p-7 shadow-[0_25px_90px_rgba(15,23,42,0.05)] backdrop-blur-2xl md:p-9">
                <div className="mb-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600">
                    Get in Touch
                  </span>

                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-slate-900 md:text-4xl">
                    Tell us what
                    <br />
                    <span className="text-slate-400">you&apos;re building.</span>
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-slate-500">
                    Whether you&apos;re planning a new Dynamics 365
                    implementation, need Azure integration support, or want to
                    explore AI automation opportunities, we&apos;re here to
                    help.
                  </p>
                </div>

                <div className="space-y-3">
                  <ContactCard
                    icon={<EmailIcon />}
                    label="Email"
                    value="contactus@wiselinebizz.com"
                    href="mailto:contactus@wiselinebizz.com"
                  />

                  <ContactCard
                    icon={<PhoneIcon />}
                    label="Phone / WhatsApp"
                    value="+91-8421-118685"
                    href="tel:+918421118685"
                  />

                  <ContactCard
                    icon={<LocationIcon />}
                    label="Location"
                    value="1106, Bramhacorp Business Park, Next to Bramhacorp The Collection, Wadgaon Sheri, Pune, Maharashtra 411014, India"
                  />
                </div>

                {/* Response Promise */}
                <div className="mt-6 overflow-hidden rounded-[22px] border border-cyan-100 bg-cyan-50/60 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
                      <ClockIcon />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
                        Response Promise
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        We typically respond within{" "}
                        <span className="font-semibold text-slate-800">
                          1 business day.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social / Availability */}
                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Availability
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

                      <span className="text-xs font-medium text-slate-600">
                        Available for new projects
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <SocialButton label="in" />
                    <SocialButton label="X" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =====================================================
                RIGHT FORM
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-7"
            >
              {/* <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/70 p-7 shadow-[0_30px_100px_rgba(15,23,42,0.07)] backdrop-blur-2xl md:p-10">
                <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[350px] w-[350px] rounded-full bg-cyan-200/20 blur-[100px]" />

                <div className="pointer-events-none absolute bottom-[-160px] left-[20%] h-[350px] w-[350px] rounded-full bg-blue-200/15 blur-[100px]" />

                <div className="relative">
                  {!submitted ? (
                    <>
                      <div className="mb-9 flex items-end justify-between gap-5">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600">
                            Project Inquiry
                          </span>

                          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-slate-900 md:text-4xl">
                            Start a conversation.
                          </h2>
                        </div>

                        <span className="hidden font-mono text-[10px] tracking-[0.2em] text-slate-300 sm:block">
                          01 / 01
                        </span>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name + Email */}
                        {/* <div className="grid gap-5 md:grid-cols-2">
                          <FloatingInput
                            label="Full Name"
                            name="name"
                            placeholder="John Smith"
                            required
                          />

                          <FloatingInput
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="john@company.com"
                            required
                          />
                        </div> */}

                        {/* Company */}
                        {/* <FloatingInput
                          label="Company"
                          name="company"
                          placeholder="Your company name"
                        /> */}

                        {/* Service */}
                        {/* <div>
                          <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                            Service Interest <span className="text-cyan-500">*</span>
                          </label>

                          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                            {services.map((service, index) => (
                              <label
                                key={service}
                                className="group relative cursor-pointer"
                              >
                                <input
                                  type="radio"
                                  name="service"
                                  value={service}
                                  required
                                  className="peer sr-only"
                                />

                                <span className="flex min-h-[58px] items-center rounded-xl border border-slate-200 bg-white/70 px-3 py-3 text-xs font-medium leading-5 text-slate-500 transition-all duration-300 peer-checked:border-cyan-300 peer-checked:bg-cyan-50 peer-checked:text-cyan-700 group-hover:border-slate-300 group-hover:bg-white">
                                  <span className="mr-2 font-mono text-[9px] text-slate-300 transition-colors peer-checked:text-cyan-400">
                                    0{index + 1}
                                  </span>

                                  {service}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div> */}

                        {/* Project Summary */}
                        {/* <div>
                          <label
                            htmlFor="summary"
                            className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400"
                          >
                            Project Summary{" "}
                            <span className="text-cyan-500">*</span>
                          </label>

                          <textarea
                            id="summary"
                            name="summary"
                            required
                            rows={5}
                            placeholder="Tell us briefly about your project, current challenges, or what you'd like to achieve..."
                            className="w-full resize-none rounded-2xl border border-slate-200 bg-white/70 px-4 py-4 text-sm leading-6 text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-300 focus:border-cyan-300 focus:bg-white focus:ring-4 focus:ring-cyan-100/60"
                          />
                        </div> */}

                        {/* Timeline */}
                        {/* <div>
                          <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                            Timeline
                          </label>

                          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                            {timelines.map((timeline) => (
                              <label
                                key={timeline}
                                className="group cursor-pointer"
                              >
                                <input
                                  type="radio"
                                  name="timeline"
                                  value={timeline}
                                  className="peer sr-only"
                                />

                                <span className="flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white/70 px-3 text-xs font-medium text-slate-500 transition-all duration-300 peer-checked:border-cyan-300 peer-checked:bg-cyan-50 peer-checked:text-cyan-700 group-hover:border-slate-300">
                                  {timeline}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div> */}

                        {/* Submit */}
                        {/* <div className="pt-2">
                          <motion.button
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(15,23,42,0.15)] transition-all duration-300 hover:bg-cyan-500 hover:shadow-[0_18px_45px_rgba(6,182,212,0.25)]"
                          >
                            <span>Send Message</span>

                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                              →
                            </span>
                          </motion.button>
                        </div> */}

                        {/* <p className="text-center text-[10px] leading-5 text-slate-400">
                          By submitting this form, you agree to be contacted
                          regarding your project inquiry.
                        </p>
                       </form> */}

                    {/* </>
                  ) : (
                    <SuccessMessage onReset={() => setSubmitted(false)} />
                  )}
                </div>
              </div>  */}
              <ContactForm/>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
      <section className="relative z-10 px-6 pb-28 pt-8 md:pb-36 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/60 shadow-[0_25px_90px_rgba(15,23,42,0.05)] backdrop-blur-2xl"
        >
          <div className="relative px-7 py-12 md:px-12 md:py-16">
            <div className="pointer-events-none absolute right-[-100px] top-[-180px] h-[450px] w-[450px] rounded-full bg-cyan-200/25 blur-[110px]" />

            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600">
                  Not sure where to start?
                </span>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-slate-900 md:text-4xl">
                  Let&apos;s understand the problem first.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  You don&apos;t need a complete technical specification.
                  Share the challenge and we&apos;ll help identify the right
                  approach.
                </p>
              </div>

              <Link
                href="/services"
                className="group inline-flex shrink-0 items-center gap-4 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:text-cyan-600 hover:shadow-lg"
              >
                Explore services

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-cyan-50">
                  →
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

/* =============================================================
   CONTACT CARD
============================================================= */

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <motion.div
      whileHover={{ y: -3 }}
      className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white/60 p-4 transition-all duration-300 hover:border-cyan-200 hover:bg-white hover:shadow-[0_15px_45px_rgba(15,23,42,0.05)] mt-4"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-cyan-600 ring-1 ring-slate-100 transition-all duration-300 group-hover:bg-cyan-50 group-hover:ring-cyan-100">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          {label}
        </p>

        <p className="mt-1.5 break-words text-sm font-medium leading-6 text-slate-700 transition-colors group-hover:text-cyan-700">
          {value}
        </p>
      </div>
    </motion.div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}

/* =============================================================
   FLOATING INPUT
============================================================= */

function FloatingInput({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400"
      >
        {label}{" "}
        {required && <span className="text-cyan-500">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white/70 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-300 focus:border-cyan-300 focus:bg-white focus:ring-4 focus:ring-cyan-100/60"
      />
    </div>
  );
}

/* =============================================================
   SUCCESS MESSAGE
============================================================= */

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[650px] flex-col items-center justify-center text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.15,
          type: "spring",
          stiffness: 180,
          damping: 14,
        }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-50 text-3xl text-cyan-600 ring-8 ring-cyan-50/50"
      >
        ✓
      </motion.div>

      <h2 className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-slate-900 md:text-4xl">
        Thanks for reaching out.
      </h2>

      <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
        Your project details have been received. Our team will review your
        requirement and get back to you within 1 business day.
      </p>

      <button
        onClick={onReset}
        className="mt-8 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-600 transition-all hover:border-cyan-200 hover:text-cyan-600"
      >
        Send another inquiry
      </button>
    </motion.div>
  );
}

/* =============================================================
   SOCIAL BUTTON
============================================================= */

function SocialButton({ label }: { label: string }) {
  return (
    <button className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[11px] font-semibold text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-600">
      {label}
    </button>
  );
}

/* =============================================================
   ICONS
============================================================= */

function EmailIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}