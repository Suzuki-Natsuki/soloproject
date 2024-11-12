/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pets_walk').del()
  const dt = new Date()
  dt.setHours(dt.getHours() + 9)
  await knex('pets_walk').insert([
    {pet_id: 1, walk_time: dt},
  ]);
};
