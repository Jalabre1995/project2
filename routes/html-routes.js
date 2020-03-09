////Dependecies////

var path = require('path');

//Routes
///===================================

module.exports = function(app) {
    ///Each of the routes below handles the HTML page that the user gets sent to.
     
    ///Index route loades view.html
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // game route loads the game.html page,
  // where users can enter new players to the db
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/game.html"));
  });



};

    