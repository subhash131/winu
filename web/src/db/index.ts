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
  const mongoUrl = process.env.MONGO_URL;
  if (!mongoUrl) {
    console.log("Mongo URL Not found");
    return;
  }
  try {
    const db = await mongoose.connect(mongoUrl);
    if (db.connections[0].readyState) {
      connection.isConnected = true;
    }
  } catch (err) {
    console.log("Mongo connection failed:", err);
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
