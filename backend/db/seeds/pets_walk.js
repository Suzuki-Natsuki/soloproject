/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pets_walk').del()
  await knex('pets_walk').insert([
    {pet_id: 1, walk_time: new Date()},
  ]);
};
