module.exports = function(app){
  var index = require("../controllers/index.controllers");
  app.use("/", index.home);
};
