/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ConfigNotificacionesCtrl', function () {
  var ctrl;

  beforeEach(module('configNotificaciones'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ConfigNotificacionesCtrl');
  }));

  it('should have ctrlName as ConfigNotificacionesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ConfigNotificacionesCtrl');
  });
});
