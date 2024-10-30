import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Content from "@/components/passion/Content";
import Project from "@/components/passion/Project";
import images from "@/constants/images";
import React from "react";

const PassionPage = () => {
  return (
    <div className="">
      <Hero images={[images.passionBanner1, images.passionBanner2]} />

      <Content />
      <Project />
      <Footer />
    </div>
  );
};

export default PassionPage;
