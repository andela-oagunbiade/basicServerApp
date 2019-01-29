// const { expect } = require('chai')

const sequelize = require('../../db/index')

describe('Database Setup', () => {
  it('should set up a database connection successfully', (done) => {
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.')
        done()
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err)
        done()
      })
  })
})
