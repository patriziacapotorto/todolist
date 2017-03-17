angular.module('app').service('TodoSrv',function($http){

var getTodo = function(){
  return $http({
    url: 'http://localhost:3000/api/todolist',
    method: 'GET'
  }).then(function(res){
    return res.data;
  }).catch(function(err){
    return err;
  });
}

var nuovoTodo = function(nuovo){
  return $http({
    url: 'http://localhost:3000/api/todolist',
    method: 'POST',
    data: nuovo
  }).then(function(res){
    return res.data;
  }).catch(function(err){
    return err;
  });
}

var deleteTodo = function(id){
  return $http({
    url: 'http://localhost:3000/api/todolist/id/'+id,
    method: 'DELETE',
  }).then(function(res){
    return res.data;
  }).catch(function(err){
    return err;
  });
}

var updateTodo = function(id,fatto){
  return $http({
    url: 'http://localhost:3000/api/todolist/id/'+id,
    method: 'PUT',
    data: {
      fatto:fatto
    }
  }).then(function(res){
    return res.data;
  }).catch(function(err){
    return err;
  });
}

  return{
    getTodo: getTodo,
    nuovoTodo: nuovoTodo,
    deleteTodo: deleteTodo,
    updateTodo: updateTodo
  }
})
