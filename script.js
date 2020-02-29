var mod = angular.module('todo_mod', []);

mod.controller('todo_cont', function($scope) {
    $scope.list = ["Task1", "Task2", "Task3", "Task4"];

    $scope.new = "";

    $scope.addItem = function(){

      $scope.list.push($scope.new);
      $scope.new = "";
    }

    $scope.delete = function(index) {

    $scope.list.splice(index, 1);

    }
});
