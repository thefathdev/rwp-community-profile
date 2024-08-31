"use client";

import { ReactLenis } from "lenis/dist/lenis-react";

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
        lerp: 0.1,
        //   infinite: true,
        //   syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
