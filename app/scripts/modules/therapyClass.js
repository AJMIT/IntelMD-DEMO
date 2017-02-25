'use strict';

angular.module('Models').
factory('TherapyClass', function($q, $rootScope, APIService) {
	var TherapyClass = function () {
    return new TherapyClass.fn.init()
  }

  TherapyClass.fn = TherapyClass.prototype = {
    init: function() {
      this.id = "";
      this.name = "";
      this.medicationFamilys = [];
    },
    setName : function (name) {
      this.name = name;
    },
    addMedicationFamily : function (medicationFamily) {
      this.medicationFamilys.push(medicationFamily);
    },
    removeMedicationFamily : function (medicationFamily) {
      
    },
    getId : function () {
    	return this.id;
    },
    getName : function () {
      return this.name;
    },
    getMedicationFamilys : function () {
      return this.medicationFamilys;
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

  TherapyClass.fn.init.prototype = TherapyClass.fn
  return TherapyClass
});