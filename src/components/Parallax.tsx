"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function ParallaxEffect({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen overflow-hidden">
      <Parallax pages={1}>
        <ParallaxLayer offset={0} speed={0.05}>
          {children}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default ParallaxEffect;