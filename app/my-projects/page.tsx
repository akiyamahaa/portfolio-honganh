import Content from "@/components/finance/Content";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import images from "@/constants/images";
import React from "react";

const FinancePage = () => {
  return (
    <div className="">
      <Hero images={[images.financeBanner1, images.financeBanner2]} />
      <Content />
      <Footer />
    </div>
  );
};

export default FinancePage;
