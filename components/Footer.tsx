"use client";

import Container from "./Container";
import { ArrowUp } from "iconsax-react";

const Footer = () => {
  return (
    <Container style="mt-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 pt-6 border-t border-gray-400">
        <p className="text-xl text-gray-800">
          ©2024 Tran Hong Anh, All Rights Reserved
        </p>
        <div
          className="flex flex-row items-center gap-2 text-gray-800 cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: 0, // Scroll to the top of the page
              behavior: "smooth", // Smooth scrolling animation
            });
          }}
        >
          <p className="min-w-fit">Back to top</p>
          <ArrowUp color="#1F2937" size={24} />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
