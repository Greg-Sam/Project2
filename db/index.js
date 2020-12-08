const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.JAWSDB_URL || 'mysql://root:password@localhost/codebook_db')

module.exports = sequelize
