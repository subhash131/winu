import mongoose from "mongoose";

export type TVenue = {
  name: string;
  startDate: Date | string;
  endDate: Date | string;
  imageUrl?: string;
  streamLink: string;
  description?: string;
  teams?: mongoose.Types.ObjectId[];
  createdBy: string; //user id from clerk
};
