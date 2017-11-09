var Usuario = require('mongoose').model('Usuario');

module.exports.novoUsuario = function(req, res, next) {
  var novo = new Usuario(req.body);
  novo.save().then(
  function(u){
    res.json(u);
  },
  function(err){
    return next(err);
  });
}
