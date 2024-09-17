import React from "react";
import TeamCard from "./team-card";

const Teams = () => {
  return (
    <div className="pt-4 h-fit w-full">
      <h3 className="text-2xl pb-6 ">Teams</h3>
      <div className="w-full h-fit grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-4">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
};

export default Teams;
