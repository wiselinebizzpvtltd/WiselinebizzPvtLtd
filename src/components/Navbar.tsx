// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const menuItems = [
//   { name: "Home", href: "/" },
//   { name: "Services", href: "/services" },
//   { name: "Solutions", href: "/solutions" },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
//       <nav
//         className="
//           mx-auto
//           max-w-7xl
//           rounded-2xl
//           border
//           border-gray-200/70
//           bg-white/70
//           shadow-lg
//           shadow-gray-200/30
//           backdrop-blur-xl
//         "
//       >
//         <div className="flex h-18 items-center justify-between px-5 md:px-6">

//           {/* ================= LOGO ================= */}
//           <Link
//             href="/"
//             className="group flex items-center gap-3"
//           >
//             {/* Logo Icon
//             <div
//               className="
//                 flex
//                 h-9
//                 w-9
//                 items-center
//                 justify-center
//                 rounded-xl
//                 bg-gray-950
//                 text-sm
//                 font-bold
//                 text-white
//                 transition-all
//                 duration-300
//                 group-hover:rotate-6
//                 group-hover:scale-105
//               "
//             >
              
//             </div> */}

//             <div>
//               <img src="/wiselinebizz-logo.png" alt="" height="70" width="90"/>
//             </div>
            

//             {/* Company Name */}
//             {/* <span
//               className="
//                 text-base
//                 font-semibold
//                 tracking-tight
//                 text-gray-950
//               "
//             >
//               WiselineBizz
//             </span> */}
//           </Link>

//           {/* ================= DESKTOP MENU ================= */}
//           <div className="hidden items-center gap-1 md:flex">

//             {menuItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="
//                   group
//                   relative
//                   rounded-xl
//                   px-4
//                   py-2.5
//                   text-sm
//                   font-medium
//                   text-gray-600
//                   transition-colors
//                   duration-200
//                   hover:text-gray-950
//                 "
//               >
//                 {/* Text animation container */}
//                 <span className="relative block h-[20px] overflow-hidden">

//                   {/* Original text */}
//                   <span
//                     className="
//                       block
//                       transition-transform
//                       duration-300
//                       ease-[cubic-bezier(0.76,0,0.24,1)]
//                       group-hover:-translate-y-full
//                     "
//                   >
//                     {item.name}
//                   </span>

//                   {/* Text entering from bottom */}
//                   <span
//                     className="
//                       absolute
//                       left-0
//                       top-full
//                       block
//                       text-gray-950
//                       transition-transform
//                       duration-300
//                       ease-[cubic-bezier(0.76,0,0.24,1)]
//                       group-hover:-translate-y-full
//                     "
//                   >
//                     {item.name}
//                   </span>
//                 </span>

//                 {/* Animated underline */}
//                 <span
//                   className="
//                     absolute
//                     bottom-1
//                     left-1/2
//                     h-[2px]
//                     w-0
//                     -translate-x-1/2
//                     rounded-full
//                     bg-gray-900
//                     transition-all
//                     duration-300
//                     group-hover:w-5
//                   "
//                 />
//               </Link>
//             ))}

//             {/* ================= CTA ================= */}
//             <Link
//               href="/contact"
//               className="
//                 group
//                 relative
//                 ml-3
//                 overflow-hidden
//                 rounded-xl
//                 bg-gray-950
//                 px-5
//                 py-2.5
//                 text-sm
//                 font-medium
//                 text-white
//               "
//             >
//               <span className="relative block h-[20px] overflow-hidden">

//                 {/* Original text */}
//                 <span
//                   className="
//                     block
//                     transition-transform
//                     duration-300
//                     ease-[cubic-bezier(0.76,0,0.24,1)]
//                     group-hover:-translate-y-full
//                   "
//                 >
//                   Get Started
//                 </span>

//                 {/* Hover text */}
//                 <span
//                   className="
//                     absolute
//                     left-0
//                     top-full
//                     block
//                     text-white
//                     transition-transform
//                     duration-300
//                     ease-[cubic-bezier(0.76,0,0.24,1)]
//                     group-hover:-translate-y-full
//                   "
//                 >
//                   Get Started
//                 </span>
//               </span>
//             </Link>
//           </div>

//           {/* ================= MOBILE BUTTON ================= */}
//           <button
//             type="button"
//             aria-label="Toggle menu"
//             aria-expanded={isOpen}
//             onClick={() => setIsOpen(!isOpen)}
//             className="
//               flex
//               h-10
//               w-10
//               items-center
//               justify-center
//               rounded-xl
//               border
//               border-gray-200
//               bg-white/70
//               text-gray-900
//               md:hidden
//             "
//           >
//             <div className="flex w-5 flex-col gap-1.5">
//               <span
//                 className={`
//                   h-0.5
//                   w-full
//                   rounded-full
//                   bg-gray-900
//                   transition-all
//                   duration-300
//                   ${isOpen ? "translate-y-2 rotate-45" : ""}
//                 `}
//               />

