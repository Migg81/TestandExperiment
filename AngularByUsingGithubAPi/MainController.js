
(function () {

    var app = angular.module("githubViewer");
    var MainController = function ($scope,$interval) {

        $scope.message = "Hello Angular";

        var decrementCountdown=function(){
            $scope.countdown -=1;
            if($scope.countdown<1)
            {
                $scope.search();
            }
        };
        var countdownInterval=null;
        var stratCountdown=function () {
            $interval(decrementCountdown,1000,$scope.countdown)
        };
          $scope.search=function (){
           if(countdownInterval)
           {
              $interval.cancel(countdownInterval) ;
              $scope.countdown=null;
           }
        };
        $scope.countdown=8;
        stratCountdown();
    };

    app.controller('MainController', MainController);
} ());