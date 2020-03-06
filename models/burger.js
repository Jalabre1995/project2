// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb){
        orm.selectAll(function (res){
            cb(res)
        })
    },
    insertOne: function (burger, cb){
        orm.insertOne(burger , function (res){
            cb(res)
        })
    },
    updateOne : function (burger, cb){
        orm.updateOne(burger, function (res){
            cb(res)
        })
    },

    deleteOne : function (burger, cb){
        orm.deleteOne(burger, function (res){
            cb(res)
        })
    }
}

module.exports = burger ;