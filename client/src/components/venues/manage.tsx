import { CreateVenue } from "@/state-manager/features/create-venue-form";
import { TPlayer } from "@/types/player";
import React, { useEffect, useState } from "react";

const Manage = ({ venue }: { venue: CreateVenue }) => {
  const [players, setPlayers] = useState<TPlayer[]>();

  useEffect(() => {
    const rawPlayers = venue.teams.map((team) => {
      return team.players;
    });
    setPlayers(rawPlayers.flat());
  }, [venue]);
  return (
    <div className="px-6 pt-4 pb-10">
      {players?.map((player) => {
        return (
          <>
            <List player={player} />
          </>
        );
      })}
    </div>
  );
};

export default Manage;

const List = ({ player }: { player: TPlayer }) => {
  return (
    <div className="w-fit gap-5 h-10 flex items-center justify-between">
      <p className="w-40">{player.username}</p>
      <input
        className="bg-transparent border-b outline-none focus:border-b-2 transition-all focus:border-green-300 w-20 text-center"
        value={player.points}
      />
    </div>
  );
};
