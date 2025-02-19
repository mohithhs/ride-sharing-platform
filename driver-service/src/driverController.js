const express = require("express");
const app = express();
app.use(express.json());

app.post("/register", (req, res) => {
  res.json({ message: "Driver registered successfully" });
});

app.get("/details", (req, res) => {
  res.json({ message: "Driver details" });
});

app.listen(3001, () => console.log("Driver Service running on port 3001"));
