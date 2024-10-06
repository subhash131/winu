import { connect } from "@/db";
import Bid from "@/models/bid";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  await connect();
  try {
    const res = await Bid.deleteOne({ _id: id });

    return NextResponse.json({ ...res }, { status: 200 });
  } catch (err: any) {
    console.log("🚀 ~ POST ~ err:", err);
    return NextResponse.json(
      { error: err.errorResponse.errmsg },
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  await connect();
  const type = req.nextUrl.searchParams.get("type");

  const query: { won?: boolean; claimed?: boolean } = {};

  if (type == "won") {
    query.won = true;
  } else if (type == "claimed") {
    query.claimed = true;
  }

  try {
    const res = await Bid.findByIdAndUpdate(id, query);

    return NextResponse.json({ ...res }, { status: 200 });
  } catch (err: any) {
    console.log("🚀 ~ POST ~ err:", err);
    return NextResponse.json(
      { error: err.errorResponse.errmsg },
      { status: 500 }
    );
  }
}
