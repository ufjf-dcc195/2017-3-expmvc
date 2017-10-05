var config = require('./config');
var mongoose = require('mongoose');

module.exports = function(){
  return mongoose.createConnection(config.db);
}
