"use server";

import { TPlayer } from "@/types/player";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export async function createVenue({
  description,
  imageUrl,
  username,
}: TPlayer) {
  const body = {
    description,
    username,
    imageUrl,
  };
  try {
    const res = await fetch(`${baseUrl}/api/player`, {
      method: "POST",
      body: JSON.stringify(body),
      cache: "no-store",
    });
    const newPlayer = await res.json();
    return newPlayer;
  } catch (err) {
    console.log("Failed to create venue", err);
  }
}
