"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const DivAnim = ({ children, className = "" }: Props) => {
  const controls = useAnimation();

  useEffect(() => {
    // Start animation when the component mounts (on route change)
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);
  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }} // Triggers animation on scroll
      onViewportEnter={() => controls.start("visible")} // Starts animation when in view
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default DivAnim;
