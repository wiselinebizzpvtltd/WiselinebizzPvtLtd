"use client";

import { motion, useInView, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";

const reasons = [
  {
    number: "01",
    title: "End-to-End Delivery",
    description:
      "From discovery and solution design to development, deployment, and ongoing support — we take ownership across the entire journey.",
    flow: ["Discovery", "Design", "Build", "Deploy", "Support"],
  },
  {
    number: "02",
    title: "Strong Governance",
    description:
      "Secure, structured implementations with role-based security, environment strategy, release control, and scalable architecture.",
    flow: ["Security", "Environments", "ALM", "Release Control"],
  },
  {
    number: "03",
    title: "Automation First",
    description:
      "We identify repetitive processes and turn them into intelligent automated workflows that reduce manual effort and accelerate operations.",
    flow: ["Identify", "Automate", "Optimize", "Scale"],
  },
  {
    number: "04",
    title: "Reliable Go-Live",
    description:
      "Our engagement doesn't end at deployment. We provide training, hypercare, troubleshooting, and continuous improvements.",
    flow: ["Training", "Go-Live", "Hypercare", "Enhance"],
  },
  {
    number: "05",
    title: "Flexible Engagement",
    description:
      "Choose the engagement model that fits your business — implementation projects, managed services, AMC, or sprint-based delivery.",
    flow: ["Projects", "AMC", "Managed", "Sprints"],
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  const backgroundY = useTransform(
    smoothProgress,
    [0, 1],
    [-80, 80]
  );

  const headingY = useTransform(
    smoothProgress,
    [0, 1],
    [60, -60]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        isolate
        overflow-hidden
        bg-[#f8fafc]
        py-32
        text-slate-900
        md:py-44
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">

        {/* Large glow */}

        <motion.div
          style={{ y: backgroundY }}
          className="
            absolute
            left-[-10%]
            top-[10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-200/30
            blur-[130px]
          "
        />

        <motion.div
          style={{ y: backgroundY }}
          className="
            absolute
            right-[-10%]
            top-[45%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-blue-200/25
            blur-[140px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.35]
            [background-image:linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)]
            [background-size:80px_80px]
            [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]
          "
        />

        {/* Giant background typography */}

        <motion.div
          style={{ y: headingY }}
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
              text-[clamp(7rem,20vw,22rem)]
              font-black
              tracking-[-0.1em]
              text-slate-900/[0.025]
            "
          >
            WHY US
          </span>
        </motion.div>

        <motion.div
          style={{ y: backgroundY }}
          className="
            absolute
            bottom-[3%]
            left-[-5%]
            whitespace-nowrap
          "
        >
          <span
            className="
              text-[clamp(6rem,18vw,20rem)]
              font-black
              tracking-[-0.1em]
              text-cyan-900/[0.025]
            "
          >
            EXCELLENCE
          </span>
        </motion.div>
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* ==================================================
            HEADER
        =================================================== */}

        <Header />

        {/* ==================================================
            FEATURE AREA
        =================================================== */}

        <div className="relative mt-24 md:mt-32">

          {/* Connecting vertical line */}

          <div
            className="
              absolute
              left-[27px]
              top-0
              hidden
              h-full
              w-px
              bg-gradient-to-b
              from-cyan-400/0
              via-cyan-400/40
              to-cyan-400/0
              md:block
            "
          />

          <div className="space-y-6 md:space-y-8">

            {reasons.map((reason, index) => (
              <ReasonCard
                key={reason.number}
                reason={reason}
                index={index}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
              />
            ))}

          </div>
        </div>

        {/* ==================================================
            BOTTOM STATEMENT
        =================================================== */}

        <BottomStatement />

      </div>
    </section>
  );
}

/* ================================================================
   HEADER
================================================================ */

function Header() {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
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
              ease: "easeOut",
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
          Why Choose Us
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
          text-slate-950
          sm:text-6xl
          lg:text-8xl
        "
      >
        Technology is easy.
        <br />

        <span className="text-slate-400">
          Creating value isn't.
        </span>
      </motion.h2>

      {/* Description */}

      <motion.p
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
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
        We combine Microsoft expertise, engineering discipline, and
        business understanding to build solutions that deliver
        measurable impact — not just technology.
      </motion.p>
    </motion.div>
  );
}

/* ================================================================
   REASON CARD
================================================================ */

function ReasonCard({
  reason,
  index,
  activeCard,
  setActiveCard,
}: {
  reason: (typeof reasons)[number];
  index: number;
  activeCard: number | null;
  setActiveCard: (value: number | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.25,
  });

  const isActive = activeCard === index;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.96,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setActiveCard(index)}
      onMouseLeave={() => setActiveCard(null)}
      className="
        group
        relative
        md:pl-20
      "
    >
      {/* Timeline node */}

      <motion.div
        animate={{
          scale: isActive ? 1.25 : 1,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          absolute
          left-[17px]
          top-8
          hidden
          h-5
          w-5
          rounded-full
          border
          border-cyan-400/40
          bg-white
          md:block
        "
      >
        <motion.div
          animate={{
            scale: isActive ? 1 : 0.45,
            opacity: isActive ? 1 : 0.5,
          }}
          className="
            absolute
            inset-[4px]
            rounded-full
            bg-cyan-400
          "
        />
      </motion.div>

      {/* Card */}

      <motion.div
        animate={{
          y: isActive ? -6 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="
          relative
          overflow-hidden
          rounded-[2rem]
          border
          border-slate-200/80
          bg-white/70
          p-7
          shadow-[0_20px_60px_rgba(15,23,42,0.05)]
          backdrop-blur-xl
          transition-shadow
          duration-500
          group-hover:shadow-[0_30px_80px_rgba(15,23,42,0.1)]
          md:p-9
          lg:p-10
        "
      >
        {/* Hover gradient */}

        <motion.div
          animate={{
            opacity: isActive ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-cyan-50/80
            via-transparent
            to-blue-50/50
          "
        />

        {/* Glow */}

        <motion.div
          animate={{
            scale: isActive ? 1.3 : 1,
            opacity: isActive ? 0.5 : 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-56
            w-56
            rounded-full
            bg-cyan-300/30
            blur-[80px]
          "
        />

        <div className="relative z-10">

          {/* Top */}

          <div className="flex items-start justify-between gap-6">

            <div className="flex items-center gap-5">

              {/* Number */}

              <motion.div
                animate={{
                  rotate: isActive ? 8 : 0,
                  scale: isActive ? 1.05 : 1,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  text-sm
                  font-semibold
                  tracking-[0.15em]
                  text-slate-400
                "
              >
                {reason.number}
              </motion.div>

              <div>
                <h3
                  className="
                    text-xl
                    font-semibold
                    tracking-tight
                    text-slate-950
                    sm:text-2xl
                    lg:text-3xl
                  "
                >
                  {reason.title}
                </h3>
              </div>
            </div>

            {/* Arrow */}

            <motion.div
              animate={{
                x: isActive ? 5 : 0,
                y: isActive ? -5 : 0,
                rotate: isActive ? 45 : 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-slate-400
              "
            >
              ↗
            </motion.div>
          </div>

          {/* Description */}

          <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

            <p
              className="
                max-w-2xl
                text-sm
                leading-7
                text-slate-500
                sm:text-base
              "
            >
              {reason.description}
            </p>

            {/* Process */}

            <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
              {reason.flow.map((item, flowIndex) => (
                <motion.span
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 10,
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
                    delay:
                      index * 0.08 +
                      flowIndex * 0.08 +
                      0.3,
                    duration: 0.4,
                  }}
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-white/70
                    px-3
                    py-1.5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.15em]
                    text-slate-400
                  "
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Bottom line */}

          <div className="relative mt-8 h-px overflow-hidden bg-slate-100">

            <motion.div
              animate={{
                x: isActive ? "0%" : "-100%",
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="
                absolute
                inset-y-0
                left-0
                w-full
                bg-gradient-to-r
                from-cyan-400
                via-blue-400
                to-transparent
              "
            />

          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}

/* ================================================================
   BOTTOM STATEMENT
================================================================ */

function BottomStatement() {
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
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        mt-24
        overflow-hidden
        rounded-[2rem]
        border
        border-slate-200
        bg-slate-950
        p-8
        text-white
        md:mt-32
        md:p-12
        lg:p-16
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -right-20
          -top-20
          h-72
          w-72
          rounded-full
          bg-cyan-400/10
          blur-[100px]
        "
      />

      <div
        className="
          absolute
          -bottom-20
          -left-20
          h-72
          w-72
          rounded-full
          bg-blue-500/10
          blur-[100px]
        "
      />

      <div className="relative z-10 max-w-4xl">

        <span
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.3em]
            text-cyan-400
          "
        >
          Our Philosophy
        </span>

        <h3
          className="
            mt-5
            text-3xl
            font-semibold
            leading-tight
            tracking-[-0.04em]
            sm:text-4xl
            md:text-5xl
          "
        >
          Don't just implement technology.
          <br />

          <span className="text-white/35">
            Make it matter.
          </span>
        </h3>

        <div className="mt-8 flex items-center gap-4">

          <div className="h-px w-16 bg-cyan-400" />

          <span className="text-xs uppercase tracking-[0.2em] text-white/35">
            WiselineBizz
          </span>

        </div>

      </div>
    </motion.div>
  );
}