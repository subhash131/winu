"use server";
import { connect } from "@/db/index";
import Team from "@/models/team";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connect();
  try {
    const reqBody = await req.json();
    console.log("🚀 ~ POST ~ reqBody:", reqBody);
    const { description, name, imageUrl, players } = reqBody;
    if (players.length > 0) {
    }
    const newTeam = new Team({
      description,
      name,
      imageUrl,
    });
    const res = await newTeam.save();
    return NextResponse.json({ ...res._doc }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
