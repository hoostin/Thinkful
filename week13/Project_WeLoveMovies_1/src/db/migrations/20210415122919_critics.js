exports.up = function (knex) {
  return knex.schema.createTable("critics", (table) => {
    table.increments("critic_id").primary();
    table.string("preferred_name");
    table.integer("surname");
    table.string("organization_name");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("critics");
};
