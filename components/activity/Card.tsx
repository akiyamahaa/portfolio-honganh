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

const Card = ({ imageSource, title, href, description }: Props) => {
  return (
    <div
      className="w-full
    
    "
    >
      <div className="w-full flex flex-row items-center gap-6">
        <Image src={imageSource} alt="image-activity" className="w-2/5" />
        <div className="w-3/5">
          <p className="font-hatton text-gray-800 text-[24px] md:text-[32px]">
            {title}
          </p>
          <p className="font-hatton text-gray-500 text-sm md:text-base line-clamp-2">
            {description}
          </p>
          <div className="mt-4">
            <Link href={href}>
              <div className="rounded-full bg-primary-600 text-white text-base font-semibold px-4  py-2 w-fit hover:opacity-80">
                Click to wow
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
