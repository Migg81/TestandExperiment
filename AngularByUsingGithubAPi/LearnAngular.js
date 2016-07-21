
(function () {

    var app = angular.module("githubmodule", []);
    var MainController = function ($scope, $http) {

        $scope.message = "Hello Angular";


        var onUserComplete = function (response) {
            $scope.user = response.data;
        };

        var onError = function (reason) {
            $scope.error = "Somthing went wron try after some time.";
        };

        $http.get("https://api.github.com/users/migg81").then(onUserComplete, onError);
    };

    app.controller('MainController', ["$scope", "$http", MainController]);
} ());