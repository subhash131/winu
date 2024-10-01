"use server";
import { connect } from "@/db/index";
import Team from "@/models/team";
import Venue from "@/models/venue";
import Bid from "@/models/bid";
import { NextRequest, NextResponse } from "next/server";
import Player from "@/models/player";

export async function GET(req: NextRequest) {
  await connect();
  // load model
  Team;
  Player;
  Venue;
  const venue = req.nextUrl.searchParams.get("venueId");

  try {
    const res = await Bid.find(venue ? { venue } : {})
      .populate("user")
      .populate("venue")
      .populate({
        path: "team",
      });
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    console.log("🚀 ~ GET ~ err:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  await connect();
  try {
    const reqBody = await req.json();

    const { venueId, user, team } = reqBody;

    const newBid = new Bid({
      venue: venueId,
      user,
      team,
    });
    const res = await newBid.save();
    return NextResponse.json({ ...res._doc }, { status: 201 });
  } catch (err: any) {
    console.log("🚀 ~ POST ~ err:", err);
    return NextResponse.json(
      { error: err.errorResponse.errmsg },
      { status: 500 }
    );
  }
}
