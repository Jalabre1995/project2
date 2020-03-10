var secondsLeft = 60;

var ball = $("#ball");

ball.click(shootFirstBall);

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

        $("#ball").animate({

            opacity : '0'

        })

       var newBall =  $("<img>");

       newBall.attr("src","assets/img/basketball.png");

       newBall.addClass("ball");

       newBall.click(shootOtherBalls);

       $("#gameBody").append(newBall);

    }

    function shootOtherBalls(e) {

        e.preventDefault();

        $(".ball").animate({

            top : '0px'

        },700);

        $(".ball").animate({

            top : '500px'

        });

        $(".ball").animate({

            opacity : '0'

        });

        var newBall =  $("<img>");

        newBall.attr("src","assets/img/basketball.png");
 
        newBall.addClass("ball");
 
        newBall.click(shootOtherBalls);
 
        $("#gameBody").append(newBall);

    }

        timer();


console.log();
     
    
    




