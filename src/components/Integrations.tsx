// "use client";

// import { motion } from "motion/react";

// const integrations = [
//   {
//     name: "Dynamics 365",
//     image: "dynamicsLogo.png",
//     className: "left-[8%] top-[18%]",
//     delay: 0,
//     duration: 7,
//     size: "h-16 w-16",
//   },
//   {
//     name: "Azure",
//     image: "azureLogo.png",
//     className: "left-[22%] top-[8%]",
//     delay: 0.8,
//     duration: 8,
//     size: "h-14 w-14",
//   },
//   {
//     name: "Power Platform",
//     image: "/PowerApps1.jpeg",
//     className: "left-[5%] top-[55%]",
//     delay: 1.5,
//     duration: 9,
//     size: "h-14 w-14",
//   },
//   {
//     name: "copilote Studio",
//     image: "/copiloteStudio2.jpeg",
//     className: "left-[24%] top-[68%]",
//     delay: 0.4,
//     duration: 7.5,
//     size: "h-14 w-14",
//   },
//   {
//     name: "Power Automate",
//     image: "/PowerAutomate1.png",
//     className: "right-[19%] top-[8%]",
//     delay: 1.2,
//     duration: 8.5,
//     size: "h-14 w-14",
//   },
//   {
//     name: "Power BI",
//     image: "/Power-Bi.jpg",
//     className: "right-[7%] top-[27%]",
//     delay: 0.5,
//     duration: 7,
//     size: "h-14 w-14",
//   },
//   {
//     name: "React",
//     image: "/ReactLogoNew.jpg",
//     className: "right-[9%] top-[60%]",
//     delay: 1.8,
//     duration: 8,
//     size: "h-14 w-14",
//   },
//   {
//     name: "TypeScript",
//     image: "/typescriptLogo.jpg",
//     className: "right-[25%] top-[72%]",
//     delay: 0.9,
//     duration: 9,
//     size: "h-14 w-14",
//   },
//   {
//     name: "Javascript",
//     image: "javascriptLogo.png",
//     className: "left-[39%] top-[4%]",
//     delay: 1.7,
//     duration: 7.8,
//     size: "h-12 w-12",
//   },
//   {
//     name: "XRM Toolbox",
//     image: "/xrmtoolboxlogo.png",
//     className: "left-[38%] top-[78%]",
//     delay: 0.7,
//     duration: 8.5,
//     size: "h-12 w-12",
//   },
//   {
//     name: "C#",
//     image: "/csharLogo.png",
//     className: "right-[38%] top-[3%]",
//     delay: 1.1,
//     duration: 7.5,
//     size: "h-12 w-12",
//   },
//   {
//     name: ".Net Framework",
//     image: "/DotNetLogo1.jpg",
//     className: "right-[38%] top-[80%]",
//     delay: 2,
//     duration: 9,
//     size: "h-12 w-12",
//   },
// ];

// export default function Integrations() {
//   return (
//     <section className="relative overflow-hidden bg-white py-28 text-slate-900 md:py-40">
//       {/* Background glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-1/2 top-[30%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-100/40 blur-[140px]" />

//         <div className="absolute left-[-10%] top-[40%] h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-[120px]" />

//         <div className="absolute right-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-violet-100/30 blur-[120px]" />

//         {/* subtle grid */}
//         <div
//           className="absolute inset-0 opacity-[0.035]"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, #0f172a 1px, transparent 1px),
//               linear-gradient(to bottom, #0f172a 1px, transparent 1px)
//             `,
//             backgroundSize: "80px 80px",
//           }}
//         />
//       </div>

//       {/* Large background typography */}
//       <div className="pointer-events-none absolute left-1/2 top-[14%] -translate-x-1/2 select-none whitespace-nowrap text-[18vw] font-bold tracking-[-0.08em] text-slate-900/[0.025]">
//         CONNECT
//       </div>

//       {/* Main content */}
//       <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
//         {/* Heading */}
//         <div className="mx-auto max-w-3xl text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.7 }}
//             className="mb-5 flex items-center justify-center gap-3"
//           >
//             <span className="h-px w-8 bg-cyan-500" />

//             <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
//               Integrations
//             </span>

