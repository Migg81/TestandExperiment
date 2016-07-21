(function(){

    var github=function($http){

        var getUser=function(username){
            $http.get("https://api.github.com/users/"+ username)
            .then(function(response) {
                return response.data;
            });
        };

        var getRepos=function(user){
            $http.get(user.repos_url).then(function name(response) {
                return response.data;
            });
        };

        return {
            getUser:getUser,
            getRepos:getRepos
        };
    };

    var module=angular.module("githubmodule");
    module.factory("github",github);
}());