const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Posts extends Model { }

Posts.init({
 
  
  log{
    type: DataTypes.TEXT('long'),
    allowNull: false
  }
  
  
}, { sequelize, modelName: 'user_logs' })

module.exports = Posts
