angular.module('Services')
.factory('APIService', function($http, $rootScope, $firebaseObject) {
	var ref = firebase.database().ref();
	var api = {}
	var domain = config.DOMAIN;
	var requestServer = function (method, url, params, data) {
		return $http({
			method: method,
			url: domain + url,
			params: params,
			data: data
		});
	}

	api.authenticate = function (email, password) {
		var url = "authenticate";
		var params = {}
		params.email = email;
		params.password = password; //CryptoJS.SHA512(password).toString();
		return requestServer('POST', url, params, {});
	}

 	api.generateNewObject = function(obj) {
		var objClass = obj.getClass();
		var url = objClass.url+'/new';
		return requestServer('GET', url, {}, {})
	}

	api.saveNewObject = function(obj) {
		var objClass = obj.getClass();
		var url = objClass.url;
		var data = {}
		data[objClass.type] = obj;
		return requestServer('POST', url, {}, data);
	}

	api.saveObject = function(obj) {
		var objClass = obj.getClass();
		var url = objClass.url+'/'+obj.id;
		var data = {}
		data[objClass.type] = obj;
		return requestServer('PUT', url, {}, data);
	}
		
	api.saveNewObjectWithOptions = function(obj,options) {
		var url = options.url;
		var data = {}
		data[options.type] = obj;
		return requestServer('POST', url, {}, data);
	}

	api.saveObjectWithOptions = function(obj,options) {
		var url = options.url+'/'+obj.id;;
		var data = {}
		data[options.type] = obj;
		return requestServer('PUT', url, {}, data);
	}

	api.destroyObject = function(obj) {
		var objClass = obj.getClass();
		var url = objClass.url+'/'+obj.id;
		return requestServer('DELETE', url, {}, {});
	}

	api.destroyAll = function (objClass, ids) {
		var url = objClass.url + '/' + 'destroy_all'
		return requestServer('PUT', url, {}, ids);
	}

	api.getAll = function(objClass) {
		var url = objClass.url;
		return requestServer('GET', url, {}, {});
	}

	api.getAllWithParams = function(objClass, params) {
		var url = objClass.url;
		return requestServer('GET', url, params, {});
	}

	api.find = function(objClass, id) {
		var url = objClass.url+'/'+id;
		return requestServer('GET', url, {}, {});
	}

	
	return api;
});