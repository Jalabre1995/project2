// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
    selectAll : function (cb) {
        connection.query("SELECT * FROM burgers", function (error , results){
            if (error) throw error
            cb(results)
        })
    },

    insertOne: function (burger, cb) {
        connection.query ("INSERT INTO burgers SET ?" , burger, function (error, results, fields){
            if (error ) throw error;
            cb([burger, results.insertId])
        });
    },

    updateOne: function (burger, cb) {
        connection.query ("UPDATE  burgers SET devoured = ? WHERE id = ?", [burger.devoured , burger.id], function (error, results){
            if (error ) throw error;
            cb(burger)
        });
    },

    deleteOne: function (burger, cb) {
        connection.query ("DELETE FROM burgers  WHERE id = ?", [ burger.id], function (error, results){
            if (error ) throw error;
            cb(burger)
        });
    }

}


// Export the orm object for the model (burger.js).
module.exports = orm;
