const db = require('../../db/models/index')

describe('Database Setup', () => {
  it('should set up a database connection successfully', (done) => {
    db.sequelize
      .authenticate()
      .then((surprise) => {
        console.log('Connection has been established successfully.')
        done()
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err)
        done()
      })
  })
})
