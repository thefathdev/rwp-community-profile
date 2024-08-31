"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "./magicui/marquee";

export default function Hero() {
  return (
    <main className="flex items-end w-full h-dvh py-[1.875rem]">
      <h1 className="sr-only">Remote Worker Pontianak</h1>

      {/* Main Text and Image */}
      <div className="absolute w-full top-1/2 -translate-y-1/2">
        <Image
          src="/hero/1.png"
          alt=""
          width={400}
          height={400}
          className="absolute z-[2] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          quality={100}
        />
        <div className="flex  items-center justify-center">
          <Marquee className={"[--duration:10s]"}>
            <span className="heading-1 text-center  ">
              Remote Worker Pontianak
            </span>
          </Marquee>
        </div>

        <div className="w-[400px] z-[5] h-[400px] overflow-hidden absolute flex justify-center items-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <div className="absolute w-screen">
            <Marquee className={"[--duration:10s]"}>
              <span className="heading-1 text-white text-center whitespace-nowrap">
                Remote Worker Pontianak
              </span>
            </Marquee>
          </div>
        </div>
      </div>

      {/* Copy */}
      <div className="flow-grid w-full items-end">
        <div className="col-span-3 col-start-1">
          <a href="/" className="underline">
            Let&apos;s connect
          </a>
        </div>
        <div className="col-span-3 col-start-11 gap-40 flex flex-col justify-between">
          <p>
            A Collaborative & Supportive Circle for All Remote Workers and
            Professionals in Pontianak
          </p>
          <span>Scroll Down to see more</span>
        </div>
        <div className="col-span-1 col-start-[15] flex items-center justify-end">
          <MouseWheel />
        </div>
      </div>
    </main>
  );
}

function MouseWheel() {
  return (
    <div className="relative rounded-full size-[25px] border border-black">
      <motion.div
        className="absolute size-[5px] bg-black"
        initial={{ x: 9, y: 6 }}
        animate={{ x: 9, y: 14 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 40,

          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
    </div>
  );
}
