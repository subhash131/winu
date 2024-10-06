"use server";
const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export async function updatePlayerPoints({
  playerId,
  points,
}: {
  playerId: string;
  points: number;
}) {
  const body = { points };
  try {
    const res = await fetch(`${baseUrl}/api/player/${playerId}`, {
      method: "POST",
      body: JSON.stringify(body),
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Failed to create venue", err);
  }
}
