
(function () {

    var app = angular.module("githubmodule", []);
    var MainController = function ($scope, github) {

        $scope.message = "Hello Angular";

        var onUserComplete = function (response) {
            $scope.user = response.data;
           github.getRepos($scope.user.repos_url).then(fetchRepoInfo, onError);
        };

        var onError = function (reason) {
            $scope.error = "Somthing went wron try after some time.";
        };

        $scope.search=function (){
           github.getUser($scope.username).then(onUserComplete, onError);
        }

        var fetchRepoInfo=function(responce) {
            $scope.repos=responce.data;
        }
    };

    app.controller('MainController', ["$scope", "github", MainController]);
} ());