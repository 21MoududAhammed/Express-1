const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Do what you can, with what you have, where you are." });
});

app.listen(8000, () => {
  console.log(`Server in on port 8000.`);
});
