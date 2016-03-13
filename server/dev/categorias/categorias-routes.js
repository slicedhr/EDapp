(function () {
  'use strict';

  angular
    .module('categorias')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('categorias', {
        url: '/categorias',
        templateUrl: 'categorias/categorias.tpl.html',
        controller: 'CategoriasCtrl',
        controllerAs: 'categorias'
      });
  }
}());
