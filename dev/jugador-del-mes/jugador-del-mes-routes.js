(function () {
  'use strict';

  angular
    .module('jugadorDelMes')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('jugadorDelMes', {
        url: '/jugador-del-mes',
        templateUrl: 'jugador-del-mes/jugador-del-mes.tpl.html',
        controller: 'JugadorDelMesCtrl',
        controllerAs: 'jugadorDelMes'
      });
  }
}());
