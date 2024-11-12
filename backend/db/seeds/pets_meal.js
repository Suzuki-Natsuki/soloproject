/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pets_meal').del()
  const dt = new Date()
  dt.setHours(dt.getHours() + 9)
  await knex('pets_meal').insert([
    {pet_id: 1, meal_time: dt},
  ]);
};
