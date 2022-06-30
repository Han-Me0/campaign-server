const Campaign = require("../models/Campaign.model");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
})

router.get("/campaigns", async (req, res, next) => {
  const campaigns = await Campaign.find()
  res.json(campaigns)
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
