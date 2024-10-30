import images from "@/constants/images";
import Image from "next/image";
import React from "react";
import Container from "../Container";
import VideoCard from "./VideoCard";
import PAnim from "../animation/PAnim";
import DivAnim from "../animation/DivAnim";

const Content = () => {
  return (
    <Container>
      <DivAnim className="pt-32 space-y-12">
        <PAnim className="text-base xl:text-lg text-gray-600">
          From a young age, I&apos;ve been deeply passionate about the
          performing arts, including singing and dancing on stage. I&apos;ve
          always had a natural talent for captivating an audience, feeling both
          joyful and confident when performing. The stage has allowed me to
          fully express myself through dance, music, and interaction with the
          crowd. This passion has driven me to actively participate in school
          cultural activities, community events, and various competitions.
        </PAnim>
        <DivAnim className="space-y-5">
          <DivAnim className="flex flex-col justify-between gap-6 md:flex-row">
            <Image
              src={images.passion1}
              className="rounded-3xl h-[368px] object-cover md:w-1/2 w-full xl:w-2/5 "
              alt="img-passion"
            />
            <Image
              src={images.passion2}
              className="rounded-3xl h-[368px] object-cover object-top md:w-1/2 w-full xl:w-3/5"
              alt="img-passion"
            />
          </DivAnim>
          <DivAnim className="flex flex-col justify-between gap-6 md:flex-row">
            <Image
              src={images.passion3}
              className="rounded-3xl h-[368px] object-cover md:w-1/2 w-full xl:w-3/5"
              alt="img-passion"
            />
            <Image
              src={images.passion4}
              className="rounded-3xl h-[368px] object-cover md:w-1/2 w-full xl:w-2/5"
              alt="img-passion"
            />
          </DivAnim>
        </DivAnim>

        <PAnim className="text-base xl:text-lg text-gray-600">
          As time passed, my enthusiasm for the performing arts only grew
          stronger. I&apos;ve continually sought to learn, explore, and hone my
          skills, branching out into new areas like cinema and, more notably,
          modeling. My confidence, courage, and ability to engage with the
          audience have solidified, making the stage an irreplaceable part of my
          life.
        </PAnim>

        <DivAnim className="flex flex-col flex-wrap justify-between md:flex-row">
          <DivAnim className="w-full md:w-1/2 xl:w-2/5 md:pr-6 mb-6">
            <Image
              src={images.passion5}
              className="rounded-3xl h-[272px] object-cover"
              alt="img-passion"
            />
          </DivAnim>
          <DivAnim className="w-full md:w-1/2 xl:w-1/5 mb-6">
            <Image
              src={images.passion6}
              className="rounded-3xl h-[272px] object-cover w-full"
              alt="img-passion"
            />
          </DivAnim>
          <DivAnim className="w-full xl:w-2/5 xl:pl-6 mb-6">
            <Image
              src={images.passion7}
              className="rounded-3xl h-[272px] object-cover"
              alt="img-passion"
            />
          </DivAnim>
        </DivAnim>

        <PAnim className="text-base xl:text-lg text-gray-600">
          During that joyful childhood, my mother also enrolled me in piano
          lessons. I vividly remember the first time my fingers touched the
          keys—the sound was enchanting and drew me in immediately. Over time, I
          learned to sense each note, each melody, and understand how they come
          together to form a complete musical piece. The piano became more than
          just an instrument; it became a way for me to convey my emotions and
          delve into the world of music. Every time I sit at the piano, I feel
          as if I&apos;m stepping into another world, one where I can fully lose
          myself in the rich and emotive melodies. Daily practice not only hones
          my piano skills but also strengthens my patience and focus. To me, the
          piano is not just a hobby; it&apos;s a significant part of my life, a
          source of happiness, tranquility, and inspiration to keep chasing my
          dreams.
        </PAnim>

        <DivAnim className="flex flex-row flex-wrap">
          <DivAnim className="w-full xl:w-1/2 xl:pr-3 mb-6">
            <VideoCard
              videoSource="https://firebasestorage.googleapis.com/v0/b/vivuhanoi-expo.appspot.com/o/vid-1.mp4?alt=media&token=0bbf4965-7cba-483d-ac10-bbc733c1f860"
              caption="Allegro (Friedrich Kuhlau) - Hong Anh Tran"
            />
          </DivAnim>
          <DivAnim className="w-full xl:w-1/2 xl:pl-3 mb-6">
            <VideoCard
              videoSource="https://firebasestorage.googleapis.com/v0/b/vivuhanoi-expo.appspot.com/o/vid-2.mp4?alt=media&token=0d925120-110a-4d49-b31e-d9ef1de04c53"
              caption="Honey (R. N. Dett) - Hong Anh Tran"
            />
          </DivAnim>
          <DivAnim className="w-full mb-6">
            <VideoCard
              videoSource="https://firebasestorage.googleapis.com/v0/b/vivuhanoi-expo.appspot.com/o/vid-3.mp4?alt=media&token=4c241c8a-abaa-438b-b3db-1ea01ccb5bbb"
              caption={`Excerpted from the play "Thuy Kieu" at grade 10th Literature Show`}
            />
          </DivAnim>
        </DivAnim>
      </DivAnim>
    </Container>
  );
};

export default Content;
