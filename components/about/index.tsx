import Image from "next/image";
import Container from "../Container";
import images from "@/constants/images";

const About = () => {
  return (
    <div
      className="bg-fixed bgHome overflow-hidden"
      style={{ minHeight: "calc(100vh - 60px)" }}
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1">
            <Image src={images.homeBannerImg} alt="image" />
          </div>
          <div className="flex-1">
            <div className="relative right-24">
              <h1
                className="text-[116px] leading-[136px] font-medium font-hatton"
                style={{ color: "#D07E2E", mixBlendMode: "color-dodge" }}
              >
                Hi! It&apos;s Hong Anh Here
              </h1>
            </div>
            <p className="text-base text-white">
              I&apos;m an energetic and ambitious young girl with a passion for
              learning and a vision to make a mark in the finance world. My
              journey started early, with a fascination for numbers and trends,
              which later grew into a desire to understand the mechanics of
              business and investment. Alongside my academic pursuits, I&apos;ve
              always had a keen eye for fashion. This led me to become the head
              of the model department in my school&apos;s fashion club, where I
              discovered the art of merging style with leadership. My passion
              and creativity were recently recognized on a larger scale when I
              won the gold medal at &quot;One Idea One World,&quot; an event
              celebrated for fostering innovative startup ideas supported by
              Google and Nike. This experience validated my love for
              entrepreneurship, solidifying my resolve to innovate and lead in
              the finance world.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
