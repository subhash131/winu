"use server";

import { TPlayer } from "@/types/player";

export async function createMultiplePlayers({
  players,
}: {
  players: TPlayer[];
}) {
  try {
    const res = await fetch("http://localhost:3000/api/bulk/player", {
      method: "POST",
      body: JSON.stringify(players),
      cache: "no-store",
    });
    const newPlayers = await res.json();
    console.log("🚀 ~ newPlayers :::::", newPlayers);
    return newPlayers;
  } catch (err) {
    console.log("Failed to create venue", err);
  }
}
