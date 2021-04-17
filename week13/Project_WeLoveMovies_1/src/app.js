if (process.env.USER) require("dotenv").config();
const express = require("express");
//const errorHandler = require("./errors/errorHandler");
function errorHandler(error, request, response, next) {
  const { status = 500, message = "Something went wrong!" } = error;
  response.status(status).json({ error: message });
}
const app = express();

const notFound = require("./errors/notFound");

const moviesRouter = require("./movies/movies.router");
const theaterRouter = require("./theaters/theaters.router");
app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/theaters", theaterRouter);
app.use(notFound);
app.use(errorHandler);
module.exports = app;
