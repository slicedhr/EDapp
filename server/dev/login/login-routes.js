(function () {
  'use strict';

  angular
    .module('login')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'login/login.tpl.html',
        controller: 'LoginCtrl',
        controllerAs: 'login',
        withoutAuthorization: true
      })
      .state('logout', {

        url:'/logout',
        template: 'Saliendo...',
        controller: function(AuthService, $mdSidenav){
            
          $mdSidenav('left').close()

          AuthService.logout().then(function(){

            AuthService.clearSession()


          })

        }

      })
      ;
  }
}());
