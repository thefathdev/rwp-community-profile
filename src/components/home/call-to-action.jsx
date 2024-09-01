"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative flex h-dvh w-full flex-col justify-center">
      <h2 className="mx-auto flex flex-col max-sm:-mt-[20dvh]">
        <span className="">Connecting Ideas</span>
        <span className="">Sharing Knowledge</span>
        <span className="">Fostering Collaboration</span>

        <a
          href="https://www.instagram.com/remoteworkerpnk/"
          target="_blank"
          rel="noreferrer"
          className="mt-[1.875rem] underline"
        >
          Let&apos;s connect
        </a>
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1 }}
        className="flow-grid absolute bottom-0 w-full items-end pb-[1.875rem] max-sm:pb-[15px]"
      >
        <div className="col-span-6 col-start-1 mb-[1.875rem] sm:hidden">
          <span>
            This website is a dedication from{" "}
            <a href="/" className="underline">
              Fath Irfaan
            </a>{" "}
            for this community that has helped him to connect with amazing
            like-minded people in Pontianak, Indonesia.
          </span>
        </div>
        <div className="col-span-8 col-start-1 max-sm:hidden">
          <span>
            This website is a dedication from{" "}
            <a
              href="https://www.instagram.com/fath.code/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Fath Irfaan
            </a>{" "}
            for this community that has helped him to connect with amazing
            like-minded people in Pontianak, Indonesia.
          </span>
        </div>
        {/* <div className="col-span-3 col-start-11 flex flex-col justify-between gap-40 max-sm:hidden">
          
        </div> */}
        <div className="col-span-4 col-start-[12] flex items-center justify-end max-sm:col-span-6 max-sm:col-start-1 max-sm:justify-start">
          <p>©copyright 2024 Remote Worker Pontianak</p>
        </div>
      </motion.div>
    </section>
  );
}
