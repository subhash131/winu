import Image from "next/image";
import React from "react";
import { TbPhotoUp } from "react-icons/tb";

const PlayerCard = ({
  imageUrl,
  index,
  username,
}: {
  username: string;
  imageUrl: string;
  index: number;
}) => {
  return (
    <div className="border h-16 rounded-lg border-inactive flex items-center justify-start gap-4 px-2">
      <div className="relative w-fit cursor-pointer group border border-[#282828] hover:border-[#484848] rounded-xl flex items-center justify-center group flex-shrink-0 overflow-hidden">
        <Image
          src={imageUrl || "/icon.svg"}
          alt="image"
          width={10}
          height={10}
          className="size-10 bg-[#282828]"
        />
        <button className="absolute size-4 rounded-full bg-[#282828] flex items-center justify-center border border-gray-400 group-hover:bg-[#484848] transition-all opacity-0 group-hover:opacity-100">
          <TbPhotoUp
            className="rounded-md text-white transition-colors"
            size={22}
          />
        </button>
      </div>
      <input
        className="bg-transparent outline-none w-full"
        placeholder="Player Name"
        value={username}
      />
    </div>
  );
};

export default PlayerCard;
