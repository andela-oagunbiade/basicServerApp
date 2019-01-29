require('dotenv').config()

const Sequelize = require('sequelize')
const config = require('./config')

const env = process.env.NODE_ENV
const { dialect, host, port, dbName, username, password } = config(env)

const sequelize = new Sequelize(`${dialect}://${username}:${password}@${host}:${port}/${dbName}`)

module.exports = sequelize
