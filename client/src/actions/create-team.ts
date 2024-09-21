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
  const teams: any = [];

  if (players?.length > 0) {
    try {
      const res = await createMultiplePlayers({ players });
      if (res) {
        res.map((player: any) => {
          playersId.push(player._id);
        });
      }
    } catch (err) {
      console.log("🚀 ~ err:", err);
    }
  }

  const body = {
    imageUrl,
    name,
    players: playersId,
  };

  try {
    // create team
    const postRes = await fetch("http://localhost:3000/api/team", {
      method: "POST",
      body: JSON.stringify(body),
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newTeam = await postRes.json();

    //push team to venue
    const patchRes = await fetch("http://localhost:3000/api/venue", {
      method: "PATCH",
      body: JSON.stringify({
        venueId,
        teams: [newTeam._id],
      }),
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (patchRes) {
      return newTeam;
    }
  } catch (err) {
    console.log("Failed to create venue", err);
  }
}
