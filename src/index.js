import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { userRoute } from "./routes/user.routes.js";
import { testRouter } from "./routes/test.routes.js";
const port = 3000;
const app = express();
dotenv.config({
  path: "./env",
});
console.log(port);

// Routes
app.use("/api/v1/test", testRouter);
app.use("/api/v1/user", userRoute);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is Started at port ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection Error !!!", err);
  });
