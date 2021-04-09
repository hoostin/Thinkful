const express = require("express");
const app = express();

const users = require("./data/users-data");
const states = require("./data/states-data");

// TODO: return an array of users from /users in form of { data: Array }
app.get("/users", (req, res, next) => {
  res.send({ data: users });
});
// TODO: return a single user by id from /users/:userId in form of { data: Object }
app.get("/users/:userId", (req, res, next) => {
  const user = users.find((theUser) => theUser.id == req.params.userId);

  if (user) {
    res.send({ data: user });
  } else {
    res.send(`User ID not found: ${req.params.userId}`);
  }
});
// TODO: return all states from /states in the form of { data: Array }
app.get("/states", (req, res, next) => {
  res.send({ data: { ...states } });
});
// TODO: Return a single state from /states/:stateCode in the form of { data: { stateCode: String, name: String } }
app.get("/states/:stateCode", (req, res, next) => {
  const stateCode = req.params.stateCode;
  const name = states[stateCode];
  const state = { stateCode: stateCode, name: name };
  if (name) {
    res.send({ data: state });
  } else {
    res.send(`State code not found: ${stateCode}`);
  }
});
// TODO: add not found handler
app.use((req, res, next) => {
  res.send(`Not found: ${req.originalUrl}`);
});
// TODO: Add error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.send(err);
});
module.exports = app;
