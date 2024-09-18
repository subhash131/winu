"use server";
import mongoose from "mongoose";

export const connection: {
  isConnected: boolean;
} = {
  isConnected: false,
};

async function connect() {
  if (connection.isConnected) {
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState === 1;
    if (connection.isConnected) {
      return;
    }
    await mongoose.disconnect();
  }
  const mongoUrl = process.env.MONGO_URL;
  if (!mongoUrl) {
    throw new Error("Mongo URL Not found");
  }
  try {
    const db = await mongoose.connect(mongoUrl);
    connection.isConnected = db.connections[0].readyState === 1;
    mongoose.connection.on("error", (err) => {
      console.log("Mongodb Connection failed", err);
      process.exit();
      connection.isConnected = false;
    });
  } catch (err) {
    console.log("🚀 ~ connection ~ err:", err);
  }
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
    }
  }
  console.log(connection);
}

export { connect, disconnect };
