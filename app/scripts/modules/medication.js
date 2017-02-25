'use strict';

angular.module('Models').
factory('Medication', function($q, $rootScope, APIService) {
	var Medication = function () {
    return new Medication.fn.init()
  }

  Medication.fn = Medication.prototype = {
    init: function() {
      this.id = "";
      this.medicationFamilyId = "";
      this.medicationFamily = {};
      this.name = "";
      this.recommendedDose = 0.0;
      this.logo = {};
    },
    setName : function (name) {
      this.name = name;
    },
    setRecommendedDose : function (recommendedDose) {
      this.recommendedDose = recommendedDose;
    },
    setLogo : function (logo) {
      this.logo = logo;
    },
    getId : function () {
    	return this.id;
    },
    getName : function () {
      return this.name;
    },
    getMedicationFamily : function () {
      return this.medicationFamily;
    },
    getRecommendedDose : function () {
      return this.recommendedDose;
    },
    getLogo : function () {
      return this.logo ;
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

  Medication.fn.init.prototype = Medication.fn
  return Medication
});