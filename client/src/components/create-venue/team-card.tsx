"use client";
import { toggleModalActive } from "@/state-manager/features/create-venue-form";
import { Edit } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveTeam } from "@/state-manager/features/team-form";
import { TPlayer } from "@/types/player";
import { RootState } from "@/state-manager/store";

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
  const { name: TeamFormName } = useSelector(
    (state: RootState) => state.TeamForm
  );
  const dispatch = useDispatch();
  const handleToggleModal = () => {
    console.log("🚀 ~ TeamFormName:", TeamFormName);
    console.log("name ::", name);
    dispatch(toggleModalActive());
    dispatch(
      updateActiveTeam({
        activeTeamId: id,
        imageUrl: imageUrl || "/icon.svg",
        name,
        players,
        venueId,
      })
    );
    console.log("🚀 ~ TeamFormName:", TeamFormName);
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
        <div className="flex">
          {players?.map(({ imageUrl }, idx) => {
            return (
              <Image
                src={imageUrl || "/icon.svg"}
                alt="players"
                className="size-4 rounded-full border border-active"
                width={10}
                height={10}
                key={`team-player-img-${idx}`}
              />
            );
          })}
        </div>
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
