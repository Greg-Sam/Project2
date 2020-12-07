const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Post extends Model { }

Post.init({
  
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'post' })

module.exports = Post
