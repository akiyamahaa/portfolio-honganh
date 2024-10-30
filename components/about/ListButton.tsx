"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import Image from "next/image";
import images from "@/constants/images";
import DivAnim from "../animation/DivAnim";

const ListButton = () => {
  return (
    <div className="flex flex-row gap-6">
      <Button title="My Journey" variant="bold" onClick={() => {}} />
      <Button title="Certificate" variant="outline" onClick={() => {}} />

      {/* Modal Certificate */}
    </div>
  );
};

export default ListButton;
