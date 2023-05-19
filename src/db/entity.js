const mysql = require('mysql2/promise');
const { Pool } = require('pg');
const tableConstraints = require('./../utils/tableConstraints');
const _ = require('lodash')
class Entity {
  constructor( table , config) {
    this.table = table
    this.connection = new Pool(
      {
        user: "postgres",
        database: "postgres",
        password: "ravi",
        port: 5432,
        host: "localhost",
      }
    )
  }
  async rawQuery(query, values){
    const result  = await this.connection.query(query, values);
    return result.rows;
  }

  async create(data) {
    const columnDetails = tableConstraints[this.table];
    let entityData = _.pick(data, _.keys(columnDetails));
    const columns = Object.keys(entityData).join(', ');
    const values = Object.values(entityData);
    const placeholders = values.map((_, index) => '$' + (index + 1)).join(', ');
    const query = `INSERT INTO ${this.table} (${columns}) VALUES (${placeholders}) returning id`;
    const result  = await this.connection.query(query, values);
    return result.rows[0];
  }

  async read(id) {
    const query = `SELECT * FROM ${this.table} WHERE id = $1`;
    const result = await this.connection.query(query, [id]);
    if (result.rows.length === 0) {
      throw new Error(`${this.table} not found`);
    }
    return result.rows[0];
  }

  async update(id, data) {
    const updates = Object.keys(data).map((key, index) => `${key} = $${index + 1}`).join(', ');
    const values = [...Object.values(data), id];
    const query = `UPDATE ${this.table} SET ${updates} WHERE id = $${values.length}`;
    await this.connection.query(query, values);
  }

  async delete(id) {
    const query = `DELETE FROM ${this.table} WHERE id = $1`;
    await this.connection.query(query, [id]);
  }
}

module.exports = (tableName) => new Entity(tableName);
module.exports.Entity = Entity;
