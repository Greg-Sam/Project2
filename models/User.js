const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class User extends Model { }

User.init({
  // name: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // },
  // email: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // },
  // phone: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false
  // }
}, { sequelize, modelName: 'user' })

module.exports = User
