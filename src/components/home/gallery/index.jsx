"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";
import { useMeasure, useWindowSize } from "react-use";
import ScrollLine from "./scroll-line";
import BlackBox from "./black-box";
import Image from "next/image";
import Rotated3DContainer from "@/components/ui/rotated-3d-container";
import { GALLERY_IMAGES } from "./images";

export default function Gallery() {
  const targetRef = useRef(null);
  const [trackerRef, { width: trackerWidth }] = useMeasure();

  const [stickySectionRef, { width: stickySectionWidth }] = useMeasure();

  const { width: windowWidth } = useWindowSize();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const translateXRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(stickySectionWidth - windowWidth)],
  );

  const translateX = useSpring(translateXRaw, {
    stiffness: 200,
    damping: 25,
    mass: 0.5,
    restSpeed: 0.1,
  });

  return (
    <section className="relative h-[700dvh] w-full" ref={targetRef}>
      <div className="sticky top-0 flex h-dvh items-center overflow-hidden">
        {/* Image Cards */}
        <motion.div
          ref={stickySectionRef}
          style={{ translateX }}
          className="flex flex-nowrap items-end"
        >
          {GALLERY_IMAGES.map((image, i) => (
            <div
              key={i}
              className="w-[33.3vw] pl-[6.25rem] max-sm:w-[100vw] max-sm:pl-[4.5rem]"
            >
              <ImageCard
                src={image.src}
                alt={image.alt}
                title={image.title}
                date={image.date}
              />
            </div>
          ))}

          <div aria-hidden className="w-[6.25rem]"></div>
        </motion.div>

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

function ImageCard({ src, alt, title, date }) {
  return (
    <div className="flex flex-col justify-end gap-20">
      <Rotated3DContainer>
        <img
          src={src}
          alt={alt}
          className="w-full"
          loading="lazy"
          decoding="async"
        />
      </Rotated3DContainer>

      <div className="flex flex-col items-center gap-[0.625rem]">
        <span className="text-black">{title}</span>
        <span className="text-black/50">{date}</span>
      </div>
    </div>
  );
}
