const morgan = require("morgan");
const express = require("express");

const app = express();
const sayHello = (req, res) => {
  console.log(req.query);
  const name = req.query.name;
  const content = name ? `Hello, ${name}!` : "Hello!";
  res.send(content);
};
const saySomething = (req, res) => {
  const greeting = req.params.greeting;
  const name = req.query.name;

  const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
  res.send(content);
};
const logging = (req, res, next) => {
  console.log("A request is being made!");
  next();
};
const checkForAbbreviationLength = (req, res, next) => {
  const abbreviation = req.params.abbreviation;
  if (abbreviation.length !== 2) {
    next(`State abbreviation "${abbreviation}" is invalid.`);
  } else {
    next();
  }
};
app.get("/say/:greeting", saySomething);
app.use(morgan("dev"));
app.use("/hello", sayHello);
app.get(
  "/states/:abbreviation",
  checkForAbbreviationLength,
  (req, res, next) => {
    const abbreviation = req.params.abbreviation;

    res.send(`${abbreviation} is a nice state, I'd like to visit.`);
  }
);

app.get(
  "/travel/:abbreviation",
  checkForAbbreviationLength,
  (req, res, next) => {
    const abbreviation = req.params.abbreviation;

    res.send(`Enjoy your trip to ${abbreviation}!`);
  }
);
app.use((req, res, next) => {
  res.send(`The route ${req.path} does not exist!`);
});
app.use((err, req, res, next) => {
  console.error(err);
  res.send(err);
});
module.exports = app;
