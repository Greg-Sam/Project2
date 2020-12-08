const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class User extends Model { }

User.init({
  
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    isEmail: true,
    unique: true
  },
  user_name:{
    type: DataTypes.STRING(64),
    allowNull:false,
    unique: true
  }
  password: {
    type: DataTypes.STRING(64),
    allowNull: false,
  }
  
}, { sequelize, modelName: 'user' })

module.exports = User
