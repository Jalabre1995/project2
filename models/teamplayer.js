module.exports = function (sequelize, DataTypes) {
    var teamplayer = sequelize.define('teamplayer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        teamName: {
            type: DataTypes.STRING,
        }
        
    },{
        timestamps:false
    });
    return teamplayer;
};


