///Dependecies///

var Player =  require("../models/players.js");

//Routes//
//=====================================
module.exports = function(app) {
    //Search for a specific Player( or all players on team the Provides the Json)
    app.get('/api/:players?', function(req, res){
        if(req.params.players){
        ///Display the Json for only that player.
        //Using the ORM to run our searches//
        Player.findOne({
            where: {
                routeName: req.params.players
            }
        }).then(function(result){
            return res.json(result);
        });
        }else {
            Player.findAll().then(function(result){
                return res.json(result);
            });
        }
    });

    ///If the user want to add a new character into the database..
    app.post('/api/new', function(req, res){
        //Take the request....
        var player = req.body;
        //Create a routeName
        
        var routeName = player.name.replace(/\s+/g,"").toLowerCase();
        //Then add the character to the database using sequelize/
        Player.create({
            routeName: routeName,
            first_name: player.first_name,
            last_name: player.last_name,
            position: player.position

        });
        res.status(204).end();
    });
};

