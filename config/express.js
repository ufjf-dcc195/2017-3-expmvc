var express = require("express");
var morgan = require("morgan");
var methodOverride = require("method-override");
var compression = require("compression");
var bodyParser = require("body-parser");
process.env.NODE_ENV = process.env.NODE_ENV || 'devel';
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
  require("../app/routes/index.routes")(app);
  return app;
}
