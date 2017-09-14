var home = function (req, res, next){
  res.send("<h1>Olá mundo!</h1>");
}

module.exports.home = home;
