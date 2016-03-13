(function () {
  'use strict';

  angular
    .module('resultados')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('resultados', {
        url: '/resultados',
        templateUrl: 'resultados/resultados.tpl.html',
        controller: 'ResultadosCtrl',
        controllerAs: 'resultados'
      });
  }
}());
