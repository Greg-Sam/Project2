const Sequelize = require('sequelize')

const sequelize = new Sequelize('codebook_db', 'root', 'MySQL1!', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

module.exports = sequelize

