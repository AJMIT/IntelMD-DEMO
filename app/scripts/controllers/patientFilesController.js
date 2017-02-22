
'use strict';
/**
 * @ngdoc function
 * @name intelMdDemoApp.controller:PatientFiles
 * @description
 * # PatientFiles
 * Controller of the intelMdDemoApp
 */
angular.module('intelMdDemoApp')
  .controller('PatientFiles', function () {
    (function LoadPatiens() {
    	//TODO:LoadPatiens Files From Fire Base
    })()

    $scope.search = function (name) {
    	//TODO:Load Patien File
    }

    $scope.addNewPatien = function() {
    	//TODO:Move TO Add New Patien
    }

    $scope.selectPatien = function (patien) {
    	//TODO:MOVE TO Treatments List
    }

  });
