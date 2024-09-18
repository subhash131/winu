import mongoose, { Document, Schema } from "mongoose";
import { TVenue } from "@/types/venue";

export interface IVenue extends Document, TVenue {}

const VenueSchema: Schema<IVenue> = new Schema(
  {
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    createdBy: { type: String, required: true, default: "unknown" },
    imageUrl: { type: String, default: "/icon.svg" },
    streamLink: { type: String },
    description: { type: String },
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team" }],
  },
  { timestamps: true }
);

const Venue =
  mongoose.models.Venue || mongoose.model<IVenue>("Venue", VenueSchema);

export default Venue;
