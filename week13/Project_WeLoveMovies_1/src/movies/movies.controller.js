const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  // await service.list()
  let resultList;
  if (req.query.is_showing) {
    resultList = await service.isShowingList(req.query.is_showing === "true");
  } else {
    resultList = await service.list();
  }
  res.json({ data: resultList });
}

async function movieExists(req, res, next) {
  const movie = await service.read(req.params.movieId);

  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: `Movie cannot be found.` });
}
async function read(req, res, next) {
  res.json({ data: res.locals.movie });
}
module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
  movieExists: asyncErrorBoundary(movieExists),
};
