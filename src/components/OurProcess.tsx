"use client";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Fit-Gap",
    description:
      "Workshops to understand current process, pain points, and success metrics.",
    label: "Understand",
  },
  {
    number: "02",
    title: "Solution Blueprint",
    description:
      "Data model, security, integrations, environments, and delivery roadmap.",
    label: "Architect",
  },
  {
    number: "03",
    title: "Build & Configure",
    description:
      "OOB-first configuration, then extensions only where required.",
    label: "Engineer",
  },
  {
    number: "04",
    title: "Testing, UAT & Go-Live",
    description:
      "UAT support, training, cutover planning, and go-live readiness.",
    label: "Launch",
  },
  {
    number: "05",
    title: "Support & Continuous Improvement",
    description:
      "Hypercare + AMC/managed services + enhancement roadmap.",
    label: "Evolve",
  },
];

export default function OurProcess() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.6,
  });

  const backgroundY = useTransform(
    smoothProgress,
    [0, 1],
    [-80, 80]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-white
        py-32
        text-slate-950
        md:py-44
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Soft cyan glow */}

        <motion.div
          style={{ y: backgroundY }}
          className="
            absolute
            -left-40
            top-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-100/60
            blur-[140px]
          "
        />

        {/* Soft blue glow */}

        <motion.div
          style={{ y: backgroundY }}
          className="
            absolute
            -right-40
            top-[40%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-100/50
            blur-[160px]
          "
        />

        {/* Subtle grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.25]
            [background-image:linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)]
            [background-size:100px_100px]
            [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
          "
        />

        {/* Huge background typography */}

        <motion.div
          style={{ y: backgroundY }}
          className="
            absolute
            left-1/2
            top-[5%]
            -translate-x-1/2
            whitespace-nowrap
          "
        >
          <span
            className="
              text-[clamp(8rem,22vw,24rem)]
              font-black
              tracking-[-0.1em]
              text-slate-900/[0.025]
            "
          >
            PROCESS
          </span>
        </motion.div>
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* ==================================================
            HEADER
        =================================================== */}

        <ProcessHeader />

        {/* ==================================================
            DESKTOP PROCESS
        =================================================== */}

        <div className="relative mt-28 hidden md:block">

          {/* Base line */}

          <div
            className="
              absolute
              left-0
              right-0
              top-[42px]
              h-px
              bg-slate-200
            "
          />

          {/* Animated progress */}

          <motion.div
            style={{
              scaleX: smoothProgress,
              transformOrigin: "left",
            }}
            className="
              absolute
              left-0
              right-0
              top-[42px]
              h-[2px]
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-cyan-400
            "
          />

          {/* Steps */}

          <div className="grid grid-cols-5">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={index}
                progress={smoothProgress}
              />
            ))}
          </div>
        </div>

        {/* ==================================================
            MOBILE PROCESS
        =================================================== */}

        <div className="relative mt-20 md:hidden">

          {/* Vertical line */}

          <div
            className="
              absolute
              left-[19px]
              top-0
              h-full
              w-px
              bg-slate-200
            "
          />

          <div className="space-y-14">
            {processSteps.map((step, index) => (
              <MobileProcessStep
                key={step.number}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* ==================================================
            BOTTOM STATEMENT
        =================================================== */}

        <ProcessFooter />

      </div>
    </section>
  );
}

/* ================================================================
   HEADER
================================================================ */

function ProcessHeader() {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.35,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="max-w-4xl"
    >
      {/* Eyebrow */}

      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: -30,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.7,
            },
          },
        }}
        className="mb-7 flex items-center gap-3"
      >
        <span className="h-px w-12 bg-cyan-500" />

        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.3em]
            text-cyan-600
          "
        >
          Our Process
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h2
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="
          text-5xl
          font-semibold
          leading-[0.95]
          tracking-[-0.06em]
          sm:text-6xl
          lg:text-8xl
        "
      >
        From idea
        <br />

        <span className="text-slate-400">
          to impact.
        </span>
      </motion.h2>

      {/* Description */}

      <motion.p
        variants={{
          hidden: {
            opacity: 0,
            y: 25,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
            },
          },
        }}
        className="
          mt-8
          max-w-2xl
          text-base
          leading-8
          text-slate-500
          sm:text-lg
        "
      >
        A structured delivery approach designed to reduce risk,
        accelerate adoption, and create measurable business value
        at every stage.
      </motion.p>
    </motion.div>
  );
}

