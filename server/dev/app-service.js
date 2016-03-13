(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name home.factory:AppService
   *
   * @description
   *
   */
  angular
    .module('elDeportivoServer')
    .factory('AppService', AppService);

  function AppService($http) {

    var AppServiceBase = {};

    AppServiceBase.prefix = '/api/v1/'




    AppServiceBase.http = function (config) {

    	config.url = config.prefix ? AppServiceBase.prefix + config.url : config.url

      return $http(config);

    };

    return AppServiceBase;
  }

}());
