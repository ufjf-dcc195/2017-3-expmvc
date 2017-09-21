module.exports = function(app){
  var index = require("../controllers/index.controllers");
  app.use("/ejs.html", index.indexEJS);
  app.use("/lista.html", index.listaEJS);
  app.use("/biscoito.html", index.cookiesEJS);
  app.use("/", index.home);
};
