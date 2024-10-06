"use server";

import { TPlayer } from "@/types/player";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export async function createMultiplePlayers({
  players,
}: {
  players: TPlayer[];
}) {
  try {
    const res = await fetch(`${baseUrl}/api/bulk/player`, {
      method: "POST",
      body: JSON.stringify(players),
      cache: "no-store",
    });
    const newPlayers = await res.json();
    return newPlayers;
  } catch (err) {
    console.log("Failed to create venue", err);
  }
}
