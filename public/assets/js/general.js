// Wrap every letter in a span
text = []
var love = $(".love")[0].textContent


for (var i = 0; i < love.length; i++) {
    
    letter = love[i]
    text.push(love[i])
   
   
}
console.log(text);
var textWrapper = $('.glow');
textWrapper.
for (var i = 0; i < text.length; i++) {
var span = $("<span>")
span.append(text[i])
span.addClass("letter")
textWrapper.append(span)


}

var textContent = $('.col-md-12')


textContent.append(span)

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

  
  