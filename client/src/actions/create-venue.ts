"use server";

import { TVenue } from "@/types/venue";

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
    createdBy: "fix soon",
    description,
    endDate,
    startDate,
    imageUrl,
    name,
    streamLink,
  };
  try {
    console.log("createdBy", createdBy);
    const res = await fetch("http://localhost:3000/api/venue", {
      method: "POST",
      body: JSON.stringify(body),
      cache: "no-store",
    });
    console.log("🚀 ~ res:", res);
    const newVenue = await res.json();
    console.log("🚀 ~ newVenue:", newVenue);
    return newVenue;
  } catch (err) {
    console.log("Failed to create venue", err);
  }
}
