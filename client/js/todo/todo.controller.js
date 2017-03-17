angular.module('app').controller('TodoCtrl',function($scope,TodoSrv){

$scope.lista = [];
TodoSrv.getTodo().then(function(data){
  $scope.lista = data;
  console.log(data);
});

$scope.crea = function(){
  TodoSrv.nuovoTodo($scope.nuovo).then(function(data){
    $scope.nuovo = {};
    return TodoSrv.getTodo()
  }).then(function(data){
    $scope.lista = data;
  })
}

$scope.elimina = function(id){
  TodoSrv.deleteTodo(id).then(function(data){
    return TodoSrv.getTodo()
  }).then(function(data){
    $scope.lista = data;
  })
}

$scope.aggiorna = function(id,fatto){
  TodoSrv.updateTodo(id,fatto).then(function(data){
    return TodoSrv.getTodo()
  }).then(function(data){
    $scope.lista = data;
  })
}


});
