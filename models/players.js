module.exports = function(sequelize, DataTypes) {
  var teamplayer = sequelize.define("teamplayer", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return teamplayer;
};
