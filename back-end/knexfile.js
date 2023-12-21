// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require("dotenv").config();
const path = require("path");

const {
  DATABASE_URL = "postgres://awembelh:gTzlmocxAxv1XNCen1uB1wXyJR9WBhcO@fanny.db.elephantsql.com/awembelh",
  DATABASE_URL_DEVELOPMENT = "postgres://awembelh:gTzlmocxAxv1XNCen1uB1wXyJR9WBhcO@fanny.db.elephantsql.com/awembelh",
  DATABASE_URL_TEST = "postgres://awembelh:gTzlmocxAxv1XNCen1uB1wXyJR9WBhcO@fanny.db.elephantsql.com/awembelh",
  DATABASE_URL_PREVIEW = "postgres://awembelh:gTzlmocxAxv1XNCen1uB1wXyJR9WBhcO@fanny.db.elephantsql.com/awembelh",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 1 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 1 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
