// Wrap every letter in a span
var textWrapper = document.querySelector('.glow');
var textContent = document.querySelector('.col-md-12')
var fadeContainer = document.querySelector(".fade")
var dropbtn = $(".dropdown")
var divdrop = $("<div>")
var playerDiv = $("<div>").addClass("playerInfo")
var link = $("<button>").text("link")
var id = ""
var playerSelected = false
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textContent.innerhtml = textWrapper.textContent.replace(/\S/g, "<span class='logo'>$&</span>");

anime.timeline({ loop: false })
  .add({
    targets: '.glow .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,

  });


anime.timeline({ loop: false })
  .add({
    targets: '.col-md-12',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 3000,
    delay: (el, i) => 70 * i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 3500,
    easing: "easeOutExpo",
    delay: 3500,

  });

anime.timeline({ loop: false })
  .add({
    targets: '.fade',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 3000,
    delay: (el, i) => 70 * i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 3500,
    easing: "easeOutExpo",
    delay: 3500,

  });


if (playerSelected == true) {
  $('.start-game').click(function () {
    window.location.href = 'game.html';

  })
} else {

  $('.start-game').click(function () {
    alert("please select player before starting game")
  })
}




divdrop.addClass("dropdown-content")

dropbtn.append(divdrop)



function teamPlayer(playerSelected){
//on click of logos imgs if fetches for players that play for that logo or team 
$('img').click(function () {
  id = ""
  id = $(this).attr('id');
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api-nba-v1.p.rapidapi.com/players/teamId/" + id,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
      "x-rapidapi-key": "48b0d11733msh462aed6ac396ee1p1555a7jsn0d010acc7eea"
    }
  }


  $.ajax(settings).done(function (response) {
    // takes data and push to an array using for a loop 
    var players = []
    for (var i = 0; i < response.api.players.length; i++) {
      players.push((response.api.players[i].firstName + " " + response.api.players[i].lastName))
    }


    // clear div every time a new logo button is clicked to append new data from api 
    divdrop.empty()
    // loop to add players from api to a button then append button to a div 
    for (var i = 0; i < players.length; i++) {
      playbtn = $("<button/>").text(players[i])
      playbtn.addClass("btn")
      playbtn.addClass("players")


      divdrop.append(playbtn)
    }
    //the class fade is faded and pushed down with added margin-top applied when the button is clicked allowing you to scroll through  the entire dropdown of players
    $(".fade").css({ opacity: 0.0 });
    $(".fade").css("margin-top", "2500px")
    dropbtn.append(divdrop)


    //the user can then click on player to start game 
    $('.players').click(function () {
      var playerName = ""
      playerName = $(this).text();
      var firstName = playerName.split(" ", 1);






// call to the api to search for  the player based on their first name 
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api-nba-v1.p.rapidapi.com/players/firstName/" + firstName,
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
          "x-rapidapi-key": "48b0d11733msh462aed6ac396ee1p1555a7jsn0d010acc7eea"
        }
      }

      $.ajax(settings).done(function (response) {
     
            var info = []
            playerDiv.empty()

          // loop the data return from data and push to info array 
        for (i = 0; i < response.api.players.length; i++) {
         
          
          if (id = response.api.players[i].teamId) {
          
          console.log(id , response.api.players[i].collegeName);
          //data being push is all the players with the same first name fix to only add player selected from earlier coming soon 
            info.push(  '<div> Full Name: ' + playerName + '<div/>' +
            '<div> College: ' + response.api.players[i].collegeName + '<div/>' +
            ' <div>Country: ' + response.api.players[i].country + '<div/>' +
            "<div>Date Of Birth: " + response.api.players[i].dateOfBirth +
          "<div>  NBA Debut Year: " + response.api.players[i].startNba +'<div/>'
         +"<div> Height in Meters: " + response.api.players[i].heightInMeters + '<div/>' +
        " d<iv> Weight In Meters" +response.api.players[i].weightInKilograms +'<div/><br>' )
         
        }}   

       
        
        playerDiv.append(info)
        // player selected is turn to true allowing user to start game, if start button is clicked it the alert will still pop up fix coming soon  
        playerSelected = true;
        if (playerSelected == true) {
          $('.start-game').click(function () {
            window.location.href = 'game.html';
          })
        } 

        // prepends data to the fade class also return its opacity to normal and margin-top to 0 when player button is selected 
          $(".fade").prepend(playerDiv)
          $(".fade").css({ opacity: 1.0 });
          $(".fade").css("margin-top", "0px")
        });

    })

      ;
  });


})
}
teamPlayer()






