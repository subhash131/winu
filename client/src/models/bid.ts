import mongoose, { Document, Schema } from "mongoose";

export interface IBid extends Document {
  user: string;
  venue: string;
  team: string;
  won: boolean;
}

const Bid: Schema<IBid> = new Schema(
  {
    user: {
      type: String,
      required: [true, "userId is missing"],
    },
    venue: {
      type: String,
      required: [true, "venueId is missing"],
      ref: "Venue",
    },
    team: {
      type: String,
      required: [true, "teamId is missing"],
      ref: "Team",
    },
    won: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Bid || mongoose.model("Bid", Bid);
