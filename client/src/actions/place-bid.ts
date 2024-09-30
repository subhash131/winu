"use server";
const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export async function placeBid({
  venueId,
  team,
  user,
}: {
  venueId: string;
  team: string[];
  user: string;
}) {
  const body = {
    venueId,
    team,
    user,
  };
  try {
    const res = await fetch(`${baseUrl}/api/bid`, {
      method: "POST",
      body: JSON.stringify(body),
      cache: "no-store",
    });
    const newVenue = await res.json();
    return newVenue;
  } catch (err) {
    console.log("Failed to create venue", err);
  }
}
