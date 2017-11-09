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
module.exports.listarUsuario = function(req, res, next){
  Usuario.find({}).then(
    function(usuarios){
      res.json(usuarios);
    },
    function(err){
      return next(err);
    });
};

module.exports.detalhes = function(req, res, next){
  res.json(req.usuario);
};

module.exports.usuarioPorId = function(req, res, next, id){
  Usuario.findOne(
    {"_id": id})
    .then(
    function(usuario) {
      req.usuario = usuario;
      next();
    },
    function (err){
      next(err);
    }
);
};

module.exports.editaUsuario = function(req, res, next){
  Usuario.findByIdAndUpdate(
    req.usuario._id,
    req.body,
    {new: true}
  ).then(
    function (usuario){
      res.json(usuario);
    },
    function(err) {
      return next(err);
    }
  );

}

module.exports.removeUsuario = function(req, res, next){
  Usuario.findByIdAndRemove(
    req.usuario._id
  ).then(
    function (usuario){
      res.json(usuario);
    },
    function(err) {
      return next(err);
    }
  );
}
