module.exports.home = function (req, res, next){
  res.send("<h1>Olá mundo!</h1>");
}

module.exports.indexEJS = function (req, res, next){
  res.render('index', {titulo:"Olá EJS!"});
}

module.exports.listaEJS = function (req, res, next){
  res.render('lista', {titulo:"Lista", a:3, b:13});
}
