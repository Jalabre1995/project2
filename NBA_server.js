const NBA = require("nba");
const curry = NBA.findPlayer('Stephen Curry');
const Team = NBA
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

/////Atlanta Hawks/////
NBA.stats.commonTeamRoster({TeamID:1610612737 }).then(console.log);
/////Boston Celtics //////
NBA.stats.commonTeamRoster({TeamID:1610612738 }).then(console.log);
////Charlotte- Hornets//////
NBA.stats.commonTeamRoster({TeamID:1610612766 }).then(console.log);
//// Chicago Bulls///////
NBA.stats.commonTeamRoster({TeamID:1610612741 }).then(console.log);
////// Brooklyn Nets/////
NBA.stats.commonTeamRoster({TeamID:1610612751 }).then(console.log);
/////Cleveland Cavaliers////
NBA.stats.commonTeamRoster({TeamID:1610612739 }).then(console.log);
///// Dallas Mavericks/////
NBA.stats.commonTeamRoster({TeamID:1610612742}).then(console.log);
////Denver Nuggets/////
NBA.stats.commonTeamRoster({TeamID:1610612743 }).then(console.log);
/////Detroit Pistons////
NBA.stats.commonTeamRoster({TeamID:1610612765 }).then(console.log);
////Houston Rockets////
NBA.stats.commonTeamRoster({TeamID:1610612745 }).then(console.log);
/////Indiana Pacers///
NBA.stats.commonTeamRoster({TeamID:1610612754 }).then(console.log);
//// Los Angeles Clippers///
NBA.stats.commonTeamRoster({TeamID:1610612746 }).then(console.log);
///Los Angeles Lakers///
NBA.stats.commonTeamRoster({TeamID:1610612747}).then(console.log);
///Memphis Grizzlies////
NBA.stats.commonTeamRoster({TeamID:1610612763 }).then(console.log);
///Miami Heat///
NBA.stats.commonTeamRoster({TeamID:1610612748 }).then(console.log);
///Milwaukee Bucks///
NBA.stats.commonTeamRoster({TeamID:1610612749 }).then(console.log);
///TimberWolves//
NBA.stats.commonTeamRoster({TeamID:1610612750 }).then(console.log);
///Pelicans////
NBA.stats.commonTeamRoster({TeamID:1610612740 }).then(console.log);
///Knicks///
NBA.stats.commonTeamRoster({TeamID:1610612752}).then(console.log);
////OKC////
NBA.stats.commonTeamRoster({TeamID:1610612760}).then(console.log);
////Magic///
NBA.stats.commonTeamRoster({TeamID:1610612753 }).then(console.log);
////76ers///
NBA.stats.commonTeamRoster({TeamID:1610612755 }).then(console.log);
////Suns////
NBA.stats.commonTeamRoster({TeamID:1610612756 }).then(console.log);
/////Blazers////
NBA.stats.commonTeamRoster({TeamID: 1610612757}).then(console.log);
///Kings///
NBA.stats.commonTeamRoster({TeamID:1610612758}).then(console.log);
///Spurs
NBA.stats.commonTeamRoster({TeamID:1610612759}).then(console.log);
///Raptors////
NBA.stats.commonTeamRoster({TeamID:1610612761}).then(console.log);
///Jazz///
NBA.stats.commonTeamRoster({TeamID:1610612762}).then(console.log);
///Wizards///
NBA.stats.commonTeamRoster({TeamID:1610612764}).then(console.log);





