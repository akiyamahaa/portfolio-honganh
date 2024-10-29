"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import Image from "next/image";
import images from "@/constants/images";
import DivAnim from "../animation/DivAnim";

const ListButton = () => {
  const [isCertOpen, setIsCertOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const honorElement = document.getElementById("activity");
    if (honorElement) {
      honorElement.scrollIntoView({
        behavior: "smooth", // Smooth scroll animation
        block: "start", // Align to the top of the element
      });
    }
  };

  const handleOpenModal = () => {
    setIsCertOpen(true);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsCertOpen(false);
      }
    };

    if (isCertOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCertOpen]);

  return (
    <div className="flex flex-row gap-6">
      <Button title="My Journey" variant="bold" onClick={handleScroll} />
      <Button title="Certificate" variant="outline" onClick={handleOpenModal} />

      {/* Modal Certificate */}
      {isCertOpen && (
        <DivAnim className="fixed z-max inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div
            className="bg-transparent inline p-6 relative max-w-[600px]"
            ref={modalRef}
          >
            {/* Mobile Menu */}
            <Image
              src={images.certificate}
              alt="certificate"
              className="object-contain rounded-3xl"
            />
          </div>
        </DivAnim>
      )}
    </div>
  );
};

export default ListButton;
