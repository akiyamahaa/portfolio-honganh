"use client";

import { motion, useAnimation } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Container from "./Container";
import { useEffect } from "react";

interface Props {
  image: StaticImageData;
  title: string;
}

const Hero = ({ image, title }: Props) => {
  const controls = useAnimation();

  useEffect(() => {
    // Start animation when the component mounts (on route change)
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="bg-primary-50 h-fit">
      <Container style="overflow-visible">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12 xl:gap-24 relative top-20"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          animate={controls}
        >
          <h1 className="text-primary-600 text-3xl md:text-4xl xl:text-6xl font-semibold flex-1 w-3/4">
            {title}
          </h1>
          <motion.div
            className="flex-1 max-w-[466px]"
            initial={{ opacity: 0, scale: 1 }}
            animate={controls}
            transition={{ duration: 1.2 }}
          >
            <Image src={image} alt="img-hero" className="rounded-3xl w-full" />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
