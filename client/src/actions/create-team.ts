"use server";

import { TPlayer } from "@/types/player";

type Team = {
  activeTeamId?: string;
  venueId?: string;
  imageUrl?: string;
  name: string;
  players: TPlayer[];
};

export async function createVenue({
  imageUrl,
  name,
  players,
  activeTeamId,
  venueId,
}: Team) {
  const body = {
    imageUrl,
    name,
  };
  if (players?.length > 0) {
    try {
      const res = await fetch("http://localhost:3000/api/bulk/player", {
        method: "POST",
        body: JSON.stringify(players),
        cache: "no-store",
      });
    } catch (err) {}
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
