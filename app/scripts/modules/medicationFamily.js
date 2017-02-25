'use strict';

angular.module('Models').
factory('MedicationFamily', function($q, $rootScope, APIService) {
	var MedicationFamily = function () {
    return new MedicationFamily.fn.init()
  }

  MedicationFamily.fn = MedicationFamily.prototype = {
    init: function() {
      this.id = "";
      this.therapyClassId = "";
      this.name = "";
      this.therapyClass = {};
      this.medications = [];
    },
    setName : function (name) {
      this.name = name;
    },
    addMedications : function (medication) {
      this.medications.push(medication);
    },
    removeMedicationy : function (medication) {
      
    },
    getId : function () {
    	return this.id;
    },
    getName : function () {
      return this.name;
    },
    geMedications : function () {
      return this.medications;
    },
    getTherapyClass : function (){
      return this.therapyClass;
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

  MedicationFamily.fn.init.prototype = MedicationFamily.fn
  return MedicationFamily
});