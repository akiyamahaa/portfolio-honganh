import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Content from "@/components/passion/Content";
import Project from "@/components/passion/Project";
import images from "@/constants/images";
import React from "react";

const PassionPage = () => {
  return (
    <div className="">
      <Hero
        title="The little girl always has a deep love for the performing arts"
        image={images.navhome0}
      />
      <Content />
      <Project />
      <Footer />
    </div>
  );
};

export default PassionPage;
