"use client";
import React from "react";
import TeamCard from "../team-card";
import { useSelector } from "react-redux";
import { RootState } from "@/state-manager/store";
import Image from "next/image";

const Teams = () => {
  const { id, teams } = useSelector((state: RootState) => state.CreateVenue);
  // if (!id) return;
  return (
    <div className="pt-4 h-fit w-full">
      <h3 className="text-2xl pb-6 ">Add Teams</h3>
      <div className="w-full h-fit grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-4">
        {teams?.map(({ name, players, imageUrl, description }, idx) => {
          return (
            <TeamCard
              key={`team-${idx}`}
              name={name}
              imageUrl={imageUrl}
              players={players}
              description={description}
            />
          );
        })}
        <AddNew />
      </div>
    </div>
  );
};

export default Teams;

const AddNew = () => {
  return (
    <div className="w-fit h-16 border-inactive border hover:border-active transition-colors rounded-lg flex items-center justify-start px-3 gap-4 cursor-pointer">
      + Add New
    </div>
  );
};
