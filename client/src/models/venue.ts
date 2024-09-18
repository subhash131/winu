import mongoose, { Document, Schema } from "mongoose";

interface IVenue extends Document {
  name: string;
  startDate: Date;
  endDate: Date;
  imageUrl: string;
  streamLink: string;
  description: string;
  teams: mongoose.Types.ObjectId[];
  createdBy: mongoose.Types.ObjectId;
}

const VenueSchema: Schema<IVenue> = new Schema(
  {
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, required: true },
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
