(function () {

    var app = angular.module("githubmodule", []);
    var MainController = function ($scope, $http) {

        $scope.message = "Hello Angular";

        var onUserComplete = function (response) {
            $scope.user = response.data;
             $http.get($scope.user.repos_url).then(fetchRepoInfo, onError);
        };

        var onError = function (reason) {
            $scope.error = "Somthing went wron try after some time.";
        };

        $scope.search=function fetchUserInfo(params) {
            $http.get("https://api.github.com/users/"+ username).then(onUserComplete, onError);
        }

        var fetchRepoInfo=function(responce) {
            $scope.repos=responce.data;
        }
    };

    app.controller('MainController', ["$scope", "$http", MainController]);
} ());