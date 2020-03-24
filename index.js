// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
const NBA = require("nba");
const TeamID = NBA


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


///Inserting the data//////
//Golden State Warriors//////
app.post("/api/players", function(req, res) {
  NBA.stats.commonTeamRoster({TeamID: 1610612744}).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  console.log(TeamID);
  
  /////Atlanta Hawks/////
  NBA.stats.commonTeamRoster({TeamID:1610612737 }).then(db.teamplayer.create({
    first_name:req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  /////Boston Celtics //////
  NBA.stats.commonTeamRoster({TeamID:1610612738 }).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  ////Charlotte- Hornets//////
  NBA.stats.commonTeamRoster({TeamID:1610612766 }).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  //// Chicago Bulls///////
  NBA.stats.commonTeamRoster({TeamID:1610612741 }).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  ////// Brooklyn Nets/////
  NBA.stats.commonTeamRoster({TeamID:1610612751 }).then(db.teamplayer.create({
    first_name: req.body.text,
    last_nam: req.body.text,
    team_name: req.body.text
  })); 
  res.json(dbteamplayer);
  /////Cleveland Cavaliers////
  NBA.stats.commonTeamRoster({TeamID:1610612739 }).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  ///// Dallas Mavericks/////
  NBA.stats.commonTeamRoster({TeamID:1610612742}).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  ////Denver Nuggets/////
  NBA.stats.commonTeamRoster({TeamID:1610612743 }).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer)
  /////Detroit Pistons////
  NBA.stats.commonTeamRoster({TeamID:1610612765 }).then(db.teamplayer.create({
    first_name: req.body.text,
    last_nam: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  ////Houston Rockets////
  NBA.stats.commonTeamRoster({TeamID:1610612745 }).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer)
  /////Indiana Pacers///
  NBA.stats.commonTeamRoster({TeamID:1610612754 }).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  //// Los Angeles Clippers///
  NBA.stats.commonTeamRoster({TeamID:1610612746 }).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  ///Los Angeles Lakers///
  NBA.stats.commonTeamRoster({TeamID:1610612747}).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  ///Memphis Grizzlies////
  NBA.stats.commonTeamRoster({TeamID:1610612763 }).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  ///Miami Heat///
  NBA.stats.commonTeamRoster({TeamID:1610612748 }).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  ///Milwaukee Bucks///
  NBA.stats.commonTeamRoster({TeamID:1610612749 }).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  ///TimberWolves//
  NBA.stats.commonTeamRoster({TeamID:1610612750 }).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  
  }));
  ///Pelicans////
  NBA.stats.commonTeamRoster({TeamID:1610612740 }).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  ///Knicks///
  NBA.stats.commonTeamRoster({TeamID:1610612752}).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  ////OKC////
  NBA.stats.commonTeamRoster({TeamID:1610612760}).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  ////Magic///
  NBA.stats.commonTeamRoster({TeamID:1610612753 }).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  ////76ers///
  NBA.stats.commonTeamRoster({TeamID:1610612755 }).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(teamplayer);
  ////Suns////
  NBA.stats.commonTeamRoster({TeamID:1610612756 }).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  /////Blazers////
  NBA.stats.commonTeamRoster({TeamID: 1610612757}).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  ///Kings///
  NBA.stats.commonTeamRoster({TeamID:1610612758}).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  ///Spurs
  NBA.stats.commonTeamRoster({TeamID:1610612759}).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  ///Raptors////
  NBA.stats.commonTeamRoster({TeamID:1610612761}).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  ///Jazz///
  NBA.stats.commonTeamRoster({TeamID:1610612762}).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer);
  ///Wizards///
  NBA.stats.commonTeamRoster({TeamID:1610612764}).then(db.teamplayer.create({
    first_name: req.body.text,
    last_name: req.body.text,
    team_name: req.body.text
  }));
  res.json(dbteamplayer); 
  

  
})

