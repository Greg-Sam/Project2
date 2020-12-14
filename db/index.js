const Sequelize = require('sequelize')

const sequelize = new Sequelize('hh338e82a5z5jelk', 'ctti4zuaelhzg6k0', 'ze1deyzf28dscrmz', {
  host: 'dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

module.exports = sequelize

