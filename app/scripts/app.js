'use strict';

/**
 * @ngdoc overview
 * @name intelMdDemoApp
 * @description
 * # intelMdDemoApp
 *
 * Main module of the application.
 */
angular
  .module('intelMdDemoApp', [
    'Services',
    'Controllers',
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
        templateUrl: 'views/demo.html',
        controller: 'DemoController',
        controllerAs: 'demo'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  angular.module('Models', ['Services'])
  angular.module('Services', []);
  angular.module('Controllers', ['Models'])
