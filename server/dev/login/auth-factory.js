(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name login.factory:Auth
   *
   * @description
   *
   */
  angular
    .module('login')
    .factory('AuthService', AuthService);

  function AuthService($rootScope, $mdDialog, $state, AppService) {

    var AuthBase = {}

    AuthBase.login = function (data) {

      var config = {

        method: 'POST', 

        skipAuthorization: true,

        data: data,

        url: '/api/v1/login'

      }

      return AppService.http(config)

    }

    AuthBase.verify = function(){

      var config = {

        method: 'POST', 

        skipAuthorization: true,

        data: { token: sessionStorage['JWT'] },

        url: '/api/v1/verify'

      }

      return AppService.http(config)
      
    }

    AuthBase.clearSession = function(){

      $rootScope.auth = {}

      delete sessionStorage['JWT']

      $state.transitionTo('login')

    }

    AuthBase.logout = function () {

      $rootScope.$broadcast('loading', false);

        return AppService.http({
            url: 'login',
            prefix: true,
            method: 'DELETE'
          })

    }

    return AuthBase;
  }
}());
