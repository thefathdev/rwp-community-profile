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
    ["45deg", "-45deg"]
  );
  const rotateX = useSpring(rotateXRaw, {
    mass: 5,
    stiffness: 200,
    damping: 30,
  });

  // const skewYRaw = useTransform(scrollVelocity, [-0.5, 0.5], ["-2deg", "2deg"]);
  // const skewY = useSpring(skewYRaw, { mass: 3, stiffness: 100, damping: 20 });

  return (
    <motion.div
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="origin-center relative overflow-visible"
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
