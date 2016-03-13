(function () {
  'use strict';

  angular
    .module('home')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home/:url',
        templateUrl: 'home/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .state('home2', {
        url: '/home2/:url',
        templateUrl: 'home/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
  }
}());
