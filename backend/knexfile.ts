import type { Knex } from "knex";
import * as dotenv from 'dotenv'
dotenv.config();
// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT as unknown as number,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/models/migrations",
    },
    seeds: {
      directory: `${__dirname}/src/models/seeds`,
    },
  },
};

module.exports = config;
