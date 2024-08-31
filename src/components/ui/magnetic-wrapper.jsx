import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MagneticWrapper = ({
  children,
  magneticStrength = 0.5,
  maxDistance = 100,
  containerRef,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      const maxDistanceRatio = Math.min(distance / maxDistance, 1);

      const moveX = -distanceX * magneticStrength * maxDistanceRatio;
      const moveY = -distanceY * magneticStrength * maxDistanceRatio;

      setPosition({ x: moveX, y: moveY });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    containerRef.current.addEventListener("mousemove", handleMouseMove);
    containerRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
        containerRef.current.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      }
    };
  }, [containerRef, magneticStrength, maxDistance]);

  return (
    <motion.div
      className="inline-block"
      animate={position}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrapper;
