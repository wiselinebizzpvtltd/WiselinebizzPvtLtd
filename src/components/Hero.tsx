// "use client";

// import React, { useRef } from "react";
// import Link from "next/link";
// import { motion, useScroll, useTransform } from "motion/react";

// import Counter from "../services/CounterService";
// import ExpertiseAnimation from "../components/ExpertiseAnimation";


// export const Hero = () => {
//   return (
//       <section className="relative isolate overflow-hidden pt-28">

//         {/* Background gradients */}
//         <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-sky-50/60 to-white" />

//         <div
//           className="
//             absolute
//             -left-40
//             -top-40
//             -z-10
//             h-[500px]
//             w-[500px]
//             rounded-full
//             bg-cyan-200/30
//             blur-3xl
//           "
//         />

//         <div
//           className="
//             absolute
//             -right-40
//             top-20
//             -z-10
//             h-[500px]
//             w-[500px]
//             rounded-full
//             bg-blue-200/30
//             blur-3xl
//           "
//         />

//         <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-28">

//           <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

//             {/* =====================================================
//                 LEFT CONTENT
//             ===================================================== */}
//             <div>

//               {/* Small badge */}
//               <div
//                 className="
//                   mb-7
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   border
//                   border-cyan-200
//                   bg-white/80
//                   px-4
//                   py-2
//                   text-sm
//                   font-medium
//                   text-slate-700
//                   shadow-sm
//                   backdrop-blur
//                 "
//               >
//                 <span className="h-2 w-2 rounded-full bg-cyan-500" />

//                 Microsoft Technology Partner
//               </div>

//               {/* Heading */}
//               <h1
//                 className="
//                   max-w-3xl
//                   text-5xl
//                   font-bold
//                   leading-[1.05]
//                   tracking-[-0.04em]
//                   text-slate-950
//                   sm:text-6xl
//                   lg:text-[68px]
//                 "
//               >
//                 Enterprise Solutions
//                 <span className="mt-2 block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
//                   That Scale
//                 </span>
//               </h1>

//               {/* Description */}
//               <p
//                 className="
//                   mt-7
//                   max-w-xl
//                   text-lg
//                   leading-8
//                   text-slate-600
//                   sm:text-xl
//                 "
//               >
//                 Dynamics 365, Azure & AI implementations that drive
//                 real business growth.
//               </p>

//               {/* Buttons */}
//               <div className="mt-9 flex flex-col gap-4 sm:flex-row">

//                 <Link
//                   href="/contact"
//                   className="
//                     group
//                     inline-flex
//                     items-center
//                     justify-center
//                     gap-3
//                     rounded-xl
//                     bg-gradient-to-r
//                     from-cyan-500
//                     to-blue-500
//                     px-7
//                     py-4
//                     text-sm
//                     font-semibold
//                     text-white
//                     shadow-lg
//                     shadow-cyan-500/20
//                     transition-all
//                     duration-300
//                     hover:-translate-y-1
//                     hover:shadow-xl
//                     hover:shadow-cyan-500/25
//                   "
//                 >
//                   Start Your Project

//                   <svg
//                     className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M5 12h14M13 6l6 6-6 6"
//                     />
//                   </svg>
//                 </Link>

//                 <Link
//                   href="/projects"
//                   className="
//                     inline-flex
//                     items-center
//                     justify-center
//                     rounded-xl
//                     border
//                     border-slate-300
//                     bg-white/80
//                     px-7
//                     py-4
//                     text-sm
//                     font-semibold
//                     text-slate-700
//                     shadow-sm
//                     backdrop-blur
//                     transition-all
//                     duration-300
//                     hover:-translate-y-1
//                     hover:border-slate-400
//                     hover:bg-white
//                     hover:shadow-md
//                   "
//                 >
//                   View Case Studies
//                 </Link>

//               </div>

//               {/* Divider */}
//               <div className="my-12 h-px max-w-2xl bg-slate-200" />

//               {/* Stats */}
//               {/* <div className="grid max-w-2xl grid-cols-3 gap-6">

//                 {stats.map((stat) => (
//                   <div key={stat.value}>

//                     <div
//                       className="
//                         text-3xl
//                         font-bold
//                         tracking-tight
//                         text-cyan-500
//                         sm:text-4xl
//                       "
//                     >
//                       {stat.value}
//                     </div>

