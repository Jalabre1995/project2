// Wrap every letter in a span
var textWrapper = document.querySelector('.glow');
var textContent = document.querySelector('.col-md-12')
var fadeContainer = document.querySelector(".fade")
var dropbtn = $(".dropdown")
var divdrop = $("<div>")
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




/*function selected (){
  var startgame = 
}
*/
/*var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-nba-v1.p.rapidapi.com/teams/teamId/2",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "48b0d11733msh462aed6ac396ee1p1555a7jsn0d010acc7eea"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
}); */

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
  console.log(id);

  $.ajax(settings).done(function (response) {

    console.log(response);

    var players = []
    for (var i = 0; i < response.api.players.length; i++) {
      players.push((response.api.players[i].firstName + " " + response.api.players[i].lastName ))
    }
    //var link = $("<button>").text
    console.log(players);
    // link.append(players)
    divdrop.empty()

    for (var i = 0; i < players.length; i++) {
      playbtn = $("<button/>").text(players[i])
      playbtn.addClass("btn" , "btn-light", "players")
      divdrop.append(playbtn)
    }
    console.log(divdrop);
    console.log(dropbtn);
    $(".fade").css({ opacity: 0.0 });
    $(".fade").css( "margin-top","2500px")
    dropbtn.append(divdrop)
      ;
  });

})
/*
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var i;
    for (i = 0; i < divdrop.length; i++) {
      var openDropdown = divdrop[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}*/