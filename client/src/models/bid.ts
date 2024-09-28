import { TPlayer } from "@/types/player";
import mongoose, { Document, Schema } from "mongoose";

export interface IBid extends Document {
  userId: string;
  venueId: string;
  teamId: string;
}

const Bid: Schema<IBid> = new Schema(
  {
    userId: {
      type: String,
      required: [true, "userId is missing"],
    },
    venueId: {
      type: String,
      required: [true, "venueId is missing"],
    },
    teamId: {
      type: String,
      required: [true, "teamId is missing"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Bid || mongoose.model("Bid", Bid);