//               <span
//                 className={`
//                   h-0.5
//                   w-full
//                   rounded-full
//                   bg-gray-900
//                   transition-all
//                   duration-300
//                   ${isOpen ? "opacity-0" : ""}
//                 `}
//               />

//               <span
//                 className={`
//                   h-0.5
//                   w-full
//                   rounded-full
//                   bg-gray-900
//                   transition-all
//                   duration-300
//                   ${isOpen ? "-translate-y-2 -rotate-45" : ""}
//                 `}
//               />
//             </div>
//           </button>
//         </div>

//         {/* ================= MOBILE MENU ================= */}
//         <div
//           className={`
//             overflow-hidden
//             transition-all
//             duration-300
//             ease-in-out
//             md:hidden
//             ${
//               isOpen
//                 ? "max-h-[400px] border-t border-gray-200/70 opacity-100"
//                 : "max-h-0 opacity-0"
//             }
//           `}
//         >
//           <div className="px-4 pb-4 pt-3">

//             {menuItems.map((item, index) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className="
//                   group
//                   relative
//                   block
//                   overflow-hidden
//                   rounded-xl
//                   px-4
//                   py-3
//                   text-sm
//                   font-medium
//                   text-gray-600
//                   transition-colors
//                   duration-200
//                   hover:bg-gray-50
//                   hover:text-gray-950
//                 "
//                 style={{
//                   transitionDelay: isOpen
//                     ? `${index * 40}ms`
//                     : "0ms",
//                 }}
//               >
//                 <span className="relative block h-[20px] overflow-hidden">

//                   {/* Original text */}
//                   <span
//                     className="
//                       block
//                       transition-transform
//                       duration-300
//                       ease-[cubic-bezier(0.76,0,0.24,1)]
//                       group-hover:-translate-y-full
//                     "
//                   >
//                     {item.name}
//                   </span>

//                   {/* Text from bottom */}
//                   <span
//                     className="
//                       absolute
//                       left-0
//                       top-full
//                       block
//                       text-gray-950
//                       transition-transform
//                       duration-300
//                       ease-[cubic-bezier(0.76,0,0.24,1)]
//                       group-hover:-translate-y-full
//                     "
//                   >
//                     {item.name}
//                   </span>
//                 </span>
//               </Link>
//             ))}

