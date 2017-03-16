var mongoose = require('mongoose');
var Todos = require('./model.js');

module.exports = (function (){

var getTodo = function(req,res){
  Todos.find().exec().then(function(data){
       res.status(200).json(data);
     }).catch(function (err) {
     res.status(500).send(err);
     });
};

var createTodo = function(req,res){
  var newTodo = new Todos(req.body);
  newTodo.save().then(function (data) {
  res.status(200).send(data);
  }).catch(function (err) {
  res.status(500).send(err);
  });
};

var deleteTodo = function(req,res){
  var id = req.params.id;
    Todos.findByIdAndRemove(id).exec().then(function(data){
     res.status(200).json(data);
    }).catch(function (err){
    throw err;
    });
};

var dettaglioTodo = function(req,res){
    var id = req.params.id;
    Todos.findById(id).exec().then(function(data){
      res.status(200).json(data);
    }).catch(function (err) {
    throw err;
    });
  };

  //AGGIORNA UTENTE
    var updateTodo = function(req,res){
        var id = req.params.id;
        var newData = req.body;
        Todos.findByIdAndUpdate(id, newData).then(function(data){
          res.status(200).json(data);
        }).catch(function (err){
        throw err;
        });
    };

  return {
     getTodo: getTodo,
     deleteTodo: deleteTodo,
     createTodo: createTodo,
     dettaglioTodo: dettaglioTodo,
     updateTodo: updateTodo
  }

})();
