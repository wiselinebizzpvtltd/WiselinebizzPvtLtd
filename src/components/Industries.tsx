"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import telecomLogo from "../../public/network.png"

const industries = [
  {
    title: "Telecom & IT Services",
    description:
      "Scalable digital solutions for technology and communication businesses.",
    icon: "/network.png",
  },
  {
    title: "Manufacturing & Distribution",
    description:
      "Connected systems that streamline operations, production and distribution.",
    icon: "/manufacturing.png",
  },
  {
    title: "Retail & Services",
    description:
      "Customer-focused solutions designed to improve engagement and efficiency.",
    icon: "/Retail.png",
  },
  {
    title: "Professional Services",
    description:
      "Technology that helps professional teams automate workflows and deliver more.",
    icon: "/cloud-computing.png",
  },
  {
    title: "SaaS & Subscription Businesses",
    description:
      "Flexible solutions built around recurring revenue and scalable growth.",
    icon: "/saas.png",
  },
];

export default function Industries() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 mb-20 lg:mb-0">

        {/* ================= LEFT ================= */}
        <div className="relative">
          <div className="sticky top-0 flex h-screen items-center px-6 lg:py-20 lg:px-10">
            <div>
              <span className="mb-6 block -mt-62 lg:mt-0 text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">
                Industries
              </span>

              <h2 className="max-w-xl text-5xl font-semibold leading-[1.02] tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
                Industries
                <br />
                <span className="text-neutral-400">We Serve</span>
              </h2>

              <p className="mt-8 max-w-md text-lg leading-8 text-neutral-500">
                Specialized expertise across sectors, helping businesses
                streamline operations, connect systems and build scalable
                digital experiences.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-16 bg-neutral-300" />

                <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  05 Industries
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="px-6 py-2 -mt-52 lg:mt-0 lg:py-32 lg:px-10">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.title}
                industry={industry}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ================================================= */
/* INDUSTRY CARD */
/* ================================================= */

// function IndustryCard({
//   industry,
//   index,
// }: {
//   industry: (typeof industries)[number];
//   index: number;
// }) {
//   const cardRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: cardRef,
//     offset: ["start 95%", "start 35%"],
//   });

//   const y = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [100, 0]
//   );

//   const opacity = useTransform(
//     scrollYProgress,
//     [0, 0.3, 1],
//     [0, 0.3, 1]
//   );

//   const scale = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0.92, 1]
//   );

//   const rotate = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [2, 0]
//   );

//   return (
//     <motion.div
//       ref={cardRef}
//       style={{
//         y,
//         opacity,
//         scale,
//         rotate,
//       }}
//       className="group relative"
//     >
//       {/* Background number */}
//       <span
//         className="
//           pointer-events-none
//           absolute
//           -right-3
//           -top-16
//           text-[120px]
//           font-bold
//           leading-none
//           text-neutral-100
//           transition-colors
//           duration-500
//           group-hover:text-neutral-200
//         "
//       >
//         0{index + 1}
//       </span>

//       {/* Card */}
//       <div
//         className="
//           relative
//           overflow-hidden
//           rounded-[2rem]
//           border
//           border-neutral-200
//           bg-white
//           p-8
//           shadow-[0_15px_50px_rgba(0,0,0,0.05)]
//           transition-all
//           duration-500
//           group-hover:-translate-y-2
//           group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.1)]
//           md:p-10
//         "
//       >
//         {/* Hover background */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             inset-0
//             bg-gradient-to-br
//             from-neutral-50
//             via-transparent
//             to-transparent
//             opacity-0
//             transition-opacity
//             duration-500
//             group-hover:opacity-100
//           "
//         />

//         <div className="relative z-10 flex items-start gap-6">

//           {/* Icon */}
//           <div
//             className="
//               flex
//               h-16
//               w-16
//               shrink-0
//               items-center
//               justify-center
//               rounded-2xl
//               border
//               border-neutral-200
//               bg-neutral-50
//               text-2xl
//               text-neutral-700
//               transition-all
//               duration-500
//               group-hover:rotate-6
//               group-hover:scale-110
//             "
//           >
//             <img
//   src={industry.icon}
//   alt={industry.title}
//   className="h-10 w-10 object-contain"
// />
//           </div>

//           {/* Content */}
//           <div>
//             <span className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
//               0{index + 1}
//             </span>

//             <h3 className="text-2xl font-medium tracking-tight text-neutral-900 md:text-3xl">
//               {industry.title}
//             </h3>

//             <p className="mt-4 max-w-lg text-base leading-7 text-neutral-500">
//               {industry.description}
//             </p>
//           </div>
//         </div>

//         {/* Bottom hover line */}
//         <div
//           className="
//             relative
//             z-10
//             mt-8
//             h-px
//             w-0
//             bg-neutral-900
//             transition-all
//             duration-700
//             group-hover:w-full
//           "
//         />
//       </div>
//     </motion.div>
//   );
// }

