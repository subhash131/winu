"use client";
import mongoose from "mongoose";
import { toggleModalActive } from "@/state-manager/features/create-venue-form";
import { Edit } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const TeamCard = ({
  name,
  description,
  imageUrl,
  players,
}: {
  name: string;
  description?: string;
  players?: mongoose.Types.ObjectId[];
  imageUrl?: string;
}) => {
  const dispatch = useDispatch();
  const handleToggleModal = () => {
    dispatch(toggleModalActive());
  };

  return (
    <div className="w-72 h-16 border-inactive border hover:border-active transition-colors rounded-lg flex items-center justify-between px-4 py-2 gap-4">
      <div className="size-10 rounded-lg border border-inactive flex-shrink-0">
        <Image
          src={imageUrl || "/icon.svg"}
          alt="players"
          className="size-full "
          width={10}
          height={10}
          draggable={false}
        />
      </div>
      <div className="size-full flex flex-col items-start justify-center">
        <p>{name}</p>
        {/* <div className="flex">
          {players?.map(({ imageUrl }, idx) => {
            return (
              <Image
                src={imageUrl}
                alt="players"
                className="size-4 rounded-full border border-active"
                width={10}
                height={10}
                key={`team-player-img-${idx}`}
              />
            );
          })}
        </div> */}
      </div>
      <button
        className="size-10 flex-shrink-0 rounded-full border-inactive grid place-content-center group text-inactive hover:text-active hover:border-active transition-colors"
        onClick={handleToggleModal}
      >
        <Edit size={20} />
      </button>
    </div>
  );
};

export default TeamCard;
