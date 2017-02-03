declare var angular: any;

const webplodeapp = angular.module('webplodeapp', ['ngRoute']);

webplodeapp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider

      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      })

      .when('/prepare', {
		    templateUrl: 'templates/prepare.html',
		    controller: 'PrepareController'
	    })

      .when('/game', {
		    templateUrl: 'templates/game.html',
		    controller: 'GameController'
      })

      .otherwise({
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      });
}]);

webplodeapp.controller('HomeController',
  ['$scope', function($scope) {

	$scope.message = 'Home';

}]);


webplodeapp.controller('PrepareController',
  ['$scope', function($scope) {

	$scope.message = 'Prepare';

}]);

webplodeapp.controller('GameController',
  ['$scope', function($scope) {

	$scope.message = 'Game';

}]);
