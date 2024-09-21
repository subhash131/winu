"use server";

import { TVenue } from "@/types/venue";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export async function createVenue({
  createdBy,
  description,
  endDate,
  imageUrl,
  name,
  startDate,
  streamLink,
}: TVenue) {
  const body = {
    createdBy,
    description,
    endDate,
    startDate,
    imageUrl,
    name,
    streamLink,
  };
  try {
    const res = await fetch(`${baseUrl}/api/venue`, {
      method: "POST",
      body: JSON.stringify(body),
      cache: "no-store",
    });
    console.log("🚀 ~ res:", res);
    const newVenue = await res.json();
    return newVenue;
  } catch (err) {
    console.log("Failed to create venue", err);
  }
}
