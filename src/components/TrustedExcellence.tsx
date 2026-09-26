"use client";

import { motion } from "motion/react";

const certifications = [
  {
    title: "Microsoft Partner",
    description:
      "Proven expertise delivering Microsoft business solutions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 4.5L11 3v8H2v-6.5ZM13 2.7l9-1.2V11h-9V2.7ZM2 13h9v8l-9-1.5V13ZM13 13h9v9.5L13 21V13Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Azure Certified",
    description:
      "Cloud expertise across modern Azure infrastructure and services.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 2L5 15.5h6L8.5 22 19 8.5h-6L13.5 2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "D365 Specialist",
    description:
      "Specialized Dynamics 365 implementation and customization expertise.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M7 8h10M7 12h6M7 16h8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "AI Expert",
    description:
      "Building intelligent solutions with AI and Microsoft technologies.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9L7 7M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function TrustedExcellence() {
  // Duplicate the cards so the marquee can loop seamlessly.
  const marqueeItems = [...certifications, ...certifications];

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-28">

      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[400px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-cyan-100/40
          blur-[120px]
        "
      />

      {/* ================= HEADING ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">

        <span
          className="
            font-[var(--font-manrope)]
            text-xs
            font-semibold
            uppercase
            tracking-[0.3em]
            text-cyan-500
          "
        >
          Trusted Excellence
        </span>

        <h2
          className="
            mt-5
            font-[var(--font-manrope)]
            text-4xl
            font-semibold
            tracking-[-0.04em]
            text-neutral-900
            sm:text-5xl
            md:text-6xl
          "
        >
          Certified expertise.
          <br />
          <span className="text-neutral-400">
            Proven technology.
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            font-[var(--font-manrope)]
            text-base
            leading-7
            text-neutral-500
            md:text-lg
          "
        >
          Certified Microsoft Partner with proven expertise across
          Dynamics 365, Azure and intelligent business solutions.
        </p>
      </div>

      {/* ================= MARQUEE ================= */}

      <div className="relative mt-20">

        {/* Left fade */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-24
            bg-gradient-to-r
            from-[#f8fafc]
            to-transparent
            md:w-40
          "
        />

        {/* Right fade */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-24
            bg-gradient-to-l
            from-[#f8fafc]
            to-transparent
            md:w-40
          "
        />

        {/* Moving track */}

        <motion.div
          className="flex w-max gap-6 hover:[animation-play-state:paused]"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="
                group
                relative
                w-[300px]
                shrink-0
                overflow-hidden
                rounded-[1.75rem]
                border
                border-white/80
                bg-white/60
                p-7
                backdrop-blur-xl
                backdrop-saturate-150

                shadow-[0_15px_50px_rgba(15,23,42,0.06)]

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-cyan-200
                hover:bg-white/80
                hover:shadow-[0_25px_70px_rgba(15,23,42,0.1)]
              "
            >

              {/* Card glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12
                  h-32
                  w-32
                  rounded-full
                  bg-cyan-100/50
                  blur-3xl
                  transition-transform
                  duration-700
                  group-hover:scale-150
                "
              />

              <div className="relative z-10">

                {/* Icon */}

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-neutral-200/80
                    bg-white/80
                    text-cyan-600
                    shadow-sm
                    backdrop-blur-md

                    transition-all
                    duration-500

                    group-hover:rotate-6
                    group-hover:scale-110
                    group-hover:border-cyan-200
                    group-hover:bg-cyan-50
                  "
                >
                  {item.icon}
                </div>

                {/* Content */}

                <h3
                  className="
                    mt-7
                    font-[var(--font-manrope)]
                    text-xl
                    font-semibold
                    tracking-[-0.025em]
                    text-neutral-900
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    font-[var(--font-manrope)]
                    text-sm
                    leading-6
                    text-neutral-500
                  "
                >
                  {item.description}
                </p>

                {/* Bottom line */}

                <div className="mt-7 h-px w-full bg-neutral-200">

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

              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ================= BOTTOM STATEMENT ================= */}

      <div className="relative z-10 mt-16 text-center">

        <div className="inline-flex items-center gap-3 rounded-full border border-neutral-200/80 bg-white/60 px-5 py-3 backdrop-blur-md">

          <span className="h-2 w-2 rounded-full bg-cyan-500" />

          <span
            className="
              font-[var(--font-manrope)]
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-neutral-500
            "
          >
            Microsoft ecosystem expertise
          </span>

        </div>

      </div>
    </section>
  );
}