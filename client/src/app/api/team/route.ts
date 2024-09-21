"use server";
import { connect } from "@/db/index";
import Team from "@/models/team";
import { NextRequest, NextResponse } from "next/server";
import Player from "@/models/player";

export async function GET() {
  await connect();
  // load model
  Player;
  try {
    const res = await Team.find().populate("players");
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

    const { description, name, imageUrl, players } = reqBody;

    const newTeam = new Team({
      description,
      name,
      imageUrl: imageUrl || "/icon.svg",
      players,
    });
    const res = await newTeam.save();
    return NextResponse.json({ ...res._doc }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.errorResponse.errmsg },
      { status: 500 }
    );
  }
}