/* ================================================================
   DESKTOP STEP
================================================================ */

function ProcessStep({
  step,
  index,
  progress,
}: {
  step: (typeof processSteps)[number];
  index: number;
  progress: any;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const start = index / processSteps.length;
  const end = (index + 1) / processSteps.length;

  const opacity = useTransform(
    progress,
    [start, end],
    [0.45, 1]
  );

  const scale = useTransform(
    progress,
    [start, end],
    [0.85, 1]
  );

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        opacity,
        scale,
      }}
      className="relative px-3"
    >
      {/* Number */}

      <div className="relative flex justify-center">

        <motion.div
          whileHover={{
            scale: 1.12,
            rotate: 5,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            relative
            z-10
            flex
            h-[84px]
            w-[84px]
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white
            shadow-[0_10px_40px_rgba(15,23,42,0.08)]
          "
        >
          {/* Inner ring */}

          <motion.div
            whileHover={{
              scale: 0.85,
            }}
            className="
              absolute
              inset-2
              rounded-full
              border
              border-cyan-400/20
            "
          />

          <span
            className="
              text-sm
              font-semibold
              tracking-[0.15em]
              text-cyan-500
            "
          >
            {step.number}
          </span>
        </motion.div>
      </div>

      {/* Content */}

      <div className="mt-10 text-center">

        <span
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.25em]
            text-cyan-600
          "
        >
          {step.label}
        </span>

        <h3
          className="
            mx-auto
            mt-3
            max-w-[210px]
            text-xl
            font-semibold
            leading-tight
            tracking-tight
            text-slate-900
          "
        >
          {step.title}
        </h3>

        <p
          className="
            mx-auto
            mt-4
            max-w-[210px]
            text-sm
            leading-6
            text-slate-500
          "
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ================================================================
   MOBILE STEP
================================================================ */

function MobileProcessStep({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: 40,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
            }
          : {}
      }
      transition={{
        duration: 0.8,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative pl-14"
    >
      {/* Number */}

      <motion.div
        whileInView={{
          scale: [0.8, 1.1, 1],
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          absolute
          left-0
          top-0
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          bg-white
          shadow-[0_8px_25px_rgba(15,23,42,0.08)]
        "
      >
        <span className="text-[10px] font-semibold text-cyan-500">
          {step.number}
        </span>
      </motion.div>

      {/* Content */}

      <div
        className="
          rounded-3xl
          border
          border-slate-200/80
          bg-white/70
          p-6
          shadow-[0_15px_40px_rgba(15,23,42,0.04)]
          backdrop-blur-xl
        "
      >
        <span
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.25em]
            text-cyan-600
          "
        >
          {step.label}
        </span>

        <h3
          className="
            mt-3
            text-2xl
            font-semibold
            tracking-tight
          "
        >
          {step.title}
        </h3>

        <p
          className="
            mt-4
            text-sm
            leading-7
            text-slate-500
          "
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ================================================================
   FOOTER
================================================================ */

function ProcessFooter() {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        mt-24
        flex
        flex-col
        items-start
        justify-between
        gap-6
        border-t
        border-slate-200
        pt-8
        sm:flex-row
        sm:items-center
        md:mt-32
      "
    >
      <div>
        <span
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.25em]
            text-slate-400
          "
        >
          The outcome
        </span>

        <p
          className="
            mt-2
            text-lg
            font-medium
            text-slate-700
          "
        >
          A solution that grows with your business.
        </p>
      </div>

      {/* Animated arrow */}

      <motion.div
        animate={{
          x: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          flex
          items-center
          gap-3
          text-sm
          font-medium
          text-cyan-600
        "
      >
        <span>Built to evolve</span>

        <span className="text-xl">→</span>
      </motion.div>
    </motion.div>
  );
}