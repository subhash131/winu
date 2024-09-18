import mongoose, { Document, Schema } from "mongoose";
import Player from "./player";
import { TTeam } from "@/types/team";

export interface ITeam extends Document, TTeam {}

const Team: Schema<ITeam> = new Schema(
  {
    name: {
      type: String,
      required: [true, "username is missing"],
      unique: true,
    },
    imageUrl: { type: String },
    description: { type: String },
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: Player }],
  },
  { timestamps: true }
);

export default mongoose.models.Team || mongoose.model("Team", Team);
