"use server";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export const getBidByUser = async ({
  type,
  userId,
}: {
  type: string;
  userId: string;
}) => {
  try {
    const res = await fetch(`${baseUrl}/api/bid/user/${userId}?type=${type}`, {
      method: "GET",
      cache: "no-cache",
    });
    const bids = await res.json();
    return bids;
  } catch (err) {
    console.log("Failed to fetch bids", err);
  }
};
