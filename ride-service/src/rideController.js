const express = require("express");
const app = express();
app.use(express.json());

app.post("/request", (req, res) => {
  res.json({ message: "Ride requested successfully" });
});

app.get("/status", (req, res) => {
  res.json({ message: "Ride status details" });
});

app.listen(3002, () => console.log("Ride Service running on port 3002"));
