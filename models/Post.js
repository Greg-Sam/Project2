const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Post extends Model { }

Post.init({
   
  post: {
    type: DataTypes.TEXT('long'),
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'post' })

module.exports = Post