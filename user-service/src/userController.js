/* user-service/src/userController.js */
const express = require("express");
const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
  res.json({ message: "User logged in successfully" });
});

app.get("/profile", (req, res) => {
  res.json({ message: "User profile details" });
});

app.listen(3000, () => console.log("User Service running on port 3000"));
