import mongoose from "mongoose";
import colors from "colors";

const connectDb = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB ${mongoose.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`MongoDB Error ${error}`.bgRed.white);
  }
};
