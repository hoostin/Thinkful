//const morgan = require("morgan");
const express = require("express");
const validateZip = require(`./middleware/validateZip`);
const getZoos = require(`./utils/getZoos`);
const app = express();

//app.use(path, (req,res,next) =>)
//app.use(morgan("dev"));

app.get("/check/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip;

  if (getZoos(zip) !== undefined) {
    res.send(`${zip} exists in our records.`);
  } else {
    res.send(`${zip} does not exist in our records.`);
  }
});
app.get("/zoos/all", (req, res, next) => {
  if (req.query.admin == "true") {
    const zoos = getZoos();
    // res.send(req.query.admin);
    res.send(`All zoos: ${zoos.join(`; `)}`);
  } else {
    res.send(`You do not have access to that route.`);
  }
});
app.get("/zoos/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip;
  const zoos = getZoos(zip);
  if (zoos !== undefined && zoos.length != 0) {
    res.send(`${zip} zoos: ${zoos.join(`; `)}`);
  } else {
    res.send(`${zip} has no zoos.`);
  }
});
app.use((req, res, next) => {
  res.send(`That route could not be found!`);
});
app.use((err, req, res, next) => {
  console.error(err);
  res.send(err);
});

module.exports = app;
