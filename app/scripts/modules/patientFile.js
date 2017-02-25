'use strict';

angular.module('Models').
factory('PatientFile', function($q, $rootScope, APIService) {

	var PatientFile = function () {
    return new PatientFile.fn.init()
  }

  PatientFile.fn = PatientFile.prototype = {
    init: function() {
      this.id = "";
      this.patientId = "";
      this.patient = {};
      this.prediabete = {};
      this.comrbiditie = {};
      this.coMedications = {};
      this.treatments = []
    },
    setprediabete : function (prediabete) {
    	this.prediabete = prediabete;
    },
    setcoMedication : function (coMedication) {
    	this.coMedication = coMedication;
    },
    addTreatment : function (treatment) {
    	this.treatments.push(treatment);
    },
    removeTreatment : function (treatment) {
    	//TODO:Search And Delete
    	this.treatments.push(treatment);
    },
    getId : function () {
    	return this.id;
    },
    getPatienId : function () {
      return this.patienId;
    },
    getPatien : function () {
    	return this.patien;
    },
    getCoMedication : function () {
    	return this.coMedication;
    },
    getPrediabete : function () {
    	return this.prediabete;
    },
    getTreatments : function () {
    	return this.treatments;
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

  PatientFile.fn.init.prototype = PatientFile.fn
  return PatientFile
});