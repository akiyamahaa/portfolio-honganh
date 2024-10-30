"use client";

import images from "@/constants/images";
import React from "react";
import Card from "./Card";
import Container from "../Container";

import { motion, useInView } from "framer-motion";

const activityOptions = [
  {
    title: "Passion",
    href: "/passion",
    imageSource: images.navhome0,
  },
  {
    title: "Finance",
    href: "/finance",
    imageSource: images.navhome1,
  },
  {
    title: "Social Support",
    href: "/social-support",
    imageSource: images.navhome2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Time between animations of each card
    },
  },
};

const cardVariants = {
  hidden: { x: -100, opacity: 0 }, // Smaller offset for smoother start
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }, // Shorter duration
  },
};

const MyActivity = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 }); // Trigger only once

  return (
    <div className="bgActivity flex justify-center items-center py-16">
      <Container style="overflow-visible space-y-12">
        <h1 className="text-[40px] md:text-[70px] text-primary-600 font-hatton text-center">
          MY JOURNEY
        </h1>
        <motion.div
          ref={containerRef}
          className="flex flex-row flex-wrap justify-center xl:justify-between items-center gap-6 xl:gap-0"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {activityOptions.map((activity) => (
            <motion.div
              key={activity.title}
              variants={cardVariants}
              className="w-full md:w-1/3"
            >
              <Card
                title={activity.title}
                imageSource={activity.imageSource}
                href={activity.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default MyActivity;
