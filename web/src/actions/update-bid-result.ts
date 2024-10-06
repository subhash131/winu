"use server";
const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export async function updateBidResult({ bidId }: { bidId: string }) {
  try {
    const res = await fetch(`${baseUrl}/api/bid/${bidId}?type=won`, {
      method: "POST",
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Failed to update bid result", err);
  }
}
