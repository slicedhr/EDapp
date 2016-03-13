/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('JugadorDelMesCtrl', function () {
  var ctrl;

  beforeEach(module('jugadorDelMes'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('JugadorDelMesCtrl');
  }));

  it('should have ctrlName as JugadorDelMesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('JugadorDelMesCtrl');
  });
});
