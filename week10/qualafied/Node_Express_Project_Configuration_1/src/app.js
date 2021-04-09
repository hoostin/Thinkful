const express = require("express");
const app = express();
const sayHello = (req, res, next) => {
  res.send("Hello!");
};
module.exports = app;
