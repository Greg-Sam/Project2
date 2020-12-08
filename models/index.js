const User = require('./users.js')
const Posts = require('./posts.js')

Users.hasMany(posts)
Posts.belongsTo(users)

module.exports = { User, Posts }
