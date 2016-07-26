
(function () {

    var app = angular.module("githubmodule");
    var MainController = function ($scope, github,$interval) {

        $scope.message = "Hello Angular";

        var onUserComplete = function (data) {
            $scope.user = data;
           github.getRepos($scope.user).then(fetchRepoInfo, onError);
        };

        var onError = function (reason) {
            $scope.error = "Somthing went wron try after some time.";
        };

        $scope.search=function (){
           github.getUser($scope.username).then(onUserComplete, onError);
        };

        var fetchRepoInfo=function(data) {
            $scope.repos=data;
        };

        var decrementCountdown=function(){
            $scope.countdown -=1;
            if($scope.countdown<1)
            {
                $scope.search();
            }
        };
        var stratCountdown=function () {
            $interval(decrementCountdown,1000,$scope.countdown)
        };
        $scope.countdown=8;
        stratCountdown();
    };

    app.controller('MainController', ["$scope", "github","$interval", MainController]);
} ());