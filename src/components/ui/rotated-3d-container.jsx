"use client";

import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import React, { useRef } from "react";

export default function Rotated3DContainer({ children }) {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const rotateXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["30deg", "-30deg"],
  );
  const rotateX = useSpring(rotateXRaw, {
    mass: 2,
    stiffness: 100,
    damping: 20,
  });

  return (
    <motion.div
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="relative origin-center overflow-visible"
    >
      <motion.div
        style={{
          rotateX: rotateX,
          // skewY,
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
        className="whitespace-nowrap"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
