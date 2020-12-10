const User = require('./User.js')
const Posts = require('./Post.js')

User.hasMany(Posts)
Posts.belongsTo(User)

module.exports = { User, Posts }
