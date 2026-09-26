"use client";

import { motion } from "motion/react";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Dynamics 365 CE (CRM)",
  "Dynamics 365 F&O (ERP)",
  "Azure Cloud & Integration",
  "AI Automations",
  "Digital Marketing",
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/wiselinebizz" },
  // { name: "X", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020617] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}
        <div className="absolute left-1/2 top-[-250px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[140px]" />

        <div className="absolute bottom-[-200px] left-[-150px] h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[150px]" />

        <div className="absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-violet-600/[0.06] blur-[150px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Huge background typography */}
        <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[18vw] font-bold tracking-[-0.08em] text-white/[0.025]">
          WISELINE
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* =========================================
            CTA
        ========================================= */}
        <div className="border-b border-white/10 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] px-7 py-12 backdrop-blur-xl md:px-12 md:py-16"
          >
            {/* CTA glow */}
            <div className="pointer-events-none absolute right-[-100px] top-[-150px] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.08] blur-[100px]" />

            <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-cyan-400" />

                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Let's build
                  </span>
                </div>

                <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                  Ready to transform
                  <br />
                  <span className="text-white/30">
                    your business?
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-6 text-white/45 md:text-base">
                  Let&apos;s discuss how Dynamics 365, Azure, and AI
                  automation can help your business work smarter, faster,
                  and more efficiently.
                </p>
              </div>

              <a
                href="/contact"
                className="group flex w-fit shrink-0 items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_15px_50px_rgba(34,211,238,0.2)]"
              >
                Start a conversation

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-white transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            MAIN FOOTER
        ========================================= */}
        <div className="grid gap-14 py-20 md:grid-cols-12 md:gap-10 md:py-24">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <a href="#" className="inline-block">
              <img
                src="https://wiselinebizz.com/wiselinebizz-logo-160w.png"
                alt="WiselineBizz"
                className="h-10 w-auto brightness-0 invert"
              />
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/45 md:text-base">
              Transforming businesses with Dynamics 365, Azure, and AI
              automation solutions.
            </p>

            {/* Technology pills */}
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Dynamics 365",
                "Azure",
                "Power Platform",
                "AI",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/45"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2"
          >
            <FooterHeading>Quick Links</FooterHeading>

            <div className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2"
          >
            <FooterHeading>Services</FooterHeading>

            <div className="flex flex-col gap-4">
              {services.map((service) => (
                <FooterLink key={service} href="#services">
                  {service}
                </FooterLink>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-3 -mt-62 lg:mt-0"
          >
            <FooterHeading>Contact</FooterHeading>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                  <svg
                    className="h-4 w-4 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <p className="text-sm leading-6 text-white/45">
                  1106, Bramhacorp Business Park,
                  <br />
                  Next to Bramhacorp The Collection,
                  <br />
                  Wadgaon Sheri, Pune,
                  <br />
                  Maharashtra 411014, India
                </p>
              </div>


              {/* Email */}
              <a
                href="mailto:contactus@wiselinebizz.com"
                className="group flex items-center gap-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                  <svg
                    className="h-4 w-4 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>

                <span className="text-sm text-white/45 transition-colors group-hover:text-cyan-300">
                  contactus@wiselinebizz.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+918421118685"
                className="group flex items-center gap-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                  <svg
                    className="h-4 w-4 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>

                <span className="text-sm text-white/45 transition-colors group-hover:text-cyan-300">
                  +91 8421 118685
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            BOTTOM BAR
        ========================================= */}
        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Copyright */}
            <p className="text-xs text-white/30">
              © 2026 WiselineBizz PVT. All rights reserved.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${social.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-[10px] font-medium text-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  {social.name === "LinkedIn" ? "in" : "𝕏"}
                </Link>
              ))}

              {/* Back to top */}
              <a
                href="#"
                aria-label="Back to top"
                className="ml-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:text-white"
              >
                ↑
              </a>


            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
      {children}
    </h3>
  );
}

function FooterLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex w-fit items-center text-sm text-white/40 transition-all duration-300 hover:translate-x-1 hover:text-white"
    >
      <span className="mr-0 w-0 overflow-hidden text-cyan-400 opacity-0 transition-all duration-300 group-hover:mr-2 group-hover:w-2 group-hover:opacity-100">
        →
      </span>

      {children}
    </a>
  );
}

// "use client";

// import { motion } from "motion/react";

// const quickLinks = [
//   { name: "Home", href: "#" },
//   { name: "Services", href: "#services" },
//   { name: "Solutions", href: "#solutions" },
//   { name: "About", href: "#about" },
//   { name: "Contact", href: "#contact" },
// ];

