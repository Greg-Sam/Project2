const Sequelize = require('sequelize')

const sequelize = new Sequelize('pets_db', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

module.exports = sequelize
