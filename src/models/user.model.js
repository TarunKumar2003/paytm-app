import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  firstName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    index: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

export const User = mongoose.model("User", userSchema);
