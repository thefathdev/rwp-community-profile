"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function OpacityWrapper({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 1, 0.2]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      whileHover={{ opacity: 1 }}
      className="flex w-full flex-col"
    >
      {children}
    </motion.div>
  );
}
