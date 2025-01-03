import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hs1957490:Nishu%402001@cluster0.qhlqz6y.mongodb.net/paytm?retryWrites=true&w=majority"
    );
    console.log("db Connected ");
  } catch (error) {
    console.error(" mongodb connection error", error);
    process.exit(1);
  }
};
export default connectDB;
