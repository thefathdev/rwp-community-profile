"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function VerticalScrollLine({ targetRef }) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const lineHeightRaw = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const lineHeightSpring = useSpring(lineHeightRaw, {
    mass: 1.5,
    stiffness: 200,
    damping: 25,
  });

  const lineHeight = useMotionTemplate`${lineHeightSpring}%`;

  return (
    <div className="absolute left-[15px] top-0 h-full w-0.5 bg-black/20">
      <motion.div
        className="w-full bg-black"
        style={{ height: lineHeight }}
      ></motion.div>
    </div>
  );
}
