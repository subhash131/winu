import { connect } from "@/db";
import player from "@/models/player";
import team from "@/models/team";
import Venue from "@/models/venue";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connect();
  team;
  player;

  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "ID not provided" }, { status: 400 });
  }

  try {
    const res = await Venue.find({ createdBy: id })
      .populate({
        path: "teams",
        populate: {
          path: "players",
        },
      })
      .exec();
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    console.log("🚀 ~ GET ~ err:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
