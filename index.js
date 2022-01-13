const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world!!!");
});

app.get("/positions", (req, res) => {
  res.send(["BTC", "ETH", "SOL"]);
});
app.listen(3000, () => console.log("Listening on port 3000"));
