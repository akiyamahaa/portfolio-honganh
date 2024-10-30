import Image, { StaticImageData } from "next/image";
import DivAnim from "./animation/DivAnim";

interface Props {
  images: StaticImageData[];
}

const Hero = ({ images }: Props) => {
  return (
    <DivAnim className="">
      {/* Mobile */}
      <Image
        src={images[0]}
        alt="banner"
        className="block md:hidden w-full object-cover"
      />
      {/* Laptop */}
      <Image
        src={images[1]}
        alt="banner"
        className="hidden md:block w-full object-cover"
      />
    </DivAnim>
  );
};

export default Hero;
