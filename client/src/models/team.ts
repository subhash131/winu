import mongoose, { Document, Schema } from "mongoose";
import Player, { IPlayer } from "./player";

export interface ITeam extends Document {
  name: string;
  imageUrl: string;
  description: string;
  players: IPlayer[];
}

const Team: Schema<ITeam> = new Schema(
  {
    name: {
      type: String,
      required: [true, "username is missing"],
      unique: true,
    },
    imageUrl: { type: String },
    description: { type: String },
    players: [{ type: mongoose.Types.ObjectId, ref: Player }],
  },
  { timestamps: true }
);

export default mongoose.models.Team || mongoose.model("Team", Team);
