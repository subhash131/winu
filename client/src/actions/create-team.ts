"use server";

import { TTeam } from "@/types/team";

export async function createVenue({ description, imageUrl, name }: TTeam) {
  const body = {
    description,
    imageUrl,
    name,
  };
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
