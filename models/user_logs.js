const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Logs extends Model { }

Logs.init({
  
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
  log{
    type: DataTypes.TEXT,
    allowNull: false
  }
  
}, { sequelize, modelName: 'user_logs' })

module.exports = Logs
