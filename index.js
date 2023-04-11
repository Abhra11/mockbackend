const express = require("express");
require("dotenv").config();
const { connection } = require("./configs/db");
const { travelRouter } = require("./routes/travelLog.route");
const cors = require("cors");
// const { TravelModel } = require("./models/travelLog.model");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HomePage");
});

app.use("/travels", travelRouter);

app.listen(process.env.port, async () => {
  try {
    connection;
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
  console.log("Server is running");
});
