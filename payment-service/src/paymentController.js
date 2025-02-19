const express = require("express");
const app = express();
app.use(express.json());

app.post("/pay", (req, res) => {
  res.json({ message: "Payment processed successfully" });
});

app.get("/history", (req, res) => {
  res.json({ message: "Payment history details" });
});

app.listen(3003, () => console.log("Payment Service running on port 3003"));
