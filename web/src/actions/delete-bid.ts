"use server";
const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export async function deleteBid({ bidId }: { bidId: string }) {
  try {
    const res = await fetch(`${baseUrl}/api/bid/${bidId}`, {
      method: "DELETE",
      cache: "no-store",
    });
    const data = await res.json();
    return data.acknowledged;
  } catch (err) {
    console.log("Failed to create venue", err);
  }
}
