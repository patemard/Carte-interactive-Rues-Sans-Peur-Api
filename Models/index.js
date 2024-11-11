 const dbConfig = require("../db.config.js");

const dotenv = require('dotenv');


// Load the appropriate .env file based on NODE_ENV
const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.dev';
dotenv.config({ path: envFile });


const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
  pool: {
    çmax: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {
  Sequelize,
  sequelize,
  tags: require("./tag.js")(sequelize, Sequelize),
  pass: require("./pass.js")(sequelize, Sequelize)
};

module.exports = db;