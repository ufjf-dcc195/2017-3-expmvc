var config = require('./config');
var mongoose = require('mongoose');

module.exports = function(){
  db = mongoose.connect(config.db);
  require("../app/models/usuario.model");
  return db;
}
