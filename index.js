var express = require("./config/express");

var app = express();

app.listen(3000);
console.log("Escutando em http://localhost:3000");

module.exports = app;
