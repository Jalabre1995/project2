var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res){
    burger.selectAll(function(data){
        res.render ("index", { burgers: data})
    })
});

router.post ('/', function (req, res){
    console.log(req.body)
    burger.insertOne(req.body , function(data){
        res.send(data)
    })
    
})

router.put('/update/:id', function(req, res){
    burger.updateOne(req.body , function(data){
        res.send(data)
    })
})

router.delete('/update/:id', function(req, res){
    burger.deleteOne(req.body , function(data){
        res.send(data)
    })
})

router.get('*', function(req ,res){
    res.redirect('/')
})

module.exports = router