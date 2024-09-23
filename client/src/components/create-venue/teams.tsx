"use client";
import React from "react";
import TeamCard from "./team-card";
import { useSelector } from "react-redux";
import { RootState } from "@/state-manager/store";
import { AddNewTeam } from "./add-new-team";
import { useSearchParams } from "next/navigation";

const Teams = () => {
  const { teams } = useSelector((state: RootState) => state.CreateVenue);
  const venueId = useSearchParams().get("venue");
  if (!venueId) return;
  return (
    <div className="pt-4 h-fit w-full px-36">
      <h3 className="text-2xl pb-6 ">Add Teams</h3>
      <div className="w-full h-fit grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-4">
        {teams?.map(({ id, name, players, imageUrl, description }, idx) => {
          return (
            <TeamCard
              venueId={venueId}
              id={id}
              key={`team-${idx}`}
              name={name}
              imageUrl={imageUrl}
              players={players}
              description={description}
            />
          );
        })}
        <AddNewTeam />
      </div>
    </div>
  );
};

export default Teams;
