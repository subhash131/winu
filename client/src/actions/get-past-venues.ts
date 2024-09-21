"use server";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export const getPastVenues = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/venue?past=true`, {
      method: "GET",
      cache: "no-store",
    });
    const venues = await res.json();
    return venues;
  } catch (err) {
    console.log("Failed to create venue", err);
  }
};
