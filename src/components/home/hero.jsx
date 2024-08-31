"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "../magicui/marquee";
import Rotated3DContainer from "../ui/rotated-3d-container";
import TranslateZContainer from "../ui/translate-z-container";

export default function Hero() {
  return (
    <main className="flex items-end w-full h-dvh py-[1.875rem] relative overflow-hidden">
      <h1 className="sr-only">Remote Worker Pontianak</h1>

      {/* Main Text and Image */}
      <div className="absolute w-full top-1/2 -translate-y-1/2">
        <Rotated3DContainer>
          <Image
            src="/hero/1.png"
            alt=""
            width={400}
            height={400}
            className="absolute z-[2] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 max-sm:size-[250px]"
            quality={100}
          />
          <TranslateZContainer>
            <div className="flex items-center justify-center overflow-visible w-screen relative">
              <Marquee className={"[--duration:10s] overflow-visible"}>
                <span className="heading-1 text-center  ">
                  Remote Worker Pontianak
                </span>
              </Marquee>
            </div>
          </TranslateZContainer>

          <div className="w-[400px] z-[5] h-[400px] max-sm:size-[250px] overflow-hidden absolute flex justify-center items-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <div className="absolute w-screen flex items-center justify-center overflow-visible">
              <Marquee className={"[--duration:10s] overflow-visible"}>
                <span className="heading-1 text-white text-center whitespace-nowrap">
                  Remote Worker Pontianak
                </span>
              </Marquee>
            </div>
          </div>
        </Rotated3DContainer>
      </div>

      {/* Copy */}
      <div className="flow-grid w-full items-end">
        <div className="sm:hidden col-start-1 col-span-5 mb-[6.25rem]">
          <p className="w-full">
            A Collaborative & Supportive Circle for All Remote Workers and
            Professionals in Pontianak
          </p>
        </div>
        <div className="col-span-3 col-start-1">
          <a href="/" className="underline">
            Let&apos;s connect
          </a>
        </div>
        <div className="col-span-3 col-start-11 gap-40 flex flex-col justify-between max-sm:hidden">
          <p>
            A Collaborative & Supportive Circle for All Remote Workers and
            Professionals in Pontianak
          </p>
          <span>Scroll Down to see more</span>
        </div>
        <div className="col-span-1 col-start-[15] max-sm:col-start-6 flex items-center justify-end">
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
