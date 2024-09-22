"use server";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export const getVenueById = async (id: string) => {
  try {
    if (!id) {
      console.log("id not found");
      return;
    }
    const res = await fetch(`${baseUrl}/api/venue/${id}`, {
      method: "GET",
      cache: "no-store",
    });
    const venues = await res.json();
    return venues;
  } catch (err) {
    console.log("Failed to create venue", err);
  }
};
