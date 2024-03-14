const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middlewares

app.use(cors());
app.use(express.json());

// main

app.get("/", (req, res) => {
  res.send("Coffee-store-server-Running");
});
app.listen(port, () => {
  console.log(`coffee-server-is-running-on-PORT: ${port}`);
});
