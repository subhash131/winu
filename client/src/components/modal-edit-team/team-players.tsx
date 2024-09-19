import { RootState } from "@/state-manager/store";
import React from "react";
import { useSelector } from "react-redux";
import PlayerCard from "./player-card";

const TeamPlayers = () => {
  const { players } = useSelector((state: RootState) => state.TeamForm);
  return (
    <div className="w-full h-fit gap-4 px-6 grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
      {players.map(({ username, imageUrl }, idx) => {
        return (
          <PlayerCard
            key={`player-card-${idx}`}
            username={username}
            imageUrl={imageUrl}
            index={idx}
          />
        );
      })}
    </div>
  );
};

export default TeamPlayers;
