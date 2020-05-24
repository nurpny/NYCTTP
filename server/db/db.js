const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  { logging: false }
)

// global mocha hook for resource cleanup
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}

module.exports = db
