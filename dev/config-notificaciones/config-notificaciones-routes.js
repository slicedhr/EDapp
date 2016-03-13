(function () {
  'use strict';

  angular
    .module('configNotificaciones')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('configNotificaciones', {
        url: '/config-notificaciones',
        templateUrl: 'config-notificaciones/config-notificaciones.tpl.html',
        controller: 'ConfigNotificacionesCtrl',
        controllerAs: 'configNotificaciones'
      });
  }
}());
