const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Post extends Model { }

Post.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
}, { sequelize, modelName: 'post' })

module.exports = Post
