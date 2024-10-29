"use client";

import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const PAnim = ({ children, className = "" }: Props) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Start animation when in view
    }
  }, [controls, inView]);

  return (
    <motion.p
      ref={ref} // Attach ref to detect visibility
      initial="hidden" // Set initial state
      animate={controls} // Controls animation based on in-view status
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.p>
  );
};

export default PAnim;