//             <span className="h-px w-8 bg-cyan-500" />
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             className="text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl"
//           >
//             Supercharge
//             <br />
//             <span className="text-slate-900/30">your workflow.</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg"
//           >
//             Connect your business systems seamlessly with Microsoft Dynamics
//             365, Azure, and leading enterprise platforms for complete digital
//             transformation.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.35 }}
//             className="mt-8 flex flex-wrap items-center justify-center gap-3"
//           >
//             <a
//               href="#services"
//               className="group rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/15"
//             >
//               Browse Services
//               <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
//                 →
//               </span>
//             </a>

//             <a
//               href="#contact"
//               className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
//             >
//               Get Started
//             </a>
//           </motion.div>
//         </div>

//         {/* Integration ecosystem */}
//         <div className="relative mx-auto mt-20 h-[620px] max-w-6xl md:mt-28">
//           {/* Connection lines */}
//           <div className="pointer-events-none absolute inset-0 hidden md:block">
//             <svg
//               className="h-full w-full"
//               viewBox="0 0 1200 620"
//               fill="none"
//             >
//               <motion.path
//                 d="M120 135 C300 180 400 260 600 310"
//                 stroke="url(#line1)"
//                 strokeWidth="1"
//                 strokeDasharray="4 8"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 whileInView={{ pathLength: 1, opacity: 0.6 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1.8 }}
//               />

//               <motion.path
//                 d="M270 80 C400 140 470 210 600 310"
//                 stroke="url(#line2)"
//                 strokeWidth="1"
//                 strokeDasharray="4 8"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 whileInView={{ pathLength: 1, opacity: 0.5 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1.8, delay: 0.2 }}
//               />

//               <motion.path
//                 d="M1080 150 C900 180 800 250 600 310"
//                 stroke="url(#line3)"
//                 strokeWidth="1"
//                 strokeDasharray="4 8"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 whileInView={{ pathLength: 1, opacity: 0.6 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1.8, delay: 0.3 }}
//               />

//               <motion.path
//                 d="M1030 400 C850 380 780 350 600 310"
//                 stroke="url(#line4)"
//                 strokeWidth="1"
//                 strokeDasharray="4 8"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 whileInView={{ pathLength: 1, opacity: 0.5 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1.8, delay: 0.4 }}
//               />

//               <motion.path
//                 d="M210 460 C380 420 470 360 600 310"
//                 stroke="url(#line5)"
//                 strokeWidth="1"
//                 strokeDasharray="4 8"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 whileInView={{ pathLength: 1, opacity: 0.5 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1.8, delay: 0.5 }}
//               />

//               <defs>
//                 <linearGradient
//                   id="line1"
//                   x1="0"
//                   y1="0"
//                   x2="1"
//                   y2="1"
//                 >
//                   <stop stopColor="#06b6d4" stopOpacity="0" />
//                   <stop offset="0.5" stopColor="#06b6d4" />
//                   <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
//                 </linearGradient>

//                 <linearGradient
//                   id="line2"
//                   x1="0"
//                   y1="0"
//                   x2="1"
//                   y2="1"
//                 >
//                   <stop stopColor="#3b82f6" stopOpacity="0" />
//                   <stop offset="0.5" stopColor="#3b82f6" />
//                   <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
//                 </linearGradient>

//                 <linearGradient
//                   id="line3"
//                   x1="1"
//                   y1="0"
//                   x2="0"
//                   y2="1"
//                 >
//                   <stop stopColor="#8b5cf6" stopOpacity="0" />
//                   <stop offset="0.5" stopColor="#6366f1" />
//                   <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
//                 </linearGradient>

//                 <linearGradient
//                   id="line4"
//                   x1="1"
//                   y1="0"
//                   x2="0"
//                   y2="1"
//                 >
//                   <stop stopColor="#06b6d4" stopOpacity="0" />
//                   <stop offset="0.5" stopColor="#06b6d4" />
//                   <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
//                 </linearGradient>

//                 <linearGradient
//                   id="line5"
//                   x1="0"
//                   y1="1"
//                   x2="1"
//                   y2="0"
//                 >
//                   <stop stopColor="#3b82f6" stopOpacity="0" />
//                   <stop offset="0.5" stopColor="#06b6d4" />
//                   <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </div>

