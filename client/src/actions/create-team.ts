"use server";

import { TPlayer } from "@/types/player";
import { createMultiplePlayers } from "./create-multiple-players";

type Team = {
  activeTeamId?: string;
  venueId?: string;
  imageUrl?: string;
  name: string;
  players: TPlayer[];
};

export async function createTeam({
  imageUrl,
  name,
  players,
  activeTeamId,
  venueId,
}: Team) {
  const playersId: any = [];

  const body = {
    imageUrl,
    name,
    players: playersId,
  };

  if (players?.length > 0) {
    try {
      const res = await createMultiplePlayers({ players });
      if (res) {
        res.map((player: any) => {
          playersId.push(player._id);
        });
      }
      console.log("🚀 ~ res:", res);
    } catch (err) {
      console.log("🚀 ~ err:", err);
    }
  }

  try {
    const res = await fetch("http://localhost:3000/api/team", {
      method: "POST",
      body: JSON.stringify(body),
      cache: "no-store",
    });
    const newTeam = await res.json();
    return newTeam;
  } catch (err) {
    console.log("Failed to create venue", err);
  }
}
