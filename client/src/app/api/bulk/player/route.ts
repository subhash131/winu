"use server";
import { connect } from "@/db/index";
import Player from "@/models/player";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connect();
  try {
    const reqBody = await req.json();

    const res = await Player.insertMany(reqBody);

    return NextResponse.json(res, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
