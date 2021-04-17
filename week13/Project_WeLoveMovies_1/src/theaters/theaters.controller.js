const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  let resultList;
  if (res.locals.movie) {
    const movieId = res.locals.movie.movie_id;
    resultList = await service.listByMovie(movieId);
  } else {
    resultList = await service.list();
  }
  res.json({ data: resultList });
}
module.exports = {
  list: asyncErrorBoundary(list),
};
