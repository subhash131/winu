import mongoose, { Document, Schema } from "mongoose";

export interface IPlayer extends Document {
  username: string;
  imageUrl: string;
  description: string;
}

const Player: Schema<IPlayer> = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is missing"],
      unique: true,
    },
    imageUrl: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Player || mongoose.model("Player", Player);
