import { IVenue } from "@/models/venue";
import Image from "next/image";
import React from "react";

const BidCard = ({
  claimed,
  venue,
  won,
}: {
  claimed: boolean;
  venue: IVenue;
  won: boolean;
}) => {
  return (
    <div className="relative w-full bg-[#181818] border-[#484848] rounded-lg border h-60 text-sm flex flex-col items-center">
      <div className="absolute size-full z-0 p-1 rounded-lg overflow-hidden">
        <Image
          className="object-cover size-full rounded-md"
          src={venue.imageUrl || "/icon.svg"}
          alt="image"
          width={10}
          height={10}
        />
      </div>
      <div className="size-full flex justify-end flex-col px-4 z-10 bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.9)] rounded-lg py-2">
        <p>{venue.name}</p>
        <div className="flex items-center justify-between pb-2">
          {won && <p className="text-green-500">WON 1 SOL</p>}
          {!won && <p className="text-red-500">LOST 1 SOL</p>}
          {!claimed && won && (
            <button
              className="bg-white text-black px-3 py-1 rounded-lg active:scale-95 transition-transform"
              disabled={claimed}
            >
              Claim
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BidCard;
