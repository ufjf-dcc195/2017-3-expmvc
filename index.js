var express = require("./config/express");
var mongoose = require("./config/mongoose")

var db = mongoose();
var app = express();

app.listen(3000);
console.log("Escutando em http://localhost:3000");

module.exports = app;
