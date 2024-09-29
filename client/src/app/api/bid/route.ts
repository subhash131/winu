"use server";
import { connect } from "@/db/index";
import Team from "@/models/team";
import Venue from "@/models/venue";
import Bid from "@/models/bid";
import { NextRequest, NextResponse } from "next/server";
import Player from "@/models/player";

export async function GET() {
  await connect();
  // load model
  Team;
  Player;
  Venue;
  try {
    const res = await Bid.find()
      .populate("user")
      .populate("venue")
      .populate({
        path: "team",
        populate: {
          path: "players",
        },
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

    const { venueId, teamId, user } = reqBody;

    const newBid = new Bid({
      venue: venueId,
      team: teamId,
      user,
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
