var Usuario = require('mongoose').model('Usuario');

module.exports.novoUsuario = function(req, res, next) {
  var novo = new Usuario({
    username:"testeU",
  //  password:"testeP",
  //  nome:"Teste",
  //  email:"teste@test.org"
    emailNovo:"teste@test.org"
  });
  novo.save().then(function(u){
    res.end("Usuário criado! "+u._id);
  },function(err){
    if(err){
      res.end("Erro: Usuário não criado!\n"+err);
    }else{
      res.end("Usuário criado! "+novo._id);
    }
  });
}
