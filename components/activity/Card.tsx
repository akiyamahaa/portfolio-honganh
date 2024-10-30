import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  imageSource: string | StaticImport;
  title: string;
  href: string;
};

const Card = ({ imageSource, title, href }: Props) => {
  return (
    <Link href={href}>
      <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-105 hover:translate-y-[-40px]">
        <Image src={imageSource} alt="image-activity" className="w-full" />
        <p className="font-hatton text-gray-800 text-[30px] md:text-[36px] text-center">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default Card;
