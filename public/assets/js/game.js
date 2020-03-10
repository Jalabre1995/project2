  
var secondsLeft = 60;

function timer() {

    var timerInterval = setInterval(function(){

        secondsLeft--;

        $(".time").text(secondsLeft + ".00");

        moveLeft();

        moveRight()

        if (secondsLeft === 0.00){

            secondsLeft = 0.00;

            clearInterval(timerInterval);

            $(".time").text(secondsLeft);

        } 

    }, 1000);

}

function moveLeft(){

    $("#hoop").animate({

        left : '20px'

    }, 3000);

}

function moveRight() {

    $("#hoop").animate({

        left : '900px'

    }, 3000);

}

    timer();

 




