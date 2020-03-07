var secondsLeft = 60;

    function timer() {

        var timerInterval = setInterval(function(){

            secondsLeft--;

            $(".time").text(secondsLeft + ".00");

            if (secondsLeft === 0.00){

                secondsLeft = 0.00;

                clearInterval(timerInterval);

                $(".time").text(secondsLeft);

            } return;

        }, 1000);

    }

    function moveLeft(){

        $("#hoop").animate({

            left : '350px'

        });

    }

    function moveRight() {

        $("#hoop").animate({

            left : '550px'

        });

    }

timer();

