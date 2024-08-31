"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";
import { useMeasure } from "react-use";

export default function Gallery() {
  const targetRef = useRef(null);
  const [trackerRef, { width: trackerWidth }] = useMeasure();

  return (
    <section className="w-full h-[1000dvh] relative" ref={targetRef}>
      <div className="sticky top-0 h-dvh ">
        <div className="absolute bottom-0 w-full p-[1.875rem]">
          {/* Scroll Line */}
          <ScrollLine targetRef={targetRef} />
          {/* Black Box */}
          <BlackBox targetRef={targetRef} finalPosition={trackerWidth} />

          <div className="w-full" ref={trackerRef}></div>
        </div>
      </div>
    </section>
  );
}

function ScrollLine({ targetRef }) {
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
    <div className="w-full bg-black/20 h-0.5">
      <motion.div
        className="bg-black h-full"
        style={{ width: lineWidth }}
      ></motion.div>
    </div>
  );
}

function BlackBox({ targetRef, finalPosition }) {
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
