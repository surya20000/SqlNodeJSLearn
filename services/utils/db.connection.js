import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectToDatabase = async () => {
  try {
    
    await mongoose.connect(`${process.env.BACKEND_URI}`).then(() => {
      console.log("Connected to db");
    });
  } catch (error) {
    console.log("Error Connecting Database");
    console.log(error.message);
  }
};
