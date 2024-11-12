/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("pets_meal", (table) => {
        table.increments("id").primary();
        table.integer("pet_id").notNullable();
        table.timestamp("meal_time")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('pets_meal');
};
