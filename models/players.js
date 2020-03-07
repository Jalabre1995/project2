module.exports = function(sequelize, DataTypes) {
    var players = sequelize.define("players", {
        text: DataTypes.STRING,
        complete: Datatypes.BOOLEAN
    });
    return players;
}
