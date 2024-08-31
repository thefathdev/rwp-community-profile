"use client";

import { motion } from "framer-motion";

export default function Activities() {
  return (
    <section className="w-full h-dvh flex flex-col justify-center relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center">
        <h2 className="mb-4 text-center">Activities</h2>
        <RotatingBlackBox />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-[15%] right-[10%] flex flex-col">
          <img
            src="/activities/talk.jpeg"
            alt="remote talk"
            className="max-w-[250px]"
            loading="lazy"
            decoding="async"
          />
          <p className="mt-2">Remote Talk</p>
        </div>
        <div className="absolute bottom-[5%] left-[8%] flex flex-col">
          <img
            src="/activities/meetup.jpg"
            alt="remote meetup"
            className="max-w-[285px]"
            loading="lazy"
            decoding="async"
          />
          <p className="mt-2">Remote Meetup</p>
        </div>
        <div className="absolute bottom-[2%] right-[20%] flex flex-col">
          <img
            src="/activities/work.jpg"
            alt="we work"
            className="max-w-[365px]"
            loading="lazy"
            decoding="async"
          />
          <p className="mt-2">We Work</p>
        </div>
        <div className="absolute top-[10%] left-[15%] flex flex-col">
          <img
            src="/activities/edu.jpg"
            alt="remote edutainment"
            className="max-w-[345px]"
            loading="lazy"
            decoding="async"
          />
          <p className="mt-2">Edutainment</p>
        </div>
      </div>
    </section>
  );
}

function RotatingBlackBox({ targetRef, finalPosition }) {
  return (
    <motion.div
      className="bg-black size-[1.875rem] "
      initial={{ rotate: "0deg" }}
      animate={{ rotate: "360deg" }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 2,

        repeat: Infinity,
      }}
    ></motion.div>
  );
}
