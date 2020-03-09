////Dependecies////

var path = require('path');

//Routes
///===================================

module.exports = function(app) {
    ///Each of the routes below handles the HTML page that the user gets sent to.
     
    ///Index route loades view.html
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
}