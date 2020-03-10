var secondsLeft = 60;

$("#ball").click(shootFirstBall);

    function timer() {

        var timerInterval = setInterval(function(){

            secondsLeft--;

            $(".time").text("0:"+secondsLeft);

            moveLeft();

            moveRight()

            if (secondsLeft === 0){

                secondsLeft = 0;

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

    function shootFirstBall(e) {

        e.preventDefault();

        $("#ball").animate({

            top : '-10px'

        }, 700)

        $("#ball").animate({

                top : '500px'

        }, 500)

       var newBall =  $("<img>");

       newBall.attr("src","assets/img/basketball.png");

       newBall.addClass("ball");

       newBall.click(shootOtherBalls);

       $("#gameBody").append(newBall);

    }

    function shootOtherBalls(e) {

        e.preventDefault();

        $(".ball").animate({

            top : '-450px'

        },700);

        $(".ball").animate({

            top : '500px'

        });

    }

        timer();

     
    
    




