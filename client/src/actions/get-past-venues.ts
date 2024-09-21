"use server";

export const getPastVenues = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/venue?past=true", {
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
