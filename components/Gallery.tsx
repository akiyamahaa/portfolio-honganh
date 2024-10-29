/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useEffect, useRef } from "react";

interface Props {
  listImg: string[] | StaticImport[];
  direction: "left" | "right";
}

const Gallery = ({ listImg, direction }: Props) => {
  const swiperRef = useRef<any>(null);

  const handleSwiper = (swiper: any) => {
    swiperRef.current = swiper; // Assign the Swiper instance to the ref
  };

  useEffect(() => {
    if (direction === "right" && swiperRef.current) {
      const lastIndex = listImg.length - 1;
      swiperRef.current.slideTo(lastIndex); // Auto swipe to the last element
    }
  }, [direction, listImg.length]);
  return (
    <Swiper
      ref={swiperRef}
      onSwiper={handleSwiper}
      className="h-[350px]"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10} // Gap between slides
      slidesPerView="auto" // Display number of slides based on total width of image
      pagination={{ clickable: true }} // Enable pagination (dots)
      scrollbar={{ draggable: true }} // Draggable scrollbar
      loop={false} // Enable infinite loop scrolling
      autoplay
    >
      {listImg.map((img, index) => {
        let styleImg;
        if (direction === "left" && index === 0) {
          styleImg = "ml-8 md:ml-20 xl:ml-40";
        } else if (direction === "right" && index === listImg.length - 1) {
          styleImg = "mr-8 md:mr-20 xl:mr-40";
        }
        return (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            {" "}
            {/* Ensure each slide takes image's natural width */}
            <div className={styleImg}>
              <Image
                src={img}
                alt={`img-${index}`}
                className="rounded-3xl object-cover w-full h-[350px]" // Removed fixed height for original size display
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Gallery;