//           {/* Floating icons */}
//           {integrations.map((integration) => (
//             <FloatingIcon
//               key={integration.name}
//               {...integration}
//             />
//           ))}

//           {/* Central integration hub */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.85 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{
//               duration: 0.9,
//               type: "spring",
//               stiffness: 80,
//               damping: 18,
//             }}
//             className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//           >
//             {/* outer glow */}
//             <div className="absolute inset-[-60px] rounded-full bg-cyan-400/10 blur-[50px]" />

//             {/* orbit */}
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{
//                 duration: 30,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="absolute inset-[-65px] rounded-full border border-dashed border-cyan-500/15"
//             />

//             <motion.div
//               animate={{ rotate: -360 }}
//               transition={{
//                 duration: 22,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="absolute inset-[-100px] rounded-full border border-dashed border-blue-500/10"
//             />

//             {/* hub */}
//             <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-full border border-white/80 bg-white/90 shadow-[0_25px_80px_rgba(15,23,42,0.15)] backdrop-blur-xl md:h-48 md:w-48">
//               <div className="absolute inset-2 rounded-full border border-cyan-500/10" />

//               <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 shadow-lg shadow-slate-950/20">
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="h-7 w-7 text-cyan-400"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.6"
//                 >
//                   <path d="M12 3v18M3 12h18" />
//                   <circle cx="12" cy="12" r="4" />
//                   <circle cx="12" cy="3" r="1.5" fill="currentColor" />
//                   <circle cx="21" cy="12" r="1.5" fill="currentColor" />
//                   <circle cx="12" cy="21" r="1.5" fill="currentColor" />
//                   <circle cx="3" cy="12" r="1.5" fill="currentColor" />
//                 </svg>
//               </div>

//               <span className="mt-4 text-sm font-semibold tracking-tight text-slate-900">
//                 Integration Hub
//               </span>

//               <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">
//                 Connected
//               </span>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom statement */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mx-auto -mt-4 max-w-2xl text-center md:-mt-2"
//         >
//           <p className="text-sm leading-6 text-slate-400">
//             From CRM and ERP to cloud platforms, productivity tools, and
//             enterprise applications —{" "}
//             <span className="font-medium text-slate-700">
//               everything works together.
//             </span>
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function FloatingIcon({
//   name,
//   image,
//   className,
//   delay,
//   duration,
//   size,
// }: {
//   name: string;
//   image: string;
//   className: string;
//   delay: number;
//   duration: number;
//   size: string;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.6 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{
//         duration: 0.7,
//         delay: delay * 0.2,
//       }}
//       className={`absolute hidden md:block ${className}`}
//     >
//       <motion.div
//         animate={{
//           y: [-12, 12, -12],
//           x: [-5, 5, -5],
//           rotate: [-2, 2, -2],
//         }}
//         transition={{
//           duration,
//           delay,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="group relative"
//       >
//         {/* glow */}
//         <div className="absolute inset-[-15px] rounded-[24px] bg-cyan-400/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

//         {/* icon card */}
//         <div className="relative flex h-24 w-24 items-center justify-center rounded-[24px] border border-slate-200/80 bg-white/75 shadow-[0_15px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-cyan-200 group-hover:shadow-[0_25px_60px_rgba(6,182,212,0.15)]">
//           <img
//             src={image}
//             alt={name}
//             className={`${size} object-contain transition-transform duration-500 group-hover:scale-110`}
//           />

//           {/* small connection dot */}
//           <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-cyan-400 shadow-sm" />
//         </div>

//         {/* label */}
//         <div className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[10px] font-medium text-slate-500 opacity-0 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:translate-y-1 group-hover:opacity-100">
//           {name}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }



"use client";

import { motion } from "motion/react";

const integrations = [
  {
    name: "Dynamics 365",
    image: "/dynamicsLogo.png",
    className:
      "left-[4%] top-[16%] sm:left-[8%] sm:top-[18%] md:left-[8%] md:top-[18%]",
    delay: 0,
    duration: 7,
    size: "h-9 w-9 sm:h-11 sm:w-11 md:h-16 md:w-16",
    mobile: true,
  },
  {
    name: "Azure",
    image: "/azureLogo.png",
    className:
      "left-[36%] top-[3%] sm:left-[22%] sm:top-[8%] md:left-[22%] md:top-[8%]",
    delay: 0.8,
    duration: 8,
    size: "h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14",
    mobile: true,
  },
  {
    name: "Power Platform",
    image: "/PowerApps1.jpeg",
    className:
      "left-[3%] top-[62%] sm:left-[5%] sm:top-[55%] md:left-[5%] md:top-[55%]",
    delay: 1.5,
    duration: 9,
    size: "h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14",
    mobile: true,
  },
  {
    name: "Copilot Studio",
    image: "/copiloteStudio2.jpeg",
    className:
      "left-[28%] top-[78%] sm:left-[24%] sm:top-[68%] md:left-[24%] md:top-[68%]",
    delay: 0.4,
    duration: 7.5,
    size: "h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14",
    mobile: false,
  },
  {
    name: "Power Automate",
    image: "/PowerAutomate1.png",
    className:
      "right-[4%] top-[12%] sm:right-[19%] sm:top-[8%] md:right-[19%] md:top-[8%]",
    delay: 1.2,
    duration: 8.5,
    size: "h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14",
    mobile: true,
  },
  {
    name: "Power BI",
    image: "/Power-Bi.jpg",
    className:
      "right-[3%] top-[42%] sm:right-[7%] sm:top-[27%] md:right-[7%] md:top-[27%]",
    delay: 0.5,
    duration: 7,
    size: "h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14",
    mobile: true,
  },
  {
    name: "React",
    image: "/ReactLogoNew.jpg",
    className:
      "right-[5%] top-[66%] sm:right-[9%] sm:top-[60%] md:right-[9%] md:top-[60%]",
    delay: 1.8,
    duration: 8,
    size: "h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14",
    mobile: true,
  },
  {
    name: "TypeScript",
    image: "/typescriptLogo.jpg",
    className:
      "right-[30%] top-[78%] sm:right-[25%] sm:top-[72%] md:right-[25%] md:top-[72%]",
    delay: 0.9,
    duration: 9,
    size: "h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14",
    mobile: true,
  },
  {
    name: "JavaScript",
    image: "/javascriptLogo.png",
    className:
      "left-[44%] top-[1%] sm:left-[39%] sm:top-[4%] md:left-[39%] md:top-[4%]",
    delay: 1.7,
    duration: 7.8,
    size: "h-7 w-7 sm:h-9 sm:w-9 md:h-12 md:w-12",
    mobile: false,
  },
  {
    name: "XRM Toolbox",
    image: "/xrmtoolboxlogo.png",
    className:
      "left-[42%] top-[85%] sm:left-[38%] sm:top-[78%] md:left-[38%] md:top-[78%]",
    delay: 0.7,
    duration: 8.5,
    size: "h-7 w-7 sm:h-9 sm:w-9 md:h-12 md:w-12",
    mobile: false,
  },
  {
    name: "C#",
    image: "/csharLogo.png",
    className:
      "right-[43%] top-[2%] sm:right-[38%] sm:top-[3%] md:right-[38%] md:top-[3%]",
    delay: 1.1,
    duration: 7.5,
    size: "h-7 w-7 sm:h-9 sm:w-9 md:h-12 md:w-12",
    mobile: false,
  },
  {
    name: ".NET Framework",
    image: "/DotNetLogo1.jpg",
    className:
      "right-[40%] top-[85%] sm:right-[38%] sm:top-[80%] md:right-[38%] md:top-[80%]",
    delay: 2,
    duration: 9,
    size: "h-7 w-7 sm:h-9 sm:w-9 md:h-12 md:w-12",
    mobile: false,
  },
];

export default function Integrations() {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-slate-900 sm:py-28 md:py-40">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Center glow */}
        <div className="absolute left-1/2 top-[30%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-100/40 blur-[100px] sm:h-[500px] sm:w-[500px] md:h-[650px] md:w-[650px] md:blur-[140px]" />

        {/* Left glow */}
        <div className="absolute left-[-20%] top-[40%] h-[300px] w-[300px] rounded-full bg-blue-100/40 blur-[100px] sm:left-[-10%] sm:h-[400px] sm:w-[400px] md:blur-[120px]" />

        {/* Right glow */}
        <div className="absolute right-[-20%] top-[20%] h-[300px] w-[300px] rounded-full bg-violet-100/30 blur-[100px] sm:right-[-10%] sm:h-[400px] sm:w-[400px] md:blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025] sm:opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0f172a 1px, transparent 1px),
              linear-gradient(to bottom, #0f172a 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =========================================================
          BACKGROUND TYPOGRAPHY
      ========================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-[12%] -translate-x-1/2 select-none whitespace-nowrap text-[25vw] font-bold tracking-[-0.08em] text-slate-900/[0.025] sm:text-[20vw] md:top-[14%] md:text-[18vw]">
        CONNECT
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* =======================================================
            HEADING
        ======================================================= */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Small heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-4 flex items-center justify-center gap-2 sm:mb-5 sm:gap-3"
          >
            <span className="h-px w-5 bg-cyan-500 sm:w-8" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-600 sm:text-xs sm:tracking-[0.3em]">
              Integrations
            </span>

            <span className="h-px w-5 bg-cyan-500 sm:w-8" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Supercharge
            <br />
            <span className="text-slate-900/30">your workflow.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500 sm:mt-7 sm:text-base sm:leading-7 md:text-lg"
          >
            Connect your business systems seamlessly with Microsoft Dynamics
            365, Azure, and leading enterprise platforms for complete digital
            transformation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8"
          >
            <a
              href="/services"
              className="group rounded-full bg-slate-950 px-5 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/15 sm:px-6 sm:py-3 sm:text-sm"
            >
              Browse Services

              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/contact"
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
            >
              Get Started
            </a>
          </motion.div>
        </div>

        {/* =======================================================
            INTEGRATION ECOSYSTEM
        ======================================================= */}

        <div className="relative mx-auto mt-14 h-[460px] max-w-6xl sm:mt-20 sm:h-[540px] md:mt-28 md:h-[620px]">
          {/* =====================================================
              CONNECTION LINES
              Desktop only
          ===================================================== */}

          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <svg
              className="h-full w-full"
              viewBox="0 0 1200 620"
              fill="none"
            >
              {/* Line 1 */}
              <motion.path
                d="M120 135 C300 180 400 260 600 310"
                stroke="url(#line1)"
                strokeWidth="1"
                strokeDasharray="4 8"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8 }}
              />

              {/* Line 2 */}
              <motion.path
                d="M270 80 C400 140 470 210 600 310"
                stroke="url(#line2)"
                strokeWidth="1"
                strokeDasharray="4 8"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: 0.2 }}
              />

              {/* Line 3 */}
              <motion.path
                d="M1080 150 C900 180 800 250 600 310"
                stroke="url(#line3)"
                strokeWidth="1"
                strokeDasharray="4 8"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: 0.3 }}
              />

              {/* Line 4 */}
              <motion.path
                d="M1030 400 C850 380 780 350 600 310"
                stroke="url(#line4)"
                strokeWidth="1"
                strokeDasharray="4 8"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: 0.4 }}
              />

              {/* Line 5 */}
              <motion.path
                d="M210 460 C380 420 470 360 600 310"
                stroke="url(#line5)"
                strokeWidth="1"
                strokeDasharray="4 8"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: 0.5 }}
              />

              {/* Gradients */}
              <defs>
                <linearGradient
                  id="line1"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop stopColor="#06b6d4" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#06b6d4" />
                  <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="line2"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="line3"
                  x1="1"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop stopColor="#8b5cf6" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#6366f1" />
                  <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="line4"
                  x1="1"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop stopColor="#06b6d4" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#06b6d4" />
                  <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="line5"
                  x1="0"
                  y1="1"
                  x2="1"
                  y2="0"
                >
                  <stop stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#06b6d4" />
                  <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* =====================================================
              FLOATING ICONS
          ===================================================== */}

          {integrations.map((integration) => (
            <FloatingIcon
              key={integration.name}
              {...integration}
            />
          ))}

          {/* =====================================================
              CENTRAL HUB
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.9,
              type: "spring",
              stiffness: 80,
              damping: 18,
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {/* Glow */}
            <div className="absolute inset-[-40px] rounded-full bg-cyan-400/10 blur-[40px] sm:inset-[-50px] sm:blur-[50px] md:inset-[-60px]" />

            {/* Outer orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[-42px] rounded-full border border-dashed border-cyan-500/15 sm:inset-[-55px] md:inset-[-65px]"
            />

            {/* Inner orbit */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[-68px] rounded-full border border-dashed border-blue-500/10 sm:inset-[-85px] md:inset-[-100px]"
            />

            {/* Hub */}
            <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-full border border-white/80 bg-white/90 shadow-[0_25px_80px_rgba(15,23,42,0.15)] backdrop-blur-xl sm:h-40 sm:w-40 md:h-48 md:w-48">
              {/* Inner border */}
              <div className="absolute inset-2 rounded-full border border-cyan-500/10" />

              {/* Hub icon */}
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 shadow-lg shadow-slate-950/20 sm:h-13 sm:w-13 sm:rounded-2xl md:h-14 md:w-14">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-cyan-400 sm:h-6 sm:w-6 md:h-7 md:w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M12 3v18M3 12h18" />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="12"
                    cy="3"
                    r="1.5"
                    fill="currentColor"
                  />

                  <circle
                    cx="21"
                    cy="12"
                    r="1.5"
                    fill="currentColor"
                  />

                  <circle
                    cx="12"
                    cy="21"
                    r="1.5"
                    fill="currentColor"
                  />

                  <circle
                    cx="3"
                    cy="12"
                    r="1.5"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Hub text */}
              <span className="mt-3 text-xs font-semibold tracking-tight text-slate-900 sm:mt-4 sm:text-sm">
                Integration Hub
              </span>

              <span className="mt-1 text-[8px] uppercase tracking-[0.18em] text-slate-400 sm:text-[10px] sm:tracking-[0.2em]">
                Connected
              </span>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto -mt-2 max-w-2xl text-center sm:-mt-4 md:-mt-2"
        >
          <p className="text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
            From CRM and ERP to cloud platforms, productivity tools, and
            enterprise applications —{" "}
            <span className="font-medium text-slate-700">
              everything works together.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ===============================================================
   FLOATING ICON COMPONENT
