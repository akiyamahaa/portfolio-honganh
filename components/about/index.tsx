import Image from "next/image";
import Container from "../Container";
import images from "@/constants/images";
import ListButton from "./ListButton";

const About = () => {
  return (
    <div
      className="bg-fixed bgHome overflow-hidden pt-12"
      // style={{ minHeight: "calc(100vh - 60px)" }}
    >
      <Container>
        <div className="flex flex-col-reverse xl:flex-row justify-between items-center gap-6">
          <div className="flex-1 mt-0 md:-mt-60 xl:mt-0">
            <Image src={images.homeBannerImg} alt="image" />
          </div>
          <div className="flex-1">
            <div className="xl:relative right-24">
              <h1
                className="text-[64px] md:text-[96px] xl:text-[116px] leading-[64px] md:leading-[96px] xl:leading-[116px] font-medium font-hatton text-center md:text-start"
                style={{ color: "#D07E2E", mixBlendMode: "color-dodge" }}
              >
                Hi! It&apos;s <br /> Hong Anh <br /> Here
              </h1>
            </div>
            <div className="space-y-8 relative z-10">
              <p className="text-sm md:text-base text-white text-center md:text-start">
                I&apos;m an energetic and ambitious young girl with a passion
                for learning and a vision to make a mark in the business world.
                My journey started early, with a fascination for numbers and
                trends, which later grew into a desire to understand the
                mechanics of business and investment. Alongside my academic
                pursuits, I&apos;ve always had a keen eye for fashion. This led
                me to become the head of the model department in the Hanoi
                Amsterdam&apos;s fashion club, where I discovered the art of
                merging style with leadership. My passion and creativity were
                recently recognized on a larger scale when I won the gold medal
                at &quot;One Idea One World,&quot; an event celebrated for
                fostering innovative startup ideas supported by Google and Nike.
                This experience validated my love for entrepreneurship,
                solidifying my resolve to innovate and lead in the business
                world.
              </p>
              <ListButton />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
