(function(){
    var app = angular.module("githubViewer");
    var ContributorsController = function (github, $scope, $routeParams) {

        $scope.message = "Hello Angular";

        var onRepo=function(data){
            $scope.repo=data;
        };
        var onError = function (reason) {
            $scope.error = "Somthing went wron try after some time.";
        };

        github.gerRepoDetails($routeParams.username,$routeParams.reposname).then(onRepo,onError);
    };

    app.controller('RepoContributorsController', ContributorsController);
}());