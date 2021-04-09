const knex = require("../db/connection");

const tableName = "restaurants";

function averageRating() {
  return knex(tableName).avg("rating").as("average").first();
}

function count() {
  return knex(tableName).count("restaurant_id").first();
}

function create(newRestaurant) {
  return knex(tableName)
    .insert(newRestaurant, "*")
    .then((createdRecords) => createdRecords[0]);
}

function destroy(restaurant_id) {
  return knex(tableName).where({ restaurant_id }).del();
}

function list() {
  // return knex(tableName).select("*");
  return knex(tableName)
    .join("owners", "owners.owner_id", "restaurants.owner_id")
    .select(
      "restaurants.restaurant_name",
      "owners.owner_name",
      "owners.email"

      // "*"
    );
  //.orderBy("owners.owner_name");
}

// function listAverageRatingByOwner() {
//   // your solution here
//   return knex(tableName)
//     .join("owners", "owners.owner_id", "restaurants.owner_id")
//     .select(knex.raw("avg(restaurants.rating), owners.owner_name"))
//     .groupBy("owners.owner_name");
//   //return [];
// }
function listAverageRatingByOwner() {
  return knex("owners as o")
    .join("restaurants as r", "r.owner_id", "o.owner_id")
    .select(knex.raw("avg(r.rating), o.owner_name"))
    .groupBy("o.owner_name");
}

function read(restaurant_id) {
  return knex(tableName).select("*").where({ restaurant_id }).first();
}

function readHighestRated() {
  return knex(tableName)
    .max("rating")
    .select("*")
    .groupBy("rating", "restaurant_id")
    .orderBy("rating", "desc")
    .first();
}

function update(updatedRestaurant) {
  return knex(tableName)
    .select("*")
    .where({ restaurant_id: updatedRestaurant.restaurant_id })
    .update(updatedRestaurant, "*");
}

module.exports = {
  averageRating,
  count,
  create,
  delete: destroy,
  list,
  listAverageRatingByOwner,
  read,
  readHighestRated,
  update,
};
