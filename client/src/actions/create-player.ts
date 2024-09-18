"use server";

import { TPlayer } from "@/types/player";

export async function createVenue({
  description,
  imageUrl,
  username = "unknown",
}: TPlayer) {
  const body = {
    description,
    username,
    imageUrl,
  };
  try {
    const res = await fetch("http://localhost:3000/api/add-player", {
      method: "POST",
      body: JSON.stringify(body),
      cache: "no-store",
    });
    console.log("🚀 ~ res:", res);
    const newVenue = await res.json();
    console.log("🚀 ~ newVenue:", newVenue);
    return newVenue;
  } catch (err) {
    console.log("Failed to create venue", err);
  }
}
