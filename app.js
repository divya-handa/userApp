angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://backend-clusterip-service:8061/user').
        then(function(response) {
            $scope.greeting = response.data;
        });
});