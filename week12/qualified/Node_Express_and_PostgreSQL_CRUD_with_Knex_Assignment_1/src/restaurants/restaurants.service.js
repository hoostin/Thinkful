const knex = require("../db/connection");

function list() {
  return knex("restaurants").select("restaurant_name", "restaurant_cuisine");
}

function create(restaurant) {
  return knex("restaurants")
    .insert(restaurant)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

function read(restaurant_id = 0) {
  return knex("restaurants").select("*").where({ restaurant_id }).first();
}

function update(updatedRestaurant) {
  return knex("restaurants")
    .select("*")
    .where({ restaurant_id: updatedRestaurant.restaurant_id })
    .update(updatedRestaurant, "*");
}

function destroy(restaurant_id) {
  // your solution here
  return knex("restaurants").where({ restaurant_id: restaurant_id }).del();
}

module.exports = {
  create,
  list,
  read,
  update,
  delete: destroy,
};
