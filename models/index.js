const User = require('./users.js')
const Logs = require('./user_logs.js')

users.hasMany(user_log)
Logs.belongsTo(users)

module.exports = { User, Logs }
