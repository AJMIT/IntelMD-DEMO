'use strict';

angular.module('Models').
factory('Treatment', function($q, $rootScope, APIService) {
	var Treatment = function () {
    return new Treatment.fn.init()
  }

  Treatment.fn = Treatment.prototype = {
    init: function() {
      this.id = "";
      this.activate = false;
      this.medicationId = "";
      this.medication = {};
      this.dos = 0.0;
    },
    setDos : function (dos) {
      this.dos = dos;
    },
    getId : function () {
    	return this.id;
    },
    getMedication : function () {
      return this.medication;
    },
    getLogo : function () {
      return this.logo ;
    },
    getDos : function () {
      return this.dos;
    },
    activate : function () {
      this.activate = true;
    },
    deActivate : function () {
      this.activate = false;
    },
    isActivated : function () {
      return this.activate;
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

  Treatment.fn.init.prototype = Treatment.fn
  return Treatment
});