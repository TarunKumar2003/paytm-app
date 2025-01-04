import { Router } from "express";
import { userRoute } from "./user.routes.js";
import { testRouter } from "./test.routes.js";

const mainRouter = Router();

mainRouter.use("/user", userRoute);
mainRouter.use("/test", testRouter);

export default mainRouter;
