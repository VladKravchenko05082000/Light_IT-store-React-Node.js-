const { Sequelize } = require('sequelize')

module.exports = new Sequelize(
   'Light_IT-store',
   'postgres',
   'he36vdim',
   {
      dialect: 'postgres',
      host: 'localhost',
      port: '5432'
   }
)