module.exports = function (app) {
  var handlers = require("../controllers/usuario.controllers");
  app.use('/usuario/novo', handlers.novoUsuario);

}
