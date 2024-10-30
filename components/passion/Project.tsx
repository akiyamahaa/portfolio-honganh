import images from "@/constants/images";
import Image from "next/image";
import React from "react";
import Container from "../Container";
import GalleryImage from "./GalleryImage";
import { lostinstyle, phoenix, reasonance, secret, songvien } from "./data";
import DivAnim from "../animation/DivAnim";

const Project = () => {
  return (
    <DivAnim>
      <div className="bg-primary-50 py-24">
        <Container>
          <div className="space-y-12">
            <div className="flex flex-col justify-between items-center xl:flex-row gap-12 xl:gap-20">
              <div className="space-y-12 w-full xl:w-2/3">
                <h1 className="text-3xl md:text-4xl xl:text-6xl text-primary-600 font-hatton">
                  “The Last Wish”
                </h1>
                <p className="text-sm md:text-base xl:text-lg text-gray-600">
                  I also expressed my passion for art through acting when I was
                  chosen to play the female lead in a short film sponsored and
                  produced by my school. The film, titled The Last Wish, centers
                  on a tragic love story of a young couple. Taking on this role
                  for the first time, I dedicated a lot of time to studying the
                  script, learning how to convey emotions, and fully immersing
                  myself in the character. The filming took place throughout the
                  summer, and despite moments of exhaustion, I was thrilled to
                  bring the character to life and express my passion with each
                  scene. The film was showcased at the school&apos;s short film
                  festival, drawing the attention of many classmates and
                  teachers. For me, it was not only an unforgettable experience
                  but also a significant step forward, boosting my confidence in
                  pursuing my passion for art.
                </p>
              </div>
              <div className="w-full xl:w-1/3">
                <Image
                  src={images.passion8}
                  alt="img-passion"
                  className="rounded-3xl"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between items-center xl:flex-row gap-12 xl:gap-20">
              <div className="space-y-12 w-full xl:w-2/3">
                <Image
                  src={images.nhangiai2}
                  alt="img-passion"
                  className="rounded-3xl h-[368px] object-cover"
                />
              </div>
              <div className="w-full xl:w-1/3">
                <Image
                  src={images.nhangiai1}
                  alt="img-passion"
                  className="rounded-3xl h-[368px] object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="mt-16 space-y-16">
        <Container>
          <p className="text-gray-600 text-sm md:text-base xl:text-lg">
            My passion for fashion continued to grow as I led the Model
            Department at LaMode, the first fashion club at Hanoi Amsterdam for
            the Gifted. By organizing weekly training sessions, developing
            thematic photoshoots, and facilitating collaborations with stylists,
            I gained a deeper understanding of visual storytelling and brand
            representation. Events like the Song Vien 2023 Showcase and Lamode
            Fashion Show 2024 “Resonance&quot; allowed me to guide models in
            bringing our creative visions to life.
          </p>
        </Container>
        <GalleryImage
          listImages={reasonance}
          title="LAMODE FASHION SHOW 2024: RESONANCE"
          direction="left"
          subTitle="RESONANCE"
        />
        <GalleryImage
          listImages={songvien}
          title="SHOWCASE 2023: SONG VIEN"
          direction="right"
          subTitle="SONG VIỄN"
        />
        <GalleryImage
          listImages={secret}
          title="PHOTOSHOOT: THE SECRET"
          direction="left"
          subTitle="The Secret"
        />
        <GalleryImage
          listImages={phoenix}
          title="PHOTOSHOOT: THE PHOENIX"
          direction="right"
          subTitle="The Phoenix"
        />
        <GalleryImage
          listImages={lostinstyle}
          title="PHOTOSHOOT: LOST IN STYLE"
          direction="left"
          subTitle="Lost In Style"
        />
      </div>
    </DivAnim>
  );
};

export default Project;