// const services = [
//   "Dynamics 365 CE (CRM)",
//   "Dynamics 365 F&O (ERP)",
//   "Azure Cloud & Integration",
//   "AI Automations",
//   "Digital Marketing",
// ];

// const socialLinks = [
//   { name: "LinkedIn", href: "#" },
//   { name: "Instagram", href: "#" },
//   { name: "X", href: "#" },
// ];

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-[#eef4f8] text-slate-900">
//       {/* =========================================================
//           BACKGROUND
//       ========================================================= */}
//       <div className="pointer-events-none absolute inset-0">
//         {/* Main cyan glow */}
//         <div
//           className="
//             absolute left-[10%] top-[-220px]
//             h-[650px] w-[650px]
//             rounded-full
//             bg-cyan-300/20
//             blur-[150px]
//           "
//         />

//         {/* Blue glow */}
//         <div
//           className="
//             absolute right-[0%] top-[15%]
//             h-[600px] w-[600px]
//             rounded-full
//             bg-blue-300/15
//             blur-[160px]
//           "
//         />

//         {/* Violet glow */}
//         <div
//           className="
//             absolute bottom-[-180px] left-[35%]
//             h-[550px] w-[550px]
//             rounded-full
//             bg-violet-300/10
//             blur-[160px]
//           "
//         />

//         {/* Bottom cyan glow */}
//         <div
//           className="
//             absolute bottom-[-200px] right-[-100px]
//             h-[500px] w-[500px]
//             rounded-full
//             bg-cyan-300/10
//             blur-[150px]
//           "
//         />

//         {/* Subtle grid */}
//         <div
//           className="absolute inset-0 opacity-[0.045]"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, #0f172a 1px, transparent 1px),
//               linear-gradient(to bottom, #0f172a 1px, transparent 1px)
//             `,
//             backgroundSize: "80px 80px",
//           }}
//         />

//         {/* Giant background text */}
//         <div
//           className="
//             absolute bottom-[-5%]
//             left-1/2
//             -translate-x-1/2
//             select-none
//             whitespace-nowrap
//             text-[18vw]
//             font-bold
//             tracking-[-0.08em]
//             text-slate-900/[0.025]
//           "
//         >
//           WISELINE
//         </div>
//       </div>

//       {/* =========================================================
//           CONTENT
//       ========================================================= */}
//       <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
//         {/* =======================================================
//             CTA GLASS CARD
//         ======================================================= */}
//         <div className="border-b border-slate-900/[0.08] py-24 md:py-32">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//             className="
//               relative
//               overflow-hidden
//               rounded-[32px]

//               border
//               border-white/90

//               bg-white/35

//               px-7
//               py-12

//               shadow-[0_30px_100px_rgba(15,23,42,0.12)]

//               backdrop-blur-3xl
//               backdrop-saturate-150

//               md:px-12
//               md:py-16
//             "
//           >
//             {/* Glass highlight */}
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-x-0
//                 top-0
//                 h-px
//                 bg-white
//               "
//             />

//             {/* Inner glass reflection */}
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 rounded-[32px]
//                 bg-gradient-to-br
//                 from-white/30
//                 via-transparent
//                 to-transparent
//               "
//             />

//             {/* Cyan glow inside card */}
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 right-[-120px]
//                 top-[-150px]
//                 h-[450px]
//                 w-[450px]
//                 rounded-full
//                 bg-cyan-400/[0.12]
//                 blur-[110px]
//               "
//             />

//             {/* Blue glow inside card */}
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 bottom-[-180px]
//                 left-[25%]
//                 h-[350px]
//                 w-[350px]
//                 rounded-full
//                 bg-blue-400/[0.08]
//                 blur-[100px]
//               "
//             />

//             <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-end">
//               <div className="max-w-3xl">
//                 <div className="mb-5 flex items-center gap-3">
//                   <span className="h-px w-8 bg-cyan-500" />

//                   <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
//                     Let&apos;s build
//                   </span>
//                 </div>

//                 <h2
//                   className="
//                     text-4xl
//                     font-semibold
//                     leading-[0.95]
//                     tracking-[-0.05em]
//                     text-slate-950

//                     sm:text-5xl
//                     md:text-6xl
//                   "
//                 >
//                   Ready to transform
//                   <br />
//                   <span className="text-slate-950/25">
//                     your business?
//                   </span>
//                 </h2>

//                 <p
//                   className="
//                     mt-6
//                     max-w-xl
//                     text-sm
//                     leading-6
//                     text-slate-500

//                     md:text-base
//                   "
//                 >
//                   Let&apos;s discuss how Dynamics 365, Azure, and AI
//                   automation can help your business work smarter, faster,
//                   and more efficiently.
//                 </p>
//               </div>

//               {/* CTA */}
//               <a
//                 href="#contact"
//                 className="
//                   group
//                   flex
//                   w-fit
//                   shrink-0
//                   items-center
//                   gap-4
//                   rounded-full

//                   bg-slate-950

//                   px-7
//                   py-4

//                   text-sm
//                   font-semibold
//                   text-white

//                   shadow-[0_10px_30px_rgba(15,23,42,0.15)]

//                   transition-all
//                   duration-300

//                   hover:-translate-y-1
//                   hover:bg-cyan-500
//                   hover:shadow-[0_15px_50px_rgba(6,182,212,0.25)]
//                 "
//               >
//                 Start a conversation

//                 <span
//                   className="
//                     flex
//                     h-7
//                     w-7
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-white
//                     text-slate-950

//                     transition-transform
//                     duration-300

//                     group-hover:translate-x-1
//                   "
//                 >
//                   →
//                 </span>
//               </a>
//             </div>
//           </motion.div>
//         </div>

//         {/* =======================================================
//             MAIN FOOTER
//         ======================================================= */}
//         <div className="grid gap-14 py-20 md:grid-cols-12 md:gap-10 md:py-24">
//           {/* =====================================================
//               BRAND
//           ===================================================== */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="md:col-span-5"
//           >
//             <a href="#" className="inline-block">
//               <img
//                 src="https://wiselinebizz.com/wiselinebizz-logo-160w.png"
//                 alt="WiselineBizz"
//                 className="h-10 w-auto"
//               />
//             </a>

//             <p
//               className="
//                 mt-6
//                 max-w-md
//                 text-sm
//                 leading-7
//                 text-slate-500

//                 md:text-base
//               "
//             >
//               Transforming businesses with Dynamics 365, Azure, and AI
//               automation solutions.
//             </p>

//             {/* Technology glass pills */}
//             <div className="mt-7 flex flex-wrap gap-2">
//               {[
//                 "Dynamics 365",
//                 "Azure",
//                 "Power Platform",
//                 "AI",
//               ].map((item) => (
//                 <span
//                   key={item}
//                   className="
//                     rounded-full

//                     border
//                     border-white/90

//                     bg-white/40

//                     px-3
//                     py-1.5

//                     text-[11px]
//                     text-slate-500

//                     shadow-[0_8px_30px_rgba(15,23,42,0.06)]

//                     backdrop-blur-xl
//                     backdrop-saturate-150

//                     transition-all
//                     duration-300

//                     hover:-translate-y-0.5
//                     hover:bg-white/60
//                     hover:text-cyan-600
//                   "
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>
//           </motion.div>

//           {/* =====================================================
//               QUICK LINKS
//           ===================================================== */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.7,
//               delay: 0.1,
//             }}
//             className="md:col-span-2"
//           >
//             <FooterHeading>Quick Links</FooterHeading>

//             <div className="flex flex-col gap-4">
//               {quickLinks.map((link) => (
//                 <FooterLink
//                   key={link.name}
//                   href={link.href}
//                 >
//                   {link.name}
//                 </FooterLink>
//               ))}
//             </div>
//           </motion.div>

//           {/* =====================================================
//               SERVICES
//           ===================================================== */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.7,
//               delay: 0.2,
//             }}
//             className="md:col-span-2"
//           >
//             <FooterHeading>Services</FooterHeading>

//             <div className="flex flex-col gap-4">
//               {services.map((service) => (
//                 <FooterLink
//                   key={service}
//                   href="#services"
//                 >
//                   {service}
//                 </FooterLink>
//               ))}
//             </div>
//           </motion.div>

//           {/* =====================================================
//               CONTACT
//           ===================================================== */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.7,
//               delay: 0.3,
//             }}
//             className="md:col-span-3"
//           >
//             <FooterHeading>Contact</FooterHeading>

//             <div className="space-y-6">
//               {/* Address */}
//               <div className="flex gap-3">
//                 <GlassIcon>
//                   <svg
//                     className="h-4 w-4 text-cyan-500"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.6"
//                   >
//                     <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
//                     <circle
//                       cx="12"
//                       cy="10"
//                       r="2.5"
//                     />
//                   </svg>
//                 </GlassIcon>

//                 <p className="text-sm leading-6 text-slate-500">
//                   Bramhacorp Business Park,
//                   <br />
//                   Next to Bramhacorp The Collection,
//                   <br />
//                   Wadgaon Sheri, Pune,
//                   <br />
//                   Maharashtra 411014
//                 </p>
//               </div>

//               {/* Email */}
//               <a
//                 href="mailto:contact@wiselinebizz.com"
//                 className="group flex items-center gap-3"
//               >
//                 <GlassIcon>
//                   <svg
//                     className="h-4 w-4 text-cyan-500"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.6"
//                   >
//                     <rect
//                       x="3"
//                       y="5"
//                       width="18"
//                       height="14"
//                       rx="2"
//                     />
//                     <path d="m3 7 9 6 9-6" />
//                   </svg>
//                 </GlassIcon>

//                 <span
//                   className="
//                     text-sm
//                     text-slate-500

//                     transition-colors
//                     duration-300

//                     group-hover:text-cyan-600
//                   "
//                 >
//                   contact@wiselinebizz.com
//                 </span>
//               </a>

//               {/* Phone */}
//               <a
//                 href="tel:+918421118685"
//                 className="group flex items-center gap-3"
//               >
//                 <GlassIcon>
//                   <svg
//                     className="h-4 w-4 text-cyan-500"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.6"
//                   >
//                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
//                   </svg>
//                 </GlassIcon>

//                 <span
//                   className="
//                     text-sm
//                     text-slate-500

//                     transition-colors
//                     duration-300

//                     group-hover:text-cyan-600
//                   "
//                 >
//                   +91 8421 118685
//                 </span>
//               </a>
//             </div>
//           </motion.div>
//         </div>

//         {/* =======================================================
//             BOTTOM BAR
//         ======================================================= */}
//         <div className="border-t border-slate-900/[0.08] py-7">
//           <div
//             className="
//               flex
//               flex-col
//               gap-6

//               md:flex-row
//               md:items-center
//               md:justify-between
//             "
//           >
//             <p className="text-xs text-slate-400">
//               © 2026 WiselineBizz PVT. All rights reserved.
//             </p>

//             <div className="flex items-center gap-3">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   aria-label={social.name}
//                   className="
//                     flex
//                     h-9
//                     w-9
//                     items-center
//                     justify-center
//                     rounded-full

//                     border
//                     border-white/90

//                     bg-white/40

//                     text-[10px]
//                     font-medium
//                     text-slate-400

//                     shadow-[0_8px_30px_rgba(15,23,42,0.06)]

//                     backdrop-blur-xl
//                     backdrop-saturate-150

//                     transition-all
//                     duration-300

//                     hover:-translate-y-1
//                     hover:border-cyan-400/40
//                     hover:bg-cyan-50/70
//                     hover:text-cyan-600
//                   "
//                 >
//                   {social.name === "LinkedIn"
//                     ? "in"
//                     : social.name}
//                 </a>
//               ))}

//               {/* Back to top */}
//               <a
//                 href="#"
//                 aria-label="Back to top"
//                 className="
//                   ml-3
//                   flex
//                   h-9
//                   w-9
//                   items-center
//                   justify-center
//                   rounded-full

//                   border
//                   border-white/90

//                   bg-white/40

//                   text-slate-400

//                   shadow-[0_8px_30px_rgba(15,23,42,0.06)]

//                   backdrop-blur-xl
//                   backdrop-saturate-150

//                   transition-all
//                   duration-300

//                   hover:-translate-y-1
//                   hover:border-cyan-400/40
//                   hover:bg-cyan-50/70
//                   hover:text-cyan-600
//                 "
//               >
//                 ↑
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// /* ===============================================================
//    GLASS ICON
// =============================================================== */

// function GlassIcon({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div
//       className="
//         mt-0.5
//         flex
//         h-8
//         w-8
//         shrink-0
//         items-center
//         justify-center
//         rounded-lg

//         border
//         border-white/90

//         bg-white/45

//         shadow-[0_8px_25px_rgba(15,23,42,0.07)]

//         backdrop-blur-xl
//         backdrop-saturate-150
//       "
//     >
//       {children}
//     </div>
//   );
// }

// /* ===============================================================
//    FOOTER HEADING
// =============================================================== */

// function FooterHeading({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <h3
//       className="
//         mb-6
//         text-xs
//         font-semibold
//         uppercase
//         tracking-[0.25em]
//         text-slate-900/70
//       "
//     >
//       {children}
//     </h3>
//   );
// }

// /* ===============================================================
//    FOOTER LINK
// =============================================================== */

// function FooterLink({
//   children,
//   href,
// }: {
//   children: React.ReactNode;
//   href: string;
// }) {
//   return (
//     <a
//       href={href}
//       className="
//         group
//         flex
//         w-fit
//         items-center

//         text-sm
//         text-slate-500

//         transition-all
//         duration-300

//         hover:translate-x-1
//         hover:text-slate-950
//       "
//     >
//       <span
//         className="
//           mr-0
//           w-0
//           overflow-hidden

//           text-cyan-500
//           opacity-0

//           transition-all
//           duration-300

//           group-hover:mr-2
//           group-hover:w-2
//           group-hover:opacity-100
//         "
//       >
//         →
//       </span>

//       {children}
//     </a>
//   );
// }
