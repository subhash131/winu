"use server";
import { connect } from "@/db/index";
import Team from "@/models/team";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connect();
  try {
    const reqBody = await req.json();

    const { description, name, imageUrl, players } = reqBody;

    const newTeam = new Team({
      description,
      name,
      imageUrl: "",
      players: [],
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
