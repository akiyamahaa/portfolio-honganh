import Image from "next/image";
import Container from "../Container";
import ListButton from "./ListButton";
import images from "@/constants/images";
import Label from "./Label";
import DivAnim from "../animation/DivAnim";

const About = () => {
  return (
    <div
      className="bg-fixed bgHome overflow-hidden"
      style={{ minHeight: "calc(100vh - 96px)" }}
    >
      <Container style="">
        <DivAnim className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-16">
          {/* content */}
          <div className="flex-1 pt-4 md:pt-12 xl:pt-0">
            <p className="text-base xl:text-lg text-gray-600 mb-4">
              I&apos;m an energetic and ambitious young girl with a passion for
              learning and a vision to make a mark in the finance world. My
              journey started early, with a fascination for numbers and trends,
              which later grew into a desire to understand the mechanics of
              business and investment.
            </p>
            <p className="text-base xl:text-lg text-gray-600 mb-4">
              Alongside my academic pursuits, I&apos;ve always had a keen eye
              for fashion. This led me to become the head of the model
              department in my school&apos;s fashion club, where I discovered
              the art of merging style with leadership.
            </p>
            <p className="text-base xl:text-lg text-gray-600 mb-4">
              My passion and creativity were recently recognized on a larger
              scale when I won the gold medal at &quot;One Idea One World,&quot;
              an event celebrated for fostering innovative startup ideas
              supported by Google and Nike. This experience validated my love
              for entrepreneurship, solidifying my resolve to innovate and lead
              in the finance world.
            </p>
            <ListButton />
          </div>
          {/* image */}
          <div className="flex-1">
            <Image
              src={images.homeBanner}
              alt="home banner"
              className="h-full"
            />
          </div>
        </DivAnim>
        <DivAnim className="hidden xl:block absolute bottom-8 left-0 right-0 max-w-screen-2xl mx-auto w-full">
          <div className="px-8">
            <Label />
          </div>
        </DivAnim>
      </Container>
    </div>
  );
};

export default About;
