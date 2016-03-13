(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name users.controller:UsersCtrl
   *
   * @description
   *
   */
  angular
    .module('users')
    .controller('UsersCtrl', UsersCtrl);

  function UsersCtrl() {
    var vm = this;
    vm.ctrlName = 'UsersCtrl';
  }
}());
