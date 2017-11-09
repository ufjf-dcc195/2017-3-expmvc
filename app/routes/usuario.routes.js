module.exports = function (app) {
  var handlers = require("../controllers/usuario.controllers");
  app.route('/usuario')
    .post(handlers.novoUsuario)
    .get(handlers.listarUsuario);
  app.route('/usuario/:usuarioId')
    .get(handlers.detalhes);

  app.param('usuarioId', handlers.usuarioPorId);

}
