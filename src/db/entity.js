const mysql = require('mysql2/promise');
const { Pool } = require('pg');
const tableConstraints = require('./../utils/tableConstraints');
const _ = require('lodash')
class Entity {
  constructor(config) {
    this.connection = new Pool(
      {
        user: "postgres",
        database: "postgres",
        password: "ravi",
        port: 5433,
        host: "localhost",
      }
    )
  }

  async create(table, data) {
    const columnDetails = tableConstraints[table];
    let entityData = _.pick(data, _.keys(columnDetails));
    const columns = Object.keys(entityData).join(', ');
    const values = Object.values(entityData);
    const placeholders = values.map((_, index) => '$' + (index + 1)).join(', ');
    const query = `INSERT INTO ${table} (${columns}) VALUES (${placeholders}) returning id`;
    const result  = await this.connection.query(query, values);
    return result.rows[0];
  }

  async read(table, id) {
    const query = `SELECT * FROM ${table} WHERE id = $1`;
    const result = await this.connection.query(query, [id]);
    if (result.rows.length === 0) {
      throw new Error(`${table} not found`);
    }
    return result.rows[0];
  }

  async update(table, id, data) {
    const updates = Object.keys(data).map((key, index) => `${key} = $${index + 1}`).join(', ');
    const values = [...Object.values(data), id];
    const query = `UPDATE ${table} SET ${updates} WHERE id = $${values.length}`;
    await this.connection.query(query, values);
  }

  async delete(table, id) {
    const query = `DELETE FROM ${table} WHERE id = $1`;
    await this.connection.query(query, [id]);
  }
}

module.exports = (tableName) => new Entity(tableName);
module.exports.Entity = Entity;
