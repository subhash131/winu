import mongoose from "mongoose";

export type TTeam = {
  name: string;
  imageUrl: string;
  description: string;
  players: mongoose.Types.ObjectId[];
};
