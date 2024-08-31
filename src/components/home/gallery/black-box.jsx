"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

export default function BlackBox({ targetRef, finalPosition }) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const translateXRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, finalPosition - 30]
  );

  const translateXSpring = useSpring(translateXRaw, {
    mass: 1.5,
    stiffness: 200,
    damping: 25,
  });

  const velocity = useVelocity(scrollYProgress);

  const rotation = useTransform(
    velocity,
    [-0.5, 0, 0.5],
    ["-30deg", "0deg", "30deg"]
  );

  return (
    <motion.div
      className="bg-black size-[1.875rem] absolute bottom-0"
      style={{
        translateX: translateXSpring,
        translateY: "-100%",
        rotateZ: rotation,
      }}
    ></motion.div>
  );
}
