var app = angular.module('countApp', []);

app.controller('CounterController', function($scope) {
    $scope.count = 0;
});