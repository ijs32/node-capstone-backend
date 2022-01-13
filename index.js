const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world!!!");
});

app.get("/positions", (req, res) => {
  res.send(["BTC", "ETH", "SOL"]);
});

app.get("/positions/:id", (req, res) => {
  res.send(req.params.id);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
