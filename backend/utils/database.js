import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();   // load .env BEFORE accessing variables

const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Database connection error:", error);
  }
};

export default databaseConnection;
