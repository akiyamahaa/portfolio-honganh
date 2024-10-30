import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Content from "@/components/social/Content";

import images from "@/constants/images";
import React from "react";

const SocialSupportPage = () => {
  return (
    <div className="">
      <Hero images={[images.supportBanner1, images.supportBanner2]} />
      <Content />
      <Footer />
    </div>
  );
};

export default SocialSupportPage;