function IndustryCard({
  industry,
  index,
}: {
  industry: (typeof industries)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 95%", "start 35%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    [0, 0.4, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.94, 1]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [2, 0]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{
        y,
        opacity,
        scale,
        rotate,
      }}
      className="group relative"
    >
      {/* ================================= */}
      {/* Background number */}
      {/* ================================= */}

      <span
        className="
          pointer-events-none
          absolute
          -right-4
          -top-20
          z-0
          select-none
          text-[140px]
          font-semibold
          leading-none
          tracking-[-0.08em]
          text-neutral-100
          transition-all
          duration-700
          group-hover:text-cyan-50
          group-hover:-translate-y-2
        "
      >
        0{index + 1}
      </span>

      {/* ================================= */}
      {/* Glow */}
      {/* ================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -inset-4
          rounded-[2.5rem]
          bg-gradient-to-r
          from-cyan-200/20
          via-blue-200/10
          to-transparent
          opacity-0
          blur-2xl
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      />

      {/* ================================= */}
      {/* Glass Card */}
      {/* ================================= */}

      <div
        className="
          relative
          z-10
          overflow-hidden
          rounded-[2rem]
          border
          border-white/70
          bg-white/55
          p-8
          backdrop-blur-xl
          backdrop-saturate-150

          shadow-[0_20px_60px_rgba(15,23,42,0.06)]

          transition-all
          duration-700

          group-hover:-translate-y-2
          group-hover:border-cyan-200/70
          group-hover:bg-white/70
          group-hover:shadow-[0_30px_90px_rgba(15,23,42,0.12)]

          md:p-10
        "
      >

        {/* ================================= */}
        {/* Glass shine */}
        {/* ================================= */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-48
            w-48
            rounded-full
            bg-cyan-200/20
            blur-3xl
            transition-all
            duration-700
            group-hover:scale-150
            group-hover:bg-cyan-200/30
          "
        />

        {/* ================================= */}
        {/* Hover gradient */}
        {/* ================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-cyan-50/60
            via-transparent
            to-blue-50/40
            opacity-0
            transition-opacity
            duration-700
            group-hover:opacity-100
          "
        />

        {/* ================================= */}
        {/* Content */}
        {/* ================================= */}

        <div className="relative z-10">

          {/* Top row */}

          <div className="flex items-start justify-between">

            {/* Icon */}

            <div
              className="
                flex
                h-[72px]
                w-[72px]
                items-center
                justify-center
                rounded-2xl

                border
                border-white/80

                bg-white/70

                shadow-[0_10px_30px_rgba(15,23,42,0.06)]

                backdrop-blur-md

                transition-all
                duration-500

                group-hover:rotate-6
                group-hover:scale-110
                group-hover:border-cyan-200
                group-hover:shadow-[0_15px_35px_rgba(6,182,212,0.15)]
              "
            >
              <img
                src={industry.icon}
                alt={industry.title}
                className="
                  h-10
                  w-10
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />
            </div>

            {/* Number */}

            <span
              className="
                text-xs
                font-semibold
                tracking-[0.25em]
                text-neutral-400
                transition-colors
                duration-500
                group-hover:text-cyan-500
              "
            >
              0{index + 1}
            </span>

          </div>

          {/* ================================= */}
          {/* Title */}
          {/* ================================= */}

          <div className="mt-10">

            <h3
              className="
                max-w-xl
                font-[var(--font-manrope)]
                text-3xl
                font-semibold
                leading-[1.15]
                tracking-[-0.035em]
                text-neutral-900

                transition-colors
                duration-500

                group-hover:text-neutral-950

                md:text-4xl
              "
            >
              {industry.title}
            </h3>

            <p
              className="
                mt-5
                max-w-lg
                font-[var(--font-manrope)]
                text-base
                leading-7
                tracking-[-0.01em]
                text-neutral-500

                md:text-[17px]
              "
            >
              {industry.description}
            </p>

          </div>

          {/* ================================= */}
          {/* Bottom */}
          {/* ================================= */}

          <div className="mt-10 flex items-center justify-between">

            {/* Line */}

            <div className="h-px flex-1 bg-neutral-200/80">

              <div
                className="
                  h-px
                  w-0
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                  transition-all
                  duration-700
                  group-hover:w-full
                "
              />

            </div>

            {/* Arrow */}

            <div
              className="
                ml-6
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-neutral-200
                bg-white/70
                text-neutral-500

                transition-all
                duration-500

                group-hover:translate-x-1
                group-hover:border-cyan-200
                group-hover:bg-cyan-50
                group-hover:text-cyan-600
              "
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 6l6 6-6 6"
                />
              </svg>
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
}
