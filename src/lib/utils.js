import mongoose from "mongoose";

const connection = {};

export const ConnectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to connect to database");
  }
};

export default ConnectToDb;
