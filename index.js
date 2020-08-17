const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

require("./database");
const Children = require("./Schema/Children");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());

app.use(express.json());

app.post("/child", (req, res) => {
  const child = new Children(req.body);
  child
    .save()
    .then(() => {
      res.send(req.body);
    })
    .catch((e) => {
      res.send(e);
    });
});

app.get("/child", (req, res) => {
  Children.findOne().then((user) => {
    res.send(user).status(200);
  }).catch(e => {
res.send(e).status(404)
  });
});

app.listen(PORT, () => {
  console.log("running on port " + PORT);
});
