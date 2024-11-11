/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("pets", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.timestamp("birthday").notNullable();
        table.string("dog_breed").notNullable();
        table.string("picture_src").notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('pets');
};
