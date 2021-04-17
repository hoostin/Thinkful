const knex = require("../db/connection");
const tableName = "movies";

function list() {
  return knex(tableName).select("*");
}
function isShowingList(isShowing) {
  return knex(tableName)
    .join("movies_theaters", "movies.movie_id", "movies_theaters.movie_id")
    .select("movies.*", "movies_theaters.is_showing")
    .groupBy("movies.movie_id")
    .where({ is_showing: isShowing });
}
//"movies.movie_id as id",
function read(movieId) {
  return knex(tableName).select("*").where({ movie_id: movieId }).first();
}
module.exports = {
  list,
  isShowingList,
  read,
};
