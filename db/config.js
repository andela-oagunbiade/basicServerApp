require('dotenv').config()

module.exports = {
  test: {
    dialect: process.env.TEST_DB_DIALECT,
    host: process.env.TEST_DB_HOST,
    port: process.env.TEST_DB_PORT,
    dbName: process.env.TEST_DB_NAME,
    username: process.env.TEST_DB_USERNAME,
    password: process.env.TEST_DB_PASSWORD,
  },
  development: {
    dialect: process.env.DEV_DB_DIALECT,
    host: process.env.DEV_DB_HOST,
    port: process.env.DEV_DB_PORT,
    dbName: process.env.DEV_DB_NAME,
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
  },
  'production': {
    dialect: process.env.PROD_DB_DIALECT,
    host: process.env.PROD_DB_HOST,
    port: process.env.PROD_DB_PORT,
    dbName: process.env.PROD_DB_NAME,
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
  }
}
