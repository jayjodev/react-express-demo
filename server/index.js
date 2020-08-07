const path = require("path");
const express = require("express");
const compress = require("compression");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/mini-project-lunch");

app.use(compress());
app.use(bodyParser.json());

// controllers
require("./controllers/person.controller")(app);

const buildDir = path.resolve(__dirname, "..", "build");
app.use(express.static(buildDir));
app.get("/", function (req, res) {
  res.sendFile(path.join(buildDir, "index.html"));
});

app.listen(2018, function () {
  console.log("Lunch app is listening on port 2018!"); // eslint-disable-line no-console
});
