import Image, { StaticImageData } from "next/image";

interface Props {
  images: StaticImageData[];
}

const Hero = ({ images }: Props) => {
  return (
    <div className="">
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
    </div>
  );
};

export default Hero;
