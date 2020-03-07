//////Dependencies //////////////
var db = require("../models");
const NBA = require("nba");

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


//////Get the NBA Players/////
const NBA = require("nba");
const curry = NBA.findPlayer('Stephen Curry');
console.log(curry);
/* logs the following:
{
  firstName: 'Stephen',
  lastName: 'Curry',
  playerId: 201939,
  teamId: 1610612744,
  fullName: 'Stephen Curry',
  downcaseName: 'stephen curry'
}
*/
NBA.stats.playerInfo({ PlayerID: curry.teamId }).then(console.log);
