"use server";
const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export async function placeBid({
  venueId,
  teamId,
  user,
}: {
  venueId: string;
  teamId: string;
  user: string;
}) {
  const body = {
    venueId,
    teamId,
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
