// "use client";

// import { motion, useScroll, useSpring, useTransform } from "motion/react";
// import { useRef } from "react";

// const services = [
//   {
//     number: "01",
//     title: "Dynamics 365 CE",
//     subtitle: "CRM",
//     description:
//       "Sales, Customer Service, Field Service, and Customer Insights configured around your business processes.",
//     image: "/dynamics4.jpeg",
//     tags: ["Sales", "Customer Service", "Marketing"],
//   },
//   {
//     number: "02",
//     title: "Dynamics 365 F&O",
//     subtitle: "ERP",
//     description:
//       "Finance and operations process optimization, standardization, integrations, and performance support.",
//     image: "/F0D365.jpg",
//     tags: ["Finance", "Operations", "ERP"],
//   },
//   {
//     number: "03",
//     title: "Azure Cloud",
//     subtitle: "& Integration",
//     description:
//       "Secure cloud architecture, integration layers, APIs, data pipelines, monitoring, and DevOps.",
//     image: "/Azure1.jpg",
//     tags: ["Azure", "APIs", "DevOps"],
//   },
//   {
//     number: "04",
//     title: "AI",
//     subtitle: "Automations",
//     description:
//       "Workflow automation, intelligent document processing, chatbots, AI-assisted knowledge access, and productivity accelerators.",
//     image: "/copilot.jpg",
//     tags: ["AI", "Automation", "Copilot"],
//   },
//   {
//     number: "05",
//     title: "Digital",
//     subtitle: "Marketing",
//     description:
//       "SEO, paid campaigns, lead generation, landing pages, analytics, and CRM alignment for better conversion.",
//     image: "/digital.jpeg",
//     tags: ["SEO", "Campaigns", "Analytics"],
//   },
// ];

// export default function Services() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <section className=" bg-[url('/background6.jpg')] bg-cover bg-center relative text-white">

//       {/* ======================================================
//           INTRO
//       ====================================================== */}

//       <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 lg:px-10">

//         <div className="mb-6 flex items-center gap-3">
//           <span className="h-px w-10 bg-cyan-400" />

//           <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
//             Our Services
//           </span>
//         </div>

//         <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
//           Technology built
//           <br />
//           <span className="text-white/30">
//             around your business.
//           </span>
//         </h2>

//         <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
//           From Dynamics 365 and Azure to AI automation and digital marketing,
//           we build connected technology solutions that create measurable
//           business value.
//         </p>
//       </div>

//       {/* ======================================================
//           STACK SCROLL AREA
//       ====================================================== */}

//       <div
//         ref={containerRef}
//         className="relative"
//         style={{
//           height: `${services.length * 100}vh`,
//         }}
//       >

//         {/* ====================================================
//             FIXED VIEWPORT
//         ==================================================== */}

//         <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">

//           {/* CARD CONTAINER */}

//           <div className="relative h-[480px] w-[100%] max-w-xl">

//             {services.map((service, index) => (
//               <StackCard
//                 key={service.number}
//                 service={service}
//                 index={index}
//                 total={services.length}
//                 progress={scrollYProgress}
//               />
//             ))}

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ==============================================================
//    CARD
// ================================================================ */


// // function StackCard({
// //   service,
// //   index,
// //   total,
// //   progress,
// // }: {
// //   service: (typeof services)[number];
// //   index: number;
// //   total: number;
// //   progress: any;
// // }) {
// //   /*
// //    * Convert section progress:
// //    *
// //    * 0        -> card 1
// //    * 0.25     -> card 2
// //    * 0.50     -> card 3
// //    * 0.75     -> card 4
// //    * 1.00     -> card 5
// //    */
// //   const activeIndex = useTransform(
// //     progress,
// //     [0, 1],
// //     [0, total - 1]
// //   );

// //   /*
// //    * Distance of this card from the currently active card.
// //    *
// //    *  0  = current card
// //    *  1  = next card
// //    * -1  = previous card
// //    */
// //   const distance = useTransform(
// //     activeIndex,
// //     (value) => index - value
// //   );

// //   /*
// //    * Card position.
// //    *
// //    * Current card:
// //    *      0px
// //    *
// //    * Next card:
// //    *      55px behind
// //    *
// //    * Previous card:
// //    *     -70px moving away
// //    */
// //   const y = useTransform(
// //     distance,
// //     [-1, 0, 1, 2, 3, 4],
// //     [-70, 0, 55, 75, 90, 100]
// //   );

// //   /*
// //    * Scale:
// //    *
// //    * Current = 1
// //    * Next    = 0.94
// //    * Previous = 0.94
// //    */
// //   const scale = useTransform(
// //     distance,
// //     [-1, 0, 1, 2, 3, 4],
// //     [0.94, 1, 0.94, 0.92, 0.90, 0.88]
// //   );

