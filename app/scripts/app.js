'use strict';

/**
 * @ngdoc overview
 * @name intelMdDemoApp
 * @description
 * # intelMdDemoApp
 *
 * Main module of the application.
 */

// Initialize the Firebase SDK
var config = {
  apiKey: "AIzaSyDQuXjehq0hypKMSxc4s9MwBAMjgqSnw6k",
  authDomain: "intelmd-demo.firebaseapp.com",
  databaseURL: "https://intelmd-demo.firebaseio.com",
  storageBucket: "intelmd-demo.appspot.com",
  messagingSenderId: "470765854436"
};
firebase.initializeApp(config);

angular
  .module('intelMdDemoApp', [
    'Services',
    'Controllers',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
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
