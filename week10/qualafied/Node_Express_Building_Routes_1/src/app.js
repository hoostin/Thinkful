const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

// Build your routes here
const sayPong = (req, res, next) => {
  res.send("pong!");
};
const sayWelcome = (req, res, next) => {
  res.send("Welcome to my server.");
};
app.use("/ping", sayPong);
app.use("/welcome", sayWelcome);
module.exports = app;
