// "use client";

// import { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
// } from "motion/react";

// export default function ExpertiseStatement() {
//   const sectionRef = useRef<HTMLElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   // Main quote moves slower than the page
//   const quoteY = useTransform(scrollYProgress, [0, 1], [100, -100]);

//   // Supporting content has a slightly different parallax speed
//   const contentY = useTransform(scrollYProgress, [0, 1], [60, -40]);

//   // Decorative line moves in the opposite direction
//   const lineY = useTransform(scrollYProgress, [0, 1], [-30, 80]);

//   // Smooth the movement
//   const smoothQuoteY = useSpring(quoteY, {
//     stiffness: 80,
//     damping: 20,
//   });

//   const smoothContentY = useSpring(contentY, {
//     stiffness: 90,
//     damping: 22,
//   });

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden bg-[#f8fafc] py-36 md:py-48"
//     >
//       {/* Background glow */}
//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/40 blur-[140px]" />

//       {/* Decorative vertical line */}
//       <motion.div
//         style={{ y: lineY }}
//         className="pointer-events-none absolute left-[8%] top-0 hidden h-[420px] w-px bg-gradient-to-b from-transparent via-cyan-300/50 to-transparent lg:block"
//       />

//       <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
//         {/* Small label */}
//         <motion.div
//           style={{ y: smoothContentY }}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8 }}
//           className="mb-12 flex items-center gap-4"
//         >
//           <span className="h-px w-10 bg-cyan-500" />

//           <span className="font-[var(--font-manrope)] text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
//             Our Approach
//           </span>
//         </motion.div>

//         {/* Main quote */}
//         <motion.div style={{ y: smoothQuoteY }}>
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-120px" }}
//             transition={{
//               duration: 1,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               max-w-5xl
//               font-[var(--font-manrope)]
//               text-4xl
//               font-semibold
//               leading-[1.08]
//               tracking-[-0.045em]
//               text-neutral-900
//               sm:text-5xl
//               md:text-6xl
//               lg:text-[76px]
//             "
//           >
//             Technology creates the opportunity.
//             <br />

//             <span className="text-neutral-400">
//               Expertise turns it into
//             </span>{" "}
//             <span className="text-cyan-600">
//               business value.
//             </span>
//           </motion.h2>
//         </motion.div>

//         {/* Supporting content */}
//         <motion.div
//           style={{ y: smoothContentY }}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{
//             duration: 0.9,
//             delay: 0.15,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mt-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
//         >
//           <p className="max-w-xl font-[var(--font-manrope)] text-base leading-8 text-neutral-500 md:text-lg">
//             We combine deep domain expertise with modern Microsoft
//             technologies to build solutions that solve real business
//             problems—not just technical ones.
//           </p>

//           <div className="shrink-0">
//             <span className="font-[var(--font-manrope)] text-sm font-medium text-neutral-400">
//               Microsoft technology
//             </span>

//             <div className="mt-3 h-px w-32 bg-neutral-200">
//               <div className="h-px w-20 bg-cyan-500" />
//             </div>
//           </div>
//         </motion.div>

//         {/* Bottom transition */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 1.2,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mt-24 origin-left border-t border-neutral-200"
//         />
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";

function Character({ char }: { char: string }) {
  return (
    <motion.span
      variants={{
        hidden: {
          opacity: 0,
          y: 18,
          filter: "blur(6px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className="inline-block"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

function AnimatedText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <Character key={`${char}-${index}`} char={char} />
      ))}
    </span>
  );
}

export default function ExpertiseStatement() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // const quoteY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  // const contentY = useTransform(scrollYProgress, [0, 1], [60, -40]);
  // const lineY = useTransform(scrollYProgress, [0, 1], [-30, 80]);

  const quoteY = useTransform(
  scrollYProgress,
  [0, 1],
  [40, -40]
);

const contentY = useTransform(
  scrollYProgress,
  [0, 1],
  [20, -20]
);

const lineY = useTransform(
  scrollYProgress,
  [0, 1],
  [-15, 30]
);

  const smoothQuoteY = useSpring(quoteY, {
    stiffness: 80,
    damping: 20,
  });

  const smoothContentY = useSpring(contentY, {
    stiffness: 90,
    damping: 22,
  });

  const smoothLineY = useSpring(lineY, {
    stiffness: 70,
    damping: 20,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f8fafc] lg:py-36 md:py-48"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/40 blur-[140px]" />

      <motion.div
        style={{ y: smoothLineY }}
        className="pointer-events-none absolute left-[8%] top-0 hidden h-[420px] w-px bg-gradient-to-b from-transparent via-cyan-300/50 to-transparent lg:block"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-cyan-500" />

          <span className="font-[var(--font-manrope)] text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Our Approach
          </span>
        </motion.div>

        <motion.div style={{ y: smoothQuoteY }}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            variants={containerVariants}
            className="max-w-5xl font-[var(--font-manrope)] text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-neutral-900 sm:text-5xl md:text-6xl lg:text-[76px]"
          >
            <span className="block text-neutral-900">
              <AnimatedText text="Technology creates the opportunity." />
            </span>

            <span className="block text-neutral-400">
              <AnimatedText text="Expertise turns it into " />

              <span className="text-cyan-600">
                <AnimatedText text="business value." />
              </span>
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          style={{ y: smoothContentY }}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-xl font-[var(--font-manrope)] text-base leading-8 text-neutral-500 md:text-lg">
            We combine deep domain expertise with modern Microsoft
            technologies to build solutions that solve real business
            problems—not just technical ones.
          </p>

          <div className="shrink-0">
            <span className="font-[var(--font-manrope)] text-sm font-medium text-neutral-400">
              Microsoft technology
            </span>

            <div className="mt-3 h-px w-32 bg-neutral-200">
              <div className="h-px w-20 bg-cyan-500" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-24 origin-left border-t border-neutral-200"
        />
      </div>
    </section>
  );
}
