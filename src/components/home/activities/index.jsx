"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import MagneticWrapper from "../../ui/magnetic-wrapper";
import { useMeasure, useMedia } from "react-use";
import VerticalScrollLine from "./vertical-scroll-line";
import VerticalBlackBox from "./vertical-black-box";

export default function Activities() {
  const isMobile = useMedia("(max-width: 640px)", true);

  return isMobile ? <MobileActivities /> : <DesktopActivities />;
}

function DesktopActivities() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [imageCenters, setImageCenters] = useState([]);
  const [centerPoint, setCenterPoint] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const updatePositions = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const images = container.querySelectorAll("img");

    // Calculate image centers
    const newCenters = Array.from(images).map((img) => {
      const rect = img.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top + rect.height / 2 - containerRect.top,
      };
    });
    setImageCenters(newCenters);

    // Calculate center point (rotating black box)
    const centerElement = container.querySelector(".bg-black");
    if (centerElement) {
      const centerRect = centerElement.getBoundingClientRect();
      setCenterPoint({
        x: centerRect.left + centerRect.width / 2 - containerRect.left,
        y: centerRect.top + centerRect.height / 2 - containerRect.top,
      });
    }
  }, []);

  useEffect(() => {
    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, [updatePositions]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const containerRect = containerRef.current.getBoundingClientRect();

    canvas.width = containerRect.width;
    canvas.height = containerRect.height;

    const drawLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      imageCenters.forEach((center) => {
        ctx.beginPath();
        ctx.moveTo(centerPoint.x, centerPoint.y);
        ctx.lineTo(center.x, center.y);
        ctx.strokeStyle = "rgba(0, 0, 0, 1)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    };

    let animationFrameId;
    const animate = () => {
      if (isHovered) {
        updatePositions();
        drawLines();
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    if (isHovered) {
      animate();
    } else {
      cancelAnimationFrame(animationFrameId);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [imageCenters, centerPoint, updatePositions, isHovered]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <section
      ref={containerRef}
      className="relative flex h-dvh w-full flex-col justify-center max-sm:hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0"
      />

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <h2 className="mb-4 text-center">Activities</h2>
        <RotatingBlackBox />
      </div>

      <div className="absolute inset-0">
        <div className="absolute right-[10%] top-[15%] flex flex-col items-center">
          <MagneticWrapper
            containerRef={containerRef}
            maxDistance={15}
            magneticStrength={0.25}
          >
            <div className="group relative origin-top-right transition-transform duration-500 ease-out hover:z-10 hover:scale-150">
              <img
                src="/activities/talk.jpeg"
                alt="remote talk"
                className="max-w-[250px]"
                loading="lazy"
                decoding="async"
              />

              <p className="absolute left-0 top-0 -translate-x-full pr-2.5 transition-opacity duration-200 ease-out group-hover:opacity-0">
                Remote Talk
              </p>
            </div>
          </MagneticWrapper>
        </div>
        <div className="absolute bottom-[5%] left-[8%] flex flex-col items-center">
          <MagneticWrapper
            containerRef={containerRef}
            maxDistance={10}
            magneticStrength={0.4}
          >
            <div className="group relative origin-bottom-left transition-transform duration-500 ease-out hover:z-10 hover:scale-150">
              <img
                src="/activities/meetup.jpg"
                alt="remote meetup"
                className="max-w-[285px]"
                loading="lazy"
                decoding="async"
              />

              <p className="absolute bottom-0 right-0 translate-x-full pl-2.5 transition-opacity duration-200 ease-out group-hover:opacity-0">
                Remote Meetup
              </p>
            </div>
          </MagneticWrapper>
        </div>
        <div className="absolute bottom-[2%] right-[20%] flex flex-col items-center">
          <MagneticWrapper
            containerRef={containerRef}
            maxDistance={25}
            magneticStrength={0.3}
          >
            <div className="group relative origin-bottom-right transition-transform duration-500 ease-out hover:z-10 hover:scale-150">
              <img
                src="/activities/work.jpg"
                alt="we work"
                className="max-w-[365px]"
                loading="lazy"
                decoding="async"
              />

              <p className="absolute right-0 top-0 translate-x-full pl-2.5 transition-opacity duration-200 ease-out group-hover:opacity-0">
                We Work
              </p>
            </div>
          </MagneticWrapper>
        </div>
        <div className="absolute left-[15%] top-[10%] flex flex-col items-center">
          <MagneticWrapper
            containerRef={containerRef}
            maxDistance={20}
            magneticStrength={0.35}
          >
            <div className="group relative origin-top-left transition-transform duration-500 ease-out hover:z-10 hover:scale-150">
              <img
                src="/activities/edu.jpg"
                alt="remote edutainment"
                className="max-w-[345px]"
                loading="lazy"
                decoding="async"
              />

              <p className="absolute right-0 top-0 translate-x-full pl-2.5 transition-opacity duration-200 ease-out group-hover:opacity-0">
                Edutainment
              </p>
            </div>
          </MagneticWrapper>
        </div>
      </div>
    </section>
  );
}

function RotatingBlackBox() {
  return (
    <motion.div
      className="size-[1.875rem] bg-black"
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

function MobileActivities() {
  const containerRef = useRef(null);
  const [trackerRef, { height: trackerHeight }] = useMeasure();

  return (
    <section
      ref={containerRef}
      className="relative h-[290dvh] w-full sm:hidden"
    >
      <div className="sticky top-0 flex flex-col overflow-hidden pt-[6.25rem]">
        <h2 className="mb-[2.5rem] text-center">Activities</h2>
      </div>
      <div
        className="sticky top-[7.5rem] flex h-[80dvh] flex-col overflow-hidden"
        ref={trackerRef}
      >
        <VerticalScrollLine targetRef={containerRef} />
        <VerticalBlackBox
          targetRef={containerRef}
          finalPosition={trackerHeight}
        />
      </div>
      <div className="relative -mt-[50dvh] flex w-full flex-col items-center gap-[6.25rem]">
        <div className="group sticky top-[12.5rem] flex origin-center flex-col items-start transition-transform duration-500 ease-out hover:z-10 hover:scale-125">
          <img
            src="/activities/meetup.jpg"
            alt="remote meetup"
            className="max-w-[275px]"
            loading="lazy"
            decoding="async"
          />

          <p className="relative bg-white transition-opacity duration-200 ease-out group-hover:opacity-0">
            Remote Meetup
          </p>
        </div>
        <div className="group sticky top-[15rem] flex origin-center flex-col items-start transition-transform duration-500 ease-out hover:z-10 hover:scale-125">
          <img
            src="/activities/talk.jpeg"
            alt="remote talk"
            className="max-w-[265px]"
            loading="lazy"
            decoding="async"
          />

          <p className="relative bg-white transition-opacity duration-200 ease-out group-hover:opacity-0">
            Remote Talk
          </p>
        </div>
        <div className="group sticky top-[17.5rem] flex origin-center flex-col items-start transition-transform duration-500 ease-out hover:z-10 hover:scale-125">
          <img
            src="/activities/work.jpg"
            alt="we work"
            className="max-w-[290px]"
            loading="lazy"
            decoding="async"
          />

          <p className="relative bg-white transition-opacity duration-200 ease-out group-hover:opacity-0">
            We Work
          </p>
        </div>
        <div className="group sticky top-[20rem] flex origin-center flex-col items-start transition-transform duration-500 ease-out hover:z-10 hover:scale-125">
          <img
            src="/activities/edu.jpg"
            alt="remote edutainment"
            className="max-w-[275px]"
            loading="lazy"
            decoding="async"
          />

          <p className="relative bg-white transition-opacity duration-200 ease-out group-hover:opacity-0">
            Edutainment
          </p>
        </div>
      </div>
    </section>
  );
}
