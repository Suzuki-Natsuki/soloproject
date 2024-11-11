const db = require('./knex');

const PETS_TABLE = 'pets';

module.exports = {
  PETS_TABLE,

  /**
   * @param {number} limit - 顧客データの最大数（制限）
   * @return {Promise<Array>} - すべての顧客データ
   */
  async all(limit = 100) {
    const pets_list = await db("pets");
    return pets_list.slice(0, limit);
  }
}