const NBA = require("nba");
const TeamID = NBA
// var Team = [1610612744,1610612737,1610612738,1610612766,1610612741,1610612751,1610612739,1610612742,1610612743,1610612765,1610612745,1610612754,
//     1610612746,,1610612747,1610612763,1610612748,1610612749,1610612750,1610612740,1610612752,1610612760,1610612753,1610612755,1610612756,1610612757,
//     1610612758,1610612759,1610612761,,1610612762,1610612764];
//     for (var i = 0; i < Team.length; i++) {
//         // text +=Team[i] + "<br>"
//         NBA.stats.commonTeamRoster({TeamID: Team[i]}).then(console.log);
//         console.log('here');
//     }



//Golden State Warriors//////
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






