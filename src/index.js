import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/index.js";
import mainRouter from "./routes/index.js";

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config({
  path: "./env",
});

// Routes
app.use("/api/v1", mainRouter);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is Started at port ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection Error !!!", err);
  });
