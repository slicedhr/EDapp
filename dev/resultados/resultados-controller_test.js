/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ResultadosCtrl', function () {
  var ctrl;

  beforeEach(module('resultados'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ResultadosCtrl');
  }));

  it('should have ctrlName as ResultadosCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ResultadosCtrl');
  });
});