// //   /*
// //    * Dynamically change stacking order.
// //    *
// //    * This is the important part.
// //    *
// //    * Example:
// //    *
// //    * Card 1 -> Card 2
// //    * Card 1 starts on top
// //    * Card 2 starts behind
// //    *
// //    * Halfway through:
// //    * Card 2 comes ABOVE Card 1
// //    *
// //    * Then Card 2 becomes the new top card.
// //    */
// //   const zIndex = useTransform(
// //     activeIndex,
// //     (value) => {
// //       const currentIndex = Math.floor(value);
// //       const localProgress = value - currentIndex;

// //       // Current card
// //       if (index === currentIndex) {
// //         return localProgress < 0.5 ? 100 : 90;
// //       }

// //       // Next card
// //       if (index === currentIndex + 1) {
// //         return localProgress < 0.5 ? 90 : 100;
// //       }

// //       // Already completed cards
// //       if (index < currentIndex) {
// //         return 50;
// //       }

// //       // Cards waiting behind
// //       return 10;
// //     }
// //   );

// //   return (
// //     <motion.div
// //       className="absolute inset-0 overflow-hidden rounded-[30px] border border-white/10 bg-[#0b1224] shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
// //       style={{
// //         y,
// //         scale,
// //         zIndex,
// //       }}
// //     >
// //       {/* IMAGE */}

// //       <div className="absolute inset-0">
// //         <img
// //           src={service.image}
// //           alt={service.title}
// //           className="h-full w-full object-cover"
// //         />

// //         <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/85 to-[#020617]/20" />
// //       </div>

// //       {/* CONTENT */}

// //       <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-12">
// //         <div className="flex items-start justify-between">
// //           <span className="text-sm font-medium tracking-[0.3em] text-cyan-400">
// //             {service.number}
// //           </span>

// //           <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
// //             Microsoft Technologies
// //           </div>
// //         </div>

// //         <div className="max-w-2xl">
// //           <div className="mb-4 flex flex-wrap gap-2">
// //             {service.tags.map((tag) => (
// //               <span
// //                 key={tag}
// //                 className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300"
// //               >
// //                 {tag}
// //               </span>
// //             ))}
// //           </div>

// //           <h3 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
// //             {service.title}
// //           </h3>

// //           <p className="mt-2 text-xl font-light text-cyan-300 md:text-2xl">
// //             {service.subtitle}
// //           </p>

// //           <p className="mt-6 max-w-xl text-base leading-7 text-white/60 md:text-lg">
// //             {service.description}
// //           </p>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// function StackCard({
//   service,
//   index,
//   total,
//   progress,
// }: {
//   service: (typeof services)[number];
//   index: number;
//   total: number;
//   progress: any;
// }) {
//   const activeIndex = useTransform(
//     progress,
//     [0, 1],
//     [0, total - 1]
//   );

//   /*
//    * Slower, softer response to scrolling.
//    */
//   const smoothActiveIndex = useSpring(activeIndex, {
//     stiffness: 50,
//     damping: 20,
//     mass: 1,
//   });

//   /*
//    * Distance from the currently active card.
//    */
//   const distance = useTransform(
//     smoothActiveIndex,
//     (value) => index - value
//   );

//   /*
//    * The next card stays behind for longer,
//    * then slowly moves into position.
//    */
//   const y = useTransform(
//     distance,
//     [-1.2, -1, -0.7, -0.3, 0, 0.35, 0.7, 1, 1.5, 2],
//     [
//       -90,
//       -75,
//       -55,
//       -25,
//       0,
//       10,
//       25,
//       55,
//       68,
//       80,
//     ]
//   );


//   /*
//    * Keep the next card slightly smaller while
//    * it is behind the current card.
//    */
//   const scale = useTransform(
//     distance,
//     [-1, -0.7, -0.3, 0, 0.35, 0.7, 1, 1.5, 2],
//     [
//       0.92,
//       0.94,
//       0.97,
//       1,
//       0.99,
//       0.97,
//       0.94,
//       0.92,
//       0.90,
//     ]
//   );

//   /*
//    * Very subtle rotation makes the stack feel
//    * more physical without being noticeable.
//    */
//   const rotateX = useTransform(
//     distance,
//     [-1, 0, 1],
//     [-1, 0, 1]
//   );

//   /*
//    * Dynamic z-index.
//    *
//    * The next card takes over gradually halfway
//    * through the transition.
//    */
//   const zIndex = useTransform(
//     smoothActiveIndex,
//     (value) => {
//       const currentIndex = Math.floor(value);
//       const localProgress = value - currentIndex;

//       if (index === currentIndex) {
//         return localProgress < 0.5 ? 100 : 90;
//       }

//       if (index === currentIndex + 1) {
//         return localProgress < 0.5 ? 90 : 100;
//       }

