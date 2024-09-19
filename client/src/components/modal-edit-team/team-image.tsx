import Image from "next/image";
import React from "react";
import { TbPhotoUp } from "react-icons/tb";

const TeamImage = () => {
  return (
    <div className="size-80 border border-inactive rounded-lg bg-[#282828] relative">
      <Image
        src="/icon.svg"
        alt="players"
        className="size-full "
        width={10}
        height={10}
      />
      <button className="absolute bottom-4 right-4 size-10 rounded-full bg-[#282828] flex items-center justify-center border border-gray-400 group-hover:bg-[#484848] transition-colors">
        <TbPhotoUp
          className="rounded-md text-white transition-colors"
          size={22}
        />
      </button>
    </div>
  );
};

export default TeamImage;