================================================================ */

function FloatingIcon({
  name,
  image,
  className,
  delay,
  duration,
  size,
  mobile,
}: {
  name: string;
  image: string;
  className: string;
  delay: number;
  duration: number;
  size: string;
  mobile: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.6,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: delay * 0.2,
      }}
      className={`
        absolute
        block
        ${className}
        ${mobile ? "" : "hidden md:block"}
      `}
    >
      <motion.div
        animate={{
          y: [-8, 8, -8],
          x: [-4, 4, -4],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="group relative"
      >
        {/* Glow */}
        <div className="absolute inset-[-10px] rounded-[18px] bg-cyan-400/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 sm:inset-[-15px] sm:rounded-[24px]" />

        {/* Icon card */}
        <div
          className="
            relative
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            border
            border-slate-200/80
            bg-white/75
            shadow-[0_10px_35px_rgba(15,23,42,0.08)]
            backdrop-blur-xl
            transition-all
            duration-500

            sm:h-20
            sm:w-20
            sm:rounded-[20px]

            md:h-24
            md:w-24
            md:rounded-[24px]

            group-hover:-translate-y-2
            group-hover:border-cyan-200
            group-hover:shadow-[0_25px_60px_rgba(6,182,212,0.15)]
          "
        >
          <img
            src={image}
            alt={name}
            className={`
              ${size}
              object-contain
              transition-transform
              duration-500
              group-hover:scale-110
            `}
          />

          {/* Connection dot */}
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full border border-white bg-cyan-400 shadow-sm sm:h-2.5 sm:w-2.5 sm:border-2" />
        </div>

        {/* Label - hidden on mobile */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-full
            mt-2
            hidden
            -translate-x-1/2
            whitespace-nowrap
            rounded-full
            border
            border-slate-200
            bg-white/80
            px-3
            py-1.5
            text-[10px]
            font-medium
            text-slate-500
            opacity-0
            shadow-sm
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:translate-y-1
            group-hover:opacity-100
            md:block
          "
        >
          {name}
        </div>
      </motion.div>
    </motion.div>
  );
}

