'use strict';

/**
 * @ngdoc overview
 * @name ghAppApp
 * @description
 * # ghAppApp
 *
 * Main module of the application.
 */
angular
  .module('ghAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
