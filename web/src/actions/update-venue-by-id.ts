"use server";

import { TVenue } from "@/types/venue";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export async function updateVenueById({
  createdBy,
  description,
  endDate,
  imageUrl,
  name,
  startDate,
  streamLink,
  id,
}: TVenue & { id: string }) {
  const body = {
    description,
    endDate,
    startDate,
    imageUrl,
    name,
    streamLink,
  };

  try {
    const res = await fetch(`${baseUrl}/api/venue/${id}`, {
      method: "POST",
      body: JSON.stringify(body),
      cache: "no-store",
    });
    const venue = await res.json();
    return venue;
  } catch (err) {
    console.log("Failed to update venue", err);
  }
}
