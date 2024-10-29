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
              I&apos;m an energetic and ambitious young girl passionate about
              finance, driven by a fascination with numbers and business
              mechanics. Beyond academics, I led my school&apos;s fashion club
              model department, blending style with leadership. Recently, my
              entrepreneurial spirit was recognized when I won a gold medal at
              &quot;One Idea One World,&quot; a Google and Nike-backed event for
              innovative startup ideas. This achievement reinforced my
              commitment to leading and innovating in finance.
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
