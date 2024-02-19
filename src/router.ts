import express from "express";

const router = express.Router();

router.use((_req, _res, next) => {
  next();
});

router.get("/", (_req, res) => res.status(200).send("OK"));

router.post("/report/csp", (req, res) => {
  console.log(req.body);
  res.status(204).send();
});

export default router;
