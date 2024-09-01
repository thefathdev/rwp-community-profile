"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function ScrollLine({ targetRef }) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const lineWidthRaw = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const lineWidthSpring = useSpring(lineWidthRaw, {
    mass: 1.5,
    stiffness: 200,
    damping: 25,
  });

  const lineWidth = useMotionTemplate`${lineWidthSpring}%`;

  return (
    <div className="h-0.5 w-full bg-black/20">
      <motion.div
        className="h-full bg-black"
        style={{ width: lineWidth }}
      ></motion.div>
    </div>
  );
}
