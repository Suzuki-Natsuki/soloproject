/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pets').del()
  await knex('pets').insert([
    {name: 'Rio', birthday: new Date("2016/12/29"), dog_breed: "シェルティー" },
  ]);
};
