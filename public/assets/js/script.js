let teams= [];
let players = [];

var apikey = "fb9b91df09mshfca743803dc78cfp1e4055jsnd80bf90f79b2"

$.ajax({
    url: 'https://api-nba-v1.p.rapidapi.com/teams/teamId/1',
    method: 'GET',
    headers: {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
	"x-rapidapi-key": "fb9b91df09mshfca743803dc78cfp1e4055jsnd80bf90f79b2"
    }
}).then(function(response){
    teams = response.count;
    console.log(response);
})


 $.ajax({
     url: 'https://api-nba-v1.p.rapidapi.com/players/',
     method: 'GET',
     headers: {
         "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
 	"x-rapidapi-key": "fb9b91df09mshfca743803dc78cfp1e4055jsnd80bf90f79b2"
     }
 }).then(function(response){
     players = response.count;
     console.log(response);
 })

 
