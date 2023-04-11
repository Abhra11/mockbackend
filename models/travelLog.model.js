const mongoose = require("mongoose");
const travelSchema = mongoose.Schema({
  name: String,
  email: String,
  destination: String,
  trvellers: Number,
  budget: Number,
});

const TravelModel = mongoose.model("travel", travelSchema);
module.exports = { TravelModel };