//                     <div className="mt-2 text-sm text-slate-500">
//                       {stat.label}
//                     </div>

//                   </div>
//                 ))}

//               </div> */}

//               <div className="grid max-w-2xl grid-cols-3 gap-6">

//   <div>
//     <div className="text-3xl font-bold tracking-tight text-cyan-500 sm:text-4xl">
//       <Counter end={15} suffix="+" />
//     </div>

//     <div className="mt-2 text-sm text-slate-500">
//       Projects Delivered
//     </div>
//   </div>

//   <div>
//     <div className="text-3xl font-bold tracking-tight text-cyan-500 sm:text-4xl">
//       <Counter end={98} suffix="%" />
//     </div>

//     <div className="mt-2 text-sm text-slate-500">
//       Client Satisfaction
//     </div>
//   </div>

//   <div>
//     <div className="text-3xl font-bold tracking-tight text-cyan-500 sm:text-4xl">
//       <Counter end={24} suffix="/7" />
//     </div>

//     <div className="mt-2 text-sm text-slate-500">
//       Support Available
//     </div>
//   </div>

//               </div>

//             </div>

//             {/* =====================================================
//                 RIGHT SOLUTION CARD
//             ===================================================== */}
//             <div className="relative">

//               {/* Glow */}
//               <div
//                 className="
//                   absolute
//                   inset-10
//                   -z-10
//                   rounded-[40px]
//                   bg-cyan-200/40
//                   blur-3xl
//                 "
//               />

//               <div
//                 // className="
//                 //   relative
//                 //   rounded-[28px]
//                 //   border
//                 //   border-slate-200
//                 //   bg-white/70
//                 //   p-5
//                 //   shadow-2xl
//                 //   shadow-slate-200/70
//                 //   backdrop-blur-xl
//                 //   sm:p-7
//                 // "
//               >

//                 {/* Card header */}
//                 {/* <div className="mb-6 flex items-center justify-between">

//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">
//                       Our Expertise
//                     </p>

//                     <p className="mt-1 text-xs text-slate-500">
//                       Technology built for growth
//                     </p>
//                   </div>

//                   <div
//                     className="
//                       flex
//                       h-10
//                       w-10
//                       items-center
//                       justify-center
//                       rounded-xl
//                       bg-cyan-50
//                       text-cyan-500
//                     "
//                   >
//                     <svg
//                       className="h-5 w-5"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="1.8"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M12 2v20M2 12h20"
//                       />
//                     </svg>
//                   </div>

//                 </div> */}

//                 {/* Solution items */}
//                 {/* <div className="space-y-4">

//                   {solutions.map((solution) => (
//                     <div
//                       key={solution.title}
//                       className="
//                         group
//                         flex
//                         items-center
//                         gap-4
//                         rounded-2xl
//                         border
//                         border-slate-200
//                         bg-slate-50/80
//                         p-4
//                         transition-all
//                         duration-300
//                         hover:-translate-y-1
//                         hover:border-cyan-200
//                         hover:bg-white
//                         hover:shadow-lg
//                         hover:shadow-slate-200/60
//                       "
//                     >

//                       <div
//                         className={`
//                           flex
//                           h-14
//                           w-14
//                           shrink-0
//                           items-center
//                           justify-center
//                           rounded-2xl
//                           text-white
//                           shadow-lg
//                           transition-transform
//                           duration-300
//                           group-hover:scale-105
//                           ${solution.iconBg}
//                         `}
//                       >
//                         {solution.icon}
//                       </div>


//                       <div>
//                         <h3 className="font-semibold text-slate-900">
//                           {solution.title}
//                         </h3>

//                         <p className="mt-1 text-sm text-slate-500">
//                           {solution.description}
//                         </p>
//                       </div>

                      
//                       <div className="ml-auto text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-500">
//                         <svg
//                           className="h-5 w-5"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M5 12h14M13 6l6 6-6 6"
//                           />
//                         </svg>
//                       </div>

//                     </div>
//                   ))}

//                 </div> */}

//                 {/* Bottom card */}
//                 {/* <div
//                   className="
//                     mt-5
//                     rounded-2xl
//                     bg-gradient-to-r
//                     from-slate-950
//                     to-slate-800
//                     p-5
//                     text-white
//                   "
//                 >
//                   <div className="flex items-center justify-between">

