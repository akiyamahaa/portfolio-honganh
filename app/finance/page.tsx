import Content from "@/components/finance/Content";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import images from "@/constants/images";
import React from "react";

const FinancePage = () => {
  return (
    <div className="">
      <Hero
        title="The contribution for the financial field"
        image={images.navhome1}
      />
      <Content />
      <Footer />
    </div>
  );
};

export default FinancePage;
