import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(
      "MongoURI"
    );
    console.log("db Connected ");
  } catch (error) {
    console.error(" mongodb connection error", error);
    process.exit(1);
  }
};
export default connectDB;