//                     <div>
//                       <p className="text-sm font-semibold">
//                         Ready to transform?
//                       </p>

//                       <p className="mt-1 text-xs text-slate-400">
//                         Let's build something impactful.
//                       </p>
//                     </div>

//                     <Link
//                       href="/contact"
//                       className="
//                         flex
//                         h-10
//                         w-10
//                         items-center
//                         justify-center
//                         rounded-xl
//                         bg-white
//                         text-slate-950
//                         transition-transform
//                         duration-300
//                         hover:scale-105
//                       "
//                     >
//                       <svg
//                         className="h-5 w-5"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M5 12h14M13 6l6 6-6 6"
//                         />
//                       </svg>
//                     </Link>

//                   </div>
//                 </div> */}

//                 <ExpertiseAnimation/>

//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//   )
// }

// export const Hero = () => {

//   const heroRef = useRef<HTMLElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   // Left side — slow
//   const contentY = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, -80]
//   );

//   // Right side — faster
//   const expertiseY = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, -160]
//   );

//   // Background — different speeds
//   const leftGlowY = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, -180]
//   );

//   const rightGlowY = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, -90]
//   );

//   // Subtle scaling
//   const expertiseScale = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [1, 0.96]
//   );

//   return (
//     <section
//       ref={heroRef}
//       className="relative isolate overflow-hidden pt-28"
//     >

//       {/* Background */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-sky-50/60 to-white"/>

//       {/* Left glow */}
//       <motion.div
//         style={{ y: leftGlowY }}
//         className="
//           absolute
//           -left-40
//           -top-40
//           -z-10
//           h-[500px]
//           w-[500px]
//           rounded-full
//           bg-cyan-200/30
//           blur-3xl
//         "
//       />

//       {/* Right glow */}
//       <motion.div
//         style={{ y: rightGlowY }}
//         className="
//           absolute
//           -right-40
//           top-20
//           -z-10
//           h-[500px]
//           w-[500px]
//           rounded-full
//           bg-blue-200/30
//           blur-3xl
//         "
//       />

//       <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-28">

//         <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

//           {/* LEFT CONTENT */}
//           <motion.div style={{ y: contentY }}>

//             {/* Everything you already have here */}

//             <div
//               className="
//                 mb-7
//                 inline-flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 border
//                 border-cyan-200
//                 bg-white/80
//                 px-4
//                 py-2
//                 text-sm
//                 font-medium
//                 text-slate-700
//                 shadow-sm
//                 backdrop-blur
//               "
//             >
//               <span className="h-2 w-2 rounded-full bg-cyan-500" />
//               Microsoft Technology Partner
//             </div>

//             <h1
//               className="
//                 max-w-3xl
//                 text-5xl
//                 font-bold
//                 leading-[1.05]
//                 tracking-[-0.04em]
//                 text-slate-950
//                 sm:text-6xl
//                 lg:text-[68px]
//               "
//             >
//               Enterprise Solutions

//               <span className="mt-2 block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
//                 That Scale
//               </span>
//             </h1>

//             <p
//               className="
//                 mt-7
//                 max-w-xl
//                 text-lg
//                 leading-8
//                 text-slate-600
//                 sm:text-xl
//               "
//             >
//               Dynamics 365, Azure & AI implementations that drive
//               real business growth.
//             </p>

//             {/* Buttons */}
//             <div className="mt-9 flex flex-col gap-4 sm:flex-row">

//               <Link
//                 href="/contact"
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-3
//                   rounded-xl
//                   bg-gradient-to-r
//                   from-cyan-500
//                   to-blue-500
//                   px-7
//                   py-4
//                   text-sm
//                   font-semibold
//                   text-white
//                   shadow-lg
//                   shadow-cyan-500/20
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:shadow-xl
//                 "
//               >
//                 Start Your Project

//                 <svg
//                   className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M5 12h14M13 6l6 6-6 6"
//                   />
//                 </svg>
//               </Link>

//               <Link
//                 href="/solutions"
//                 className="
//                   inline-flex
//                   items-center
//                   justify-center
//                   rounded-xl
//                   border
//                   border-slate-300
//                   bg-white/80
//                   px-7
//                   py-4
//                   text-sm
//                   font-semibold
//                   text-slate-700
//                   shadow-sm
//                   backdrop-blur
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:border-slate-400
//                   hover:bg-white
//                   hover:shadow-md
//                 "
//               >
//                 View Case Studies
//               </Link>

