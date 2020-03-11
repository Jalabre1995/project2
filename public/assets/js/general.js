// Wrap every letter in a span
var textWrapper = document.querySelector('.glow');
var textContent = document.querySelector('.col-md-12')
var fadeContainer = document.querySelector(".fade")
var playerSelected = false
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textContent.innerhtml = textWrapper.textContent.replace(/\S/g, "<span class='logo'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.glow .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,

  });

  
  anime.timeline({loop: false})
  .add({
    targets: '.col-md-12',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 3000,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 3500,
    easing: "easeOutExpo",
    delay: 3500,

  });

  anime.timeline({loop: false})
  .add({
    targets: '.fade',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 3000,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 3500,
    easing: "easeOutExpo",
    delay: 3500,

  });

  
  if (playerSelected == true ){
    $('.start-game').click(function(){
        window.location.href='game.html';
     })
  }
  
  



