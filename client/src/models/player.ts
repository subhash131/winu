import { TPlayer } from "@/types/player";
import mongoose, { Document, Schema } from "mongoose";

export interface IPlayer extends Document, TPlayer {}

const Player: Schema<IPlayer> = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is missing"],
    },
    imageUrl: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Player || mongoose.model("Player", Player);
