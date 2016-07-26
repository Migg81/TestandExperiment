var app = angular.module("githubmodule", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.where("/main",
    {
        templateUrl :"main.html",
        controller :"MainController"
    }.otherwise({redirectTo:"/main"})
    )
});