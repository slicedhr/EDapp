(function () {
  'use strict';

  angular
    .module('elDeportivoServer')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
  }
}());
