"use client";
import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const ListButton = () => {
  return (
    <div className="flex flex-row gap-6 items-center md:items-start xl:items-center xl:justify-end">
      <Link
        href={
          "https://drive.google.com/file/d/19Darrj3cHHgEfMzeKDA1mHnRnXl9yCZQ/view?usp=drive_link"
        }
        target="_blank"
      >
        <div className="bg-primary-600 py-3 px-5 rounded-full flex flex-row justify-center items-center gap-2 cursor-pointer hover:opacity-80 min-w-40">
          <p className="text-white text-base font-semibold">Certificate</p>
          <MoveRight color="#fff" size={24} />
        </div>
      </Link>
      <Link
        href={
          "https://drive.google.com/file/d/1zDC49fRK8s3EGQdnaA-KbAeZTwGwAiHb/view?usp=drive_link"
        }
        target="_blank"
      >
        <div className="py-3 px-5 rounded-full border border-white text-center gap-2 cursor-pointer hover:opacity-80 min-w-40">
          <p className="text-white text-base font-semibold">Resume</p>
        </div>
      </Link>

      {/* Modal Certificate */}
    </div>
  );
};

export default ListButton;
