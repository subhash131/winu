"use client";
import React from "react";
import TeamCard from "../team-card";
import { useSelector } from "react-redux";
import { RootState } from "@/state-manager/store";
import Image from "next/image";

const Teams = () => {
  const { id } = useSelector((state: RootState) => state.CreateVenue);
  // if (!id) return;
  return (
    <div className="pt-4 h-fit w-full">
      <h3 className="text-2xl pb-6 ">Add Teams</h3>
      <div className="w-full h-fit grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-4">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <NewTeam />
      </div>
    </div>
  );
};

export default Teams;

const NewTeam = () => {
  return (
    <div className="w-80 h-20 border-inactive border hover:border-active transition-colors rounded-lg flex items-center justify-start px-4 py-2 gap-4 cursor-pointer">
      <div className="size-10 rounded-lg border border-inactive flex-shrink-0">
        <Image
          src="/icon.svg"
          alt="players"
          className="size-full "
          width={10}
          height={10}
        />
      </div>
      + Add New
    </div>
  );
};
