(function () {
  'use strict';

  angular
    .module('elDeportivo')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home/false');
  }
}());
