"use server";
import { connect } from "@/db/index";
import Venue from "@/models/venue";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connect();
  try {
    const reqBody = await req.json();
    console.log("🚀 ~ POST ~ reqBody:", reqBody);
    const { name, startDate, endDate, imageUrl, streamLink, description } =
      reqBody;

    const newVenue = new Venue({
      name,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      imageUrl,
      streamLink,
      description,
    });

    const res = await newVenue.save();
    return NextResponse.json({ ...res._doc }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
