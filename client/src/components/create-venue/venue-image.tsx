"use client";
import Image from "next/image";
import React from "react";
import { TbPhotoUp } from "react-icons/tb";

const VenueImage = () => {
  return (
    <div className="relative w-fit cursor-pointer group border border-[#282828] hover:border-[#484848] rounded-xl">
      <Image
        src="/icon.svg"
        alt="image"
        width={10}
        height={10}
        className="size-96 max-lg:size-80 max-md:size-60 bg-[#282828] backdrop-blur-lg rounded-xl"
      />
      <button className="absolute bottom-4 right-4 size-10 rounded-full bg-[#282828] flex items-center justify-center border border-gray-400 group-hover:bg-[#484848] transition-colors">
        <TbPhotoUp
          className="rounded-md text-white transition-colors"
          size={22}
        />
      </button>
      <input
        className="opacity-0 top-0 absolute z-10 size-full cursor-pointer"
        type="file"
      />
    </div>
  );
};

export default VenueImage;
