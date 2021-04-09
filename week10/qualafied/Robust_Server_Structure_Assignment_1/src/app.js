const express = require("express");

const app = express();
const urlsRouter = require("./urls/urls.router");
const usesRouter = require("./uses/uses.router");
app.use(express.json());
app.use("/urls", urlsRouter);
app.use("/uses", usesRouter);
// TODO: Add code to meet the requirements and make the tests pass.

// Not found handler
app.use((req, res, next) => {
  return next({ status: 404, message: `Not found: ${req.originalUrl}` });
});
// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});
module.exports = app;
