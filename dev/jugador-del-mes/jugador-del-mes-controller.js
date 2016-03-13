(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name jugadorDelMes.controller:JugadorDelMesCtrl
   *
   * @description
   *
   */
  angular
    .module('jugadorDelMes')
    .controller('JugadorDelMesCtrl', JugadorDelMesCtrl);

  function JugadorDelMesCtrl($rootScope) {
    var vm = this;
    vm.ctrlName = 'JugadorDelMesCtrl';

    vm.checked = true;

    $rootScope.isHeaderVisible = true;

  }
}());
