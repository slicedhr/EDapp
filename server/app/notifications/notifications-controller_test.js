/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('NotificationsCtrl', function () {
  var ctrl;

  beforeEach(module('notifications'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('NotificationsCtrl');
  }));

  it('should have ctrlName as NotificationsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('NotificationsCtrl');
  });
});
