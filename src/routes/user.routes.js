import { Router } from "express";
import { signup } from "../controller/user.controller.js";

const userRoute = Router();

userRoute.post("/signin", signup);
// userRoute.post("/signup", signUpController);
// userRoute.post("/update", signUpController);

export { userRoute };
