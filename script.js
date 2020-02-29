var mod = angular.module('todo_mod', []);

mod.controller('todo_cont', function($scope) {
    $scope.list = ["Task1", "Task2", "Task3", "Task4"];
});
