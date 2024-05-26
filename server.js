const express = require("express");
const path = require("path");

const app = express();

// static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(8000, () => {
  console.log(`Server in on port 8000.`);
});
