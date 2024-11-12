const db = require('./knex');

const PETS_TABLE = 'pets';

module.exports = {
  PETS_TABLE,

  async all(limit = 100) {
    const pets_list = await db("pets");
    return pets_list.slice(0, limit);
  },

  async walkDataAll(limit = 100) {
    const pets_list = await db("pets_walk");
    return pets_list.slice(0, limit);
  },

  async walkTimeSave(payload) {
    return  await db('pets_walk').insert(payload);
  },
}