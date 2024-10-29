"use client";

import images from "@/constants/images";
import React from "react";
import Card from "./Card";
import Container from "../Container";

import { motion, useInView } from "framer-motion";

const activityOptions = [
  {
    title: "Passion",
    href: "passion",
    description: `I'm an energetic and ambitious young girl with a passion for learning and a vision to make a mark in the finance world. My journey started early`,
    imageSource: images.navhome0,
  },
  {
    title: "Finance",
    href: "finance",
    description: `My family has always been my foundation. My parents are dynamic entrepreneurs, managing companies, which means they’re often busy.`,
    imageSource: images.navhome1,
  },
  {
    title: "Social Support",
    href: "social-support",
    description: `I have a special love and desire to help poor children in difficult living conditions, especially ethnic minority children in mountainous areas.`,
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
    <div
      className="min-h-screen bgActivity flex justify-center items-center pb-8 pt-32"
      id="activity"
    >
      <Container style="overflow-visible">
        <motion.div
          ref={containerRef}
          className="flex flex-row flex-wrap justify-center items-center gap-6 xl:px-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {activityOptions.map((activity) => (
            <motion.div key={activity.title} variants={cardVariants}>
              <Card
                title={activity.title}
                description={activity.description}
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
