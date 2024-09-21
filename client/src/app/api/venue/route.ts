"use server";
import { connect } from "@/db/index";
import Venue from "@/models/venue";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connect();
  try {
    const reqBody = await req.json();
    console.log("🚀 ~ POST ~ reqBody:", reqBody);
    const {
      name,
      startDate,
      endDate,
      imageUrl,
      streamLink,
      description,
      createdBy,
    } = reqBody;

    const newVenue = new Venue({
      name,
      startDate: startDate ? new Date(startDate) : new Date(),
      endDate: endDate ? new Date(endDate) : new Date(),
      imageUrl,
      streamLink,
      description,
      createdBy,
    });

    const res = await newVenue.save();
    return NextResponse.json({ ...res._doc }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  await connect();
  try {
    const reqBody = await req.json();
    const { teams, venueId } = reqBody;
    console.log("🚀 ~ venueId:", venueId);
    const res = await Venue.findOneAndUpdate(
      { _id: venueId },
      { $push: { teams: { $each: teams } } },
      { new: true }
    );
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