//             </div>

//             {/* Divider */}
//             <div className="my-12 h-px max-w-2xl bg-slate-200" />

//             {/* Stats */}
//             <div className="grid max-w-2xl grid-cols-3 gap-6">

//               <div>
//                 <div className="text-3xl font-bold tracking-tight text-cyan-500 sm:text-4xl">
//                   <Counter end={15} suffix="+" />
//                 </div>

//                 <div className="mt-2 text-sm text-slate-500">
//                   Projects Delivered
//                 </div>
//               </div>

//               <div>
//                 <div className="text-3xl font-bold tracking-tight text-cyan-500 sm:text-4xl">
//                   <Counter end={98} suffix="%" />
//                 </div>

//                 <div className="mt-2 text-sm text-slate-500">
//                   Client Satisfaction
//                 </div>
//               </div>

//               <div>
//                 <div className="text-3xl font-bold tracking-tight text-cyan-500 sm:text-4xl">
//                   <Counter end={24} suffix="/7" />
//                 </div>

//                 <div className="mt-2 text-sm text-slate-500">
//                   Support Available
//                 </div>
//               </div>

//             </div>

//           </motion.div>


//           {/* RIGHT SIDE */}
//           <motion.div
//             style={{
//               y: expertiseY,
//               scale: expertiseScale,
//             }}
//             className="relative"
//           >

//             {/* Glow */}
//             <div
//               className="
//                 absolute
//                 inset-10
//                 -z-10
//                 rounded-[40px]
//                 bg-cyan-200/40
//                 blur-3xl
//               "
//             />

//             <ExpertiseAnimation />

//           </motion.div>

//         </div>
//       </div>

//     </section>
//   );
// };


