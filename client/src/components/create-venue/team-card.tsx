"use client";

import { Edit } from "lucide-react";
import Image from "next/image";
import React from "react";
import { TPlayer } from "@/types/player";
import { addUrlParams } from "@/helpers/add-url-params";

const TeamCard = ({
  name,
  description,
  imageUrl,
  players,
  id,
  venueId,
}: {
  name: string;
  description?: string;
  players: TPlayer[];
  imageUrl?: string;
  id: string;
  venueId: string;
}) => {
  const handleToggleModal = () => {
    addUrlParams({ param: "team", value: id });
  };

  return (
    <div
      className="w-72 h-16 border-inactive border hover:border-active transition-colors rounded-lg flex items-center justify-between px-4 py-2 gap-4 cursor-pointer group"
      onClick={handleToggleModal}
    >
      <div className="size-10 rounded-lg border border-inactive flex-shrink-0 overflow-hidden">
        <Image
          src={imageUrl || "/icon.svg"}
          alt="players"
          className="size-full"
          width={10}
          height={10}
          draggable={false}
        />
      </div>
      <div className="size-full flex flex-col items-start justify-center">
        <p>{name}</p>
        <div className="flex">
          {players.length <= 5 &&
            players?.map(({ imageUrl }, idx) => {
              return (
                <Image
                  src={imageUrl || "/icon.svg"}
                  alt="players"
                  className="size-5 rounded-full border border-active"
                  width={10}
                  height={10}
                  key={`team-player-img-${idx}`}
                />
              );
            })}
          {players.length > 5 &&
            players.slice(0, 5).map(({ imageUrl }, idx) => {
              return (
                <>
                  <Image
                    src={imageUrl || "/icon.svg"}
                    alt="players"
                    className="size-5 rounded-full border border-active"
                    width={10}
                    height={10}
                    key={`team-player-img-${idx}`}
                  />
                </>
              );
            })}
          {players.length > 5 && (
            <div className="size-5 rounded-full bg-[#282828] text-[0.6rem] flex items-center justify-center">
              +{players.length - 5}
            </div>
          )}
        </div>
      </div>
      <button className="size-10 flex-shrink-0 rounded-full border-inactive grid place-content-center group text-inactive group-hover:text-active hover:border-active transition-colors">
        <Edit size={20} />
      </button>
    </div>
  );
};

export default TeamCard;
