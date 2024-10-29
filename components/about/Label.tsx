import React from "react";

const Label = () => {
  return (
    <div className="shadow-sm border border-white rounded-3xl pt-5 pb-3 text-center relative overflow-hidden w-full">
      {/* Background blur layer */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/30"></div>
      {/* Foreground content */}
      <div className="relative z-10">
        <p className="text-3xl md:text-6xl text-gray-800 font-custom">
          Hi! It&apos;s <span className="text-primary-600">Hong Anh Here</span>
        </p>
      </div>
    </div>
  );
};

export default Label;
