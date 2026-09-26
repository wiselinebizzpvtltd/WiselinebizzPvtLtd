"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";

const services = [
  "Dynamics 365 CE",
  "Dynamics 365 F&O",
  "Azure",
  "AI Automations",
  "Digital Marketing",
];

const timelines = [
  "Immediate",
  "1–2 months",
  "3–6 months",
  "Flexible",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      const payload = {
        name: formData.get("name")?.toString().trim() || "",
        email: formData.get("email")?.toString().trim() || "",
        phone: formData.get("phone")?.toString().trim() || "",
        company: formData.get("company")?.toString().trim() || "",
        service: formData.get("service")?.toString() || "",
        message: formData.get("summary")?.toString().trim() || "",
        timeline: formData.get("timeline")?.toString() || "",
      };


      console.log("Form Data", payload);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

       // Read response as text first
    const responseText = await response.text();

    let result: {
      success?: boolean;
      message?: string;
    } = {};

    if (responseText) {
      try {
        result = JSON.parse(responseText);
      } catch {
        throw new Error(
          `Server returned an invalid response (${response.status}).`
        );
      }
    }

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to send your enquiry."
        );
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Contact form submission error:", error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmitError("");
  };

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/70 p-7 shadow-[0_30px_100px_rgba(15,23,42,0.07)] backdrop-blur-2xl md:p-10">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[350px] w-[350px] rounded-full bg-cyan-200/20 blur-[100px]" />

      <div className="pointer-events-none absolute bottom-[-160px] left-[20%] h-[350px] w-[350px] rounded-full bg-blue-200/15 blur-[100px]" />

      <div className="relative">
        {!submitted ? (
          <>
            {/* Header */}
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

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid gap-5 md:grid-cols-2">
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
              </div>

              {/* Company + Phone */}
              <div className="grid gap-5 md:grid-cols-2">
                <FloatingInput
                  label="Company"
                  name="company"
                  placeholder="Your company name"
                />

                <FloatingInput
                  label="Phone / WhatsApp"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Service */}
              <div>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Service Interest{" "}
                  <span className="text-cyan-500">*</span>
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
              </div>

              {/* Project Summary */}
              <div>
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
              </div>

              {/* Timeline */}
              <div>
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

                      <span className="flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white/70 px-3 text-xs font-medium text-slate-500 transition-all duration-300 peer-checked:border-cyan-300 peer-checked:bg-cyan-50 peer-checked:text-cyan-700 group-hover:border-slate-300"
                      >
                        {timeline}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                {/* Error */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600"
                  >
                    {submitError}
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ y: isSubmitting ? 0 : -2 }}
                  whileTap={{
                    scale: isSubmitting ? 1 : 0.98,
                  }}
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(15,23,42,0.15)] transition-all duration-300 hover:bg-cyan-500 hover:shadow-[0_18px_45px_rgba(6,182,212,0.25)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-slate-950 disabled:hover:shadow-[0_15px_40px_rgba(15,23,42,0.15)]"
                >
                  <span>
                    {isSubmitting ? "Sending..." : "Submit"}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                    {isSubmitting ? (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    ) : (
                      "→"
                    )}
                  </span>
                </motion.button>
              </div>

              {/* Disclaimer */}
              <p className="text-center text-[10px] leading-5 text-slate-400">
                By submitting this form, you agree to be contacted
                regarding your project inquiry.
              </p>
            </form>
          </>
        ) : (
          <SuccessMessage onReset={handleReset} />
        )}
      </div>
    </div>
  );
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

function SuccessMessage({
  onReset,
}: {
  onReset: () => void;
}) {
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
        type="button"
        onClick={onReset}
        className="mt-8 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-600 transition-all hover:border-cyan-200 hover:text-cyan-600"
      >
        Send another inquiry
      </button>
    </motion.div>
  );
}