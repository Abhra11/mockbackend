const express = require("express");
const { TravelModel } = require("../models/travelLog.model");
const travelRouter = express.Router();

travelRouter.get("/", async (req, res) => {
  let query = req.query;
  const travels = await TravelModel.find(query);
  res.send(travels);
});

travelRouter.post("/addLog", async (req, res) => {
  const data = req.body;
  const log = new TravelModel(data);
  await log.save();
  console.log(log);
  res.send("Data added");
});

module.exports = { travelRouter };