//             {/* Mobile CTA */}
//             <Link
//               href="/contact"
//               onClick={() => setIsOpen(false)}
//               className="
//                 mt-2
//                 block
//                 rounded-xl
//                 bg-gray-950
//                 px-4
//                 py-3
//                 text-center
//                 text-sm
//                 font-medium
//                 text-white
//                 transition-transform
//                 duration-200
//                 hover:scale-[1.01]
//               "
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  /*
   * Checks whether the current route belongs to the menu item.
   *
   * Examples:
   * /              → Home active
   * /services      → Services active
   * /services/d365 → Services active
   * /about        → About active
   */
  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <nav
        className="
          mx-auto
          max-w-7xl
          rounded-2xl
          border
          border-gray-200/70
          bg-white/70
          shadow-lg
          shadow-gray-200/30
          backdrop-blur-xl
        "
      >
        {/* ========================================================= */}
        {/* NAVBAR TOP */}
        {/* ========================================================= */}

        <div className="flex h-18 items-center justify-between px-5 md:px-6">

          {/* ======================================================= */}
          {/* LOGO */}
          {/* ======================================================= */}

          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <div>
              <img
                src="/wiselinebizz-logo.png"
                alt="WiselineBizz"
                width={90}
                height={70}
                className="
                  h-auto
                  w-[90px]
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />
            </div>
          </Link>

          {/* ======================================================= */}
          {/* DESKTOP MENU */}
          {/* ======================================================= */}

          <div className="hidden items-center gap-1 md:flex">

            {menuItems.map((item) => {
              const isActive = isActiveRoute(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    group
                    relative
                    rounded-xl
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    transition-colors
                    duration-200

                    ${
                      isActive
                        ? "text-gray-950"
                        : "text-gray-600 hover:text-gray-950"
                    }
                  `}
                >

                  {/* ============================================= */}
                  {/* MENU TEXT */}
                  {/* ============================================= */}

                  <span className="relative block h-[20px] overflow-hidden">

                    {/* Normal Text */}

                    <span
                      className={`
                        block
                        transition-transform
                        duration-300
                        ease-[cubic-bezier(0.76,0,0.24,1)]

                        ${
                          isActive
                            ? "-translate-y-full"
                            : "group-hover:-translate-y-full"
                        }
                      `}
                    >
                      {item.name}
                    </span>

                    {/* Hover / Active Text */}

                    <span
                      className={`
                        absolute
                        left-0
                        top-full
                        block
                        text-gray-950
                        transition-transform
                        duration-300
                        ease-[cubic-bezier(0.76,0,0.24,1)]

                        ${
                          isActive
                            ? "-translate-y-full"
                            : "group-hover:-translate-y-full"
                        }
                      `}
                    >
                      {item.name}
                    </span>

                  </span>

                  {/* ============================================= */}
                  {/* ACTIVE / HOVER UNDERLINE */}
                  {/* ============================================= */}

                  <span
                    className={`
                      absolute
                      bottom-1
                      left-1/2
                      h-[2px]
                      -translate-x-1/2
                      rounded-full
                      bg-gray-900
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "w-5"
                          : "w-0 group-hover:w-5"
                      }
                    `}
                  />

                </Link>
              );
            })}

            {/* ===================================================== */}
            {/* DESKTOP CTA */}
            {/* ===================================================== */}

            <Link
              href="/contact"
              className="
                group
                relative
                ml-3
                overflow-hidden
                rounded-xl
                bg-gray-950
                px-5
                py-2.5
                text-sm
                font-medium
                text-white
              "
            >

              <span className="relative block h-[20px] overflow-hidden">

                {/* Normal Text */}

                <span
                  className="
                    block
                    transition-transform
                    duration-300
                    ease-[cubic-bezier(0.76,0,0.24,1)]
                    group-hover:-translate-y-full
                  "
                >
                  Get Started
                </span>

                {/* Hover Text */}

                <span
                  className="
                    absolute
                    left-0
                    top-full
                    block
                    text-white
                    transition-transform
                    duration-300
                    ease-[cubic-bezier(0.76,0,0.24,1)]
                    group-hover:-translate-y-full
                  "
                >
                  Get Started
                </span>

              </span>

            </Link>

          </div>

          {/* ======================================================= */}
          {/* MOBILE MENU BUTTON */}
          {/* ======================================================= */}

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-gray-200
              bg-white/70
              text-gray-900
              md:hidden
            "
          >

            <div className="flex w-5 flex-col gap-1.5">

              {/* Top Line */}

              <span
                className={`
                  h-0.5
                  w-full
                  rounded-full
                  bg-gray-900
                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? "translate-y-2 rotate-45"
                      : ""
                  }
                `}
              />

              {/* Middle Line */}

              <span
                className={`
                  h-0.5
                  w-full
                  rounded-full
                  bg-gray-900
                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? "opacity-0"
                      : "opacity-100"
                  }
                `}
              />

              {/* Bottom Line */}

              <span
                className={`
                  h-0.5
                  w-full
                  rounded-full
                  bg-gray-900
                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? "-translate-y-2 -rotate-45"
                      : ""
                  }
                `}
              />

            </div>

          </button>

        </div>

        {/* ========================================================= */}
        {/* MOBILE MENU */}
        {/* ========================================================= */}

        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            md:hidden

            ${
              isOpen
                ? "max-h-[500px] border-t border-gray-200/70 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div className="px-4 pb-4 pt-3">

            {menuItems.map((item, index) => {
              const isActive = isActiveRoute(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    group
                    relative
                    mb-1
                    block
                    overflow-hidden
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? "bg-gray-50 text-gray-950"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-950"
                    }
                  `}
                  style={{
                    transitionDelay: isOpen
                      ? `${index * 40}ms`
                      : "0ms",
                  }}
                >

                  {/* ============================================= */}
                  {/* MOBILE MENU TEXT */}
                  {/* ============================================= */}

                  <span className="relative block h-[20px] overflow-hidden">

                    {/* Normal Text */}

                    <span
                      className={`
                        block
                        transition-transform
                        duration-300
                        ease-[cubic-bezier(0.76,0,0.24,1)]

                        ${
                          isActive
                            ? "-translate-y-full"
                            : "group-hover:-translate-y-full"
                        }
                      `}
                    >
                      {item.name}
                    </span>

                    {/* Active / Hover Text */}

                    <span
                      className={`
                        absolute
                        left-0
                        top-full
                        block
                        text-gray-950
                        transition-transform
                        duration-300
                        ease-[cubic-bezier(0.76,0,0.24,1)]

                        ${
                          isActive
                            ? "-translate-y-full"
                            : "group-hover:-translate-y-full"
                        }
                      `}
                    >
                      {item.name}
                    </span>

                  </span>

                  {/* ============================================= */}
                  {/* MOBILE ACTIVE INDICATOR */}
                  {/* ============================================= */}

                  <span
                    className={`
                      absolute
                      bottom-1
                      left-4
                      h-[2px]
                      rounded-full
                      bg-gray-900
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "w-5"
                          : "w-0 group-hover:w-5"
                      }
                    `}
                  />

                </Link>
              );
            })}

            {/* ===================================================== */}
            {/* MOBILE CTA */}
            {/* ===================================================== */}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="
                mt-3
                block
                rounded-xl
                bg-gray-950
                px-4
                py-3
                text-center
                text-sm
                font-medium
                text-white
                transition-transform
                duration-200
                hover:scale-[1.01]
              "
            >
              Get Started
            </Link>

          </div>

        </div>

      </nav>
    </header>
  );
}