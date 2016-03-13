(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name resultados.controller:ResultadosCtrl
   *
   * @description
   *
   */
  angular
    .module('resultados')
    .controller('ResultadosCtrl', ResultadosCtrl);

  function ResultadosCtrl($rootScope) {
    var vm = this;
    vm.ctrlName = 'ResultadosCtrl';

    $rootScope.isHeaderVisible = false;

  }
}());
