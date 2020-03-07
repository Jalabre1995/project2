//////Dependencies //////////////
var db = require("../models");

////Routes////////

module.exports = function(app) {
    ///Get route for all the NBA players/////
    app.get("/api/players", function(req, res) {
        if(req.params.players){
            db.NBA.findPlayer({
                where: {
                    routeName: req.params.players
                }
            }).then(function(result){
                return res.json(result);
            });
        }else{
            db.findAll().then(function(result){
                return res.json(result);
            });
        }
    })
}
