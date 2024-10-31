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
    description: `I'm an energetic and ambitious young girl with a passion for learning and a vision to make a mark in the business world. My journey started early`,
  },
  {
    title: "My Projects",
    href: "/my-projects",
    imageSource: images.navhome1,
    description: `My family has always been my foundation. My parents are dynamic entrepreneurs, managing companies, which means they're often busy.`,
  },
  {
    title: "Social Support",
    href: "/social-support",
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
    <div className="bgActivity flex justify-center items-center py-16">
      <Container style="overflow-visible space-y-12">
        <h1 className="text-[40px] md:text-[70px] text-primary-600 font-hatton text-center">
          MY JOURNEY
        </h1>
        <motion.div
          ref={containerRef}
          className="flex flex-row flex-wrap justify-center xl:justify-center items-center gap-6 xl:gap-6"
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
                description={activity.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default MyActivity;
