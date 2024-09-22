"use server";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export const getVenueById = async (id: string) => {
  try {
    const res = await fetch(`${baseUrl}/api/venue/${id}`, {
      method: "GET",
    });
    const venues = await res.json();
    return venues;
  } catch (err) {
    console.log("Failed to create venue", err);
  }
};
