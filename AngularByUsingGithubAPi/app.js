var app = angular.module("githubViewer", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/main",{
        templateUrl :"main.html",
        controller :"MainController"
    }
    ).when("/user/:username",{
        templateUrl :"user.html",
        controller :"UserController"
    }).when("/repos/:username/:reposname",{
        templateUrl :"gitrepo.html",
        controller :"RepoContributorsController"
    })
    .otherwise({redirectTo:"/main"})
}); 


