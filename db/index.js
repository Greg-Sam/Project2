const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.JAWSDB_URL || 'mysql://root:MySQL1!@localhost/codebook_db')

module.exports = sequelize