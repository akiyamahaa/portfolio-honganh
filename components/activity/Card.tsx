import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  imageSource: string | StaticImport;
  title: string;
  description: string;
  href: string;
};

const Card = ({ description, imageSource, title, href }: Props) => {
  return (
    <Link href={href}>
      <div className="max-w-[368px] min-w-[320px] rounded-3xl overflow-hidden relative w-full flex items-end h-[600px] transform transition-transform duration-500 ease-in-out hover:scale-105 hover:translate-y-[-40px]">
        <Image
          src={imageSource}
          alt="image-activity"
          className="absolute w-full h-full object-cover object-top"
        />
        <div className="p-6 relative">
          <p className="text-3xl text-white font-semibold">{title}</p>
          <p className="text-lg text-white text-ellipsis line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
