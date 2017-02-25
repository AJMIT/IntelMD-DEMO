'use strict';

angular.module('Models').
factory('Patient', function($q, $rootScope, APIService) {

	var Patient = function () {
    return new Patient.fn.init()
  }

  Patient.fn = Patient.prototype = {
    init: function() {
      this.name = {};
      this.id = "";
      this.age = "";
      this.gender = "";
    },
    setName : function (name) {
    	this.name = name;
    },
    setAge : function (age) {
    	this.age = age;
    },
    setGender : function (gender) {
    	this.gender = gender;
    },
    getId : function () {
    	return this.id;
    },
    getName : function () {
    	return this.name;
    },
    getAge : function () {
    	return this.age;
    },
    getGender : function () {
    	return this.gender;
    },
     getClass: function() {
      return Application;
    },
    isNew: function() {
      return this.id == undefined;
    },
    save: function() {
      if(this.isNew()) {
        return APIService.saveNewObject(this);
      }
      else {
        return APIService.saveObject(this);
      }
    },
    destroy: function() {
      return APIService.destroyObject(this);
    }
  }

  Patient.fn.init.prototype = Patient.fn
  return Patient

});