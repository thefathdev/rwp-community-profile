"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Rotated3DContainer from "../ui/rotated-3d-container";
import MagneticWrapper from "../ui/magnetic-wrapper";

export default function Activities() {
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
      className="w-full h-dvh flex flex-col justify-center relative max-sm:hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center">
        <h2 className="mb-4 text-center">Activities</h2>
        <RotatingBlackBox />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-[15%] right-[10%] flex flex-col items-center">
          <MagneticWrapper
            containerRef={containerRef}
            maxDistance={15}
            magneticStrength={0.25}
          >
            <div className="hover:scale-150 hover:z-10 relative group origin-top-right transition-transform duration-500 ease-out ">
              <img
                src="/activities/talk.jpeg"
                alt="remote talk"
                className="max-w-[250px]"
                loading="lazy"
                decoding="async"
              />

              <p className="absolute left-0 top-0 pr-2.5 -translate-x-full transition-opacity duration-200 ease-out group-hover:opacity-0">
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
            <div className="hover:scale-150 hover:z-10 group relative origin-bottom-left transition-transform duration-500 ease-out ">
              <img
                src="/activities/meetup.jpg"
                alt="remote meetup"
                className="max-w-[285px]"
                loading="lazy"
                decoding="async"
              />

              <p className="absolute right-0 bottom-0 pl-2.5 translate-x-full transition-opacity duration-200 ease-out group-hover:opacity-0">
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
            <div className="hover:scale-150 hover:z-10 group relative origin-bottom-right transition-transform duration-500 ease-out ">
              <img
                src="/activities/work.jpg"
                alt="we work"
                className="max-w-[365px]"
                loading="lazy"
                decoding="async"
              />

              <p className="absolute right-0 top-0 pl-2.5 translate-x-full transition-opacity duration-200 ease-out group-hover:opacity-0">
                We Work
              </p>
            </div>
          </MagneticWrapper>
        </div>
        <div className="absolute top-[10%] left-[15%] flex flex-col items-center ">
          <MagneticWrapper
            containerRef={containerRef}
            maxDistance={20}
            magneticStrength={0.35}
          >
            <div className="hover:scale-150 group hover:z-10 relative origin-top-left transition-transform duration-500 ease-out ">
              <img
                src="/activities/edu.jpg"
                alt="remote edutainment"
                className="max-w-[345px]"
                loading="lazy"
                decoding="async"
              />

              <p className="absolute right-0 top-0 pl-2.5 translate-x-full transition-opacity duration-200 ease-out group-hover:opacity-0">
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
      className="bg-black size-[1.875rem]"
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
