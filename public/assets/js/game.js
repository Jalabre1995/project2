$(document).ready(function(){

var secondsLeft = 6;

var homeScore = 0;

var ball = $("#ball");

ball.click(shootFirstBall);

    function timer() {

        var timerInterval = setInterval(function(){

            secondsLeft--;

            $(".time").text("0:"+secondsLeft);

            moveLeft();

            moveRight();

            if (secondsLeft>09){



            } else if (secondsLeft === 0){

                secondsLeft = "0:00";

                clearInterval(timerInterval);

                $(".time").text(secondsLeft);

                $("#hoop").hide();

                $("#ball").hide();

                $(".ball").hide();

                $(".scoreboard").hide();

                $(".highScore").css("opacity","1")

            } 

        }, 1000);

    }

    function moveLeft(){

        $("#hoop").animate({

            left : '20px'

        }, 5000);

    }

    function moveRight() {

        $("#hoop").animate({

            left : '900px'

        }, 5000);

    }

    function showSwoosh() {

        homeScore++;

        $(".homeScore").text(homeScore);

        var swoosh = $("<img>");

        swoosh.attr("src","assets/img/swoosh.png");

        swoosh.addClass("swoosh");

        $("#gameBody").append(swoosh);

        swoosh.animate({

            opacity : 0

        },2000);

    }

    function shootFirstBall(e) {

        e.preventDefault();

        if (secondsLeft>59){

            showSwoosh();

        } else if (secondsLeft<53.5 && secondsLeft>51.5){

            showSwoosh();

        } else if (secondsLeft<48.5 && secondsLeft>46.5){

            showSwoosh();

        } else if (secondsLeft<43.5 && secondsLeft>41.5){

            showSwoosh();

        } else if (secondsLeft<38.5 && secondsLeft>36.5){

            showSwoosh();

        } else if (secondsLeft<33.5 && secondsLeft>31.5){

            showSwoosh();

        } else if (secondsLeft<28.5 && secondsLeft>26.5){

            showSwoosh();

        } else if (secondsLeft<23.5 && secondsLeft>21.5){

            showSwoosh();

        } else if (secondsLeft<18.5 && secondsLeft>16.5){

            showSwoosh();

        } else if (secondsLeft<13.5 && secondsLeft>11.5){

            showSwoosh();

        } else if (secondsLeft<8.5 && secondsLeft>6.5){

            showSwoosh();

        } else if (secondsLeft<3.5 && secondsLeft>1.5){

            showSwoosh();
            
        }

        $("#ball").animate({

            top : '-10px'

        }, 700)

        $("#ball").animate({

                top : '100px'

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

        if (secondsLeft>59){

            showSwoosh();

        } else if (secondsLeft<53.5 && secondsLeft>51.5){

            showSwoosh();

        } else if (secondsLeft<48.5 && secondsLeft>46.5){

            showSwoosh();

        } else if (secondsLeft<43.5 && secondsLeft>41.5){

            showSwoosh();

        } else if (secondsLeft<38.5 && secondsLeft>36.5){

            showSwoosh();

        } else if (secondsLeft<33.5 && secondsLeft>31.5){

            showSwoosh();

        } else if (secondsLeft<28.5 && secondsLeft>26.5){

            showSwoosh();

        } else if (secondsLeft<23.5 && secondsLeft>21.5){

            showSwoosh();

        } else if (secondsLeft<18.5 && secondsLeft>16.5){

            showSwoosh();

        } else if (secondsLeft<13.5 && secondsLeft>11.5){

            showSwoosh();

        } else if (secondsLeft<8.5 && secondsLeft>6.5){

            showSwoosh();

        } else if (secondsLeft<3.5 && secondsLeft>1.5){

            showSwoosh();

        }

        $(".ball").animate({

            top : '0px'

        },700);

        $(".ball").animate({

            top : '200px'

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

});


