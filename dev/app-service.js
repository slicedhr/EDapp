(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name elDeportivo.factory:AppService
   *
   * @description
   *
   */
  angular
    .module('elDeportivo')
    .factory('AppService', AppService);

  function AppService($http, apiUrl) {

    var AppServiceBase = {};

    AppServiceBase.getNotifications = function () {


    	var config = {

    		url: apiUrl + '/api/v1/notifications',

    		method: 'GET',

    	};

      	return AppServiceBase.http(config);

    };


    AppServiceBase.http = function(config){

    	return $http(config);

    }

    return AppServiceBase;
  }
}());
