import { RootState } from "@/state-manager/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PlayerCard } from "./player-card";
import AddNewPlayer from "./add-new-player";
import { TPlayer } from "@/types/player";
import { useSearchParams } from "next/navigation";

const TeamPlayers = () => {
  const { teams } = useSelector((state: RootState) => state.CreateVenue);
  const activeTeamId = useSearchParams().get("team");
  const [players, setPlayers] = useState<TPlayer[]>([]);

  useEffect(() => {
    if (!activeTeamId) return;

    const activeTeam = teams.find((team) => team.id === activeTeamId);

    if (activeTeam) setPlayers(activeTeam.players);
  }, [activeTeamId, teams]);

  return (
    <div className="w-full h-fit gap-4 px-6 grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
      {players.map(({ imageUrl, id, username }, idx) => (
        <PlayerCard
          id={id}
          key={`player-card-${idx}-${id}`}
          username={username}
          imageUrl={imageUrl || "/icon.svg"}
          index={idx}
        />
      ))}
      <AddNewPlayer />
    </div>
  );
};

export default TeamPlayers;
