(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name login.controller:LoginCtrl
   *
   * @description
   *
   */
  angular
    .module('login')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl($http, $rootScope, $state, toastr, AuthService) {

    var self = this;

    $rootScope.bglogin = true;

    this.init = function(){

      self.loginData = {

        email: 'admin@admin.com',

        password: 'admin'

      }

    }

    this.send = function(){

      AuthService.login(self.loginData).then(function (response){

        if(response.data.err){

          toastr.info('Email o Password incorrectos', 'Information')
          
           return
        }

        sessionStorage['JWT'] = response.data.token;

        $rootScope.auth.logged = true

        $rootScope.auth.user = response.data.user

        $state.transitionTo('notifications')

      }, function(err){

        $rootScope.$broadcast('AuthError')

      })
    }


    this.init()

  }
}());
