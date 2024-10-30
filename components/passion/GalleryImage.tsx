import React from "react";
import Container from "../Container";
import Gallery from "../Gallery";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import DivAnim from "../animation/DivAnim";

type Props = {
  direction: "left" | "right";
  title: string;
  subTitle: string;
  listImages: StaticImageData[];
};

const GalleryImage = ({ direction, title, listImages }: Props) => {
  return (
    <DivAnim>
      <Container>
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-xl md:text-2xl xl:text-3xl text-gray-800">
            {title}
          </h2>
          {/* <div className="flex flex-row gap-2 items-center ">
            <div className="w-[18px] h-[18px] rounded-full bg-gray-200" />
            <p className="text-lg bg-primary-600 rounded-lg py-1 px-3">
              {subTitle}
            </p>
          </div> */}
        </div>
      </Container>
      <div className="mt-6">
        <Gallery listImg={listImages} direction={direction} />
      </div>
    </DivAnim>
  );
};

export default GalleryImage;
