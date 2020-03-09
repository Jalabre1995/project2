
// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Player = sequelize.define("player", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
  // the name of the player (a string)
  first_name: Sequelize.STRING,
  // the players last name  (a string)
  last_name: Sequelize.STRING,
  // the character's age (a string)
  position: Sequelize.INTEGER,
  
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});

// Syncs with DB
Player.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Player;
