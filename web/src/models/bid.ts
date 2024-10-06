import mongoose, { Document, Schema } from "mongoose";

export interface IBid extends Document {
  user: string;
  venue: string;
  team: mongoose.Types.ObjectId[];
  won: boolean;
  claimed: boolean;
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
    won: {
      type: Boolean,
      default: false,
    },
    claimed: {
      type: Boolean,
      default: false,
    },
    team: [{ type: mongoose.Schema.Types.ObjectId, ref: "Player" }],
  },
  { timestamps: true }
);

export default mongoose.models.Bid || mongoose.model("Bid", Bid);
