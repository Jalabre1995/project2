"use strict";

var fs = require('fs');
var path= require( 'path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var db = {};

