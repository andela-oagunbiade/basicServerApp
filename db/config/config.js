require('dotenv').config()

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: process.env.DEV_DATABASE_DIALECT
    // username: process.env.DEV_DB_USERNAME,
    // password: process.env.DEV_DB_PASSWORD,
    // database: process.env.DEV_DB_NAME,
    // host: process.env.DEV_DB_HOST
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: process.env.TEST_DATABASE_DIALECT
    // username: process.env.TEST_DB_USERNAME,
    // password: process.env.TEST_DB_PASSWORD,
    // database: process.env.TEST_DB_NAME,
    // host: process.env.TEST_DB_HOST,
    // dialect: process.env.TEST_DB_DIALECT
  },
  production: {
    url: process.env.PROD_DATABASE_URL,
    dialect: process.env.PROD_DATABASE_DIALECT
    // username: process.env.PROD_DB_USERNAME,
    // password: process.env.PROD_DB_PASSWORD,
    // database: process.env.PROD_DB_NAME,
    // host: process.env.PROD_DB_HOST,
    // dialect: process.env.PROD_DB_DIALECT
  }
}
