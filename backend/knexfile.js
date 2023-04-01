const dotenv = require("dotenv");
dotenv.config();

// Update with your config settings.

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
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
