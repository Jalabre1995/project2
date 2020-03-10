// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("teamplayer", "root", "", {
  host: "localhost",
  port: 8080,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

 
//Test DB
db.authenticate()
.then(() => console.log('Database conncected...'))
.catch( err =>console.log('error:' + err))

// Exports the connection for other files to use
module.exports = sequelize;