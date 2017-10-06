var express = require("express");
var morgan = require("morgan");
var methodOverride = require("method-override");
var compression = require("compression");
var bodyParser = require("body-parser");
var ejs = require("ejs");
var session = require('express-session');

process.env.NODE_ENV = process.env.NODE_ENV || 'devel';

var config = require('./config');

module.exports = function(){
  var app = express();
  if(process.env.NODE_ENV === 'devel'){
    app.use(morgan('dev'));
    console.log(process.env.NODE_ENV);
  } else if(process.env.NODE_ENV === 'production'){
    app.use(compression());
  }
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.secret
  }));
  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  app.use(express.static('./public'));
  require("../app/routes/usuario.routes")(app);
  require("../app/routes/index.routes")(app);
  return app;
}
