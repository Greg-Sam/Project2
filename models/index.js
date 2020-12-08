const User = require('./users.js')
const Posts = require('./posts.js')

Users.hasMany(Posts)
Posts.belongsTo(Users)

module.exports = { User, Posts }
