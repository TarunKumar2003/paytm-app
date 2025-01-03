import { Router } from "express";

const testRouter = Router();

testRouter.get("/ping", function (req, res) {
  res.send({
    msg: "pong",
  });
});

export { testRouter };
