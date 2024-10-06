import { connect } from "@/db";
import Player from "@/models/player";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connect();

  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "ID not provided" }, { status: 400 });
  }

  try {
    const res = await Player.findById(id).exec();
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    console.log("🚀 ~ GET ~ err:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connect();

  const { id } = params;
  if (!id) {
    return NextResponse.json({ error: "ID not provided" }, { status: 400 });
  }
  const { points } = await req.json();

  try {
    const res = points
      ? await Player.findByIdAndUpdate(id, { points }, { new: true }).exec()
      : await Player.findById(id).exec();

    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    console.log("🚀 ~ GET ~ err:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
