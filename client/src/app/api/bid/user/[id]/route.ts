import { connect } from "@/db";
import Bid from "@/models/bid";
import Venue from "@/models/venue";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connect();
  const type = req.nextUrl.searchParams.get("type");

  Venue;
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "ID not provided" }, { status: 400 });
  }
  const query =
    type == "unclaimed"
      ? {
          claimed: false,
          won: true,
          user: id,
        }
      : {
          user: id,
        };

  try {
    const res = await Bid.find(query).populate("venue").exec();
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    console.log("🚀 ~ GET ~ err:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
