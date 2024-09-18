import mongoose, { Document, Schema } from "mongoose";
import Team, { ITeam } from "./team";

interface IVenue extends Document {
  name: string;
  startDate: Date;
  endDate: Date;
  imageUrl: string;
  streamLink: string;
  description: string;
  teams: ITeam[];
}

const Venue: Schema<IVenue> = new Schema(
  {
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    imageUrl: { type: String },
    streamLink: { type: String },
    description: { type: String },
    teams: [{ type: mongoose.Types.ObjectId, ref: Team }],
  },
  { timestamps: true }
);

export default mongoose.models.Venue || mongoose.model("Venue", Venue);
