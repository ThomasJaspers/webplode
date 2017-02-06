import {PlayerService} from './player.service.ts';

declare var angular: any;

const webplodeapp = angular.module('webplodeapp', ['ngRoute']);

webplodeapp.service('PlayerService', PlayerService);

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
      });
}]);

webplodeapp.controller('HomeController',
  ['$scope', function($scope) {

	$scope.message = 'Home';

}]);

webplodeapp.controller('PrepareController',
  ['$scope', 'PlayerService', function($scope, PlayerService) {

  // Initialize the model variables
  $scope.player1Name = "Player 1";
  $scope.player2Name = "Player 2";

  PlayerService.setPlayer1Name($scope.player1Name);
  PlayerService.setPlayer2Name($scope.player2Name);
}]);

webplodeapp.controller('GameController',
  ['$scope', 'PlayerService', function($scope, PlayerService) {

  $scope.player1Name = PlayerService.getPlayer1Name();
  $scope.player2Name = PlayerService.getPlayer2Name();

}]);
