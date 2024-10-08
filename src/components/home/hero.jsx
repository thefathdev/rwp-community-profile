"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "../magicui/marquee";
import Rotated3DContainer from "../ui/rotated-3d-container";
import TranslateZContainer from "../ui/translate-z-container";

export default function Hero() {
  return (
    <main className="relative flex h-dvh w-full items-end overflow-hidden py-[1.875rem]">
      <h1 className="sr-only">Remote Worker Pontianak</h1>

      {/* Main Text and Image */}
      <div className="absolute top-1/2 w-full -translate-y-1/2">
        <Rotated3DContainer>
          <Image
            src="/hero/1.png"
            alt=""
            width={400}
            height={400}
            className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 max-sm:size-[250px]"
            quality={100}
          />
          <TranslateZContainer>
            <div className="relative flex w-screen items-center justify-center overflow-visible">
              <Marquee className={"overflow-visible [--duration:10s]"}>
                <span className="heading-1 text-center">
                  Remote Worker Pontianak
                </span>
              </Marquee>
            </div>
          </TranslateZContainer>

          <div className="absolute left-1/2 top-1/2 z-[5] flex h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden max-sm:size-[250px]">
            <div className="absolute flex w-screen items-center justify-center overflow-visible">
              <Marquee className={"overflow-visible [--duration:10s]"}>
                <span className="heading-1 whitespace-nowrap text-center text-white">
                  Remote Worker Pontianak
                </span>
              </Marquee>
            </div>
          </div>
        </Rotated3DContainer>
      </div>

      {/* Copy */}
      <div className="flow-grid w-full items-end">
        <div className="col-span-5 col-start-1 mb-[6.25rem] sm:hidden">
          <p className="w-full">
            A Collaborative & Supportive Circle for All Remote Workers and
            Professionals in Pontianak
          </p>
        </div>
        <div className="col-span-3 col-start-1">
          <a
            href="https://www.instagram.com/remoteworkerpnk/"
            target="_blank"
            rel="noreferrer"
            className="mt-[1.875rem] underline"
          >
            Let&apos;s connect
          </a>
        </div>
        <div className="col-span-3 col-start-11 flex flex-col justify-between gap-40 max-sm:hidden">
          <p>
            A Collaborative & Supportive Circle for All Remote Workers and
            Professionals in Pontianak
          </p>
          <span>Scroll Down to see more</span>
        </div>
        <div className="col-span-1 col-start-[15] flex items-center justify-end max-sm:col-start-6">
          <MouseWheel />
        </div>
      </div>
    </main>
  );
}

function MouseWheel() {
  return (
    <div className="relative size-[25px] rounded-full border border-black">
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
