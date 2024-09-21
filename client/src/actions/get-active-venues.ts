"use server";
const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export const getActiveVenues = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/venue?past=false`, {
      method: "GET",
      next: {
        revalidate: 60,
      },
    });
    console.log("🚀 ~ res:", res);
    const venues = await res.json();
    return venues;
  } catch (err) {
    console.log("Failed to create venue", err);
  }
};
