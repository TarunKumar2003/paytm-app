import zod from "zod";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
const signUpSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});
const signup = async (req, res) => {
  const data = req.body;
  const { success } = zod.safeParse(data);

  if (!success) {
    return res.json({
      msg: "Invalid Inputs",
    });
  }

  // Check if User exist or not
  const existedUser = await User.findOne({
    username: data.username,
  });

  if (existedUser) {
    return res.json({
      msg: "User Already Exist",
    });
  }
  // Create user in the Database
  const user = await User.create(data);
  const userId = user._id;
  const token = jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET
  );

  return res.json({
    msg: "user created Successfully",
    token: token,
  });
};

const signin = async (req, res) => {
  const data = req.body;
  const { success } = zod.safeParse(data);
  if (!success) {
    return res.json({
      msg: "incorrect Input",
    });
  }

  const existUser = await User.findOne({ username: data.username });
  if (!existUser) {
    return res.json({
      msg: "User not exist",
    });
  }
};

export { signup };
