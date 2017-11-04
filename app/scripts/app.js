'use strict';
/**
 * @ngdoc overview
 * @name flightsOTP
 * @description
 * # flightsOTP
 *
 * Main module of the application.
 */
angular
  .module('flightsOTP', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'ngcsv',
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html'
      })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/dashboard/home.html'
      })
      .state('dashboard.chart', {
        templateUrl:'views/chart.html',
        url:'/chart/:selectedOrigin/:selectedDest',
        controller:'ChartCtrl'
      });
  }]);
