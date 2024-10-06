"use server";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export const getTeams = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/teams`, {
      method: "GET",
      cache: "no-store",
    });
    const venues = await res.json();
    return venues;
  } catch (err) {
    console.log("Failed to create venue", err);
  }
};
