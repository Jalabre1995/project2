#NBA Game

While a bored sports fan at work, we wanted to create a basketball game that allows the user to select his/her favorite basektball player from his/her favorite basketball team.

##Description

This web application searches the NBA API for each team in the National Basketball Association and for five players from that team to choose from the play with. Once a player is selected, the game screen asks for the players name, then runs the 60 second basketball game where the user must try and get as many made shots before the time is up. After the time is up, the high score chart will show up, and a button will allow the user to be set back to the home page.

##Installation

This application is hosted on Heroku, and is hosted on the 8080 port. It uses the MVC paradigm for better organization of files. The html and api routes are contained in the routes folder, the Html, Css, and Javascript files are all in the public folder, the Heroku and Javascript files exporting the functions using Sequalize are in the models folder, the config.json file is in the config folder, and finally the MYSQL calls the create and add data to the database are held in the DB folder. The server.js file hosts the server and the NBA_server.js file grab the ids for each of the teams from the NBA API. The App can be found at .

##Credits

Created by [Joshua Alabre](https://github.com/Jalabre1995), [Dameon Charley](https://github.com/dameonc13), [Justin Durocher](https://github.com/justindurocher), and [Ramal Imanov](https://github.com/ramalimanov).
