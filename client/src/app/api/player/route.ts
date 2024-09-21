"use server";
import { connect } from "@/db/index";
import player from "@/models/player";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connect();
  try {
    const reqBody = await req.json();
    const { description, username, imageUrl } = reqBody;

    const newPlayer = new player({
      description,
      username,
      imageUrl,
    });
    const res = await newPlayer.save();
    return NextResponse.json({ ...res._doc }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
