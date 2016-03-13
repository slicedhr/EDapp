(function () {
  'use strict';

  angular
    .module('emisora')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('emisora', {
        url: '/emisora',
        templateUrl: 'emisora/emisora.tpl.html',
        controller: 'EmisoraCtrl',
        controllerAs: 'emisora'
      });
  }
}());
