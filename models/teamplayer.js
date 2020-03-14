module.exports = function (sequelize, DataTypes) {
    var teamplayer = sequelize.define('teamplayer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        team_name: {
            type: DataTypes.STRING,
        }
        
    },{
        timestamps:false
    });
    return teamplayer;
};