//       if (index < currentIndex) {
//         return 50;
//       }

//       return 10;
//     }
//   );

//   return (
//     <motion.div
//       className="absolute inset-0 overflow-hidden rounded-[30px] border border-white/10 bg-[#0b1224] shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
//       style={{
//         y,
//         scale,
//         rotateX,
//         zIndex,
//         transformPerspective: 1200,
//       }}
//     >
//       {/* IMAGE */}

//       <div className="absolute inset-0">
//         <img
//           src={service.image}
//           alt={service.title}
//           className="h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/85 to-[#020617]/20" />
//       </div>

//       {/* CONTENT */}

//       <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-12">
//         <div className="flex items-start justify-between">
//           <span className="text-sm font-medium tracking-[0.3em] text-cyan-400">
//             {service.number}
//           </span>

//           <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
//             Microsoft Technologies
//           </div>
//         </div>

//         <div className="max-w-2xl">
//           <div className="mb-4 flex flex-wrap gap-2">
//             {service.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           <h3 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
//             {service.title}
//           </h3>

//           <p className="mt-2 text-xl font-light text-cyan-300 md:text-2xl">
//             {service.subtitle}
//           </p>

//           <p className="mt-6 max-w-xl text-base leading-7 text-white/60 md:text-lg">
//             {service.description}
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Dynamics 365 CE",
    subtitle: "CRM",
    description:
      "Sales, Customer Service, Field Service, and Customer Insights configured around your business processes.",
    image: "/dynamics4.jpeg",
    tags: ["Sales", "Customer Service", "Marketing"],
  },
  {
    number: "02",
    title: "Dynamics 365 F&O",
    subtitle: "ERP",
    description:
      "Finance and operations process optimization, standardization, integrations, and performance support.",
    image: "/F0D365.jpg",
    tags: ["Finance", "Operations", "ERP"],
  },
  {
    number: "03",
    title: "Azure Cloud",
    subtitle: "& Integration",
    description:
      "Secure cloud architecture, integration layers, APIs, data pipelines, monitoring, and DevOps.",
    image: "/Azure1.jpg",
    tags: ["Azure", "APIs", "DevOps"],
  },
  {
    number: "04",
    title: "AI",
    subtitle: "Automations",
    description:
      "Workflow automation, intelligent document processing, chatbots, AI-assisted knowledge access, and productivity accelerators.",
    image: "/copilot.jpg",
    tags: ["AI", "Automation", "Copilot"],
  },
  {
    number: "05",
    title: "Digital",
    subtitle: "Marketing",
    description:
      "SEO, paid campaigns, lead generation, landing pages, analytics, and CRM alignment for better conversion.",
    image: "/digital.jpeg",
    tags: ["SEO", "Campaigns", "Analytics"],
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative bg-[url('/background6.jpg')] bg-cover bg-center text-white">
      {/* ======================================================
          INTRO
      ====================================================== */}

      <div className="relative z-10 -mb-52 lg:mb-0 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 py-20 sm:px-6 sm:py-24 lg:px-10">
        <div className="mb-5 flex items-center gap-3 sm:mb-6">
          <span className="h-px w-8 bg-cyan-400 sm:w-10" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300 sm:text-xs sm:tracking-[0.3em]">
            Our Services
          </span>
        </div>

        <h2 className="max-w-5xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-8xl">
          Technology built
          <br />
          <span className="text-white/30">around your business.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-sm leading-6 text-white/45 sm:mt-8 sm:text-base sm:leading-7 md:text-lg">
          From Dynamics 365 and Azure to AI automation and digital marketing,
          we build connected technology solutions that create measurable
          business value.
        </p>
      </div>

      {/* ======================================================
          STACK SCROLL AREA
      ====================================================== */}

      <div
        ref={containerRef}
        className="relative"
        style={{
          height: `${services.length * 100}vh`,
        }}
      >
        {/* ====================================================
            FIXED VIEWPORT
        ==================================================== */}

        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-3 sm:px-5 md:px-6">
          {/* CARD CONTAINER */}

          <div
            className="
              relative

              h-[320px]
              w-[92%]
              max-w-[360px]

              sm:h-[380px]
              sm:w-[88%]
              sm:max-w-[480px]

              md:h-[420px]
              md:w-[90%]
              md:max-w-[560px]

              lg:h-[480px]
              lg:w-full
              lg:max-w-xl
            "
          >
            {services.map((service, index) => (
              <StackCard
                key={service.number}
                service={service}
                index={index}
                total={services.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==============================================================
   CARD
============================================================== */

function StackCard({
  service,
  index,
  total,
  progress,
}: {
  service: (typeof services)[number];
  index: number;
  total: number;
  progress: any;
}) {
  /*
   * Convert section scroll progress into
   * active card index.
   *
   * 0        -> card 1
   * 0.25     -> card 2
   * 0.50     -> card 3
   * 0.75     -> card 4
   * 1.00     -> card 5
   */
  const activeIndex = useTransform(
    progress,
    [0, 1],
    [0, total - 1]
  );

  /*
   * Slower, softer response to scrolling.
   */
  const smoothActiveIndex = useSpring(activeIndex, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  /*
   * Distance from the currently active card.
   */
  const distance = useTransform(
    smoothActiveIndex,
    (value) => index - value
  );

  /*
   * Card vertical movement.
   *
   * The next card stays behind for longer
   * and gradually moves into position.
   */
  const y = useTransform(
    distance,
    [-1.2, -1, -0.7, -0.3, 0, 0.35, 0.7, 1, 1.5, 2],
    [
      -90,
      -75,
      -55,
      -25,
      0,
      10,
      25,
      55,
      68,
      80,
    ]
  );

  /*
   * Card scale.
   */
  const scale = useTransform(
    distance,
    [-1, -0.7, -0.3, 0, 0.35, 0.7, 1, 1.5, 2],
    [
      0.92,
      0.94,
      0.97,
      1,
      0.99,
      0.97,
      0.94,
      0.92,
      0.90,
    ]
  );

  /*
   * Very subtle rotation.
   */
  const rotateX = useTransform(
    distance,
    [-1, 0, 1],
    [-1, 0, 1]
  );

  /*
   * Dynamic z-index.
   */
  const zIndex = useTransform(
    smoothActiveIndex,
    (value) => {
      const currentIndex = Math.floor(value);
      const localProgress = value - currentIndex;

      if (index === currentIndex) {
        return localProgress < 0.5 ? 100 : 90;
      }

      if (index === currentIndex + 1) {
        return localProgress < 0.5 ? 90 : 100;
      }

      if (index < currentIndex) {
        return 50;
      }

      return 10;
    }
  );

  return (
    <motion.div
      className="
        absolute
        inset-0
        overflow-hidden

        rounded-[20px]
        sm:rounded-[24px]
        md:rounded-[26px]
        lg:rounded-[30px]

        border
        border-white/10
        bg-[#0b1224]

        shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        sm:shadow-[0_25px_80px_rgba(0,0,0,0.48)]
        lg:shadow-[0_30px_100px_rgba(0,0,0,0.5)]
        
      "
      style={{
        y,
        scale,
        rotateX,
        zIndex,
        transformPerspective: 1200,
      }}

      
    >
      {/* ====================================================
          IMAGE
      ==================================================== */}

      <div className="absolute inset-0">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/85 to-[#020617]/20" />
      </div>

      {/* ====================================================
          CONTENT
      ==================================================== */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
          justify-between

          p-5
          sm:p-6
          md:p-8
          lg:p-12
        "
      >
        {/* TOP */}

        <div className="flex items-start justify-between gap-3">
          <span
            className="
              text-xs
              font-medium
              tracking-[0.25em]
              text-cyan-400

              sm:text-sm
              sm:tracking-[0.3em]
            "
          >
            {service.number}
          </span>

          <div
            className="
              rounded-full
              border
              border-white/10
              bg-white/5

              px-2.5
              py-1.5
              text-[9px]

              sm:px-3
              sm:py-1.5
              sm:text-[10px]

              md:px-4
              md:py-2
              md:text-xs

              text-white/60
            "
          >
            Microsoft Technologies
          </div>
        </div>

        {/* BOTTOM CONTENT */}

        <div className="max-w-2xl">
          {/* TAGS */}

          <div className="mb-2 flex flex-wrap gap-1.5 sm:mb-3 sm:gap-2 md:mb-4">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/5

                  px-2
                  py-0.5
                  text-[9px]

                  sm:px-2.5
                  sm:py-1
                  sm:text-[10px]

                  md:px-3
                  md:text-xs

                  text-cyan-300
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* TITLE */}

          <h3
            className="
              text-2xl
              font-semibold
              leading-tight
              tracking-tight
              text-white

              sm:text-3xl
              md:text-5xl
              lg:text-6xl
            "
          >
            {service.title}
          </h3>

          {/* SUBTITLE */}

          <p
            className="
              mt-1
              text-base
              font-light
              text-cyan-300

              sm:text-lg
              md:mt-2
              md:text-xl
              lg:text-2xl
            "
          >
            {service.subtitle}
          </p>

          {/* DESCRIPTION */}

          <p
            className="
              mt-3
              max-w-xl
              text-xs
              leading-5
              text-white/60

              sm:mt-4
              sm:text-sm
              sm:leading-6

              md:mt-5
              md:text-base
              md:leading-7

              lg:text-lg
            "
          >
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
