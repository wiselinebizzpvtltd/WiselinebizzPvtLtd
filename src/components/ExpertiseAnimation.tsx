"use client";

import { Lottie } from "lottie-react";
import technologyAnimation from "../../public/animations/technology.json"

export default function ExpertiseAnimation() {
  return (
    <div className="lg:w-[500px] lg:h-[500px] h-[500px] w-[300px]">
      <Lottie
        src={technologyAnimation}
        loop
        autoplay
      />
    </div>
  );
}

// Source - https://stackoverflow.com/a/52605225
// Posted by Tsuni, modified by community. See post 'Timeline' for change history
// Retrieved 2026-09-13, License - CC BY-SA 4.0

// import Image from "next/image";

// import Logo from "../../public/animations/logo.svg"

// export default function ExpertiseAnimation() {
//   return (
//     <div className="w-40 h-40">
//       <Image
//         src={Logo}
//         alt="Technology"
//         width={160}
//         height={160}
//         className="object-contain"
//       />
//     </div>
//   );
// }