"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";

export default function TranslateZContainer({ children }) {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const translateZRaw = useTransform(
    scrollVelocity,
    [-0.5, 0, 0.5],
    ["-500px", "0px", "-500px"],
  );
  const translateZ = useSpring(translateZRaw, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  return (
    <motion.div
      ref={targetRef}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="relative origin-center overflow-visible"
    >
      <motion.div
        style={{
          translateZ: translateZ,
          transformStyle: "preserve-3d",
        }}
        className="whitespace-nowrap"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