"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import ExpertiseAnimation from "./ExpertiseAnimation";
import Counter from "../services/CounterService";

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // =========================================================
  // PARALLAX
  // =========================================================

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -80]
  );

  const expertiseY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -160]
  );

  const leftGlowY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -180]
  );

  const rightGlowY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -90]
  );

  const expertiseScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.96]
  );

  return (
    <section
      ref={heroRef}
      className="
        relative
        isolate
        overflow-hidden
        pt-24
        sm:pt-28
        md:pt-32
        lg:pt-36
        xl:pt-40
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-sky-50/60 to-white" />

      {/* Left glow */}
      <motion.div
        style={{ y: leftGlowY }}
        className="
          absolute
          -left-32
          -top-24
          -z-10
          h-[280px]
          w-[280px]
          rounded-full
          bg-cyan-200/30
          blur-3xl

          sm:-left-40
          sm:-top-32
          sm:h-[400px]
          sm:w-[400px]

          lg:h-[500px]
          lg:w-[500px]
        "
      />

      {/* Right glow */}
      <motion.div
        style={{ y: rightGlowY }}
        className="
          absolute
          -right-32
          top-24
          -z-10
          h-[280px]
          w-[280px]
          rounded-full
          bg-blue-200/30
          blur-3xl

          sm:-right-40
          sm:h-[400px]
          sm:w-[400px]

          lg:h-[500px]
          lg:w-[500px]
        "
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          lg:mx-auto
          w-full
          max-w-7xl
          px-5
          pb-10

          sm:px-6
          sm:pb-10

          md:px-8
          md:pb-24

          lg:px-10
          lg:pb-28

          xl:px-8
        "
      >
        {/* ===================================================
            MAIN GRID

            Mobile      → 1 column
            Tablet      → 1 column
            Laptop+     → 2 columns
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-12

            sm:gap-10

            md:gap-16

            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-12

            xl:gap-20

          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            style={{ y: contentY }}
            className="
              min-w-0
              text-center

              lg:text-left
            "
          >
            {/* Badge */}

            <div
              className="
                mb-6
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-full
                border
                border-cyan-200
                bg-white/80
                px-3
                py-1.5
                text-xs
                font-medium
                text-slate-700
                shadow-sm
                backdrop-blur

                sm:mb-7
                sm:px-4
                sm:py-2
                sm:text-sm
              "
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-500" />

              <span className="truncate">
                Microsoft Technology Partner
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mx-auto
                max-w-4xl
                text-[42px]
                font-bold
                leading-[1]
                tracking-[-0.055em]
                text-slate-950

                xs:text-[46px]

                sm:text-6xl
                sm:leading-[1.02]

                md:text-[64px]

                lg:mx-0
                lg:text-[64px]

                xl:text-[72px]

                2xl:text-[78px]
              "
            >
              Enterprise Solutions

              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  bg-clip-text
                  text-transparent

                  sm:mt-3
                "
              >
                That Scale
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                text-[15px]
                leading-7
                text-slate-600

                sm:mt-7
                sm:text-lg
                sm:leading-8

                md:text-xl

                lg:mx-0
              "
            >
              Dynamics 365, Azure & AI implementations that drive
              real business growth.
            </p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3

                sm:mt-9
                sm:flex-row
                sm:justify-center
                sm:gap-4

                lg:justify-start
              "
            >
              {/* Primary */}

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-cyan-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl

                  sm:w-auto
                  sm:px-7
                  sm:py-4
                "
              >
                Start Your Project

                <svg
                  className="
                    h-5
                    w-5
                    shrink-0
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </Link>

              {/* Secondary */}

              <Link
                href="/solutions"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-300
                  bg-white/80
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-slate-700
                  shadow-sm
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-slate-400
                  hover:bg-white
                  hover:shadow-md

                  sm:w-auto
                  sm:px-7
                  sm:py-4
                "
              >
                View Case Studies
              </Link>
            </div>

            {/* =================================================
                DIVIDER
            ================================================= */}

            <div
              className="
                my-9
                h-px
                w-full
                max-w-2xl
                bg-slate-200

                sm:my-12
              "
            />

            {/* =================================================
                STATS
            ================================================= */}

            <div
              className="
                mx-auto
                grid
                max-w-2xl
                grid-cols-3
                gap-3

                sm:gap-6

                lg:mx-0
              "
            >
              {/* Stat 1 */}

              <div className="min-w-0">
                <div
                  className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-cyan-500

                    sm:text-3xl

                    md:text-4xl
                  "
                >
                  <Counter end={15} suffix="+" />
                </div>

                <div
                  className="
                    mt-1
                    text-[10px]
                    leading-4
                    text-slate-500

                    sm:mt-2
                    sm:text-sm
                    sm:leading-5
                  "
                >
                  Projects
                  <span className="hidden sm:inline"> Delivered</span>
                </div>
              </div>

              {/* Stat 2 */}

              <div className="min-w-0">
                <div
                  className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-cyan-500

                    sm:text-3xl

                    md:text-4xl
                  "
                >
                  <Counter end={98} suffix="%" />
                </div>

                <div
                  className="
                    mt-1
                    text-[10px]
                    leading-4
                    text-slate-500

                    sm:mt-2
                    sm:text-sm
                    sm:leading-5
                  "
                >
                  Client
                  <span className="hidden sm:inline"> Satisfaction</span>
                </div>
              </div>

              {/* Stat 3 */}

              <div className="min-w-0">
                <div
                  className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-cyan-500

                    sm:text-3xl

                    md:text-4xl
                  "
                >
                  <Counter end={24} suffix="/7" />
                </div>

                <div
                  className="
                    mt-1
                    text-[10px]
                    leading-4
                    text-slate-500

                    sm:mt-2
                    sm:text-sm
                    sm:leading-5
                  "
                >
                  Support
                  <span className="hidden sm:inline"> Available</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <motion.div
            style={{
              y: expertiseY,
              scale: expertiseScale,
            }}
            className="
              relative
              lg:mx-auto
              w-full
              max-w-[620px]
              lg:max-w-none
            "
          >
            {/* Glow */}

            <div
              className="
                absolute
                inset-6
                -z-10
                rounded-[30px]
                bg-cyan-200/30
                blur-3xl

                sm:inset-10
                sm:rounded-[40px]
                sm:bg-cyan-200/40
              "
            />

            {/* Animation */}

            <div
              className="
                w-full
                scale-[0.88]

                xs:scale-[0.92]

                sm:scale-[0.96]

                md:scale-100

                lg:scale-100

                max-h-[300px]
                
                lg:max-h-full
                
              "
            >
              <ExpertiseAnimation />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};