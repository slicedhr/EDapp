(function () {
  'use strict';

  angular
    .module('notifications')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('notifications', {
        url: '/notifications',
        templateUrl: 'notifications/notifications.tpl.html',
        controller: 'NotificationsCtrl',
        controllerAs: 'notifications'
      });
  }
}());
