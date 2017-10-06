var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
  username: String,
  password: String,
  email:    String,
  nome:     String,
  sobrenome:String
});

mongoose.model('Usuario', UsuarioSchema);
