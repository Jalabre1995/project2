var APIKey = ""

/*
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-nba-v1.p.rapidapi.com/players/lastName/%7Blastname%7D",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "48b0d11733msh462aed6ac396ee1p1555a7jsn0d010acc7eea"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
}); 

*/

/*

 const NBA = require("nba");
const buck =NBA.updateTeams().then(function(data){
return data})

console.log(buck);

*/

/* logs the following:
{
  firstName: 'Stephen',
  lastName: 'Curry',
  playerId: 201939,
  teamId: 1610612744,
  fullName: 'Stephen Curry',
  downcaseName: 'stephen curry'
}
*/
//NBA.stats.playerInfo({ firstName: curry.firstName }).then(console.log);

var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
//var exphbs = require("express-handlebars");

//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set("view engine", "handlebars");

// Import routes and give the server access to them.
//var routes = require("./controllers/catsController.js");

//app.use(routes);
/*app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


const APP = {
    // APP: config. <-
    // APP: init. <-
    // APP: variables. <-
  
    createScene() {
      /* GROUND OBJECT */
      const APP = {
        /* === APP: config === */
        /* APP */
        bgColor: 0xcccccc,
        /* BASKET */
        basketY: 20,
        
        /* === APP: variables === */
        isMobile: navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/),
      
        /* === APP: init === */
      
        init() {
          APP.world = new WHS.World({
            autoresize: "window",
            softbody: true,
      
            background: {
              color: APP.bgColor
            },
      
            fog: {
              type: 'regular',
              hex: 0xffffff
            },
      
            camera: {
              z: 50,
              y: APP.basketY,
              aspect: 45
            },
      
            gravity: {
              y: -200
            }
          });
          
          // Add ProgressLoader.
          APP.ProgressLoader = new ProgressLoader(APP.isMobile ? 12 : 14);
      
          // Lets make camera look at the basket.
          APP.camera = APP.world.getCamera();
          APP.camera.lookAt(new THREE.Vector3(0, APP.basketY, 0));
      
          APP.createScene(); // 1
          // TODO: Add other init funcs.
      
          APP.world.start(); // Ready.
          
          // TODO: Check for loading progress.
        }
      
        // ...TODO
      };
      
      basket.require({ url: 'bower_components/whitestorm/build/whitestorm.js' }).then(() => {
        APP.init();
      });
      
      APP.ground = new WHS.Plane({
        geometry: {
          buffer: true,
          width: 1000,
          height: 800
        },
  
        mass: 0,
  
        material: {
          kind: 'phong',
          color: APP.bgColor
        },
  
        pos: {
          y: -20,
          z: 120
        },
  
        rot: {
          x: -Math.PI / 2
        }
      });
  
      APP.ground.addTo(APP.world).then(() => APP.ProgressLoader.step());
  
      /* WALL OBJECT */
      APP.wall = APP.ground.clone();
  
      APP.wall.position.y = 180;
      APP.wall.position.z = -APP.basketDistance;
      APP.wall.rotation.x = 0;
      APP.wall.addTo(APP.world).then(() => APP.ProgressLoader.step());
    }
    
    // ...TODO
  }
  