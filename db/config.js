require('dotenv').config()

const envPrefixMap = {
  test: 'TEST',
  development: 'DEV',
  production: 'PROD'
}

const config = (env) => {
  const prefix = envPrefixMap[env]

  return {
    dialect: process.env[`${prefix}_DB_DIALECT`],
    host: process.env[`${prefix}_DB_HOST`],
    port: process.env[`${prefix}_DB_PORT`],
    dbName: process.env[`${prefix}_DB_NAME`],
    username: process.env[`${prefix}_DB_USERNAME`],
    password: process.env[`${prefix}_DB_PASSWORD`],
  }
}

module.exports = config
